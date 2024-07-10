import { Client } from 'react-native-appwrite';
// Init your React Native SDK
export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  plateform: 'com.mapan.leschool',
  projectId: '668e1a4d00350ce491af',
  databaseId: '668e1cd300199ebd41f0',
  usersCollectionId: '668e1cf7001f61618fdd',
  videosCollectionId: '668e1d8100064c39c60f',
  storageId: '668e275c000f98cbe40d',
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.plateform);
