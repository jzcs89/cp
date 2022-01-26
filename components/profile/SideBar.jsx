import React, { useState, useContext } from 'react'
import { website } from '../../Services/Helper'
import Link from "next/link";
import { authContext } from '../../Contexts/AuthContext';
import Axios from '../../Services/Axios';
import { CartContext } from '../../Contexts/CartContext';
import TelegramBot from '../sections/TelegramBot';
import { toast } from 'react-toastify';
import { AvatarUpdateRR } from '../routesApi';
import CropProfile from '../sections/CropProfile';
import { BoxHeart, HandHoldingBox, PersonCarry, SearchLocation, TimesCircle, UserCircle } from '../icons/SvgIcons';
import { getCookie } from '../../Services/getCookie';
import Style from '../../pages/profile/Style'
import { useRouter } from 'next/router';

function SideBar() {
    let router = useRouter()
    const [panelMerchant, setpanelMerchant] = useState(false)

    let token = getCookie('token')

    const userContext = useContext(authContext)
    const cContext = useContext(CartContext)

    const hanldeRoleUser = (url) => async (event) => {
        event.preventDefault();
        await Axios({
            method: 'post',
            url: encodeURI(url),// 
            data: ''
        })
            .then(response => {

                userContext.setUser({ type: 'LOGIN', token: token, user: response.data.data })
                toast(response.data.message, { type: response.data.status })

                if (response.data.data.role === 2) {
                    setpanelMerchant(true)
                }
            }, (errors) => {
            })
            .catch(function (error) {
            });
    }
    const changeUrl = (e) => {
        document.cookie = `token=; path=/;max-age=` + 0;
        userContext.setUser({ type: 'LOGOUT', token: null, user: {} })

        cContext.setCart({ type: 'ADD', token_cart: '', cart: null })
        if (router.asPath?.includes('profile')) {
            router.push('/u/login')
        }
    }
    return (

        <>
            <Style />
            <div className="profile-sidebar">
                <div className="tp-profile-box border-bottom row mb-2">

                    <div className="col-4 col-4 p-md-1 pt-0 px-0 px-2">

                        <CropProfile url={AvatarUpdateRR} defaultSrc={userContext?.data?.user?.avatar && userContext?.data?.user?.avatar} />
                    </div>
                    <div className="col-8">
                        <p className="mb-0 pt-2 font-weight-bold"> {userContext?.data?.user?.full_name ?? ''}</p>
                        <p className="text-muted">0{userContext?.data?.user?.login?.toString()?.slice(-10) ?? ''}</p>
                    </div>
                    
                </div>
                <div className="btn-group-vertical w-100 box-prf">
                    <Link href="/profile/edit-profile"><a className={` btn-prf  ${router.asPath == '/profile/edit-profile/' ? 'active' : ''}`}>
                        <img className="profile-sidebar-active" src="https://cerampakhsh.com/files/img/dashboard/USER1.svg" alt="" />
                        <img className="profile-sidebar-deactive" src="https://cerampakhsh.com/files/img/dashboard/user2.svg" alt="" />
                        پروفایل
                    </a>
                    </Link>

                    <Link href="/profile/wallet" rel="noopener noreferrer nofollow"  >
                        <a className={` btn-prf  ${router.asPath == '/profile/wallet/' ? 'active' : ''}`}>
                            <img className="profile-sidebar-active" src="https://cerampakhsh.com/files/img/dashboard/money1.svg" alt="" />
                            <img className="profile-sidebar-deactive" src="https://cerampakhsh.com/files/img/dashboard/MONEY2.svg" alt="" />
                            کیف پول و تراکنش ها
                        </a>
                    </Link>

                    <Link href="/profile/referral" rel="noopener noreferrer nofollow"  >
                        <a className={` btn-prf  ${router.asPath == '/profile/referral/' ? 'active' : ''}`}>
                            <img className="profile-sidebar-active" src="https://cerampakhsh.com/files/img/dashboard/FOLLOWING1.svg" alt="" />
                            <img className="profile-sidebar-deactive" src="https://cerampakhsh.com/files/img/dashboard/following2.svg" alt="" />
                            دعوت از دوستان
                        </a>
                    </Link>
                    {userContext?.data?.user?.role === 4 &&

                        <Link href="/profile/installer">
                            <a className={` btn-prf  ${router.asPath == '/profile/installer/' ? 'active' : ''}`}>
                                <BoxHeart className="sidebar-svg w-22px" />ثبت نام نصاب
                            </a>
                        </Link>
                    }

                    <Link href="/profile/orders">
                        <a className={` btn-prf  ${router.asPath == '/profile/orders/' ? 'active' : ''}`}>
                            <img className="profile-sidebar-active" src="https://cerampakhsh.com/files/img/dashboard/DELIVERY1.svg" alt="" />
                            <img className="profile-sidebar-deactive" src="https://cerampakhsh.com/files/img/dashboard/delivery2.svg" alt="" />
                            پیگیری سفارشات
                        </a>
                    </Link>

                    <Link href="/u/change-password">
                        <a className={` btn-prf  ${router.asPath == '/profile/password/' ? 'active' : ''}`}>
                            <img className="profile-sidebar-active" src="https://cerampakhsh.com/files/img/dashboard/PASSWORD1.svg" alt="" />
                            <img className="profile-sidebar-deactive" src="https://cerampakhsh.com/files/img/dashboard/password2.svg" alt="" />
                            رمز عبور
                        </a>
                    </Link>


                    <Link href="/profile/favorites">
                        <a className={` btn-prf  ${router.asPath == '/profile/favorites/' ? 'active' : ''}`}>
                            <img className="profile-sidebar-active" src="https://cerampakhsh.com/files/img/dashboard/HEART1.svg" alt="" />
                            <img className="profile-sidebar-deactive" src="https://cerampakhsh.com/files/img/dashboard/heart2.svg" alt="" />
                            لیست علاقه مندی ها
                        </a>
                    </Link>

                    <Link href="/profile/list-address">

                        <a className={` btn-prf  ${router.asPath == '/profile/list-address/' ? 'active' : ''}`}>
                            <img className="profile-sidebar-active" src="https://cerampakhsh.com/files/img/dashboard/LOCATION1.svg" alt="" />
                            <img className="profile-sidebar-deactive" src="https://cerampakhsh.com/files/img/dashboard/location2.svg" alt="" />

                            آدرس
                        </a>
                    </Link>


                    <a className="btn-prf" onClick={changeUrl} >
                        <img className="profile-sidebar-active" src="https://cerampakhsh.com/files/img/dashboard/EXIT1.svg" alt="" />
                        <img className="profile-sidebar-deactive" src="https://cerampakhsh.com/files/img/dashboard/exit2.svg" alt="" />

                        خروج
                    </a>

                </div>
            </div>

        </>

    )
}

export default SideBar;