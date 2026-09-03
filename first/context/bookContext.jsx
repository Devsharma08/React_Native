import { createContext, useEffect, useState } from "react";
import { database, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import useUser from "../hooks/userHook";

export const BookContext = createContext(null);

const databaseId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  const fetchBooks = async () => {
    try {
      if (!user) {
        setBooks([]);
        return;
      }

      const response = await database.listDocuments(
        databaseId,
        collectionId,
        [Query.equal("userId", user.$id)]
      );

      setBooks(response.documents);
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  };

  const fetchBookById = async (bookId) => {
    return database.getDocument(
      databaseId,
      collectionId,
      bookId
    );
  };

  const createBook = async (data) => {
    try {
      if (!user) {
        throw new Error("User is not authenticated");
      }

      const response = await database.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        {
          userId: user.$id,
          ...data,
        },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );

      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await database.deleteDocument(
        databaseId,
        collectionId,
        bookId
      );

      setBooks((currentBooks) =>
        currentBooks.filter((book) => book.$id !== bookId)
      );
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      setBooks([]);
      return;
    }

    const channel = `databases.${databaseId}.collections.${collectionId}.documents`;

    const unsubscribe = client.subscribe(
      channel,
      (response) => {
        const { payload, events } = response;

        // Ignore books belonging to other users
        if (payload.userId !== user.$id) {
          return;
        }

        // CREATE
        if (
          events.some((event) =>
            event.includes(".create")
          )
        ) {
          setBooks((prev) => {
            // Prevent duplicates
            const exists = prev.some(
              (book) => book.$id === payload.$id
            );

            if (exists) {
              return prev;
            }

            return [...prev, payload];
          });
        }

        // UPDATE
        if (
          events.some((event) =>
            event.includes(".update")
          )
        ) {
          setBooks((prev) =>
            prev.map((book) =>
              book.$id === payload.$id
                ? payload
                : book
            )
          );
        }

        // DELETE
        if (
          events.some((event) =>
            event.includes(".delete")
          )
        ) {
          setBooks((prev) =>
            prev.filter(
              (book) => book.$id !== payload.$id
            )
          );
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <BookContext.Provider
      value={{
        books,
        fetchBooks,
        fetchBookById,
        deleteBook,
        createBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};