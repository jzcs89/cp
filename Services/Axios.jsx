import axios from 'axios';
import { getCookie } from './getCookie';
import { urlBase } from './Helper';

let token_everyone = getCookie("token_everyone")
const urlful = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
export default axios.create({
    baseURL: urlBase,

    headers: {
        'referer_': urlful,
        'Accept': 'application/json',
        'content-type': 'application/json',
        // 'X-Requested-With': 'XMLHttpRequest',
        'token-everyone': token_everyone,
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Authorization': "Bearer " + token,
        // token,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
    },
    params: {
        referer_: urlful
    },
    mode: 'no-cors',
    config: {
        method: 'get',
        headers: {
            'content-Type': 'application/json'
        }
    },
    
    responseType: 'json',
});
