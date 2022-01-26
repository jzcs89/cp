import { toast ,Flip} from "react-toastify";
import AxiosV2 from "./AxiosV2";

export const RequestData = async ( method, url,dataRecieve='') => {

    let resReturn = { status: null, message: null, data: null, };

    await AxiosV2({
        method: method,
        url: encodeURI(url),// 
        data: dataRecieve,
    })
        .then(response => {
            resReturn = response.data ?? null;
            if (method !== 'get' && response?.data?.message) {
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

export const RequestDataPromise =  ( method, url,dataRecieve='') => {
    let resReturn = { status: null, message: null, data: null, };

    AxiosV2({
        method: method,
        url: encodeURI(url),// 
        data: dataRecieve,
    })
        .then(response => {
            resReturn = response.data ?? null;

            if (method !== 'get'  && response?.data?.message) {
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
