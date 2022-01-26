import React from 'react'
import Slider from "react-slick";

import { website } from '../../Services/Helper';

import InnerImageZoom from 'react-inner-image-zoom';
import { ArrowNext, ArrowPrev } from '../sections/Arrow';
import Config from '../../configs/Cerampakhsh';

// export default class Product extends Component {
export default function Gallery(props) {

    const images = props.images;
    const image = props.image;
    const alt = props.alt;

    return (

        <>
            {/* <InnerImageZoom src={`${website}/files/img/fix-slider/slide4.4.jpg`}  zoomSrc={`${website}/files/img/fix-slider/slide4.4.jpg`}  /> */}


            <section className="top-slideshow" dir="ltr">
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
                    // className="owl-theme"
                    // loop
                    // margin={10}
                    // items={1}
                    // nav={true}
                    // dots={false}
                    // autoplayTimeout={8000}
                    // smartSpeed={1000}
                    // lazyLoad
                    // autoplay={false}
                    // animateIn

                >
                    {images &&
                        Object.entries(images)?.map(([key, image]) => 
                            
                                    <div className="item" key={key}>

                                        <div className="zoom-img">
                                            {/* 
                                                <img className="zoom-img" id="img-product-zoom" src={`${website}/${(image.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`}
                                                    data-zoom-image={`/${(image.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} width="411" alt={alt} /> */}
                                            <InnerImageZoom

                                                src={`${website}/resize/medium/${(image.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} width="100" height="100"
                                                alt={alt} title={alt} zoomSrc={`${website}/${(image.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} />

                                        </div>
                                    </div>
                              

                           
                        )
                    }
                    {image &&
                        <div className="item">

                            <div className="zoom-img">
                                <InnerImageZoom

                                    src={`${website}/resize/medium/${(image).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} width="100" height="100"
                                    alt={alt} title={alt} zoomSrc={`/${(image).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} />

                            </div>
                        </div>
                    }
                </Slider>
            </section>
        </>
    )
}
