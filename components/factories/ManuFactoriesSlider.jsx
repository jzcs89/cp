import React from 'react';

import Link from 'next/link';
import Slider from "react-slick";
import { website } from '../../Services/Helper';

export default function ManuFactoriesSlider(props) {
    var settings = {
        dots: true,
        infinite: false,
        nav:true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <div className="col-12 col-lg-12">
                <div className="taminbrands">



                    <div className="row-ak">
                        <div className="col-12 ">
                            <div className="brand-slider tamin card ">
                                <Slider  {...settings
                                    // dots: true,
                                    // infinite: true,
                                    // speed: 500,
                                    // slidesToShow: 4,
                                    // slidesToScroll: 4

                                } >
                                    {props.manufacturers?.map((factory, key) =>
                                    <div className="item  text-center" key={key}>
                                        <Link href={`/producer/${factory?.manufacturer_en}/${(factory?.manufacturer).split(' ').join("+")}`} title={factory?.manufacturer}><a>
                                            <img data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" className="m-auto" height="150" width="150" src={website+'/'+factory?.image} title={factory?.manufacturer} alt={factory?.manufacturer} />
                                            <p className="m-auto">{factory?.manufacturer}</p>
                                        </a></Link>
                                    </div>
                                    )}


                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}