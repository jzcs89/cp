import React from 'react';

// function WizardContext() {
export const WizardContext = React.createContext({
    show: false,
    color: '',
    style: '',
    location: '',
    material: '',
    room: '',
    price: '',
    category: '',
});


export const wizardInitialValue = {
    show: false,
    step: '',
    color: '',
    style: '',
    location: '',
    material: '',
    room: '',
    price: '',
    category: '',
};
export const wizardReducer = (state, action) => {
    switch (action.type) {
        case 'COLOR':
            return { ...state, color: action.color }
        case 'SHOW':
            return { ...state, show: action.show }
        case 'ROOM':
            return { ...state, room: action.room }
        case 'STYLE':
            return { ...state, style: action.style }
        case 'LOCATION':
            return { ...state, location: action.location }
        case 'MATERIAL':
            return { ...state, material: action.material }
        case 'PRICE':
            return { ...state, price: action.price }
        case 'CATEGORY':
            return { ...state, category: action.category }
        case 'STEP':
            return { ...state, step: action.step }
        case 'RESET':
            return { ...state,
                show: false,
                step: '',
                color: '',
                style: '',
                location: '',
                material: '',
                room: '',
                price: '',
                category: '',
            }
        default:
            return state
    }
}
