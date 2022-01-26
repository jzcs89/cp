import axios from 'axios';
import { getCookie } from './getCookie';
import { urlBase } from './Helper';


let token_everyone = getCookie("token_everyone")
let token = getCookie("token") || '';
let token_guest = getCookie("token_guest") || '';
const urlful = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
// if(typeof window !== 'undefined'){
//     token = getCookie("token")
// }

export default axios.create({
    baseURL: urlBase,

    headers: {
        'referer_': urlful,
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': "Bearer " + token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'token-guest': token_guest,
        'token-everyone': token_everyone,
    },

    responseType: 'json',
});
