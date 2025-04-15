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

export const getUserMovieList = (listName, userId) => async dispatch => {
    try {
        let searchCondition;

        if (listName == "favourite") {
            searchCondition = where(listName, "==", true)
        }
        else if (listName == "rating") {
            searchCondition = where(listName, "!=", "")
        }
        else if (listName == "watched" || listName == "to watch") {
            searchCondition = where("status", "==", listName)
        }

        // console.log("search condition ", searchCondition);


        const userMovieListRef = collection(db, user_collection_name, userId, user_movie_list_collection_name);
        const q = query(userMovieListRef, searchCondition);
        const querySnapshot = await getDocs(q);

        const movies = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        console.log(movies)

        dispatch({
            type: GET_USER_MOVIE_LISTS,
            payload: movies,
        });

    } catch (error) {
        // dispatch({
        //     type: GET_SAVED_ARTICLES_FAILURE,
        //     error: error.message,
        // });

        console.log("Error fetching data" + error);
    }
}

