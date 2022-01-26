import Head from 'next/head'
import dynamic from 'next/dynamic'


import React, { useState, useMemo } from 'react'

import { useRouter } from 'next/router';
import Link from 'next/link';
import { requestDataShixehV3, requestSWR } from '../Services/requestApiShixeh';
import { homeFull, homeWithColor } from '../components/routesApi';
import { website } from '../Services/Helper';
import cookies from 'next-cookies';
import Config from '../configs/Cerampakhsh';

const Loading = dynamic(() => import('../components/sections/Loading'))
// import Loading from '../components/sections/Loading';

const Suggests = dynamic(() => import('../components/home/Suggests'))
const ViewMe = dynamic(() => import('../components/home/ViewMe'))
const FooterHead = dynamic(() => import('../components/sections/FooterHead'))
const TopViewWithCategory = dynamic(() => import('../components/sections/TopViewWithCategory'))
const SliderTop = dynamic(() => import('../components/home/SliderTop'))
const SuggestsUses = dynamic(() => import('../components/home/SuggestsUses'))
const SuggestsCategory = dynamic(() => import('../components/home/SuggestsCategory'))
const SuggestsCategoryB = dynamic(() => import('../components/home/SuggestsCategoryB'))
const SpecialBrands = dynamic(() => import('../components/home/SpecialBrands'))
const NewWithCategory = dynamic(() => import('../components/home/NewWithCategory'))

const MobileSuggestsUses = dynamic(() => import('../components/home/MobileSuggestsUses'))


