import { combineReducers } from "redux";
import { ADD_USER, ADD_USER_ERROR, DELETE_USER, LOGIN_USER, LOGIN_USER_ERROR, LOGOUT_USER, UPDATE_PASSWORD } from "../actionTypes";

const initialState = {
    currentUser: null,
    message: ""
    //loggedIn:false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                currentUser: action.payload
            }
        }
        case ADD_USER_ERROR:{
            return {
                ...state,
                message: action.payload
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                currentUser: null,
                message:""
            }
        }
        case LOGIN_USER: {
            return {
                ...state,
                currentUser: action.payload
            }

        }
        case LOGIN_USER_ERROR:{
            return {
                ...state,
                message: action.payload
            }   
        }
        case LOGOUT_USER: {
            return {
                ...state,
                currentUser: null,
                message:""
            }
        }
        case UPDATE_PASSWORD: {
            return state;
        }
        default: {
            console.log("unidentified action")
            return state
        }
    }
}