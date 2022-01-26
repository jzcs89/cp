import React from 'react';

export const ProductSmallContext = React.createContext({
    product: null,
    decor: null,
    buyDecor: false,
    buyProduct: false,
    products_: null,
    slug: null,
    type: null,
    title: null,
});


export const productsmallinitialValeue = {
    product: null,
    decor: null,
    buyDecor: false,
    buyProduct: false,
    products_: null,
    slug: null,
    type: null,
    title: null,
};
export const ProductSmallReducer = (state, action) => {
    
    switch (action.typeContext) {
        case 'SETDATA':
            return {
                product: action.product,
                decor: action.decor,
                buyDecor: action.buyDecor,
                buyProduct: action.buyProduct,
                products_: action.products_,
                slug: action.slug,
                type: action.type,
                title: action.title 
            }
        case 'REMOVE':
            return {
                product: null,
                decor: null,
                buyDecor: false,
                buyProduct: false,
                products_: null,
                slug: null,
                type: null,
                title: null,
            }
        default:
            return state
    }
}
