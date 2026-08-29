import {Client,Account, Avatars} from 'react-native-appwrite';

export const client = new Client().setProject("6a92dab0002f6faa065b").setPlatform('devsharma.dev.shelfie')

export const account = new Account(client);

export const avatars = new Avatars(client);