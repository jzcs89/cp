import React from 'react';
import { getCookie } from '../Services/getCookie';

let token_cart = getCookie("token_cart")
// function AuthContext() {
export const CartContext = React.createContext({
    token_cart: token_cart,
    cart: null
});


export const initialValeueCart = {
    token_cart: token_cart,
    cart: null
};
export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, token_cart: action.token_cart, cart: action.cart }
        case 'REMOVE':
            return { token_cart: null, cart: action.cart }
        default:
            return state
    }
}
