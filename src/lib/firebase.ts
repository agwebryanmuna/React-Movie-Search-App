// import { initializeApp } from "firebase/app";
// import { getFirestore,  collection, addDoc, getDocs } from "firebase/firestore";
// import type {MovieType} from "../App.tsx";
//
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: "react-movie-app-a97f8.firebaseapp.com",
//     projectId: "react-movie-app-a97f8",
//     storageBucket: "react-movie-app-a97f8.firebasestorage.app",
//     messagingSenderId: "125222695694",
//     appId: "1:125222695694:web:2b4b721465cce6870a5d5f"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//
// const db = getFirestore(app);
//
// const COLLECTION_NAME='movies'
//
// export const updateSearchCount = async (searchTerm:string, movie:MovieType) => {
//
//     try {
//
//         // Add a new document with the count set to 1
//         const docRef = await addDoc(collection(db, COLLECTION_NAME), {
//             searchTerm,
//             count: 1,
//             movie_id: movie.id,
//             poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//         });
//         console.log("Document written with ID: ", docRef);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
//
// }
//
// export const getTrendingMovies = async () => {
//     console.log('Hello world')
// const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
// querySnapshot.forEach((doc) => {
//
// });
// }
