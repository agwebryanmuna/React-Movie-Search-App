// import {Client, Databases, ID, Query,} from 'appwrite'
// import type {MovieType, TrendingMovie} from './App';
//
// const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
//
// console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID);
//
// const client = new Client()
//   .setEndpoint('https://fra.cloud.appwrite.io/v1')
//   .setProject(PROJECT_ID)
//
// const database = new Databases(client);
//
// export const updateSearchCount = async (searchTerm:string, movie:MovieType) => {
//   // 1. Use Appwrite SDK to check if the search term exists in the database
//  try {
//   const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
//     Query.equal('searchTerm', searchTerm),
//   ])
//
//   // 2. If it does, update the count
//   if(result.documents.length > 0) {
//    const doc = result.documents[0];
//
//    await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
//     count: doc.count + 1,
//    })
//   // 3. If it doesn't, create a new document with the search term and count as 1
//   } else {
//    await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
//     searchTerm,
//     count: 1,
//     movie_id: movie.id,
//     poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//    })
//   }
//  } catch (error) {
//   console.error(error);
//  }
// }
//
// export const getTrendingMovies = async ():Promise<TrendingMovie[] | undefined> => {
//  try {
//   const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
//     Query.limit(5),
//     Query.orderDesc("count")
//   ])
//
//   if(!result.documents) return undefined;
//
//   return result.documents.map((doc) => ({
//    $id: doc.$id,
//    poster_url: doc.poster_url,
//    searchTerm: doc.searchTerm,
//   })) ;
//  } catch (error) {
//   console.error(error);
//  }
// }
