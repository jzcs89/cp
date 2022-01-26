import React, { useState, useContext } from 'react'
import Axios from '../../Services/Axios';
import { compareContext } from '../../Contexts/CompareContext';
import { authContext } from '../../Contexts/AuthContext';
import { website } from './../../Services/Helper'
import { toast } from 'react-toastify';
import { Facebook, HeartR, Linkedin, Pinterest, Telegram, Twitter, Whatsapp } from '../icons/SvgIcons';
import { ShareAll, Heart } from './../icons/SvgIcons';
import { getCookie } from '../../Services/getCookie';
import { isMobile } from 'react-device-detect';
export default function SocialBox(props) {
    const comContext = useContext(compareContext)
    const userContext = useContext(authContext)
    const [facoriteCheck, setFacoriteCheck] = useState((props.favorite) ? true : false)
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
        let compares = JSON.parse(getCookie("compare")) ?? []
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
    const handleFavorite = (url) => async (event) => {
        if ((userContext.data && userContext.data.token && getCookie("token") !== 'undefined')) {
            event.preventDefault();
            await Axios({
                method: 'get',
                url: encodeURI(url + '?token=' + (userContext.data.token)?.replace(/\r?\n|\r/g, '')),// 
                data: ''
            })
                .then(response => {
                    setFacoriteCheck(!facoriteCheck)
                    toast(response.data.message, { type: response.data.status })
                    userContext.setUser({ type: 'FAVOITE', favoriteCount: response.data.data })
                });
        }
    }
    return (
        <>
            <div className="social-box social-box-product  ">
                <button title="اشتراک گذاری" onClick={handleShare}>
                    <ShareAll className="socialSvg" data-toggle="tooltip" data-placement="bottom" data-original-title="اشتراک در شبکه های اجتماعی" />
                </button>
                {(props.type === 'product') &&
                    <button title="مقایسه محصول" onClick={handleCompare(props.id)}>
                        <img src="https://cerampakhsh.com/files/img/svg/compares.svg" className="mt-n1 mx-1 w-20px d-inline" alt="مقایسه محصول" width="20" height="20" />
                         </button>
                }
                {userContext.data && userContext.data.token &&
                    <button title="اضافه به علاقه مندی" onClick={handleFavorite(`v1/favorite/add/${props.type}/${props.id}`)} >
                        {(facoriteCheck) ?
                            <HeartR className="socialSvg dangerSvg" data-toggle="tooltip" data-placement="bottom" data-original-title="اضافه به علاقه مندیها" />
                            :
                            <Heart className="socialSvg" data-toggle="tooltip" data-placement="bottom" data-original-title="اضافه به علاقه مندیها" />
                        }
                    </button>
                }
            </div>
            {share &&
                <div id="scl-snd-box2349" className="social-share-box animated  fadeInDown active">
                    <div className="comp-shr-box">
                        <div className="social-share-icon"> <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${website}${props.link}&title=title${props.title}&summary=&source=`} target="_blank" rel="noopener noreferrer"><Linkedin className="w-25px mt-n2 op-75 linkedin"/> </a></div>
                        <div className="social-share-icon"> <a href={`https://twitter.com/intent/tweet?text=${website}${props.link}&amp;title=${props.title}`} title="" target="_blank" rel="noopener noreferrer"><Twitter className="w-25px mt-n2 op-75 twitter"/> </a></div>
                        <div className="social-share-icon"> <a href={`https://www.facebook.com/sharer/sharer.php?u=${website}${props.link}&amp;t=${props.title}`} target="_blank" rel="noopener noreferrer"><Facebook className="w-25px mt-n2 op-75 facebook"/> </a></div>
                        <div className="social-share-icon"> <a href={`https://pinterest.com/pin/create/button/?url=${website}${props.link}&media=${website}/${props.image}&description=${props.title}`} target="_blank" rel="noopener noreferrer"><Pinterest className="w-25px mt-n2 op-75 pinterest"/> </a></div>
                        <div className="social-share-icon"> <a href={`https://telegram.me/share/url?text=${website}${props.link}&amp;url=${website}${props.link}`} target="_blank" rel="noopener noreferrer"><Telegram className=" telegram w-25px mt-n2 op-75"/> </a></div>
                        {isMobile ? 
                        <div className="social-share-icon"> <a href={`whatsapp://send?text=${website}${props.link}`}  target="_blank" title="Share on whatsapp" rel="noopener noreferrer"><Whatsapp className="w-25px mt-n2 op-75 whatsapp"/> </a></div>
                        :
                        <div className="social-share-icon"> <a href={`https://wa.me/?text=${website}${props.link}`}  target="_blank" title="Share on whatsapp" rel="noopener noreferrer"><Whatsapp className="w-25px mt-n2 op-75 whatsapp"/> </a></div>
                        }
                    </div>
                </div>
            }
        </>
    )
}