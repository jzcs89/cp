import React, { useRef, useState } from 'react'
import { AngleLeft } from '../../components/icons/SvgIcons';
import Style from './SpecialBrandsStyle.js'
import Link from 'next/link'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageFull from '../ImageFull';



export default function SpecialBrands(props) {

    const [slideIndex, setslideIndex] = useState(0)
    const [updateCount, setupdateCount] = useState(0)


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        afterChange: () =>
            setupdateCount(updateCount + 1),

        beforeChange: (current, next) =>
            setslideIndex(next),
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            }
        ]
    };
    const sliderRef = useRef();

    return (
        <>
            <Style />
            <section className="spc-brands">
                <div className="off-box container-body m-md-auto">
                    <div className="mb-4 taminbrands row-ak">
                        <div className="w-100 py-3 px-0">


                            <div className="boxoff-txt"> <p>برندهای ویژه </p>
                                <div className="read-more read-more-home"><a target="_blank" href="/producers"> مشاهده تمام برندها
                                    <AngleLeft className="w-10px mt-n1 mr-2 svg-clr" />
                                </a>
                                </div>
                            </div>

                            <div className="spc-brands-cards align-items-lg-baseline p-md-0 p-sm-0 p-sm-1">

                                <Slider ref={sliderRef}  {...settings} >


                                    <div className="item-spc-brands">
                                        <div className="spc-brands-card bg-white overf-h">
                                            <div className="spc-brand-img">
                                                <ImageFull height="70" width="185" className="spc-brand-img-border-bottom1" src="https://cerampakhsh.com/files/img/Emertat.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" w="100" />
                                                <div className="spc-brands-card-icon">
                                                    <ImageFull height="57" width="57" src="https://cerampakhsh.com/resize/small/files/uploads/suppliers/2021-01-21/dc68d60f32472300a198737f74c9fbb170eed2ed.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <p className="text-center font-weight-bold pt-5 pb-1 pt-sm-6 pt-mobile-3">کاشی امرتات سرام</p>
                                                <div className="card-spc-brands-img row-ak justify-content-between">
                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%AA%D8%B2%DB%8C%DB%8C%D9%86%DB%8C-%D9%88%D8%A7%D8%AA%DB%8C%DA%A9%D8%A7%D9%86-%D8%B3%D8%A7%DB%8C%D8%B2-60-60-%D8%A7%D9%85%D8%B1%D8%AA%D8%A7%D8%AA-%D8%B3%D8%B1%D8%A7%D9%85-%D9%BE%D8%A7%D9%86%DA%86">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-01-19/e4aa2b6921dbefea0024239f7435c8d5854dcb6b.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%AA%D8%B2%D8%A6%DB%8C%D9%86%DB%8C-%D8%B3%D9%85%D8%B1%D9%82%D9%86%D8%AF-%D8%B2%D8%B1%D8%AF-%D9%88-%D8%B7%D9%84%D8%A7%DB%8C%DB%8C-30-30-%D8%A7%D9%85%D8%B1%D8%AA%D8%A7%D8%AA-%D8%B3%D8%B1%D8%A7%D9%85-%D8%B1%D8%B3%D8%AA%DB%8C%DA%A9">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-12-27/a2b4a7f2335dba24a2065c7a995eaaf2c58ab5a8.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%AA%D8%B2%DB%8C%DB%8C%D9%86%DB%8C-%D8%AF%D8%A7%D9%85%D8%A7%D8%B3-%D8%B7%D9%84%D8%A7%DB%8C%DB%8C-30-60-%D8%A7%D9%85%D8%B1%D8%AA%D8%A7%D8%AA-%D8%B3%D8%B1%D8%A7%D9%85-%D8%B1%D8%B3%D8%AA%DB%8C%DA%A9">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-05-03/965eeac4fcbc2920093d16bd30c492776ffd3748.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>
                                                </div>

                                            </div>
                                            <Link href="https://cerampakhsh.com/producer/emertatceram/%D8%A7%D9%85%D8%B1%D8%AA%D8%A7%D8%AA+%D8%B3%D8%B1%D8%A7%D9%85"  target="_blank" >
                                                <a className="btn-spcbrand bg-btn1">
                                                    <span> مشاهده تمام محصولات</span>
                                                    <AngleLeft className="w-10px mt-n1 mr-2" />
                                                </a></Link>
                                        </div>
                                    </div>


                                    <div className="item-spc-brands">
                                        <div className="spc-brands-card bg-white overf-h">
                                            <div className="spc-brand-img">
                                                <ImageFull height="70" width="185" className="spc-brand-img-border-bottom2" src="https://cerampakhsh.com/files/img/Rabo.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" w="100" />
                                                <div className="spc-brands-card-icon">
                                                    <ImageFull height="57" width="57" src="https://cerampakhsh.com/resize/small/files/uploads/suppliers/2020-08-19/66e277aa20fb3e31c873667e3bc67fbc89d75b86.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <p className="text-center font-weight-bold pt-5 pb-1 pt-sm-6 pt-mobile-3">شیرآلات بهداشتی رابو  </p>
                                                <div className="card-spc-brands-img row-ak justify-content-between">
                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B4%DB%8C%D8%B1-%D8%AF%D9%88%D8%B4-%D8%B1%D8%A7%D8%A8%D9%88-%D9%85%D8%AF%D9%84-%D8%AA%D9%88%D9%BE%D8%A7%D8%B2">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-08-20/2f7ec086207c751de1f8e1cca412c3b6ef106c6f.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B4%DB%8C%D8%B1-%D8%B8%D8%B1%D9%81-%D8%B4%D9%88%DB%8C%DB%8C-%D8%B1%D8%A7%D8%A8%D9%88-%D9%85%D8%AF%D9%84-%D8%AF%D9%88-%D9%85%D9%86%D8%B8%D9%88%D8%B1%D9%87-%D8%A7%D9%84%D8%A8%D8%B1%D8%B2">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-08-20/9ae09a0a994c4875f34107320026604afadb1972.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B4%DB%8C%D8%B1-%D8%AA%D9%88%D8%A7%D9%84%D8%AA-%D8%B1%D8%A7%D8%A8%D9%88-%D9%85%D8%AF%D9%84-%D8%A7%D9%BE%D8%A7%D9%84">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2021-05-17/13c4e8b29ac2846077151fb04a6de64b2fcae05e.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link  href="https://cerampakhsh.com/producer/raboo/%D8%B4%DB%8C%D8%B1%D8%A2%D9%84%D8%A7%D8%AA+%D8%B1%D8%A7%D8%A8%D9%88">
                                                <a className="btn-spcbrand bg-btn2" target="_blank" >
                                                    <span> مشاهده تمام محصولات</span>
                                                    <AngleLeft className="w-10px mt-n1 mr-2" />
                                                </a></Link>
                                        </div>
                                    </div>



                                    <div className="item-spc-brands">
                                        <div className="spc-brands-card bg-white overf-h">
                                            <div className="spc-brand-img">
                                                <ImageFull height="70" width="185" className="spc-brand-img-border-bottom3" src="https://cerampakhsh.com/files/img/Abadis.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" w="100" />
                                                <div className="spc-brands-card-icon">
                                                    <ImageFull height="57" width="57" src="https://cerampakhsh.com/resize/small/files/uploads/suppliers/2021-07-07/dd2626a89c4948040512cf29ca3dc6e9f71b024d.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <p className="text-center font-weight-bold pt-5 pb-1 pt-sm-6 pt-mobile-3">کاشی آبادیس</p>
                                                <div className="card-spc-brands-img row-ak justify-content-between">
                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-%D9%85%D9%88%D8%AF%D9%86%D8%A7-%DA%A9%D8%B1%D9%85-60-60-%D8%A2%D8%A8%D8%A7%D8%AF%DB%8C%D8%B3">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2021-07-15/9d26446ca1a505d580e3a32e0f0949a7063627a5.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-%D9%BE%D8%B1%D8%B3%D9%84%D8%A7%D9%86-%D8%B1%D8%A7%D8%A8%D9%84-%D9%82%D9%87%D9%88%D9%87-%D8%A7%DB%8C-50-50-%D8%A2%D8%A8%D8%A7%D8%AF%DB%8C%D8%B3-%D8%B1%D8%B3%D8%AA%DB%8C%DA%A9">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2021-07-15/454e6942ba56582a7b8b23f1652b59a0c2b5c28c.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-%D9%BE%D8%B1%D8%B3%D9%84%D8%A7%D9%86-%D8%A8%D8%A7%D9%85%D8%A8%D9%88-%D9%85%D8%B4%DA%A9%DB%8C-80-80-%D8%A2%D8%A8%D8%A7%D8%AF%DB%8C%D8%B3-%D9%86%D8%A7%D9%86%D9%88%D9%BE%D9%88%D9%84%DB%8C%D8%B4">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2021-07-15/586fc9d12e665c56d3307d293a9653a037521f62.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="https://cerampakhsh.com/producer/abadistile/%DA%A9%D8%A7%D8%B4%DB%8C+%D8%A2%D8%A8%D8%A7%D8%AF%DB%8C%D8%B3">
                                                <a className="btn-spcbrand bg-btn3" target="_blank" >
                                                    <span> مشاهده تمام محصولات</span>
                                                    <AngleLeft className="w-10px mt-n1 mr-2" />
                                                </a></Link>
                                        </div>
                                    </div>



                                    <div className="item-spc-brands">
                                        <div className="spc-brands-card bg-white overf-h">
                                            <div className="spc-brand-img">
                                                <ImageFull height="70" width="185" className="spc-brand-img-border-bottom4" src="https://cerampakhsh.com/files/img/Roka.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" w="100" />
                                                <div className="spc-brands-card-icon">
                                                    <ImageFull height="57" width="57" src="https://cerampakhsh.com/resize/small/files/uploads/suppliers/2020-09-06/7cf58c03c06dbc4d64900ea832dbfdb6ee8566c7.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <p className="text-center font-weight-bold pt-5 pb-1 pt-sm-6 pt-mobile-3">چینی بهداشتی نوین سرام</p>
                                                <div className="card-spc-brands-img row-ak justify-content-between">
                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B1%D9%88%D8%B4%D9%88%DB%8C%DB%8C-%D8%B1%D9%88%DA%A9%D8%A7%D8%A8%DB%8C%D9%86%D8%AA%DB%8C-%D9%86%D9%88%DB%8C%D9%86-%D8%B3%D8%B1%D8%A7%D9%85-%D9%85%D8%AF%D9%84-%D8%AA%D9%88%D8%B1%DB%8C%D9%86%D9%88-%D9%86%DB%8C%D9%85-%DA%A9%D9%88%D8%AA-%D8%A8%D8%A7%D8%B1%D8%A7%D9%86%DB%8C">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-09-07/d147027b0e305bd3a2c1622bb79cf9d3d95044f9.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B1%D9%88%D8%B4%D9%88%DB%8C%DB%8C-%D8%B1%D9%88%DA%A9%D8%A7%D8%A8%DB%8C%D9%86%D8%AA%DB%8C-%D9%86%D9%88%DB%8C%D9%86-%D8%B3%D8%B1%D8%A7%D9%85-%D9%85%D8%AF%D9%84-%D9%84%D9%86%D9%88-%D9%86%DB%8C%D9%85-%DA%A9%D9%88%D8%AA-1">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-09-07/a2172e82faf44f2f05a061e6832fbf1852b5b91f.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B1%D9%88%D8%B4%D9%88%DB%8C%DB%8C-%D8%B1%D9%88%DA%A9%D8%A7%D8%A8%DB%8C%D9%86%D8%AA%DB%8C-%D9%84%D9%86%D9%88-%DA%A9%D9%88%D8%AA-%D8%A8%D8%A7%D8%B1%D8%A7%D9%86%DB%8C">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-09-07/16d9f4aecfb8e1d82bdd7bd60b004837ec284953.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="https://cerampakhsh.com/producer/novinceram-ch/%DA%86%DB%8C%D9%86%DB%8C+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D9%86%D9%88%DB%8C%D9%86+%D8%B3%D8%B1%D8%A7%D9%85">
                                                <a className="btn-spcbrand bg-btn4" target="_blank" >
                                                    <span> مشاهده تمام محصولات</span>
                                                    <AngleLeft className="w-10px mt-n1 mr-2" />
                                                </a></Link>
                                        </div>
                                    </div>




                                    <div className="item-spc-brands">
                                        <div className="spc-brands-card bg-white overf-h">
                                            <div className="spc-brand-img">
                                                <ImageFull height="70" width="185" className="spc-brand-img-border-bottom5" src="https://cerampakhsh.com/files/img/Roka.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" w="100" />
                                                <div className="spc-brands-card-icon">
                                                    <ImageFull height="57" width="57" src="https://cerampakhsh.com/resize/small/files/uploads/suppliers/2021-01-21/087ba7cbecd79cdf335d808ecbaff368f0af5369.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <p className="text-center font-weight-bold pt-5 pb-1 pt-sm-6 pt-mobile-3">پرسلان روکاسرام</p>
                                                <div className="card-spc-brands-img row-ak justify-content-between">
                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-%D9%BE%D8%B1%D8%B3%D9%84%D8%A7%D9%86-%D8%B3%D8%A7%D8%AF%D9%87-%D8%B7%D8%B1%D8%AD-%D8%A7%D8%B3%DA%A9%D8%A7%D8%A8%D9%88%D8%B3-60-120%D8%B1%D9%88%DA%A9%D8%A7%D8%B3%D8%B1%D8%A7%D9%85">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-04-19/22e151f2620c6a38e9f77eb56f238dcf5bbe1d90.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-%D9%BE%D8%B1%D8%B3%D9%84%D8%A7%D9%86-%D8%B3%D8%A7%D8%AF%D9%87-%D8%A8%D9%86%D8%B2%D9%85%D8%A7-120-60-%D8%B1%D9%88%DA%A9%D8%A7%D8%B3%D8%B1%D8%A7%D9%85">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-04-19/3f105f7a0c55024d0c1d54a14a6ac0f7adf6eb5d.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>

                                                    <div className="item-spc-brands-img col-3 mb-0">
                                                        <Link href="https://cerampakhsh.com/product/%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-%D9%BE%D8%B1%D8%B3%D9%84%D8%A7%D9%86-%D8%B3%D8%A7%D8%AF%D9%87-%D8%B7%D8%B1%D8%AD-%D9%BE%D8%A7%D8%AA%D8%B1%DB%8C%D8%B3-60-60-%D8%B1%D9%88%DA%A9%D8%A7%D8%B3%D8%B1%D8%A7%D9%85">
                                                            <a>
                                                                <ImageFull height="30" width="30" src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-04-16/9740d8a2d5d3f33ce43f9679c1dfac95581d3a9d.jpg" alt="خرید محصولات برند" title="محصولات برترین برندهادر سرام پخش" />
                                                            </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="https://cerampakhsh.com/producer/RokaCeram/%D8%B1%D9%88%DA%A9%D8%A7%D8%B3%D8%B1%D8%A7%D9%85">
                                                <a className="btn-spcbrand bg-btn5" target="_blank" >
                                                    <span> مشاهده تمام محصولات</span>
                                                    <AngleLeft className="w-10px mt-n1 mr-2" />
                                                </a></Link>
                                        </div>
                                    </div>






                                </Slider>
                                <div className="d-block d-md-none scroll-nav text-center mt-4">
                                    <input
                                        onChange={e => sliderRef.current.slickGoTo(e.target.value)}
                                        defaultValue={slideIndex}
                                        type="range"
                                        min={0}
                                        max={4}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}




