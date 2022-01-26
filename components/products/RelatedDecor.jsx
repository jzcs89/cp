import React from 'react'

import Slider from "react-slick";

import DecorOwl from './DecorOwl';
import { ArrowNext, ArrowPrev } from '../sections/Arrow';


// export default class Product extends Component {
function RelatedDecor(props) {
    // 

    // let {products, otherLaab, otherUses, decor_id} = useParams();

    const decors = props.decors;
    // const decor_slug = props.decor_slug;

    return (

        <>
            <div className="relateddecor-box">

                {decors && decors.length > 0 &&
                    // <h6 className="cntr-hdr pt-4 pb-1 px-0 ">{props.title ? props.title : 'محصولات مرتبط'}</h6>
                    <div className="right-header  mt-3 ">
                        <div>
                            {props.title ? props.title : 'محصولات مرتبط'}</div>
                    </div>

                }

                <div className="w-100 mb-5 owl-navss relateddecor">

                    <Slider
                        {...{
                            dots: false,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                            prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 5, slidesToScroll: 5, infinite: true, dots: true
                                    }
                                },
                                {
                                    breakpoint: 970,
                                    settings: {
                                        slidesToShow: 4, slidesToScroll: 4, initialSlide: 1
                                    }
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 3, slidesToScroll: 3, initialSlide: 1
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2, slidesToScroll: 2
                                    }
                                },
                                {
                                    breakpoint: 0,
                                    settings: {
                                        slidesToShow: 1, slidesToScroll: 1
                                    }
                                },
                            ]
                        }}

                    >
                        {props.decors && Object.entries(props.decors)?.map(([key, decor]) =>
                            <div className="item" key={key}>
                                <DecorOwl
                                    key={key}
                                    classes='w-100'
                                    decor_id={decor.id}
                                    decor_slug={decor.slug}
                                    decor_code={decor.code}
                                    decor_title={decor.title}
                                    decor_image={(decor.images[0].image_path) ?? ''}
                                    products={decor.products}
                                    extrafieldvalues={decor.products[0]?.extrafieldvalues}
                                />
                            </div>
                        )}
                    </Slider>


                </div>
            </div>
        </>

    )
}

export default RelatedDecor;