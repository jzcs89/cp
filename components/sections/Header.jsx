import React, { useState, useEffect, useContext } from 'react';
import ReactGA from 'react-ga';
import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';
import dynamic from 'next/dynamic'

import { authContext } from './../../Contexts/AuthContext'
import { CartContext } from '../../Contexts/CartContext'
import { LogViewRoutes } from '../routesApi'
import { AngleLeft, Comments, TimesCircle } from '../icons/SvgIcons'
import { Heart, User } from './../icons/SvgIcons'
import Axios from '../../Services/Axios'
import Config from '../../configs/Cerampakhsh'
import { numberFormat } from './NumberFormat';
const Basket = dynamic(() => import('./Basket'))
const Menu = dynamic(() => import('./Menu'))
const Search = dynamic(() => import('./Search'))
const Loading = dynamic(() => import('./Loading'))


export const initGA = () => {
    ReactGA.initialize('UA-6276952-5');
}
export const logPageView = () => {
    if (typeof window !== 'undefined') {
        ReactGA.set({ page: window.location.pathname })
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}


function Header(props) {
    let router = useRouter()
    const userContext = useContext(authContext)
    const cContext = useContext(CartContext)
    const [load, setload] = useState(false);
    const [showProfile, setshowProfile] = useState(false)

    let urlBack = router?.query?.back ?? '/'

    const fruits = [
        "/u/confirm", "/u/password", "/u/register", "/u/login", "/u/change-password",
        "/confirm", "/password", "/register", "/login"
    ];
    urlBack = fruits.includes(router.pathname) ? urlBack : router.asPath
    // /u/confirm/

    const [userData, setuserData] = useState(props?.user ?? null);
    const changeUrl = (e) => {
        document.cookie = `token=; path=/;max-age=` + 0;

        userContext.setUser({ type: 'LOGOUT', token: null, user: {} })
        cContext.setCart({ type: 'ADD', token_cart: '', cart: null })
        if (router.asPath?.includes('profile') || router.asPath?.includes('change-password')) {
            router.push('/u/login')
        }
    }
    const [menuTop, setmenuTop] = useState('scrolltopaddnav')

    useEffect(() => {
        if (userContext?.data) setuserData(userContext?.data)
    }, [userContext])

    useEffect(() => {


        initGA();
        logPageView();


        setload(true)
        if (process.browser) {
            window.scroll(0, 0)
        }
        setTimeout(() => { setload(false) }, 850);
        var myArray = ["/u/confirm/", "/u/password/", "/u/register/", "/u/login/", "/u/change-password/",
            "/login/", "/register/", "/confirm/", "/forget-password/", "/profile/password/", "/merchants/"];
        if (router?.asPath) {
            if (myArray.indexOf(router.asPath) === -1) {

                document.cookie = `linkback=${router.asPath}; path=/;max-age=` + 31104000;
            }
        }

        var lastScrollTop = 0;
        window.onscroll = function (ev) {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if ((st > lastScrollTop && lastScrollTop >= 100)) {
                setmenuTop('addshadow')
            } else {
                setmenuTop('scrolltopaddnav')
            }
            lastScrollTop = st;
        };


        Axios({
            method: 'post',
            url: encodeURI(LogViewRoutes),
            data: {
                url: window.location.href
            }
        })
            .then(response => {

            });
    }, [router.asPath])
    return (
        <>
            <div className="wrapper default">
                {load &&
                    <Loading />
                }
                <div className="wrapper default">
                    <header className="main-header default" id="main-header">

                        <div id="headerfixobj" className="sticky"><div className="bg-white w-100">
                            {router.asPath === '/' &&
                                <div className=" row-ak  box-item-hdr bg-clrful ">
                                    <div className="col-xl-3 col-lg-3 p-0 item-hdr-mmbr ">
                                        <h4>
                                            <Comments className="w-15px ml-2" />
                                            امور مشتریان:<a href="tel:+983538274760" className=" px-2 float-left ">035-38274760</a>
                                        </h4>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 p-0 ">
                                        <div className=" m-1" dir="rtl">
                                            <p className=" m-0">  <span className="px-1 ">مصرف‌کنندگان گرامی؛</span>به‌دلیل نوسانات مداوم ارزی، برای اطلاع از آخرین قیمت‌ها با کارشناسان ما ارتباط بگیرید.</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className=" hgt-pg-c">
                                <div className="page-header-container">
                                    <div className="row">
                                        <div className="c-header__right-side">
                                            <div className=" c-header__logo default border-left">
                                                <Link href="/" ><a>
                                                    <img src={Config.logo} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" height="auto" />
                                                </a></Link>
                                            </div>
                                            <div className="c-header__search  search-btn " >
                                                <Search statictis={props.statictis} />
                                            </div>
                                        </div>
                                        <div className="c-header__action d-flex  ">
                                            <div className="favorite-btn ">
                                                <Link href="/profile/favorites"><a>
                                                    <Heart className="border-left ml-1 pl-1  w-22px" />علاقه مندی ها
                                                    {userContext && userContext.data.favoriteCount ?
                                                        <span className="pc-count-fav">
                                                            {userContext.data.favoriteCount}
                                                        </span>
                                                        :
                                                        ''
                                                    }
                                                </a></Link>
                                            </div>
                                            <div className={`dropdown  user-login ${(userData && userData?.token) ? '' : 'd-none'}`}>
                                                <div className="btn-basket dropdown-toggle cursor-pointer" onClick={(e) => setshowProfile(!showProfile)}>
                                                    <User className="border-left ml-1 pl-1  w-20px" />
                                                    حساب کاربری
                                                </div>

                                                <div onClick={(e) => setshowProfile(false)} className={showProfile ? '' : 'd-none'} style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    top: '0',
                                                    left: '0',
                                                    position: 'fixed',
                                                    background: '#00000040'
                                                }}></div>
                                                <ul onClick={(e) => setshowProfile(false)} className={` rounded-12 overf-h shadow  dropdown-menu ${showProfile ? 'show' : ''}`} >
                                                    <li className="profile-name"><Link href="/profile/edit-profile"><a>حساب کاربری <span className='firoozei'>{(userData?.user?.firstname ?? '') + " " + (userData?.user?.lastname ?? '')}</span> <AngleLeft className="svg-firoozei w-8px"/>   </a></Link></li>
                                                    <li><Link href="/profile/wallet"><a>موجودی کیف پول <span className="float-left  text-success"> {(userData?.user?.wallet && userData?.user?.wallet[0]?.sum_amount) ? numberFormat((userData?.user?.wallet[0]?.sum_amount)/10) : 0} تومان</span></a></Link> </li>
                                                    <li><Link href="/u/change-password" ><a>{(userData?.user?.password_check) ?
                                                        <span className="animated flash text-danger">
                                                            تخصیص رمز عبور
                                                        </span>
                                                        :
                                                        <span >تغییر رمز عبور</span>
                                                    }</a></Link></li>
                                                    <li><Link href="/profile/orders"><a>پیگیری سفارش</a></Link></li>
                                                    <li className="cursor-pointer exit-sabad  " onClick={changeUrl} ><TimesCircle className="w-25px timeCircle" /> خروج</li>
                                                </ul>
                                            </div>
                                            <div className={`profile-area-btn ${(!(userData && userData?.token)) ? '' : 'd-none'}`}>
                                                <div  >
                                                    <div className="profile-box-btn">
                                                        <User className="border-left ml-1 pl-1  w-20px" />
                                                        <Link href={`/u/login?back=${urlBack}`} className="jannat  profile-btn "><a>ورود    </a></Link>و
                                                        <Link href={`/register?back=${urlBack}`} className="jannat  profile-btn "><a>  ثبت نام</a></Link></div>
                                                </div>
                                            </div>

                                            <Basket />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <nav id="nav-ak" className={`main-menu ${(menuTop)} `}>
                                <div className=" page-header-container ">
                                    {props?.categories &&
                                        <Menu categories={props?.categories} />
                                    }
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}
export default withRouter(Header);