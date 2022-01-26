// import axios from "axios";

import { toast, Flip } from "react-toastify";
import useSWR from "swr";
import axiosApi from "./axiosApi";
import AxiosV2 from "./AxiosV2";
import { getCookie } from "./getCookie";
import { urlBase } from "./Helper";


export const requestDataShixeh = async (url, method, dataRecieve, token_ = null) => {

    let resReturn = { status: null, message: null, data: null, };
    let token = token_ ?? (getCookie("token") ?? '');
    let token_guest = (getCookie("token_guest") ?? '');
    await axiosApi({
        method: method,
        url: encodeURI(url),// 
        data: dataRecieve,
        headers: {
            'Authorization': "Bearer " + token,
            'token-guest': token_guest,
            'cerampakhsh': 'cp-cermpakhsh-jzcs-admin'
        }
    })
        .then(response => {
            resReturn = response.data ?? null;
            if (method !== 'get') {
                toast(response.data.message, {
                    type: response.data.status ?? 'success',
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    transition: Flip,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    rtl: true
                });
            }
        }, (errors) => {
            
            if (method !== 'get') {
                toast.error('خطاهای پیش آمده را رفع نمایید.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            resReturn = { status: 'error', message: 'خطاهای پیش آمده را رفع نمایید.', errors: errors, data: (errors && errors.response && errors.response.data && errors.response.data.errors) ?? '', };
        })
        .catch(function (error) {
            if (method !== 'get') {
                toast.error('دوباره تلاش نمایید', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            resReturn = { status: 'error', message: 'خطای سرور', data: null, };
        });

    return resReturn;
};

export const requestDataShixehV3 = async (backUrl, url, method, dataRecieve, token_ = null) => {

    let resReturn = { status: null, message: null, data: null, };
    let token = token_ ?? (getCookie("token") ?? '');
    let token_guest = (getCookie("token_guest") ?? '');
    await axiosApi({
        method: method,
        url: encodeURI(url),// 
        data: dataRecieve,
        headers: {
            'referer': backUrl,
            'Authorization': "Bearer " + token,
            'token-guest': token_guest,
            'cerampakhsh': 'cp-cermpakhsh-jzcs-admin'
        }
    })
        .then(response => {
            resReturn = response.data ?? null;
            if (method !== 'get') {
                toast(response.data.message, {
                    type: response.data.status ?? 'success',
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    transition: Flip,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    rtl: true
                });
            }
        }, (errors) => {
            
            if (method !== 'get') {
                toast.error('خطاهای پیش آمده را رفع نمایید.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            resReturn = { status: 'error', message: 'خطاهای پیش آمده را رفع نمایید.', errors: errors, data: (errors && errors.response && errors.response.data && errors.response.data.errors) ?? '', };
        })
        .catch(function (error) {
            if (method !== 'get') {
                toast.error('دوباره تلاش نمایید', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            resReturn = { status: 'error', message: 'خطای سرور', data: null, };
        });

    return resReturn;
};

export const requestDataShixehV2 = async (backUrl, url, method, dataRecieve, token_ = null) => {

    let resReturn = { status: null, message: null, data: null, };
    let token = token_ ?? (getCookie("token") ?? '');
    let token_guest = (getCookie("token_guest") ?? '');
    
    await AxiosV2({
        method: method,
        url: encodeURI(url),// 
        data: dataRecieve,
        headers: {
            'referer': backUrl,
            'Authorization': "Bearer " + token,
            'token-guest': token_guest
        }
    })
        .then(response => {
            resReturn = response.data ?? null;
            if (method !== 'get') {
                toast(response.data.message, {
                    type: response.data.status ?? 'success',
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    transition: Flip,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    rtl: true
                });
            }
        }, (errors) => {
            
            if (method !== 'get') {
                toast.error('خطاهای پیش آمده را رفع نمایید.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            resReturn = { status: 'error', message: 'خطاهای پیش آمده را رفع نمایید.', errors: errors, data: (errors && errors.response && errors.response.data && errors.response.data.errors) ?? '', };
        })
        .catch(function (error) {
            if (method !== 'get') {
                toast.error('دوباره تلاش نمایید', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            resReturn = { status: 'error', message: 'خطای سرور', data: null, };
        });

    return resReturn;
};


export const requestSWR = (url, method, dataRecieve) => {

    const { data, error } = useSWR(`${urlBase}/${url}`, axiosApi)

    if((data && data.data)){
        if (method !== 'get') {
            toast(data.data.message, {
                type: data.data.status,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                transition: Flip,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                rtl: true
            });
        }
    }else if(error){
        
        if (method !== 'get') {
            toast.error('دوباره تلاش نمایید', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                transition: Flip,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return {
        data: (data && data.data) ? data.data : data,
        isLoading: !error && !data,
        isError: error
    }
}
