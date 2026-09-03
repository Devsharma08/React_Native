import { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import Spacer from "../../components/Spacer";

import useBook from "../../hooks/bookHook";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { createBook } = useBook();
  const router = useRouter();

  const handleSubmit = async() => {
    if (!title.trim() || !author.trim() || !description.trim()) {
      setError("Title, author, and description are required.");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      await createBook({
        title: title.trim(),
        author: author.trim(),
        description: description.trim(),
      });
      setTitle("");
      setDescription("");
      setAuthor("");
      router.replace("/books");
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally{
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText isTitle={true} style={styles.heading}>
          Add a new book
        </ThemedText>
        <Spacer />
        <ThemedTextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Title of book"
        />


        <ThemedTextInput
          style={styles.input}
          value={author}
          onChangeText={setAuthor}
          placeholder="Name of Author"
        />

        <ThemedTextInput
          style={styles.multiline}
          value={description}
          onChangeText={setDescription}
          placeholder="Book Description"
          multiline
        />

        {error ? (
          <ThemedText style={styles.errorText}>{error}</ThemedText>
        ) : null}

        <ThemedButton
          onPress={handleSubmit}
          style={styles.btn}
          content={loading ? "Creating Book" : "Create Book"}
        />
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent:"center"
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    padding: 10,
    marginHorizontal: 40,
    borderColor: "gray",
    alignSelf: "stretch",
    marginBottom:10
  },
  pressed_btn: {
    opacity: 0.7,
  },
  btn: {
    padding: 10,
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal:40,
    borderRadius: 10,
  },
  errorText: {
    backgroundColor: "#c62828",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    width: "80%",
    marginVertical:10,
    marginHorizontal:40,
    textAlign: "center",
  },
  multiline: {
    minHeight: 100,
    marginHorizontal: 40,
    textAlignVertical: "top",
  },
});
