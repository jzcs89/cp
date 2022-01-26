import React from 'react'
import { website } from '../../Services/Helper'
import Link from 'next/link'
import LazyLoad from 'react-image-lazy-load'
import { AngleLeft } from '../../components/icons/SvgIcons'

export default function MobileSuggestsCategory(props) {
    let { banners } = props

    return (
        <>
            <div className="Advertising-place-back mb-md-0 mb-4 pt-4 pb-2">
                <div className="container-body top-slideshow p-md-0" dir="rtl">
                    <div className="row decor-home">

                        <div className=" col-12   p-0 decor-home">
                            <div className="row">
                                {banners && Object.entries(banners).filter(([key2, value]) => value.position === 'home-box2' && value.orderby !== 1)?.map(([key, value]) =>
                                    <div key={key} className="col-md-4 mb-md-0 mb-4  respons-start-price">

                                        <Link href={value.link} ><a>
                                            <div className="user-diff overflow-hidden rounded-12  mb-0">
                                                {/* <LazyLoad loaderImage originalSrc={`${website}/${value.image_path}`}
                                                    imageProps={{
                                                        src: "https://cerampakhsh.com/files/img/lazy/lazyloaddecor.jpg",
                                                        alt: "lazyload",
                                                        ref: "image",

                                                    }} effect="blur" alt={value.title} title={value.title} /> */}
                                                <picture>
                                                    <source srcSet={`${website}/${value.image_path.replace(/\.[^.]+$/, '.webp')}`} type="image/webp" />
                                                    <img src={`${website}/${value.image_path}`} alt={value.title} title={value.title} />
                                                </picture>
                                            </div>
                                        </a></Link>
                                    </div>
                                )}

                                {banners && Object.entries(banners).filter(([key1, value]) => value.position === 'home-box2' && value.orderby === 1)?.map(([key, value]) =>

                                    <div className="col-md-4 mb-md-0 mb-4  " key={key} >

                                        <div key={key} className="item">

                                            <Link href={value.link} ><a>
                                                <div className="user-diff rounded-12 overflow-hidden">
                                                    {/* <LazyLoad loaderImage originalSrc={`${website}/${value.image_path}`} effect="blur"
                                                        imageProps={{
                                                            src: "https://cerampakhsh.com/files/img/lazy/lazyloaddecor.jpg",
                                                            alt: "lazyload",
                                                            ref: "image",

                                                        }} alt={value.title} title={value.title} /> */}
                                                    <picture>
                                                        <source srcSet={`${website}/${value.image_path.replace(/\.[^.]+$/, '.webp')}`} type="image/webp" />
                                                        <img src={`${website}/${value.image_path}`} alt={value.title} title={value.title} />
                                                    </picture>

                                                </div>
                                            </a></Link>
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}