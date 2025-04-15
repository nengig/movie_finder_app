import { CLEAR_MOVIE_SEARCH_RESULTS, FETCH_MOVIES_BY_SEARCH } from "../actionTypes/searchMovieActionTypes";

const initialState = {
    searchedMovies: [],
    total_pages: 0,
}

export const searchMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_BY_SEARCH:
            return {
                ...state,
                searchedMovies: [...state.searchedMovies, ...action.payload.results],
                total_pages: action.payload.total_pages
            };
        case CLEAR_MOVIE_SEARCH_RESULTS:
            return {
                ...state,
                searchedMovies: [],
                total_pages: 0,
            };
        default:
            return state;
    }
}