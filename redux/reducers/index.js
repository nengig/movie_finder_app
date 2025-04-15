import { userReducer } from "./userReducer";
import { movieReducer } from "./movieReducer";

import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsReducer";
import { myMovieReducer } from "./myMoviesReducer";
import { searchMovieReducer } from "./searchMovieReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    movies: movieReducer,
    movieDetails: movieDetailsReducer,
    userMovies: myMovieReducer,
    searchMovie: searchMovieReducer
})