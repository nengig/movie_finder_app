import {
    MOVIE_DETAILS_REQ,
    MOVIE_DETAILS_SUCC,
    MOVIE_DETAILS_FAIL,
    UPDATE_USER_MOVIE_DATA,
  } from '../actionTypes/movieDetailsActionTypes';
  
  const API_KEY = "b9ca7ecbc0ca0bf1db1495419f2c05ca";
  
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
        const response = await fetch(
          `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`
        );
        const data = await response.json();
  
        // Add cast directly to the object for easier access later
        const movieWithCast = {
          ...data,
          cast: data.credits?.cast || [],
        };
  
        dispatch(fetchMovieDetailsSuccess(movieWithCast));
      } catch (error) {
        dispatch(fetchMovieDetailsFailure(error.message));
      }
    };
  };
  
  
  export const updateUserMovieData = (data) => ({
    type: UPDATE_USER_MOVIE_DATA,
    payload: data,
  });
  