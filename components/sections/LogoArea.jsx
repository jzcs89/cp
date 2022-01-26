import React, { useContext, useEffect, useState } from 'react';
import { useRouter, withRouter } from 'next/router'
import Link from 'next/link';
import dynamic from 'next/dynamic'

import { authContext } from './../../Contexts/AuthContext'
import { CartContext } from '../../Contexts/CartContext'
import { Bars, Home, SignIn, TimesCircle, UserCircle } from '../icons/SvgIcons'
import { CartArrowDown } from './../icons/SvgIcons'
import { website } from '../../Services/Helper'
import Config from '../../configs/Cerampakhsh' 
const NewMenuFix = dynamic(() => import('./NewMenuFix'))
const NewMenuProfile = dynamic(() => import('./NewMenuProfile'))
const Search = dynamic(() => import('./Search'))



function LogoArea(props) {
    const router = useRouter()

    const [classMenu, setclassMenu] = useState(false)
    const [ProfileMenu, setProfileMenu] = useState(false)

    const [showSearch, setshowSearch] = useState(false)
    const [urlHref, seturlHref] = useState(router.asPath)

    const userContext = useContext(authContext)
    const cContext = useContext(CartContext)

    useEffect(() => {
        seturlHref(decodeURI(router.asPath.toString()).toString())
        setclassMenu(false)
        setshowSearch(false)
    }, [router])

    const closeSearchbox = (e) => {
        setshowSearch(false)
    }

    return (
        <>
            <div className="srch-mobile ">
                <div className="container-body p-0">
                    <div className="row-ak  mt-3">
                        <div className="col-3 pl-0 py-1">
                            <Link rel="stylesheet" href="/"><a> <img className="cp-logo " src={Config.logo} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="90" height="auto" />
                            </a></Link>
                        </div>
                        <div className="col-9">
                            <div className="btn-search-modals " onClick={(e) => setshowSearch(!showSearch)}>

                                جستجو در سرام پخش
                                <img className="border-right float-left" src={`${website}/skin1/topkala_assets/img/search-2.png`} width="25" height="25" alt="از همین جا پیدا کن" title="از همین جا پیدا کن" />
                            </div>
                        </div>
                    </div>
                </div>
                {showSearch &&
                    <div className="modal show" id="searchModal" aria-modal="true" style={{ display: 'block' }}>
                        <div className="modal-dialog search-modal-box">
                            <div className="modal-content">
                                <Search showSearch={showSearch} closeSearchbox={closeSearchbox} />
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div id="NewMenu" className={` new-menu-fix ${classMenu ? "active" : "deactive"}`}>
                <div className="new-menu-fix-close " onClick={() => setclassMenu(!classMenu)}>
                    <TimesCircle className="w-25px dangerSvg cursor-pointer" />
                </div>
                <NewMenuFix categories={props?.categories} />
            </div>

            {/* //////////////////////////////////////// */}


            {/* <div className="new-menu-profile-close position-absolute z-index-1 " onClick={() => setProfileMenu(!ProfileMenu)}>
                <TimesCircle className="w-25px dangerSvg cursor-pointer" />
            </div> */}
            <div className="sidebar-show-mob">

                <div onClick={() => setProfileMenu(!ProfileMenu)} className={`shadowbackprofile  ${ProfileMenu ? "active" : "deactive"}`}>

                    <div id="NewMenuProfile" className={` new-menu-profile ${ProfileMenu ? "active" : "deactive"}`}>
                        <div className="new-menu-profile-close float-left p-2" onClick={() => setProfileMenu(!ProfileMenu)}>
                            <TimesCircle className="w-25px dangerSvg cursor-pointer" />
                        </div>
                        <NewMenuProfile login={userContext.data && userContext.data.token ? true : false} />
                    </div>
                </div>
            </div>
            {/* ////////////////////////////////////// */}


            <div className="w-100 logo-area-fix ">
                <div className="  login-box">
                    <div className="pos-rltv w-100 d-flex">
                        <div className={`login-elmnt home-pge-act ${(urlHref && urlHref === '/') ? "active" : ""}`}>
                            <Link rel="stylesheet" href="/"><a>
                                <Home className="w-25px" />
                                <p>خانه</p>
                            </a></Link>
                        </div>
                        <div className={`login-elmnt ${(urlHref && (urlHref?.toString()?.includes('/products') > 0)) ? "active" : ""}`}>
                            <div onClick={() => setclassMenu(!classMenu)}>
                                <Bars className="w-20px" />
                                <p>دسته بندی</p>
                            </div>

                        </div>

                        <div className={`login-elmnt  ${(urlHref && urlHref?.toString()?.includes('/خرید-سریع')) ? "active" : ""}`}>
                            <Link rel="stylesheet" href="/خرید-سریع"><a>
                                <img className="cp-logo" src=" https://cerampakhsh.com/files/img/cp.svg" alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="30" height="30px" />

                                <p>خرید آسان</p>
                            </a></Link>

                        </div>
                        <div className={`login-elmnt ${(urlHref && urlHref?.toString()?.includes('/cart') > 0) ? "active" : ""}`}>
                            <Link href="/cart"><a> <CartArrowDown className="w-22px" />
                                <p>سبدخرید</p>
                                {(cContext && cContext.cart && cContext.cart.cart && cContext.cart.cart.orderdetails && (cContext.cart.cart.orderdetails).length > 0) &&
                                    <span className="count-basket">{(cContext.cart.cart.orderdetails).length}</span>
                                }
                            </a></Link>
                        </div>
                        {/* {userContext.data && userContext.data.token ?
                            <>
                                <div onClick={() => setProfileMenu(!ProfileMenu)} className={`login-elmnt ${(urlHref && urlHref?.toString()?.includes('/profile') > 0) ? "active" : ""}`}>
                                    <UserCircle className="w-22px" /><p>پروفایل</p>
                                </div>
                            </>
                            :
                            <div className={`login-elmnt ${(urlHref && (urlHref?.toString()?.includes('/u/login') > 0 || urlHref?.toString()?.includes('/register') > 0)) ? "active" : ""}`}><Link href="/u/login"><a> <SignIn className="w-20px" />
                                <p>ورود</p>
                            </a></Link></div>
                        } */}
                        <div onClick={() => setProfileMenu(!ProfileMenu)} className={`login-elmnt ${(urlHref && urlHref?.toString()?.includes('/profile') > 0) ? "active" : ""}`}>
                            {userContext.data && userContext.data.token ?
                                <><UserCircle className="w-22px" /><p>پروفایل</p></>
                                :
                                <><SignIn className="w-20px" /><p>ورود</p></>

                            }

                        </div>
                        <div className="active-menu-hover">

                        </div>
                        <div className="fast-sell-box animated  delay-5s flipInOutX">
                            <div className="fast-sell-btn">
                                {/* <button type="button" className="close text-danger" >&times;</button> */}

                                <p className="mb-0 text-justify">
                                    با انتخاب مشخصات کاربری ، رنگ و طرح در چند دقیقه به لیستی از محصولات ایده آل خود برسید .
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="colorful-anm">
                </div>
            </div>
        </>
    );
}

export default withRouter(LogoArea);