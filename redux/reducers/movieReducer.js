import {
    GET_ACTION_MOVIES,
    GET_COMEDY_MOVIES,
    GET_CRIME_MOVIES,
    GET_HORROR_MOVIES,
    GET_NOW_PLAYING_MOVIES,
    GET_POPULAR_MOVIES,
    GET_THRILLER_MOVIES,
    GET_TOP_RATED_MOVIES,
    GET_UPCOMING_MOVIES
} from "../actionTypes/movieListActionTypes"

const initialState = {
    movies: {
        popular: [],
        topRated: [],
        nowPlaying: [],
        upcoming: [],
        actionMovies: [],
        comedyMovies: [],
        crimeMovies: [],
        horrorMovies: [],
        thrillerMovies: []
    },


}

export const movieReducer = (state = initialState, action) => {


    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    popular: action.payload
                }
            };

        case GET_TOP_RATED_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    topRated: action.payload
                }
            };

        case GET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    nowPlaying: action.payload
                }
            };

        case GET_UPCOMING_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    upcoming: action.payload
                }
            };

        case GET_ACTION_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    actionMovies: action.payload
                }
            };

        case GET_COMEDY_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    comedyMovies: action.payload
                }
            };

        case GET_CRIME_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    crimeMovies: action.payload
                }
            };

        case GET_HORROR_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    horrorMovies: action.payload
                }
            };

        case GET_THRILLER_MOVIES:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    thrillerMovies: action.payload
                }
            };

        default:
            return state;
    }
}