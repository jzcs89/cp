import React from 'react';
import { getCookie } from '../Services/getCookie';

// function AuthContext() {
export const compareContext = React.createContext({
    compares: getCookie("compare") ?? []
});


export const compareInitialValeue = {
    compares: getCookie("compare") ?? []
};
export const compareReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, compares: action.compares }
        case 'REMOVE':
            return { compares: null }
        default:
            return state
    }
}
