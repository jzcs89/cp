import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../Contexts/AuthContext'
import { CartContext } from '../Contexts/CartContext'
import { getCookie } from '../Services/getCookie'
import { v4 as uuidv4 } from 'uuid';
import Axios from '../Services/Axios';
import { baseGroup, getUser } from './routesApi';
import LogoArea from './sections/LogoArea';
import Header from './sections/Header';

export default function Context(props) {

    
    const userContext = useContext(authContext)
    const cContext = useContext(CartContext)

    const [statictis, setStatictis] = useState(null)

    let {categories, user, getStatistics} = props

    useEffect(() => {
        const tokenUser = (getCookie("token")) ?? null
        
        if (process.browser) {
            if (getCookie("token_everyone") === null)
                document.cookie = `token_everyone=${uuidv4()}; path=/;max-age=` + 31104000;
            var navbar = document.getElementById("nav-ak");
            if (navbar) {
                var sticky = navbar.offsetTop;
                window.onscroll = function () {
                    if (window.pageYOffset >= sticky + 50) {
                        navbar.classList.add("sticky", "animate", "fadeInDown");
                    } else if (window.pageYOffset >= sticky - 50) {
                        navbar.classList.remove("sticky", "animate", "fadeInDown");
                    } else if (window.pageYOffset >= 0) {
                        navbar.classList.remove("sticky", "animate", "fadeInDown");
                    } else {
                        navbar.classList.remove("sticky", "animate", "fadeInDown");
                    }
                };
            }
        }

        
        let token_cart = (getCookie("token_cart") !== null) ? getCookie("token_cart") : null;
        // if (tokenUser) {
        //     Axios({
        //         method: 'get',
        //         url: encodeURI(getUser(tokenUser))
        //     })
        //         .then(response => {
        //             userContext?.setUser({ type: 'LOGIN', token: tokenUser, user: response.data.data })
        //             userContext?.setUser({ type: 'FAVOITE', favoriteCount: response.data.favorites_count })
        //         }, (errors) => {
        //             document.cookie = `token=; path=/;max-age=` + 0;
                    
        //             userContext?.setUser({ type: 'LOGOUT', token: null, user: {} })
        //         })
        //         .catch(function (error) {
        //             document.cookie = `token=; path=/;max-age=` + 0;
        //             userContext?.setUser({ type: 'LOGOUT', token: null, user: {} })
        //         });
        // } else {
        //     document.cookie = `token=; path=/;max-age=` + 0;
        //     userContext?.setUser({ type: 'LOGOUT', token: null, user: {} })
        // }
        // let url = 'v1/get-cart/' + token_cart + '?token=' + tokenUser?.replace(/\r?\n|\r/g, '')
        // if ((userContext?.data && userContext?.data.token && getCookie("token") !== 'undefined')) {
        //     url = 'v1/get-cart/user/' + token_cart + '?token=' + tokenUser?.replace(/\r?\n|\r/g, '')
        // }
        // Axios({
        //     method: 'get',
        //     url: encodeURI(url),// 
        //     data: ''
        // }).then(response => {
        //     cContext?.setCart({ type: 'ADD', token_cart: token_cart, cart: response.data })
        // });

        Axios({
            method: 'get',
            url: encodeURI(baseGroup+ '?token=' + tokenUser?.replace(/\r?\n|\r/g, '')),
            data: {
                url: window.location.href,
                uuid: token_cart,
            }
        })
            .then(response => {
                setStatictis(response?.data?.get_count_statistics)
                userContext?.setUser({ type: 'LOGIN', token: tokenUser, user: response?.data?.auth_user?.user })
                userContext?.setUser({ type: 'FAVOITE', favoriteCount: response?.data?.auth_user?.favorites_count })
                cContext?.setCart({ type: 'ADD', token_cart: token_cart, cart: response?.data?.get_cart_user })
            });

    }, [])

    return (
        <>
            
        </>
    )
}
