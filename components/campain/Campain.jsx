import React from 'react'
import Slider from "react-slick";
import Config from '../../configs/Cerampakhsh';

export default function Campain(props) {


    var settings = {
        className: 'mx-md-5 mx-1',
        autoplay: true,
        infinite: true,
        dots: true,
        accessibility: true,
        arrows: false,
        speed: 500,
        autoplaySpeed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        rtl: true,
        autoplay: true,
        focusOnSelect: true,
        touchMove: true,
    
        // className: "center",
        // centerMode: true,
       
        // centerPadding: "60px",
   
        rows: 2,
        // slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    speed: 500,
                    autoplaySpeed: 6000,
                }
            }

        ]
    };
    return (
        < >

            <div className="campain-page">

                <div className="container-ak">
                    <div className="campain-box">
                        <h2 className="text-center py-4">
                            <span>
                                <span className=" "> <img src="https://cerampakhsh.com/files/img/static/JASHNVARE.png" width="280" height="auto" alt="" /></span>
                                {/* <span className=" d-none d-md-block"> <img src="https://cerampakhsh.com/files/img/static/JASHNVARE-MD.png" width="350" height="auto" alt="" /></span> */}
                                <span> <img src={Config.logo} width="170" height="auto" alt="" /></span>
                            </span>
                        </h2>

                        <Slider {...settings} >


                            <div className="item">
                                <a href="https://cerampakhsh.com/producer/RokaCeram/%D8%B1%D9%88%DA%A9%D8%A7%D8%B3%D8%B1%D8%A7%D9%85?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/Yalda-Roka.jpg" alt="" />
                                    </div>

                                </a>
                            </div>

                            <div className="item">
                                <a href="https://cerampakhsh.com/producer/nobel/%D8%B4%DB%8C%D8%B1%D8%A2%D9%84%D8%A7%D8%AA+%D9%86%D9%88%D8%A8%D9%84?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/Yalda-Nobel.jpg" alt="" />
                                    </div>

                                </a>
                            </div>
                            <div className="item">
                                <a href="https://cerampakhsh.com/producer/emertatceram/%D8%A7%D9%85%D8%B1%D8%AA%D8%A7%D8%AA+%D8%B3%D8%B1%D8%A7%D9%85?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/Yalda-EmertatCeram.jpg" alt="" />
                                    </div>

                                </a>
                            </div>
                            <div className="item">
                                <a href="https://cerampakhsh.com/producer/emertatceram_ch/چینی+بهداشتی+امرتات+سرام?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/EmertatCeram-ChiniBehdashtiYalda.jpg" alt="" />
                                    </div>

                                </a>
                            </div>
                            <div className="item">
                                <a href="https://cerampakhsh.com/producer/Contrast/%DA%A9%D9%86%D8%AA%D8%B1%D8%A7%D8%B3%D8%AA?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/Yalda-Contrast.jpg" alt="" />
                                    </div>

                                </a>
                            </div>
                            <div className="item">
                                <a href="https://cerampakhsh.com/producer/tivachem/%D8%AA%DB%8C%D9%88%D8%A7+%D8%B4%DB%8C%D9%85%DB%8C?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/Yalda-Tiva.jpg" alt="" />
                                    </div>

                                </a>
                            </div>
                            <div className="item ">
                                <a href="https://cerampakhsh.com/producer/meralo/%D8%A8%D8%B1%D9%86%D8%AF+%D9%85%D8%B1%D8%A7%D9%84%D9%88?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/Yalda-Meralo.jpg" alt="" />
                                    </div>

                                </a>
                            </div>

                            <div className="item ">
                                <a href="https://cerampakhsh.com/producer/product/چینی+بهداشتی+مروارید+کابین?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/Yalda-Morvarid-Cabin.jpg" alt="" />
                                    </div>

                                </a>
                            </div>
                            <div className="item ">
                                <a href="https://cerampakhsh.com/producer/istaceram/ایستا+سرام?state_of=offer" target="_blank" rel="noreferrer">
                                    <div className="img-box-campain mx-1 mx-lg-3"><img src="https://cerampakhsh.com/files/img/static/Yalda-Istaceram.jpg" alt="" />
                                    </div>

                                </a>
                            </div>
                            <div className="item ">
                            <img className=" m-auto p-5 w-100" src="https://cerampakhsh.com/files/img/logo.svg" width="100" height="auto" alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>


    )
}