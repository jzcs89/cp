import React from 'react';

import Slider from "react-slick";
import Link from 'next/link';
import { AngleLeft } from '../../components/icons/SvgIcons';
import { ArrowNext, ArrowPrev } from '../sections/Arrow';
import { website } from '../../Services/Helper';
import ImageFull from '../ImageFull';

export default function ManuFactories() {

    return (
        <>
            <div className="col-12 col-lg-9  ">
                <div className=" taminbrands  box-rdus-shdw">

                    <div className="boxoff-txt"> <p>شرکای تجاری  </p>

                        <div className="read-more read-more-home"><Link href="/producers"><a target="_blank" rel="noreferrer"> مشاهده تمام برندها     <AngleLeft className="w-10px mt-n1" />                       </a></Link></div>

                    </div>


                    <div className="row">
                        <div className="col-12">
                            <div className="brand-slider px-2 tamin card">

                                <Slider

                                    {...{
                                        dots: true,
                                        infinite: true,
                                        speed: 500,
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                        nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                                        prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                                        responsive: [
                                            {
                                                breakpoint: 1024,
                                                settings: {
                                                    slidesToShow: 5, slidesToScroll: 1, infinite: true, dots: true
                                                }
                                            },
                                            {
                                                breakpoint: 970,
                                                settings: {
                                                    slidesToShow: 2, slidesToScroll: 1, initialSlide: 1
                                                }
                                            },
                                            {
                                                breakpoint: 600,
                                                settings: {
                                                    slidesToShow: 2, slidesToScroll: 1, initialSlide: 1
                                                }
                                            },
                                            {
                                                breakpoint: 480,
                                                settings: {
                                                    slidesToShow: 2, slidesToScroll: 1
                                                }
                                            },
                                            {
                                                breakpoint: 0,
                                                settings: {
                                                    slidesToShow: 2, slidesToScroll: 1
                                                }
                                            },
                                        ]
                                    }}

                                >

                                    <div className="item">
                                        <Link href="/producer/nobel/شیرآلات+نوبل" title="شیرآلات نوبل" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/nobel.jpg`} title="شیرآلات نوبل" alt="شیرآلات نوبل" />
                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/producer/emertatceram/امرتات+سرام" title="امرتات سرام" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/emertat.jpg`} title="امرتات سرام" alt="امرتات سرام" />
                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/producer/RokaCeram/روکاسرام" title="روکاسرام" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/roka.jpg`} title="روکاسرام" alt="روکاسرام" />
                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/producer/golsarfars/گلسار+فارس" title="کاشی گلسار فارس" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/golsar.jpg`} title="کاشی گلسار فارس" alt="کاشی گلسار فارس" />
                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/rak-ceramic/راک+سرامیک" title="راک سرامیک" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/rak.jpg`} title="راک سرامیک" alt="راک سرامیک" />
                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/producer/novin-tile/نوین+سرام" title="کاشی نوین سرام" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/novin.jpg`} title="کاشی نوین سرام" alt="کاشی نوین سرام" />
                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/producer/morvarid/چینی+بهداشتی+مروارید" title="پینی بهداشتی ایساتیس" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/morvarid.jpg`} title="پینی بهداشتی ایساتیس" alt="پینی بهداشتی ایساتیس" />
                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/producer/milad-tile/کاشی+میلاد" title="کاشی میلاد" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/milad.jpg`} title="کاشی میلاد" alt="کاشی میلاد" />

                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/producer/amin-tile/کاشی+امین" title="کاشی امین" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/amin.jpg`} title="کاشی امین" alt="کاشی امین" />
                                        </a></Link>
                                    </div>
                                    <div className="item">
                                        <Link href="/persepolis-tile/کاشی+پرسپولیس" title="کاشی پرسپولیس" height="104" width="104"><a>
                                            <ImageFull height="104" width="104" data-src="https://cerampakhsh.com/files/img/lazy/lazygray.jpg" src={`${website}/files/img/factory/perspolis.jpg`} title="کاشی پرسپولیس" alt="کاشی پرسپولیس" />
                                        </a></Link>
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