import React from 'react'
import { website } from '../../Services/Helper'
import Slider from "react-slick";
import Link from 'next/link';
import Head from 'next/head';
import { ArrowNext, ArrowPrev } from '../sections/Arrow';
import ImageFull from '../ImageFull';

export default function SliderTop(props) {

    let { banners, ads } = props


    // const settings = ;

    return (

        < >


            <Head>
                {banners && Object.entries(banners).filter(([key, value]) => value.position === 'home-sliders')?.map(([key, value]) =>

                    <link rel="preload" as="image" key={key} href={`${website}/${value.image_path}`} />
                )}

            </Head>



            <div className="container-body p-0 pt-md-4 pt-2 mt-2">
                <div className="row   ">
                    <div className="col-lg-8  col-md-12 col-12 mt-md-3   mt-0 pr-lg-3 pl-lg-0 px-3 px-md-2 mb-1 m-md-0 ">

                        <div className=" topslider">
                            <Slider {...{
                                autoplay: true,
                                dots: true,
                                //fade: true,
                                infinite: true,
                                speed: 1000,
                                autoplaySpeed: 5000,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                                prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />
                            }} >
                                {banners && Object.entries(banners).filter(([key, value]) => value.position === 'home-sliders')?.map(([key, value]) =>
                                    <div key={key} className="item slider-item ">
                                        <Link href={value.link}><a target="_blank" rel="noreferrer">

                                            <div className="topslider-img overf-h rounded">
                                                <ImageFull src={`${website}/${value.image_path}`} width="917" height="464" alt="اسلایدر سرام پخش" />
                                                {/* <picture>
                                                    <source srcSet={`${website}/${value.image_path.replace(/\.[^.]+$/, '.webp')}`} type="image/webp" />
                                                    <img src={`${website}/${value.image_path}`}  />
                                                </picture> */}

                                            </div>

                                            <h2 className="title-hv  "> <div className="typewriter-text" style={{ color: (value.text_color ?? '#fff') }}>{value.title}</div>  </h2>

                                        </a></Link>
                                        <div className="tile-hv p-1 p-sm-1 p-md-1 ">
                                            {Object.entries(banners).filter(([key_1, value_1]) => value_1.position === 'home-sub-sliders-' + value.orderby)?.map(([key_1, value_1]) =>
                                                <Link key={key_1} href={value_1.link} ><a>
                                                    <ImageFull effect="blur" src={`${website}/${value_1.image_path}`} alt={value_1.title} title={value_1.title} width="85" height="85" />
                                                    {/* <picture>
                                                        <source srcSet={`${website}/${value_1.image_path.replace(/\.[^.]+$/, '.webp')}`} type="image/webp" />
                                                        <img src={`${website}/${value_1.image_path}`} alt={value_1.title} title={value_1.title} />
                                                    </picture> */}
                                                </a></Link>
                                            )}
                                        </div>
                                    </div>
                                )}

                            </Slider>
                        </div>



                    </div>
                    <div className="col-lg-4 col-12  col-md-12 mt-2 mt-sm-3 px-2 px-md-0 px-lg-3  px-0 p-0 decor-home">

                        <div className="row">
                            {ads?.filter(value => value.position === props.type)?.slice(0, 2)?.map((item, key) =>
                                <div className="col-6 col-md-6 col-lg-12  px-2  px-lg-0 respons-start-price" key={key} >
                                    {item.rel ?
                                        <a href={item.link} target={item.target_blank && "_blank"} rel={item.rel}>
                                            <div className="user-diff box-rdus-shdw rounded-6 overf-h mb-0 ">
                                                <div className="LazyLoad is-visible is-loaded inner-d-block">
                                                    <ImageFull src={`${website}/${item.path}`} alt={item.title} title={item.title} width="435" height="224" />
                                                    {/* <picture>
                                                        <source srcSet={`${website}/${item.path.replace(/\.[^.]+$/, '.webp')}`} type="image/webp" />
                                                        <img src={`${website}/${item.path}`} alt={item.title} title={item.title} />
                                                    </picture> */}
                                                </div>

                                            </div>
                                        </a>
                                        :
                                        <Link href={item.link.replace('https://cerampakhsh.com', '')} target={item.target_blank ? "_blank" : ""} rel={item.rel}><a>
                                            <div className="user-diff box-rdus-shdw rounded-6 overf-h mb-0">
                                                <div className="LazyLoad is-visible is-loaded inner-d-block">
                                                    <ImageFull src={`${website}/${item.path}`} alt={item.title} title={item.title} width="435" height="224" />
                                                    {/* <picture>
                                                        <source srcSet={`${website}/${item.path.replace(/\.[^.]+$/, '.webp')}`} type="image/webp" />
                                                        <img src={`${website}/${item.path}`} alt={item.title} title={item.title} />
                                                    </picture> */}
                                                </div>

                                            </div>
                                        </a></Link>
                                    }
                                </div>

                            )}

                        </div>



                    </div>

                </div>
            </div>
        </>

    )
}