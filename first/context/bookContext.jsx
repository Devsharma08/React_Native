import { createContext, useEffect, useState } from "react";
import { database } from "../lib/appwrite";
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

      const response = await database.listDocuments(databaseId, collectionId, [
        Query.equal("userId", user.$id),
      ]);

      setBooks(response.documents);
      console.log(response.documents);
    } catch (error) {
      console.log(String(error.message));
      throw new Error(String(error.message));
    }
  };

  const fetchBookById = async (bookId) => {
    return database.getDocument(databaseId, collectionId, bookId);
  };

  const createBook = async (data) => {
    try {
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
        ],
      );
      setBooks((currentBooks) => [...currentBooks, response]);
      return response;
    } catch (error) {
      console.log(String(error.message));
      throw new Error(String(error.message));
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await database.deleteDocument(databaseId, collectionId, bookId);
      setBooks((currentBooks) =>
        currentBooks.filter((book) => book.$id !== bookId),
      );
    } catch (error) {
      console.log(String(error.message));
      throw new Error(String(error.message));
    }
  };

  useEffect(() => {
    fetchBooks().catch(() => undefined);
  }, [user]);

  return (
    <BookContext.Provider
      value={{ books, fetchBooks, fetchBookById, deleteBook, createBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
