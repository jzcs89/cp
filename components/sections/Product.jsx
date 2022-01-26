import React from 'react'
import { website } from './../../Services/Helper'
import { numberFormat } from './NumberFormat'
import Link from 'next/link'
// import SocialBox from './SocialBox';
import { isMobile } from 'react-device-detect';
import PopUpAddCard from './PopUpAddCard';
// import CommingSoonMini from '../../pages/single/Sections/CommingSoonMini';
import { Phone } from './../icons/SvgIcons';
import SocialBox from './SocialBox';
import CommingSoonMini from '../products/CommingSoonMini';
import ImageFull from '../ImageFull';
import Config from '../../configs/Cerampakhsh';



export default function Product(props) {

    let offPrice = (props.discount) ? (((100 - Number(props.discount)) * Number(props.price)) / 100).toFixed() : null

    let sizeImg = (props.sizeImg) ? props.sizeImg : 'medium'

    // const getDaysBetweenDates =(d0, d1) =>{

    //     var msPerDay = 8.64e7;

    //     // Copy dates so don't mess them up
    //     var x0 = new Date(d0);
    //     var x1 = new Date(d1);

    //     // Set to noon - avoid DST errors
    //     x0.setHours(12,0,0);
    //     x1.setHours(12,0,0);

    //     // Round to remove daylight saving errors
    //     return Math.round( (x1 - x0) / msPerDay );
    //   }

    return (< >
        <div className={props.classes} >

            <div className={`product-box decor-box ${props.classp_0}`}>

                <Link  href={`/product/${props.product_slug}`}><a className="product-box-img">
                    <div className="box-slide-all p-relative">
                        <div className="box-slide">
                            <ImageFull data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" data-src-retinadata-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/resize/${sizeImg}/${(props.product_image).replace('/var/www/vhosts/cerampakhsh.com/httpdocs/', '')}`} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} loading="lazy" className="img-decor-list lazyload" alt={props.product_title} title={props.product_title} type="product" />

                        </div>
                        {props.decor_image &&
                            <div className="box-slide-hover">
                                <ImageFull className="slide-hover zoom" src={`${website}/resize/${sizeImg}/${props.decor_image}`} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} alt={props.product_title} title={props.product_title} type="decor" />
                            </div>
                        }
                    </div> </a></Link>
                <SocialBox
                    id={props.product_id}
                    type='product'
                    link={'/product/' + props.product_slug}
                    slug={props.product_slug}
                    price={props.price}
                    priceid={props.priceid}
                    image={(props.decor_image) ? props.decor_image : '/files/img/logo-465291.png'}
                    title={props.product_title}
                    favorite={props.favorite}
                />
                <div className="product-box-content-row">
                    <Link href={`/product/${props.product_slug}`}><a>
                        <h6 data-toggle="tooltip" data-placement="top" code={props.product_code} title={props.product_title} className="text-right" data-original-title={props.product_title}>{props.product_title}</h6>
                    </a></Link>

                </div>
                <div className="btn-sabt-bar ">
                    <div className=" row-ak fst-box">
                        <div className="Price-elmt">
                            {!props.notAddCard && props.price ?
                                <PopUpAddCard slug={props.product_slug} type='product' title={props.product_title} />
                                :
                                <></>
                            }

                            {props.price ?
                                <>
                                    {offPrice ?
                                        <>
                                            <div className="offbox product ">
                                                <div className="Price-elmt-dcr p-0 pb-1">
                                                    <span className="badge badge-danger-new ">{props.discount}%</span>
                                                    <div className="price">
                                                        {props.price}
                                                        <span className="toman">
                                                            توما
                                                            <span className="noon">ن</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="unik-price">
                                                    {numberFormat(offPrice)} <span className="toman toman-prd">
                                                        توما
                                                        <span className="noon">ن</span>
                                                        {/* <img height="291" width="465" className="img-decor-list lazyload" src={`${website}/files/img/toman.png`} alt="تومان" title="تومان" /> */}
                                                    </span>
                                                </div>
                                            </div>

                                        </>
                                        :
                                        <>
                                            <div className="offbox product ">
                                                <div className="unik-price without-off">
                                                    {numberFormat(props.price)} <span className="toman toman-prd">
                                                        توما
                                                        <span className="noon">ن</span>
                                                        {/* <img height="291" width="465" className="img-decor-list lazyload" src={`${website}/files/img/toman.png`} alt="تومان" title="تومان" /> */}
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </>
                                :
                                <>
                                    {props.products &&
                                        <CommingSoonMini type={(props.priceid) ? "بزودی" : "ناموجود"} listproduct={props.products?.map(a => a.productid)} />
                                    }
                                    {props.priceid ?
                                        <span className="contact-with-us">
                                            {isMobile ?
                                                <a href="tel:+983538274760"><Phone className="phoneSvg" /> تماس بگیرید</a>
                                                :
                                                <Link href="/page/تماس-با-ما/2"
                                                ><a><Phone className="phoneSvg" />تماس بگیرید</a></Link>
                                            }
                                        </span>
                                        :
                                        <span className="text-success">بزودی</span>
                                    }
                                </>
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </>
    )
}