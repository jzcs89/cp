import React from 'react'
import Slider from "react-slick";
import Link from 'next/link'
import { website } from './../../Services/Helper'
import { numberFormat } from './NumberFormat'
import { isMobile } from 'react-device-detect';
import PopUpAddCard from './PopUpAddCard';
// import CommingSoonMini from '../../pages/single/Sections/CommingSoonMini';
import { Phone } from './../icons/SvgIcons';
import CommingSoonMini from '../products/CommingSoonMini';
import { ArrowNext, ArrowPrev } from './Arrow';
export default function DecorPieces(props) {
    return (
        <>
            <div className="product-box-content decor-box-content pb-2 ">
                <Slider
                    {...{
                        // dots: true,
                        infinite: false,
                        speed: 500,
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        centerPadding:'10px',
                    }}
                >
                    {(props.products) && Object.entries(props.products)?.map(([key, product]) =>
                        <div className="item item-hdr p-1" key={key}>
                            <Link href={`/product/${product.slug}`}><a className="product-box-img" >
                                {product && product.thumbnail && product.thumbnail.image_path ?
                                    <img src={`${website}/resize/medium/${product.thumbnail.image_path}`} onError={(e) => { e.target.onerror = null; e.target.src = website + "/skin1/topkala_assets/img/favicon.ico" }} height="auto" width="70" className="piece-image-decor-list" alt={product.product} title={product.product} />
                                    :
                                    <img src={`${website}/skin1/topkala_assets/img/favicon.ico`} height="auto" width="70" className="piece-image-decor-list" alt={product.product} title={product.product} />
                                }
                            </a></Link>
                        </div>
                    )}
                </Slider>
            </div>
            <div className=" row-ak fst-box-dcr Price-elmt">
                {(props.products && props.products[0] && props.price && props.price > 0) ?
                    <>
                        <PopUpAddCard slug={props.slug} type='decor' title={props.title} />
                        <div className="offbox ">
                            {props.price &&
                                <div className="Price-elmt-offs decor-without-off">
                                    {numberFormat(props.price / 10)}
                                    <span className="toman">
                                        <img height="291" width="465" className="img-decor-list lazyload" src={`${website}/files/img/toman.png`} alt="تومان" title="تومان" />
                                    </span>
                                </div>
                            }
                        </div>
                    </>
                    :
                    <>
                        {props.products &&
                            <CommingSoonMini type={(props.products && props.products[0] && props.products[0].priceid) ? "بزودی" : "ناموجود"} listproduct={props.products?.map(a => a.productid)} />
                        }
                        {props.products && props.products[0] && props.products[0].priceid ?
                            <span className="contact-with-us ">
                                {isMobile ?
                                    <a href="tel:+983538274760"><Phone className="phoneSvg" />تماس بگیرید</a>
                                    :
                                    <Link href="/page/تماس-با-ما/2"><a>
                                        <Phone className="phoneSvg" />       تماس بگیرید
                                    </a></Link>
                                }
                            </span>
                            :
                            <span className="text-success contact-with-us">بزودی</span>
                        }
                    </>
                }
            </div>
        </>
    )
}