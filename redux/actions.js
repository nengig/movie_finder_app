import {
  ADD_USER,
  DELETE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_PASSWORD,
  FETCH_USER,
  ADD_USER_ERROR,
  LOGIN_USER_ERROR
} from "./actionTypes";
import {
  MOVIE_DETAILS_REQ,
  MOVIE_DETAILS_SUCC,
  MOVIE_DETAILS_FAIL,
} from './actionTypes';

import { db } from "../config/firebaseConfig";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  where,
  getDocs
} from "firebase/firestore";

const userCollection = 'users'
const collectionRef = collection(db, userCollection)

export const addUser = (user) => async dispatch => {
  try {
    const usernameQuery = query(
      collectionRef,
      where("username", "==", user.username)
    )
    const emailQuery = query(
      collectionRef,
      where("email", "==", user.email)
    )
    const phoneQuery = query(
      collectionRef,
      where("phone", "==", user.phone)
    )

    const usernameSnapshot = await getDocs(usernameQuery)
    const emailSnapshot = await getDocs(emailQuery)
    const phoneSnapshot = await getDocs(phoneQuery)

    if (!usernameSnapshot.empty) {
      const message = "username is not available try another one"
      dispatch({
        type: ADD_USER_ERROR,
        payload: message
      })
    } else if (!emailSnapshot.empty) {
      const message = "email already in use, try logging in or enter another email"
      dispatch({
        type: ADD_USER_ERROR,
        payload: message
      })
    } else if (!phoneSnapshot.empty) {
      const message = "phone number already in use, try logging in or enter another phone number"
      dispatch({
        type: ADD_USER_ERROR,
        payload: message
      })
    } else {
      console.log(`trying to save ${user.name} to db`)
      const docRef = await addDoc(collectionRef, user)
      console.log(`user added`)
      const {password, ...filteredUser} = user
      dispatch({
        type: ADD_USER,
        payload: {
          id:docRef.id,
          ...filteredUser
        }
      })
    }
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}
export const deleteUser = (docID) => async dispatch => {
  try {
    console.log(`trying to delete user with doc id ${docID}`)

    const docRef = doc(collectionRef, docID)
    await deleteDoc(docRef)

    console.log(`user deleted`)

    dispatch({
      type: DELETE_USER,
      payload: docID
    })
  } catch (error) {
    console.error("Error deleting user: ", error);
  }
}
export const loginUser = (username, password) => async dispatch => {
  try {
    const userQuery = query(
      collectionRef,
      where("username", "==", username),
      where("password", "==", password)
    )
    const querySnapshot = await getDocs(userQuery)

    //user found
    if (!querySnapshot.empty) {
      console.log(`trying to log in user`)
      const userDoc = querySnapshot.docs[0]
      //create a new user without password information
      const {password, ...filteredUser} = userDoc.data()
      const currUser = {
        id: userDoc.id,
        ...filteredUser
      }
      dispatch({
        type: LOGIN_USER,
        payload: currUser
      })
    } else {
      //user not found
      const message = "invalid username and/or password"
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: message
      })
    }
  } catch (error) {
    console.log(`error logging user in: `, error)
  }
}
export const logoutUser = () => async dispatch =>{
  console.log("logging user out")
  dispatch({
    type: LOGOUT_USER
  })
 
}
export const updatePassword = (userId, newPassword) => async dispatch => {
  try {
    console.log(`trying to update userPassword for user: ${userId}`)
    const docRef = doc(collectionRef, userId)
    await updateDoc(docRef, { password: newPassword })

    console.log(`password updated`)

    dispatch({
      type: UPDATE_PASSWORD,
      payload: { userId, newPassword }
    })
  } catch (error) {
    console.error("Error updating user: ", error);

  }
}



const API_KEY = 'b9ca7ecbc0ca0bf1db1495419f2c05ca';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

// requesting movie details
export const fetchMovieDetailsRequest = () => ({
  type: MOVIE_DETAILS_REQ,
});

// successfulrequest
export const fetchMovieDetailsSuccess = (movieDetails) => ({
  type: MOVIE_DETAILS_SUCC,
  payload: movieDetails,
});

// failed request
export const fetchMovieDetailsFailure = (error) => ({
  type: MOVIE_DETAILS_FAIL,
  payload: error,
});

// fetch movie details from API
export const fetchMovieDetails = (movieId) => {
  return async (dispatch) => {
    dispatch(fetchMovieDetailsRequest());
    try {
      const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();
      dispatch(fetchMovieDetailsSuccess(data));
    } catch (error) {
      dispatch(fetchMovieDetailsFailure(error.message));
    }
  };
};
