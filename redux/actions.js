import { ADD_USER,
     DELETE_USER,
     LOGIN_USER, 
     LOGOUT_USER, 
     UPDATE_PASSWORD } from "./actionTypes";
import {
    MOVIE_DETAILS_REQ,
    MOVIE_DETAILS_SUCC,
    MOVIE_DETAILS_FAIL,
  } from './actionTypes';
export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})
export const deleteUser = (username) =>({
    type: DELETE_USER,
    payload: username
})
export const loginUser = (username, password)=>({
    type:LOGIN_USER,
    payload: {username,password}
})
export const logoutUser = (username) => ({
    type:LOGOUT_USER,
    payload: username
})
export const updatePassword = (username, newPassowrd) => ({
    type:UPDATE_PASSWORD,
    payload: {username,newPassowrd}
})


  
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
  