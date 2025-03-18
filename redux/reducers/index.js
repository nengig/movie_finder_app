import { userReducer } from "./userReducer";
import { movieReducer } from "./movieReducer";

import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsReducer";

export const rootReducer = combineReducers({
                            users: userReducer,
                            movies: movieReducer,
                            movieDetails: movieDetailsReducer
})