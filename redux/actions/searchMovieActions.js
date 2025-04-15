import { CLEAR_MOVIE_SEARCH_RESULTS, FETCH_MOVIES_BY_SEARCH } from "../actionTypes/searchMovieActionTypes";

const API_KEY = "b9ca7ecbc0ca0bf1db1495419f2c05ca";

export const fetchMoviesBySearch = (searchTerm, pageNumber) => async dispatch => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${pageNumber}`
        );
        const data = await response.json();

        dispatch({
            type: FETCH_MOVIES_BY_SEARCH,
            payload: data
        })
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

export const clearMovieSearchResults = () => ({
    type: CLEAR_MOVIE_SEARCH_RESULTS,
});