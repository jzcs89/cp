
import React from 'react'
import { Facebook, HeartR, Linkedin, Pinterest, ShareAll, Telegram, Whatsapp } from '../icons/SvgIcons'
import { website } from './../../Services/Helper'
import { Twitter } from './../icons/SvgIcons';

// export default class Product extends Component {
export default function HoverProduct(props) {

    let { id, type } = props

    const addCompare = (id, type) => (e) => { }
    // const favorite = () => { }
    return (

        <>
            <div className="social-box single-prd">
                <a onClick={addCompare(id, type)}>
                    <img src="https://cerampakhsh.com/files/img/svg/compares.svg" className="mt-n1 mx-1 w-20px d-inline fal fa-analytics" id="compair-box" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="مقایسه محصول" alt="مقایسه محصول" width="20" height="20"/>


                </a>
                <a onClick={addCompare(id, type)}>

                    <HeartR id="share" className="socialSvg dangerSvg" data-toggle="tooltip" data-placement="bottom" data-original-title="اضافه به علاقه مندیها" />

                </a>
                {/* < id={`scl-snd-btn share-${id}`} slug={id} className="scl-snd-btn-a scl-snd-btn-a fal fa-share-alt" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="اشتراک در شبکه های اجتماعی"></i> */}
                <ShareAll id={`scl-snd-btn share-${id}`} slug={id} className="socialSvg" data-toggle="tooltip" data-placement="bottom" data-original-title="اشتراک در شبکه های اجتماعی" />

            </div>

            <div id={`scl-snd-box${id}`} className="social-share-box single-prd">
                <div className="social-share-icon"> <a href={website} rel="noopener noreferrer" target="_blank"><Linkedin className="w-25px" /></a>
                </div>

                <div className="social-share-icon"> <a href={website} rel="noopener noreferrer" target="_blank"><Twitter className="w-25px" /></a>
                </div>

                <div className="social-share-icon"> <a href={website} rel="noopener noreferrer" target="_blank"><Facebook className="w-25px" /></a>
                </div>

                <div className="social-share-icon"> <a href={website} rel="noopener noreferrer" target="_blank"><Pinterest className="w-25px" /></a>
                </div>

                <div className="social-share-icon"> <a href={website} rel="noopener noreferrer" target="_blank"><Telegram className="w-25px" /></a>
                </div>

                <div className="social-share-icon"> <a href={website} rel="noopener noreferrer" data-action="share/whatsapp/share" target="_blank"><Whatsapp className="w-25px" /></a>
                </div>

            </div>
        </>

    )
}