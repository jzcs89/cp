import React, { useState, useEffect } from 'react'
import Axios from './../Services/Axios';

function SubmitForm(method, url, form) {
    const [data, setData] = useState({ data: null, errors: null, errorsServer: null });


    async function fnRequestApi(method, url, form) {
        await Axios({
            method: method,
            url: encodeURI(url),// 
            data: form
        })
            .then(response => {
                setData({ data: response, errors: null, errorsServer: null })
            }, (errors) => {
                setData({ data: null, errors: errors.response.data.errors, errorsServer: null })
            })
            .catch(function (error) {
                setData({ data: null, errors: null, errorsServer: error })
            });
    }

    useEffect(() => {
        fnRequestApi(method, url, form);
    }, []);

    return data;
}

export default SubmitForm;