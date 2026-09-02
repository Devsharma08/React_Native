import { Client, Account, Avatars,Databases } from "react-native-appwrite";

const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
const endpoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;

if (!projectId || !endpoint) {
  throw new Error("Appwrite environment variables are missing. Check your .env file.");
}

export const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const database = new Databases(client);