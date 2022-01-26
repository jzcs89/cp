import React from 'react'
import { website } from '../../Services/Helper'
import Slider from "react-slick";
import { ArrowNext, ArrowPrev } from '../sections/Arrow';
import ImageFull from '../ImageFull';

export default function OfficeConnect(props) {


    return (
        < >
            <div className="col-12 col-lg-3 mb-3 ">
                <div className="shoraka  box-rdus-shdw">
                <div className="boxoff-txt"> <p>شرکای تجاری  </p></div>

                    <div className="row">
                        <div className="col-12">
                            <div className="brand-slider tamin card px-2" dir="rtl">

                                <Slider

                                    {...{
                                        dots: true,
                                        infinite: true,
                                        speed: 500,
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                                        prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                                        
                                    }}

                                >
                                    <div className="item">
                                        <a className="blank-link text-center" href="https://decoboom.ir" rel="noopener noreferrer nofollow" target="_blank">
                                            <ImageFull  height="104" width="104" className="m-auto" src={`${website}/files/banners/decoboom.jpg`} alt="دکوبوم" title="دکوبوم"  weight="104" />
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a className="blank-link text-center" href="https://barpin.net/fa" rel="noopener noreferrer nofollow"  target="_blank">
                                            <ImageFull  height="104" width="104" className="m-auto" src={`${website}/files/banners/ipin.jpg`} alt="بارپین" title="بارپین"  weight="104" />
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a className="blank-link text-center" href="https://lendo.ir/product/cerampakhsh" rel="noopener noreferrer nofollow" target="_blank">
                                            <ImageFull  height="104" width="104" className="m-auto" src={`${website}/files/banners/iranrenter.jpg`} alt="LENDO" title="LENDO"  weight="104" />
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a className="blank-link text-center" href="https://ecosystem.ir/" rel="noopener noreferrer nofollow" target="_blank">
                                            <ImageFull  height="104" width="104" className="m-auto" src={`${website}/files/banners/ecosystem.jpg`} alt="ecosystem" title="ecosystem"  weight="104" />
                                        </a>
                                    </div>



                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}