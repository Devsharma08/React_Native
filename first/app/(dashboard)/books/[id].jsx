import { ActivityIndicator, Alert, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import useBook from "../../../hooks/bookHook";

const BookDescription = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { fetchBookById, deleteBook } = useBook();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let active = true;

    const loadBook = async () => {
      try {
        const response = await fetchBookById(id);
        if (active) {
          setBook(response);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : String(loadError));
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    if (id) {
      loadBook();
    } else {
      setError("Book not found.");
      setLoading(false);
    }

    return () => {
      active = false;
    };
  }, [fetchBookById, id]);

  const handleDelete = () => {
    Alert.alert("Delete book", `Delete ${book.title}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          setDeleting(true);
          try {
            await deleteBook(book.$id);
            router.back();
          } catch (deleteError) {
            setError(deleteError instanceof Error ? deleteError.message : String(deleteError));
            setDeleting(false);
          }
        },
      },
    ]);
  };

  if (loading) {
    return (
      <ThemedView style={styles.centered}>
        <ActivityIndicator />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {error || !book ? (
        <ThemedText style={styles.error}>{error || "Book not found."}</ThemedText>
      ) : (
        <>
          <ThemedText isTitle style={styles.title}>{book.title}</ThemedText>
          <ThemedText style={styles.author}>{book.author}</ThemedText>
          <Spacer />
          <ThemedText style={styles.description}>{book.description}</ThemedText>
          <Pressable
            disabled={deleting}
            onPress={handleDelete}
            style={({ pressed }) => [styles.deleteButton, pressed && styles.pressed]}
          >
            <ThemedText style={styles.deleteText}>
              {deleting ? "Deleting..." : "Delete book"}
            </ThemedText>
          </Pressable>
        </>
      )}
    </ThemedView>
  );
};

export default BookDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 24,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  author: {
    marginTop: 8,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  error: {
    color: "#c62828",
    textAlign: "center",
  },
  deleteButton: {
    alignSelf: "flex-start",
    backgroundColor: "#c62828",
    borderRadius: 8,
    marginTop: 32,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
});
