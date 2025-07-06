import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, updateDoc, query, where,} from "firebase/firestore";
import type {MovieType, TrendingMovie} from "../App.tsx";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "react-movie-app-a97f8.firebaseapp.com",
    projectId: "react-movie-app-a97f8",
    storageBucket: "react-movie-app-a97f8.firebasestorage.app",
    messagingSenderId: "125222695694",
    appId: "1:125222695694:web:2b4b721465cce6870a5d5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const COLLECTION_NAME = 'movies'

export const updateSearchCount = async (searchTerm: string, movie: MovieType) => {
    
    const q = query(
        collection(db, COLLECTION_NAME),
        where('searchTerm', '==', searchTerm)
    );
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const docRef = doc.ref;
        await updateDoc(docRef, {
            count: doc.data().count + 1,
        });
        return
    }
    
    // Add a new document with the count set to 1
    await addDoc(collection(db, COLLECTION_NAME), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    });
    return
    
    
}

export const getTrendingMovies = async () => {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as TrendingMovie))
}
