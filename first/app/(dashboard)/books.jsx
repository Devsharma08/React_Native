import { FlatList, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard";
import Spacer from "../../components/Spacer";
import useBook from "../../hooks/bookHook";


const Books = () => {
  const { books } = useBook();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText isTitle={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
      <Spacer />
      <FlatList
        data={books}
        keyExtractor={(book) => book.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/books/${item.$id}`)}
            style={({ pressed }) => pressed && styles.pressed}
          >
            <ThemedCard style={styles.card}>
              <ThemedText isTitle>{item.title}</ThemedText>
              <ThemedText>{item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
        ListEmptyComponent={
          <ThemedText style={styles.empty}>No books yet.</ThemedText>
        }
      />
    </ThemedView>
  );
};

export default Books

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "stretch",
    },
    heading: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    list: {
      padding: 20,
      gap: 12,
    },
    card: {
      marginBottom: 12,
      borderRadius: 5,
      borderLeftColor: "#201e2b",
      borderLeftWidth: 5,
    },
    pressed: {
      opacity: 0.7,
    },
    empty: {
      textAlign: "center",
    },
  });