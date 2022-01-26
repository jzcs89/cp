import { Router, useRouter } from 'next/router';
import Script from 'next/script'
import { GetCategories, getUser } from '../components/routesApi';
import LogoArea from '../components/sections/LogoArea';
import { requestDataShixeh, requestDataShixehV2 } from '../Services/requestApiShixeh';

// import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'jquery/dist/jquery.min.js'

import '../public/Assets/css/animate.css';
import '../public/Assets/css/main-v.0.2.7.css';
import '../public/Assets/css/App.css';
import 'react-toastify/dist/ReactToastify.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';


import { authContext, reducer, initialValeue } from '../Contexts/AuthContext';
import { compareContext, compareReducer, compareInitialValeue } from '../Contexts/CompareContext';
import { AlertContext, alertReducer, alertInitialValeue } from '../Contexts/AlertContext';
import { CartContext, cartReducer, initialValeueCart } from '../Contexts/CartContext';
import { WizardContext, wizardReducer, wizardInitialValue } from '../Contexts/WizardContext';
import { ProductSmallContext, productsmallinitialValeue, ProductSmallReducer } from '../Contexts/ProductSmallContext';
import Context from '../components/Context';
import { useEffect, useReducer, useState } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { ProductSmall } from '../components/sections/ProductSmall';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import LoadProduct from '../components/products/loadProduct';
import Loading from '../components/sections/Loading';
import cookies from 'next-cookies';
Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function Cerampakhsh({ Component, pageProps, categories, getStatistics, pages, user }) {

    const router = useRouter()

    const [pageLoading, setPageLoading] = useState(false);
    useEffect(() => {
        const handleStart = () => { setPageLoading(true); };
        const handleComplete = () => { setPageLoading(false); };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    }, [router]);

    const [data, dispatch] = useReducer(reducer, initialValeue)
    const [compare, dispatchCompare] = useReducer(compareReducer, compareInitialValeue)
    const [alert, dispatchAlert] = useReducer(alertReducer, alertInitialValeue)
    const [cart, dispatchCart] = useReducer(cartReducer, initialValeueCart)
    const [dataWizard, dispatchWizard] = useReducer(wizardReducer, wizardInitialValue)
    const [productSmall, dispatchProductSmall] = useReducer(ProductSmallReducer, productsmallinitialValeue)



    return (<>

        <authContext.Provider value={{ data: data, setUser: dispatch }} >
            <compareContext.Provider value={{ compare: compare, setCompare: dispatchCompare }} >
                <AlertContext.Provider value={{ alert: alert, setAlert: dispatchAlert }} >
                    <CartContext.Provider value={{ cart: cart, setCart: dispatchCart }} >
                        <WizardContext.Provider value={{ data: dataWizard, setWizard: dispatchWizard }} >
                            <ProductSmallContext.Provider value={{ data: productSmall, setProductSmall: dispatchProductSmall }} >
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                                <link rel="stylesheet" href="https://cerampakhsh.com/files/css/ForceStyle.css"  />

                                <div id="root">
                                    <div className="App" >
                                        <div id="header-content">
                                            
                                        <Context categories={categories} getStatistics={getStatistics} user={user} />
                                        
                                        <LogoArea categories={categories} getStatistics={getStatistics}  />
                                        <Header categories={categories} getStatistics={getStatistics} user={user}  />
                                        </div>
                                        <main className="main-header default ">
                                            <div className="container p-0">

                                                {pageLoading && <Loading />}
                                                <Component {...pageProps} />

                                                <Script src="https://cerampakhsh.com/skin1/topkala_assets/js/jquery-3.2.1.slim.min.js"></Script>
                                                <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" integrity="sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm" crossOrigin="anonymous"></Script>
                                            </div>
                                        </main>

                                        <Footer pages={pages} />
                                        <ProductSmall />
                                        <ToastContainer
                                            position="top-left"
                                            autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            rtl
                                            transition={Slide}
                                        />
                                    </div>
                                </div>

                            </ProductSmallContext.Provider>
                        </WizardContext.Provider>
                    </CartContext.Provider>
                </AlertContext.Provider>
            </compareContext.Provider>
        </authContext.Provider>
    </>)
}

Cerampakhsh.getInitialProps = async ({ Component, ctx }) => {
    let token = cookies(ctx).token ?? null

    let user = (token && token != 'undefined') ? await requestDataShixehV2('',getUser(token), 'get', null) : null
    let categories = await requestDataShixehV2('',GetCategories, 'get', null)
    let getStatistics = null
    let pages = await requestDataShixeh('v1/pages/footer', 'get', null);
    return {
        categories: categories.data,
        getStatistics: getStatistics,
        pages: pages,
        user: {
            token: token,
            user: user?.data ?? null,
            favoriteCount: user?.favorites_count ?? 0
        },
    }
}

export default Cerampakhsh
