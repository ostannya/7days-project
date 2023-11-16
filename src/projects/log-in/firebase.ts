import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FieldType } from './index';

const firebaseConfig = {
    apiKey: 'AIzaSyAw4Ohck7Eu5MisdrTcRpo1Q1ZSzmxQ4g4',
    authDomain: 'days-project-518cd.firebaseapp.com',
    databaseURL: 'https://days-project-518cd-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'days-project-518cd',
    storageBucket: 'days-project-518cd.appspot.com',
    messagingSenderId: '321501050180',
    appId: '1:321501050180:web:71687c7b5dfb2214a1d311',
    measurementId: 'G-VVK0EXF30K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const createUser = (fields: FieldType) => {
    const { email, password } = fields;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential: { user: any }) => {
            // Signed up
            const user = userCredential.user;
            // ...
        })
        .catch((error: { code: string; message: string }) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};

export const signInUser = async (fields: FieldType) => {
    const { email, password } = fields;

    try {
        // Attempt to sign in the user
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in');
        // ...
    } catch (error: any) {
        // If sign-in fails, handle the error
        const errorCode = error.code;
        const errorMessage = error.message;

        // If the error code indicates that the user doesn't exist, create a new account
        if (errorCode === 'auth/invalid-login-credentials') {
            createUser(fields);
            console.log('User created');
        } else {
            console.log(errorMessage);
        }
    }
};
