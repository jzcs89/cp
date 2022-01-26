import { useRouter } from 'next/router';
import React, { useMemo } from 'react'
import Head from 'next/head'
import { toast } from 'react-toastify';
import Axios from '../Services/Axios';
import { getCookie } from '../Services/getCookie';

import Home404 from '../components/home/Home404';

function Error404(props) {
    let router = useRouter();

    let token = getCookie('token')

    useMemo(() => {
        if (typeof window !== 'undefined') {
            window.scroll(0, 0);
        }
    }, [])
    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        await Axios({
            method: 'post',
            url: encodeURI(url + '?token=' + token?.replace(/\r?\n|\r/g, '')),// 
            data: new FormData(event.target)
        })
            .then(response => {
                toast(response.data.message, { type: response.data.status })
            });
    }


    return (
        <>
            <Head>
                <title>صفحه مورد نظر یافت نشد</title>
                
                <meta name="robots" content="noindex" />
                <meta name="googlebot" content="noindex" />
            </Head>
            <div className="bg-light mb-n4 py-5 mt-n1">
                <div className="container-ak">
                    <div className="row-ak">
                        <div className="col-md-7"><img src="https://cerampakhsh.com/files/img/svg/404.svg" alt="404" title="404" /></div>

                        <div className="col-md-5 p-md-5 p-2 ">
                            <p className="fontS-20 mb-2 text-firoozei ">صفحه مورد نظر شما پیدا نشد!
                            </p>

                            <p className="fontS-16">

                                اما به ما فرصت دوباره بدید ما هنوز هزاران مورد دیگه برای
                                پیشنهاد به شما داریم،شاید بتونیم به شما کمک کنیم


                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Home404 sliderClass="d-none" />
        </>
    );

}

export default Error404;