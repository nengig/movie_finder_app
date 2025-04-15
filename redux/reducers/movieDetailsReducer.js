import {
    MOVIE_DETAILS_REQ,
    MOVIE_DETAILS_SUCC,
    MOVIE_DETAILS_FAIL,
  } from '../actionTypes/userActionTypes';
  
  const initialState = {
    loading: false,
    movie: null,
    error: null,
  };
  
  const movieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case MOVIE_DETAILS_REQ:
        return { ...state, loading: true };
      case MOVIE_DETAILS_SUCC:
        return { ...state, loading: false, movie: action.payload };
      case MOVIE_DETAILS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default movieDetailsReducer;
  