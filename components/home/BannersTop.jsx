import React from 'react'
import { website } from '../../Services/Helper'
import Slider from "react-slick";
import Link from 'next/link'

export default function BannersTop(props) {

    let { banners } = props

    return (
        < >
            <section className="top-slideshow bg-stl pb-0 pb-sm-4" dir="rtl">
                <div className="row-ak">
                    <div className="col-sm-8 col-12 mt-3 pl-3 pl-sm-0 pt-1 mt-0" dir="ltr">
                        {banners && banners.data && banners.data.data &&
                            <Slider

                                className="owl-theme "
                                loop
                                margin={10}
                                items={1}
                                nav={true}
                                dots={true}
                                mouseDrag={false}
                                // touchDrag={false}
                                lazyLoad
                                autoplay
                                autoplayHoverPause={true}
                                autoplaySpeed={15000}
                                // smartSpeed={15000}
                                animateOut="fadeOut"

                                responsive={
                                    {
                                        0: {
                                            items: 1,
                                        },
                                        450: {
                                            items: 1,
                                        },
                                        600: {
                                            items: 1,
                                        },
                                        1000: {
                                            items: 1,
                                        },
                                    }
                                }

                            >
                                {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-top-right')?.map(([key, value]) =>
                                    <div key={key} className="item">
                                        <Link href={value.link}><a target="_blank"  rel="noreferrer">
                                            <img className="slide height-auto rounded-lg" alt={value.title} title={value.title} src={`${website}/${value.image_path}`} height="410" width="1423" />
                                        </a></Link>
                                    </div>
                                )}

                            </Slider>

                        }

                    </div>
                    <div className="col-sm-4 col-12 mt-2 mt-sm-4">
                        <div className="row">
                            {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-top-left')?.map(([key, value]) =>

                                <div key={key} className="col-6 col-sm-12 p-0 mb-3 ">
                                    <Link href={value.link}><a>
                                        <img className="slide height-auto rounded-lg pl-1 px-sm-0" src={`${website}/${value.image_path}`} alt={value.title} title={value.title} height="410" width="1423" />
                                    </a></Link>
                                </div>
                            )}

                        </div>

                    </div>
                </div>

            </section>




        </>

    )
}