import React from 'react'
import Link from 'next/link'
import { website } from './../../Services/Helper'



// import SocialBox from "./SocialBox";
import DecorPieces from "./DecorPieces";
import SocialBox from './SocialBox';
import Config from '../../configs/Cerampakhsh';

// <Decor classes="" decor_id="" decor_slug="" decor_code="" decor_title="" decor_image="" products="" />
export default function Decor(props) {


    return (<>

        <div className={props.classes} row={props.decor_id} >

            <div className="product-box decor-box">

                <Link  href={`/decor/${props.decor_slug}`}><a className="product-box-img">
                    {props.decor_image &&
                        <img height="291" width="465" className="img-decor-list lazyload" src={`${website}/resize/medium/${props.decor_image}`} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} alt={props.decor_title} title={props.decor_title} />
                    }
                </a></Link>

                <SocialBox
                    link={`/decor/${props.decor_slug}`}
                    slug={props.decor_slug}
                    id={props.decor_id}
                    type="decor"
                    title={props.decor_title}
                    image={(props.decor_image) ? props.decor_image : '/files/img/logo-465291.png'}
                    favorite={props.favorite}
                />
                <div className="product-box-content-row">
                    <Link href={`/decor/${props.decor_slug}     `}><a>
                        <h6 className="text-right" code={props.decor_code} data-toggle="tooltip" data-placement="top" title={props.decor_title} data-original-title={props.decor_title}>{props.decor_title}</h6>
                    </a></Link>
                </div>
                <div className="box-np">

                </div>
                {props.products &&
                    <>
                        <DecorPieces products={props.products} slug={props.decor_slug} title={props.decor_title} price={props?.price} />
                    </>
                }

            </div>
        </div>


    </>
    )
}