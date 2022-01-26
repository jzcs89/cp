import React from 'react'
import { website } from '../../Services/Helper'
import Link from 'next/link'

export default function British(props) {

    let { banners } = props

    return (
        < >
            <div className="row ver-grid gallery">
                <div className="column">
                    {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-british-top-right')?.map(([key, value]) =>
                        <Link key={key} href={value.link}><a target="_blank" rel="noreferrer">
                            <div className=" pics text-center animation all 2">
                                <img className="img-fluid" src={`${website}/${value.image_path}`} alt={value.title} title={value.title} />
                                <div className="box-fluid box-fluid-dark">

                                    <h2 className=" text-center mb-4">{value.title}</h2>

                                    <div className="button-fluid">مشاهده و خرید</div>
                                </div>
                            </div>
                        </a></Link>
                    )}
                    {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-british-bottom-right')?.map(([key, value]) =>
                        <Link key={key} href={value.link}><a target="_blank" rel="noreferrer">
                            <div className=" pics text-center animation all 2">
                                <img className="img-fluid" src={`${website}/${value.image_path}`} alt={value.title} title={value.title} />
                                <div className="box-fluid box-fluid-blue">

                                    <h2 className=" text-center mb-4">{value.title}</h2>

                                    <div className="button-fluid">مشاهده و خرید</div>
                                </div>
                            </div>
                        </a></Link>
                    )}
                </div>


                <div className="column">
                    {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-british-top-middle')?.map(([key, value]) =>
                        <Link key={key} href={value.link}><a target="_blank" rel="noreferrer">
                            <div className=" pics text-center animation all 2">
                                <img className="img-fluid" src={`${website}/${value.image_path}`} alt={value.title} title={value.title} />
                                <div className="box-fluid box-fluid-blue">

                                    <h2 className=" text-center mb-4">{value.title}</h2>

                                    <div className="button-fluid">مشاهده و خرید</div>
                                </div>
                            </div>
                        </a></Link>
                    )}
                    {/* <!-- Grid column --> */}
                    {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-british-bottom-middle')?.map(([key, value]) =>
                        <Link key={key} href={value.link}><a target="_blank" rel="noreferrer">
                            <div className=" pics text-center animation all 2">
                                <img className="img-fluid" src={`${website}/${value.image_path}`} alt={value.title} title={value.title} />
                                <div className="box-fluid box-fluid-dark">

                                    <h2 className=" text-center mb-4">{value.title}</h2>

                                    <div className="button-fluid">مشاهده و خرید</div>
                                </div>
                            </div>
                        </a></Link>
                    )}
                </div>


                <div className="column">
                    {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-british-top-left')?.map(([key, value]) =>
                        <Link key={key} href={value.link}><a target="_blank" rel="noreferrer">
                            <div className=" pics text-center animation all 2">
                                <img className="img-fluid" src={`${website}/${value.image_path}`} alt={value.title} title={value.title} />
                                <div className="box-fluid box-fluid-blue">

                                    <h2 className=" text-center mb-4">{value.title}</h2>

                                    <div className="button-fluid">مشاهده و خرید</div>
                                </div>
                            </div>
                        </a></Link>
                    )}
                    {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-british-bottom-left')?.map(([key, value]) =>
                        <Link key={key} href={value.link}><a target="_blank" rel="noreferrer">
                            <div className=" pics text-center animation all 2">
                                <img className="img-fluid" src={`${website}/${value.image_path}`} alt={value.title} title={value.title} />
                                <div className="box-fluid box-fluid-blue">

                                    <h2 className=" text-center mb-4">{value.title}</h2>

                                    <div className="button-fluid">مشاهده و خرید</div>
                                </div>
                            </div>
                        </a></Link>
                    )}
                </div>
            </div>
        </>

    )
}