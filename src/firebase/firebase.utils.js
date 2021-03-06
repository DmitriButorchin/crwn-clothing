import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyAk6UrOuTGFXd0l37X_ZC2FVUvu5gBHy88',
    authDomain: 'crwn-db-a8162.firebaseapp.com',
    projectId: 'crwn-db-a8162',
    storageBucket: 'crwn-db-a8162.appspot.com',
    messagingSenderId: '671619155930',
    appId: '1:671619155930:web:655bd7bf7f2ca7486062e3',
    measurementId: 'G-ETH3J7G9MB'
};

initializeApp(config);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const docRef = doc(db, 'users', userAuth.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('error creating user', error.message);
        }
    }

    return docRef;
};
