import { GET_USER_MOVIE_LISTS } from "../actionTypes/myMovieActionTypes"

const initial_state = {
    movies: []
}


export const myMovieReducer = (state = initial_state, action) => {
    switch(action.type){
        case GET_USER_MOVIE_LISTS:
            return{
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}