import axios from 'axios';
import { getCookie } from './getCookie';
import { urlBaseV2 } from './Helper';

let token_everyone = getCookie("token_everyone")

export default axios.create({
    baseURL: urlBaseV2,

    headers: {
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
    mode: 'no-cors',
    config: {
        method: 'get',
        headers: {
            'content-Type': 'application/json'
        }
    },
    
    responseType: 'json',
});
