import React from 'react';

export const AlertContext = React.createContext({alerts: []});


export const alertInitialValeue = {alerts: []};
export const alertReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return { ...state, alerts: action.alerts }
        case 'HIDE':
            return { alerts: [] }
        default:
            return state
    }
}