import React, { useState } from 'react'
import Link from 'next/link'
import { website } from './../../../Services/Helper'

import Slider from "react-slick";
// export default class Product extends Component {
export default function BoxProps(props) {

    


    const extrafields = props.extrafields;
    const otherColor = props.otherColor;
    const otherLaab = props.otherLaab;
    const otherUses = props.otherUses;
    const decors = props.decors;

    return (

        <>
            <div className="col-lg-6 col-md-6 mt-4 col-sm-12">

                <div className="w-100">

                    <div className="row clr-bdy-dcr ">
                        <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                            <ul className="list-group" >
                                <li className="list-group-item hgt-tag" >
                                    کد محصول:
                                    <div className="badge badge-info badge-pill" itemProp="sku">
                                        {props.code}
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-group" itemProp="additionalProperty" itemScope={1} itemType="http://schema.org/PropertyValue" >

                                <li className="list-group-item hgt-tag brands-props brands-props" >
                                    تولیدکننده :
                                                    <div className="badge badge-info badge-pill" >
                                        <Link itemProp="brand" href={`/producer/${(props.factory?.manufacturer_en)?.split(' ').join('+')}/${(props.factory?.manufacturer)?.split(' ').join('+')}`} ><a>{props.factory?.manufacturer}</a></Link>
                                    </div>
                                </li>
                                <li className="list-group-item  brands-props hdr-props">
                                    ویژگیهای محصول:
                                </li>

                                {otherColor && otherColor.length > 0 &&
                                    <>
                                        {props.type === 'product' ?
                                            <li className="list-group-item hgt-tag" itemProp="value" itemScope={1} itemType="http://schema.org/PropertyValue">
                                             <div itemProp="name"> رنگ:</div>  
                                                {Object.entries(otherColor)?.map(([key, color]) => {
                                                if (color.extrafieldvalues[0])
                                                    return (
                                                        <>
                                                            <Link href={`/products?color=|${color.extrafieldvalues[0].value}`} className="badge badge-info badge-pill"  itemProp="value"><a>
                                                                {color.extrafieldvalues[0].value}
                                                            </a></Link>
                                                        </>

                                                    )
                                            })}
                                            </li>
                                            :
                                            <li className="list-group-item hgt-tag" itemProp="value" itemScope={1} itemType="http://schema.org/PropertyValue">
                                               <div itemProp="name"> رنگ:</div>  
                                                {Object.entries(otherColor)?.map(([key, color]) => {
                                                if (color.extrafieldvalues[0] && color.decors && color.decors[0])
                                                    return (
                                                        <>
                                                            <Link href={`/decors?color=|${color.extrafieldvalues[0].value}`} className="badge badge-info badge-pill"  itemProp="value"><a>
                                                                {color.extrafieldvalues[0].value}
                                                            </a></Link>
                                                        </>

                                                    )
                                            })}
                                            </li>

                                        }
                                    </>
                                }
                                {otherLaab && otherLaab.length > 0 &&
                                    <>
                                        {props.type === 'product' ?
                                            <li className="list-group-item hgt-tag" itemProp="value" itemScope={1} itemType="http://schema.org/PropertyValue">
                                        <div itemProp="name">      لعاب:</div>  
                                                {Object.entries(otherLaab)?.map(([key, laab]) => {
                                                if (laab.extrafieldvalues[0])
                                                    return (
                                                        <>
                                                            <Link href={`/products?laab=${laab.extrafieldvalues[0].value}`} className="badge badge-info badge-pill"  itemProp="value"><a>
                                                                {laab.extrafieldvalues[0].value}
                                                            </a></Link>
                                                        </>

                                                    )
                                            })}
                                            </li>
                                            :
                                            <li className="list-group-item hgt-tag"  itemProp="value" itemScope={1} itemType="http://schema.org/PropertyValue">
                                              <div itemProp="name">لعاب:</div> 
                                            {Object.entries(otherLaab)?.map(([key, laab]) => {
                                                if (laab.extrafieldvalues[0] && laab.decors && laab.decors[0])
                                                    return (
                                                        <>
                                                            <Link href={`/decors?laab=${laab.extrafieldvalues[0].value}`} className="badge badge-info badge-pill"  itemProp="value"><a>
                                                                {laab.extrafieldvalues[0].value}
                                                            </a></Link>
                                                        </>

                                                    )
                                            })}
                                            </li>
                                        }
                                    </>
                                }
                                {otherUses && otherUses.length > 0 &&
                                    <>
                                        {props.type === 'product' ?
                                            <li className="list-group-item hgt-tag"  itemProp="value" itemScope={1} itemType="http://schema.org/PropertyValue">
                                              <div itemProp="name">  کاربری:</div> 
                                                {Object.entries(otherUses)?.map(([key, use]) => {
                                                if (use.extrafieldvalues[0])
                                                    return (
                                                        <>
                                                            <Link href={`/products/${props.category}/کاربری/${use.extrafieldvalues[0].value}`} className="badge badge-info badge-pill"  itemProp="value"><a>
                                                                {use.extrafieldvalues[0].value}
                                                            </a></Link>
                                                        </>

                                                    )
                                            })}
                                            </li>
                                            :
                                            <li className="list-group-item hgt-tag"  itemProp="value" itemScope={1} itemType="http://schema.org/PropertyValue">
                                                 <div itemProp="name">  کاربری:</div> 
                                        {Object.entries(otherUses)?.map(([key, use]) => {
                                                if (use.extrafieldvalues[0] && use.decors && use.decors[0])
                                                    return (
                                                        <>
                                                            <Link href={`/decors/${props.category}/کاربری/${use.extrafieldvalues[0].value}`} className="badge badge-info badge-pill"  itemProp="value"><a>
                                                                {use.extrafieldvalues[0].value}
                                                            </a></Link>
                                                        </>

                                                    )
                                            })}
                                            </li>
                                        }
                                    </>
                                }

                                {extrafields &&
                                    Object.entries(extrafields)?.map(([key, extra]) => {
                                        if (extra.show_less === 'Y' && extra.value) {
                                            return (
                                                <>
                                                    
                                                    <li className="list-group-item hgt-tag" itemProp="value" itemScope={1} itemType="http://schema.org/PropertyValue">
                                                    <div  itemProp="name">  {extra.field}:</div>  
                                                        {extra.field === 'سایز' ?
                                                            <Link href={`/decors/${props.category}/سایز/${extra.value}`} className="badge badge-info badge-pill"  itemProp="value"><a>
                                                                {extra.value}
                                                            </a></Link>
                                                            :
                                                            <div className="badge badge-info badge-pill"  itemProp="value">
                                                                {extra.value}
                                                            </div>
                                                        }
                                                    </li>
                                                </>

                                            )
                                        }
                                    })
                                }
                            </ul>

                        </div>


                    </div>


                </div>

                {(otherColor && props.decor) &&
                    <div id="gallery_01f" className=" gallery_01f-decor pt-2 m-0">
                        دکور های بیشتر:
                        <div className="w-100">

                            <Slider

                                className="owl-theme"
                                loop={false}
                                margin={10}
                                items={1}
                                nav={false}
                                dots={false}
                                lazyLoad
                                autoplay={false}
                                animateIn
                                responsive={
                                    {
                                        0: {
                                            items: 3,
                                        },
                                        450: {
                                            items: 4,
                                        },
                                        600: {
                                            items: 4,
                                        },
                                        1000: {
                                            items: 5,
                                        },
                                    }
                                }

                            >

                                {otherColor &&
                                    Object.entries(otherColor)?.map(([key, color]) => {
                                        if (color.extrafieldvalues[0] && color.decors && color.decors[0])
                                            return (
                                                <>
                                                    <Link href={`/decor/${color.decors[0].slug}`}><a>
                                                        <div className="item p-1">
                                                            <img className="piece-image-decor-list" src={`${website}/resize/small/${color.decors[0].images[0].image_path}`} height="auto" width="70" alt={color.decors[0].title} title={color.decors[0].title} onError={(e) => { e.target.onerror = null; e.target.src = website + '/' + color.decors[0].images[0].image_path }} />
                                                        </div>
                                                    </a></Link>
                                                </>

                                            )
                                    }

                                    )
                                }



                            </Slider>


                        </div>





                    </div>
                }

                {(decors && decors.length > 0 && props.product) &&
                    <div id="gallery_01f" className=" gallery_01f-decor related-decors row pr-0 mr-0">
                        دکوراسیون مرتبط با محصول:
                        <div className="w-100 pt-2" >

                            <Slider
                                className="owl-theme glry"
                                loop={false}
                                margin={10}
                                items={1}
                                nav={false}
                                dots={false}
                                lazyLoad
                                autoplay={false}
                                animateIn
                                responsive={
                                    {
                                        0: {
                                            items: 3,
                                        },
                                        450: {
                                            items: 4,
                                        },
                                        600: {
                                            items: 4,
                                        },
                                        1000: {
                                            items: 5,
                                        },
                                    }
                                }

                            >

                                {decors &&
                                    Object.entries(decors)?.map(([key, decor]) => {
                                        return (
                                            <>
                                                <Link href={`/decor/${decor.slug}`}><a>
                                                    <div className="item p-1">
                                                        <img className="piece-image-decor-list" itemProp="image" src={`${website}/${decor.image_path}`} height="auto" width="70" alt={decor.title} title={decor.title} />
                                                    </div>
                                                </a></Link>
                                            </>

                                        )
                                    }

                                    )
                                }



                            </Slider>


                        </div>





                    </div>
                }

            </div>
        </>

    )
}
