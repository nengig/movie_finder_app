import {
  MOVIE_DETAILS_REQ,
  MOVIE_DETAILS_SUCC,
  MOVIE_DETAILS_FAIL,
  UPDATE_USER_MOVIE_DATA, // you'll define this in actionTypes.js
} from '../actionTypes/movieDetailsActionTypes';

const initialMovieDetailsState = {
  loading: false,
  movie: null,
  error: null,
};

const initialUserMovieDataState = {
  favourites: [],
  watchlist: [],
  ratings: {},
};

// Separate reducer functions
const movieDetailsReducer = (state = initialMovieDetailsState, action) => {
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

export const userMovieDataReducer = (state = initialUserMovieDataState, action) => {
  switch (action.type) {
    case UPDATE_USER_MOVIE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default movieDetailsReducer;
