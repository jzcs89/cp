import React, { useState, useContext, useEffect } from 'react'
import Axios from '../../Services/Axios';
import { compareContext } from '../../Contexts/CompareContext';
import { AlertContext } from '../../Contexts/AlertContext';
import { CartContext } from '../../Contexts/CartContext';
import { authContext } from '../../Contexts/AuthContext';
import Link from 'next/link'

import { website } from './../../Services/Helper'
import { toast } from 'react-toastify';
import { Facebook, HeartR, Linkedin, Pinterest, ShareAll, Telegram, Twitter, Whatsapp } from '../icons/SvgIcons';
import { Heart } from './../icons/SvgIcons';
import { getCookie } from '../../Services/getCookie';

// export default class Product extends Component {
export default function SocialBoxProduct(props) {

    const comContext = useContext(compareContext)
    const alContext = useContext(AlertContext)
    const cContext = useContext(CartContext)
    const userContext = useContext(authContext)

    const [cartSubmit, setCartSubmit] = useState('v1/add-cart/product')
    const [token_cart, setTokenCart] = useState(getCookie("token_cart") ?? null)

    useEffect(() => {
        if ((userContext.data && userContext.data.token && getCookie("token") !== 'undefined')) {
            setCartSubmit('v1/add-cart/product/user?token=' + (userContext.data.token)?.replace(/\r?\n|\r/g, ''))
        }
    }, [])

    const [share, setShare] = useState(false);
    const handleShare = () => {
        if (share) {
            setShare(false)
        } else {
            setShare(true)
        }
    }

    const handleCompare = (id) => async (event) => {
        event.preventDefault();
        // alert(id)

        var compares = getCookie("compare") ?? []
        await Axios({
            method: 'post',
            url: encodeURI('v1/product/compare/' + id),// 
            data: { compares: compares }
        })
            .then(response => {
                document.cookie = `compare=${JSON.stringify(response.data.data)}; path=/;max-age=` + 31104000;

                toast(response.data.message, { type: response.data.status })

                comContext.setCompare({ type: 'ADD', compares: response.data.data })

                return;
            }, (errors) => {

            })
            .catch(function (error) {

            });
    }

    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        await Axios({
            method: 'post',
            url: encodeURI(url),// 
            data: new FormData(event.target)
        })
            .then(response => {
                if (response.data.uuid && response.data.uuid !== '' && response.data.uuid !== 'undefined') {
                    
                    document.cookie = `token_cart=${response.data.uuid}; path=/;max-age=` + 31104000;
                }
                setTokenCart(response.data.uuid)
                cContext.setCart({ type: 'ADD', token_cart: response.data.uuid, cart: response.data.data })

                toast(response.data.message, { type: response.data.status })
            });
    }

    const handleFavorite = (url) => async (event) => {
        
        if ((userContext.data && userContext.data.token && getCookie("token") !== 'undefined')) {
            event.preventDefault();
            await Axios({
                method: 'get',
                url: encodeURI(url + '?token=' + (userContext.data.token)?.replace(/\r?\n|\r/g, '')),// 
                data: ''
            })
                .then(response => {
                    toast(response.data.message, { type: response.data.status })

                    userContext.setUser({ type: 'FAVOITE', favoriteCount: response.data.data })
                });
        }
    }

    return (

        <>
            <div className="social-box social-box-product  ">
                <button title="اشتراک گذاری" className="hvr-social-act" data-toggle="modal" data-target={`#myModalshare${props.id}`} onClick={handleShare}>                    <ShareAll className="socialSvg" data-toggle="tooltip" data-placement="bottom" data-original-title="اشتراک در شبکه های اجتماعی" />
                </button>

                {(props.type === 'product') &&
                    <button title="مقایسه محصول" className="hvr-social-act" onClick={handleCompare(props.id)}>                  
                          <img src="https://cerampakhsh.com/files/img/svg/compares.svg" className="mt-n1 mx-1 w-20px d-inline" alt="مقایسه محصول" width="20" height="20" />
                    </button>
                }
                {userContext.data && userContext.data.token &&
                    <button title="افزودن به علاقه مندی" className="hvr-social-act" onClick={handleFavorite(`v1/favorite/add/${props.type}/${props.id}`)} >
                    
                        


                        {props.favorite ?
                            <HeartR className="socialSvg dangerSvg" data-toggle="tooltip" data-placement="bottom" data-original-title="اضافه به علاقه مندیها" />

                            :
                            <Heart className="socialSvg" data-toggle="tooltip" data-placement="bottom" data-original-title="اضافه به علاقه مندیها" />

                        }




                        </button>
                }

                {props.price ?
                    <form   method="post" onSubmit={handleSubmit(cartSubmit)} className="pcp-hidden ajaxCart">
                        <input type="hidden" name="id[]" value={props.id} />
                        <input type="hidden" name="count[]" value="1" />
                        <input type="hidden" name="token_cart" value={token_cart} />
                        <input type="hidden" name="type" value="product" />
                        <button type="submit">
                            <span  data-toggle="tooltip" data-placement="bottom" data-original-title="اضافه به سبد خرید"></span></button>
                    </form>
                    :
                    ''
                }

            </div>

            {share &&
                <>

                    <div id className="modal-share">
                        <p>با استفاده از رسانه های زیر می‌توانید این صفحه را با دوستان خود به اشتراک بگذارید.</p>

                        <div className="comp-shr-box">
                            <div className="social-share-icon"> <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${website}${props.link}&title=title${props.title}&summary=&source=`} target="_blank" rel="noopener noreferrer"><Linkedin className="w-25px" /> </a></div>
                            <div className="social-share-icon"> <a href={`https://twitter.com/intent/tweet?text=${website}${props.link}&amp;title=${props.title}`} title="" target="_blank" rel="noopener noreferrer"><Twitter className="w-25px" /></a></div>
                            <div className="social-share-icon"> <a href={`https://www.facebook.com/sharer/sharer.php?u=${website}${props.link}&amp;t=${props.title}`} target="_blank" rel="noopener noreferrer"><Facebook className="w-25px" /> </a></div>
                            <div className="social-share-icon"> <a href={`https://pinterest.com/pin/create/button/?url=${website}${props.link}&media=${website}/${props.image}&description=${props.title}`} target="_blank" rel="noopener noreferrer"><Pinterest className="w-25px" /> </a></div>
                            <div className="social-share-icon"> <a href={`https://telegram.me/share/url?text=${website}${props.link}&amp;url=${website}${props.link}`} target="_blank" rel="noopener noreferrer"><Telegram className="w-25px" /> </a></div><Telegram className="w-25px" />
                            <div className="social-share-icon"> <a href={`whatsapp://send?text=${website}${props.link}`} data-action="share/whatsapp/share" onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" title="Share on whatsapp" rel="noopener noreferrer">  <Whatsapp className="w-25px" /></a></div>
                        </div>
                    </div>
                </>
            }


            <div id={`myModal${props.id}`} className="modal fade" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="bg-stl p-3">
                            <h6 className="modal-title  ">

                                طرح دکوراسیون پارکت 103 15*90کاشی پرسپولیس-رستیک کالیبره مات</h6>
                        </div>
                        <div className="modal-body">
                            <div className="row-ak">





                                <div className="row border-bottom py-2">
                                    <div className="col-2 p-0">
                                        <img className=" " src={`${website}/resize/small/${props.image}`} width="70" height="70" alt="کاشی روشن وایس 60*60 کاشی پرسپولیس" title="کاشی روشن وایس 60*60 کاشی پرسپولیس" />
                                    </div>
                                    <div className="col-10 p-0 pr-2 row-ak">
                                        <div className="col-12 p-0">
                                            <div className="one-line pb-2">
                                                تک محصول</div>
                                            <span className=" text-secondary mb-1 pro-price-count  float-right px-2 bg-stl firoozei">
                                                هر متر مربع<span className=" pro-price-count float-left off pr-2 m-0">
                                                    ۶۱٬۰۰۰ تومان</span>
                                            </span>
                                        </div>
                                        <div className="col-6 text-center mtr-con">
                                            <small className="text-muted muted-ak">
                                                کارتن</small>
                                            <input type="text" min="0" className="form-control size-palet" placeholder="" product="0" name="count[0]" value="1" />
                                        </div>

                                        <div className="col-6 text-center mtr-con">
                                            <small className="text-muted muted-ak">

                                                متراژ</small>

                                            <input type="text" className="form-control size-calculate" product="0" name="size[]" placeholder="متراژ" value="1.44" />
                                        </div>
                                    </div>


                                </div>


                            </div>

                        </div>
                        <div className="parent-btn d-flex m-auto p-3">
                            <button type="submit" title="خرید محصول" className="btn btn-firoozei">افزودن به سبد خرید
                                <img className="add-to-basket" src={`${website}/files/img/add-to-basket3.svg`} alt="" />
                            </button>
                            <div className="text-danger p-2 pr-3 cursor-pointer" data-dismiss="modal">
                                انصراف...
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}