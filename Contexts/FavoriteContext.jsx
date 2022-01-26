import React from 'react';

export const FavoriteContext = React.createContext(0);


export const alertInitialValeue = 0;
export const alertReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return action.count
        case 'HIDE':
            return 0
        default:
            return state
    }
}