import { Account, Avatars, Client, Databases } from 'react-native-appwrite';
import SignUp from '../app/(auth)/sign-up';
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'co.edu.sena.aora',
    projectId: '66c512d0002efc2c58e7',
    databaseId: '66c512ea001864cd2ed4',
    userCollectionId: '66c5142b000af2f76129',
    videoCollectionId: '66c514740008e8ca98bc',
    storageId: '66c74bb50023d20a4db6'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform)

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, username) => {
        try {
            const newAccount = await account.create(
                ID.unique(),
                email,
                password,
                username
            )
    
            if(!newAccount) throw Error;

            const avatarUrl = avatars.getInitials(username)

            await signIn(email, password);

            const newUser = await databases.createDocument(
                config.databaseId,
                config.userCollectionId,
                ID.unique()
            )
        } catch (error){
            console.error(error);
            throw new Error(error);
        }
    }

    export async function signIn(email, password) {
        try {
            const session = await account.createEmailSession
            (email,password)

            return session;
        }catch (error){
            throw new Error(error);
        }
        
    }