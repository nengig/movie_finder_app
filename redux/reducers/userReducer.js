import { combineReducers } from "redux";
import { ADD_USER, DELETE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_PASSWORD } from "../actionTypes";

const initialState = {
    users: [{
        username: "JaneyS",
        password: "JaneS123",
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        phone: "2078902356",
        joinedOn: `${new Date().toUTCString()}`
    }],
    currentUser: null,
    message: ""
    //loggedIn:false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            console.log("trying to add user")
            //check to make sure that username, email and phone is currently not being used 
            const usernameExists = state.users.some(user => user.username === action.payload.username)
            const emailExists = state.users.some(user => user.email === action.payload.email)
            const phoneExists = state.users.some(user => user.phone === action.payload.phone)
            if (usernameExists) {
                return {
                    ...state,
                    message: "username is not available try another one"
                }
            } else if (emailExists) {
                return {
                    ...state,
                    message: "email already in use, try logging in or enter another email"
                }
            } else if (phoneExists) {
                return {
                    ...state,
                    message: "phone number already in use, try logging in or enter another number"
                }
            } else {
                return {
                    ...state,
                    users: [
                        ...state.users, action.payload
                    ],
                    currentUser: action.payload // automatically log in user after account creation
                }
            }
        }
        case DELETE_USER: {
            console.log("trying to delete user")
            return {
                ...state,
                users: state.users.filter(user => user.username !== action.payload)
            }
        }
        case LOGIN_USER: {
            //authenticate user
            console.log("Users in state:", state.users);
            console.log("Login attempt with:", action.payload);

            const user = state.users.find(user =>
                user.username === action.payload.username && user.password === action.payload.password
            );
            console.log("logging user in")
            console.log(user)
            if (user) {
                return {
                    ...state,
                    currentUser: user
                }
            } else {
                return {
                    ...state,
                    message: "invalid username and/or password"
                }
            }
        }
        case LOGOUT_USER: {
            console.log("logging user out")
            return {
                ...state,
                currentUser: null
            }
        }
        case UPDATE_PASSWORD: {
            console.log("trying to update password")
            return {
                ...state,
                users: state.users.map((user) =>
                    user.username === action.payload.username ? {
                        ...user,
                        password: action.payload.password
                    } :
                        user
                )
            }
        }
        default: {
            console.log("unidentified action")
            return state
        }
    }
}