export default function Home({ data_ }) {
    let router = useRouter()

    // return '';
    const [loading, setloading] = useState(false);
    const [step2, setstep2] = useState(false);
    const [step3, setstep3] = useState(false);
    const [step4, setstep4] = useState(false);

    // const [banners, setBanners] = useState();
    // const [products, setProducts] = useState();
    // const [decorsUser, setDecorsUser] = useState();
    // const [ads, setAds] = useState([]);


    let banners = data_?.home?.banners
    let products = data_?.home?.products
    let ads = data_?.home?.ads
    let isMobileView = data_?.isMobileView ?? false

    const { data, isLoading, isError } = requestSWR(homeWithColor, 'get', null)
    // return '';
    let decorsUser = data// data_?.home?.decorsUser



    useMemo(async () => {

        if (typeof window !== 'undefined') {
            window.scroll(0, 0)
        }
        if (banners && products && decorsUser)
            setloading(false)
        if (process.browser) {
            window.addEventListener('scroll', handleScroll);
        }

        // const ads = await RequestData('post', GetsAdverts);
        // setAds(ads.data)

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 50) {
            setstep2(true)
        }
        if (document.documentElement.scrollTop > 700) {
            setstep3(true)
        }
        if (document.documentElement.scrollTop > 1500) {
            setstep4(true)
        }
    }

    return (
        < >
            <Head>
                <title>سرام پخش  فروشگاه انلاین کاشی، سرامیک و تجهیزات نصب</title>
                <link rel="canonical" href={website} />
                <meta name="description" content=" سرام پخش معتبرترین فروشگاه اینترنتی کاشی و سرامیک است که خرید و فروش آنلاین انواع کاشی های آشپزخانه، سرویس بهداشتی، استخری، پرسلان را با دکوراسیون های زیبا و به همراه نظرات و مشاوره تخصصی و رایگان، امکان پذیر کرده است. ما به سه اصل: پرداخت در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا پایبند هستیم." />
                <meta name="og:description" content=" سرام پخش معتبرترین فروشگاه اینترنتی کاشی و سرامیک است که خرید و فروش آنلاین انواع کاشی های آشپزخانه، سرویس بهداشتی، استخری، پرسلان را با دکوراسیون های زیبا و به همراه نظرات و مشاوره تخصصی و رایگان، امکان پذیر کرده است. ما به سه اصل: پرداخت در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا پایبند هستیم." />
                <meta name="twitter:description" content=" سرام پخش معتبرترین فروشگاه اینترنتی کاشی و سرامیک است که خرید و فروش آنلاین انواع کاشی های آشپزخانه، سرویس بهداشتی، استخری، پرسلان را با دکوراسیون های زیبا و به همراه نظرات و مشاوره تخصصی و رایگان، امکان پذیر کرده است. ما به سه اصل: پرداخت در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا پایبند هستیم." />
                <meta name="keywords" content="کاشی , سرامیک , خرید کاشی , فروش کاشی , خرید سرامیک , فروش سرامیک , فروشگاه کاشی , فروشگاه سرامیک , شستشوی سرامیک , فروش اینترنتی کاشی , فروش اینترنتی سرامیک , کاشی سنتی , سرام پخش , سرام‌پخش , کاشی و سرامیک , کاشی چیست , سرامیک چیست , پرسلان , کاشی استخری , کاشی آشپزخانه , کاشی سرویس بهداشتی , کاشی توالت , کاشی کابینت , کاشی مدرن , کاشی سه بعدی , کاشی ایرانی , کاشی اروپایی , چسب کاشی , نصب کاشی , کاشی گلسرام , کاشی بر ج ,کاشی پرسپولیس , کاشی امین , کاشی نارین , کاشی نوین , کاشی ارگ , کاشی پردیس , کاشی میلاد , کاشی مریم , کاشی سرام نگار , کاشی نگین , کاشی گلچین , کاشی درساسرام , کاشی اطلس , کاشی یاقوت , کاشی کاریزما , کاشی طلاسرام" />
                <meta name="title" content="سرام پخش  فروشگاه انلاین کاشی، سرامیک و تجهیزات نصب" />
                <link rel="apple-touch-icon" href="https://cerampakhsh.com/skin1/topkala_assets/img/logo-300300.png" />


                <meta property="og:image" content={Config.logo} />
                <meta name="twitter:image" content={Config.logo} />
                <meta property="og:url" content={`${website}${router.asPath}`} />
                <meta property="og:title" content="سرام پخش  فروشگاه انلاین کاشی، سرامیک و تجهیزات نصب" />
                <meta name="twitter:title" content="سرام پخش  فروشگاه انلاین کاشی، سرامیک و تجهیزات نصب" />

                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=yes,shrink-to-fit=no" />

            </Head>


            {loading ?
                <Loading />
                :
                <>
                    {isMobileView ?
                        <>
                            <div className=" bg-ptrn bg-light home-page-cp  mt-2 home-mobile">
                                <div className="list">

                                    {banners && <SliderTop ads={ads} type="C" banners={banners} className=" " />}

                                    <TopViewWithCategory />
                                    <MobileSuggestsUses />
                                    {products && <ViewMe products={products?.views_me?.slice(0, 1)[0]} />}
                                    {/* <NewWithCategory /> */}

                                    <div className="container-body">

                                    </div>
                                    {products && <ViewMe products={products?.views_me?.slice(1, 2)[0]} />}

                                    {products && <ViewMe products={products?.views_me?.slice(2, 3)[0]} />}
                                </div>

                            </div>
                            <FooterHead href={website + router.asPath} />
                        </>
                        :
                        <>
                            <div className=" bg-ptrn bg-light home-page-cp">
                                <div className="list">
                                    {banners && <SliderTop ads={ads} type="C" banners={banners} className=" " />}

                                    <TopViewWithCategory />
                                    {decorsUser?._data_?.box1 && <SuggestsUses decorsUser={decorsUser?._data_} />}
                                    {products && <Suggests products={products} />}

                                    <SuggestsCategoryB banners={banners} />

                                    <NewWithCategory />

                                    <SuggestsCategory banners={banners} />

                                    {products && <ViewMe products={products?.views_me?.slice(0, 1)[0]} />}


                                    <SpecialBrands />
                                </div>
                            </div>
                            <FooterHead href={website + router.asPath} />

                        </>
                    }
                </>

            }
        </>
    )
}


export async function getServerSideProps(context) {

    let params = (context && context.params) ? context?.params : null
    let token = cookies(context).token


    let isMobileView = Boolean((context.req
        ? context.req.headers['user-agent']
        : navigator.userAgent).match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        ))

    // if (isMobileView) {
    //     return {
    //         redirect: {
    //             destination: '/mob',
    //             permanent: false,
    //         },
    //     }
    // }

    let home = await requestDataShixehV3(website + (context?.resolvedUrl ?? null), homeFull, 'get', null, token)

    if (!home) {
        // return {
        //     notFound: true, // show 404 page
        // }
    }

    return {
        props: {
            data_: {
                params: params ?? null,
                home: home,
                isMobileView: isMobileView,
                // decorsUser: decorsUser,
                // banners: banners,
                // ads: ads,
                token: token ?? null
            }
        },
    };
}