import React, { useState } from 'react'
import { website } from './../../Services/Helper'
import { numberFormat } from './NumberFormat'
import Link from 'next/link'
// import SocialBox from './SocialBox';



export default function DecorProduct(props) {

    return (< >




        <div className="item">
            <Link  href={`/product/${props.product_slug}`}><a className="product-box-img">
                <img className="slide"src={`${website}/resize/medium/${props.decor_image}`} width="181" alt="کاشی تیره کریستال 50*50 خیام" title="کاشی تیره کریستال 50*50 خیام" />
                <div className="box-slide-hover">
                    <img className="slide-hover zoom"  src={`${website}/resize/medium/${props.product_image}`}   width="289" alt="کاشی تیره کریستال 50*50 خیام" title="کاشی تیره کریستال 50*50 خیام" />
                </div>
            </a></Link>
            {/* <SocialBox
                id={props.product_id}
                type='product'
                link={'/product/' + props.product_slug}
                price={props.price}
                image={(props.product_image) ? props.product_image : '/files/img/logo-465291.png'}
            /> */}


            <div className=" row-ak fst-box hide-price">
                <div className="decor-p Price-elmt">{props.price ? <> {numberFormat(props.price)} 
                <span className="toman"> 
                <img height="291" width="465" className="img-decor-list lazyload" src={`${website}/files/img/toman.png`} alt="تومان" title="تومان" />

                
                </span> </> : <span className="text-success">بزودی</span>}
                </div>

            </div>


        </div>
 
    </>
    )
}