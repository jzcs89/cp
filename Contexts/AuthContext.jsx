import React from 'react';
import { getCookie } from '../Services/getCookie';

// function AuthContext() {
export const authContext = React.createContext({
    token: getCookie("token") ?? null,
    user: {},
    favoriteCount: 0
});


export const initialValeue = {
    token: getCookie("token") ?? null,
    user: {},
    favoriteCount: 0
};
export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, token: action.token, user: action.user }
        case 'FAVOITE':
            return { ...state, favoriteCount: action.favoriteCount }
        case 'LOGOUT':
            return { token: null, user: action.user }
        default:
            return state
    }
}
