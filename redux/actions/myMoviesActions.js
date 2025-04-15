import {
    GET_USER_MOVIE_LISTS
} from "../actionTypes/myMovieActionTypes";


import {
    collection,
    updateDoc,
    doc,
    onSnapshot,
    query,
    getDocs,
    where
} from "firebase/firestore";

import { db } from "../../config/firebaseConfig";

const user_collection_name = "users";
const user_movie_list_collection_name = "movies";
// const collectionRef = collection(db, collection_name);

export const getUserMovieList = (listName) => async (dispatch, getState) => {
    try {
        let searchCondition;
        const userId  = getState().users.currentUser.id;
        console.log(userId);

        if (listName == "favourite") {
            searchCondition = where(listName, "==", true)
        }
        else if (listName == "rating") {
            searchCondition = where(listName, ">", 0)
        }
        else if (listName == "watched" || listName == "toWatch") {
            searchCondition = where("status", "==", listName)
        }

        const userMovieListRef = collection(db, user_collection_name, userId, user_movie_list_collection_name);
        const q = query(userMovieListRef, searchCondition);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const movies = [];
            querySnapshot.forEach((doc) => {
              const article = doc.data();
              movies.push({ id: doc.id, ...article });
            });
      
            dispatch({
                type: GET_USER_MOVIE_LISTS,
                payload: movies,
            });
          });

          return unsubscribe;

        

    } catch (error) {
        // dispatch({
        //     type: GET_SAVED_ARTICLES_FAILURE,
        //     error: error.message,
        // });

        console.log("Error fetching data" + error);
    }
}

