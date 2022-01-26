import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import { website } from '../../Services/Helper';

export default function BoxProps(props) {

    const extrafields = props.extrafields;
    const otherColor = props.otherColor;
    const decors = props.decors;
    const products = props.products;
    // const [properties, setProperties] = useState([]);

    var properties = [];
    products?.map(product => {
        let extera = product.extrafieldvalues.filter(value1 => [1, 2, 5, 6, 17].includes(value1.fieldid))

        if (!properties || properties.length === 0) {
            properties = extera;
        } else {
            extera?.map(exteraValue => {
                let newExtera = properties?.find(value => (exteraValue.fieldid === value.fieldid && (!(exteraValue.value)?.includes(value.value) || !(value.value)?.includes(exteraValue.value))));
                if (newExtera) {
                    let indexFind = properties?.findIndex(item => (item.fieldid === newExtera.fieldid));
                    if (!properties[indexFind].value?.includes(exteraValue.value)) {
                        let oldValue = properties[indexFind].value;

                        if (typeof oldValue === 'string') {
                            properties[indexFind].value = [];
                            properties[indexFind].value.push(exteraValue.value, oldValue)
                        } else {
                            properties[indexFind].value.push(exteraValue.value)
                        }

                    }
                }
                return true;
            })
        }
        return true;
    });
    // useMemo(() => {
    //     var propertys = [];
    //     products?.map(product => {
    //         let extera = product.extrafieldvalues.filter(value1 => [1, 2, 5, 6, 17].includes(value1.fieldid))

    //         if (!propertys || propertys.length === 0) {
    //             propertys = extera;
    //         } else {
    //             extera?.map(exteraValue => {
    //                 let newExtera = propertys?.find(value => (exteraValue.fieldid === value.fieldid && (!(exteraValue.value).includes(value.value) || !(value.value).includes(exteraValue.value))));
    //                 if (newExtera) {
    //                     let indexFind = propertys?.findIndex(item => (item.fieldid === newExtera.fieldid));
    //                     if (!propertys[indexFind].value.includes(exteraValue.value)) {
    //                         let oldValue = propertys[indexFind].value;

    //                         if (typeof oldValue === 'string') {
    //                             propertys[indexFind].value = [];
    //                             propertys[indexFind].value.push(exteraValue.value, oldValue)
    //                         } else {
    //                             propertys[indexFind].value.push(exteraValue.value)
    //                         }

    //                     }
    //                 }
    //                 return true;
    //             })
    //         }
    //         return true;
    //     });
    //     setProperties(propertys)
    // }, [])

    return (
        <>
            <div className=" col-xl-7 col-lg-6 col-md-6 mt-4 col-sm-12">
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
                                {properties?.map((exteraValue, key) =>
                                    <li key={key} className="list-group-item hgt-tag" itemProp="value" itemType="http://schema.org/PropertyValue">
                                        <div itemProp="name"> {exteraValue.field}:</div>
                                        {(typeof exteraValue.value) === 'string' ?
                                            <Link itemProp="value" href={`/${props.type}/${props.category}/${(exteraValue.field).split(' ').join('+')}/${(exteraValue.value).split(' ').join('+')}`} ><a>
                                                <span className="badge badge-info badge-pill mx-1">{exteraValue.value}</span>
                                            </a></Link>
                                            :
                                            (exteraValue.value)?.map((extera, key2) =>
                                                <Link key={key2} itemProp="value" href={`/${props.type}/${props.category}/${(exteraValue.field).split(' ').join('+')}/${(extera).split(' ').join('+')}`} ><a>

                                                    <span className="badge badge-info badge-pill mx-1">{extera}</span>
                                                </a></Link>
                                            )
                                        }
                                    </li>
                                )}

                                {extrafields &&
                                    Object.entries(extrafields).filter(([indexFilter, valueFilter]) => (valueFilter.show_less === 'Y' && valueFilter.value))?.map(([key, extra]) =>
                                        <li key={key} className="list-group-item hgt-tag" itemProp="value" itemScope={1} itemType="http://schema.org/PropertyValue">
                                            <div itemProp="name">  {extra.field}:</div>
                                            {extra.field === 'سایز' ?
                                                <Link href={`/decors/${props.category}/سایز/${extra.value}`} className="badge badge-info badge-pill" itemProp="value"><a>
                                                    {extra.value}
                                                </a></Link>
                                                :
                                                <div className="badge badge-info badge-pill" itemProp="value">
                                                    {extra.value}
                                                </div>
                                            }
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {(otherColor && props.decor && props.decor.length > 0) &&
                    <div id="gallery_01f" className=" gallery_01f-decor pt-2 m-0">
                        دکور های بیشتر:
                        <div className="w-100">
                            <Slider
                                {...{
                                    dots: false,
                                    infinite: false,
                                    speed: 500,
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                    rtl: true,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 5, slidesToScroll: 1, infinite: false, dots: true
                                            }
                                        },
                                        {
                                            breakpoint: 970,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 3, slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 0,
                                            settings: {
                                                slidesToShow: 3, slidesToScroll: 1
                                            }
                                        },
                                    ]
                                }}


                            >

                                {otherColor &&
                                    Object.entries(otherColor).filter(([indexFilter, valueFilter]) => (valueFilter.extrafieldvalues[0] && valueFilter.decors && valueFilter.decors[0] && valueFilter?.decors[0]?.images[0]?.image_path))?.map(([key, color]) =>
                                        <Link key={key} href={`/decor/${color.decors[0].slug}`}><a>
                                            <div className="item p-1">
                                                <img className="piece-image-decor-list" src={`${website}/resize/small/${color?.decors[0]?.images[0]?.image_path}`} height="auto" width="70" alt={color?.decors[0]?.title} title={color.decors[0].title} onError={(e) => { e.target.onerror = null; e.target.src = website + '/' + color.decors[0].images[0].image_path }} />
                                            </div>
                                        </a></Link>

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
                                {...{
                                    dots: false,
                                    rtl: true,
                                    infinite: false,
                                    speed: 500,
                                    slidesToShow: 7,
                                    slidesToScroll: 1,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 7, slidesToScroll: 1, infinite: false, dots: true
                                            }
                                        },
                                        {
                                            breakpoint: 970,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 3, slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 0,
                                            settings: {
                                                slidesToShow: 3, slidesToScroll: 1
                                            }
                                        },
                                    ]
                                }}


                            >
                                {decors &&
                                    Object.entries(decors)?.map(([key, decor]) =>
                                        <Link key={key} href={`/decor/${decor.slug}`}><a>
                                            <div className="item p-1">
                                                <img className="piece-image-decor-list" itemProp="image" src={`${website}/resize/small/${decor.image_path}`} height="auto" width="50" alt={decor.title} title={decor.title} />
                                            </div>
                                        </a></Link>
                                    )
                                }

                            </Slider>


                        </div>
                    </div>
                }

                {(props.collection && props.collection.length > 0) &&
                    <div id="gallery_01f" className=" gallery_01f-decor pt-2 m-0">
                        کالکشن محصولات مشابه
                        <div className="w-100">
                            <Slider
                                {...{
                                    dots: false,
                                    rtl: true,
                                    infinite: false,
                                    speed: 500,
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 5, slidesToScroll: 1, infinite: false, dots: true
                                            }
                                        },
                                        {
                                            breakpoint: 970,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 3, slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 0,
                                            settings: {
                                                slidesToShow: 3, slidesToScroll: 1
                                            }
                                        },
                                    ]
                                }}


                            >

                                {props.collection && Object.entries(props.collection).filter(col => col.product && col.product.slug && col.product.thumbnail && col.product.thumbnail.image_path)?.map(([keyCol, col]) =>

                                    <Link key={keyCol} href={`/product/${col.product.slug}`}><a>
                                        <div className="item p-1">
                                            <img className="piece-image-decor-list"
                                                src={`${website}/resize/small/${col.product.thumbnail.image_path}`}
                                                height="auto" width="70" alt={col.product.product}
                                                title={col.product.product}
                                                onError={(e) => { e.target.onerror = null; e.target.src = website + '/' + col.product.thumbnail.image_path }} />
                                        </div>
                                    </a></Link>


                                )}



                            </Slider>


                        </div>
                    </div>
                }
            </div>
        </>
    )
}
