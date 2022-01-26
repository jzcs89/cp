import React from 'react'
import { website } from '../../Services/Helper'
import Link from 'next/link'
import LazyLoad from 'react-image-lazy-load'
import { AngleLeft } from '../../components/icons/SvgIcons'

export default function MobileSuggestsCategoryB(props) {
    let { banners } = props

    return (
        <>
            <div className="Advertising-place-back mb-4 pt-4 pb-2">
                <div className="container-body ">
                    <div className="row  decor-home">
                        {banners && Object.entries(banners).filter(([key, value]) => value.position === 'home-box3')?.map(([key, value]) =>
                            <div key={key} className="col-lg-6 col-md-6 col-12">
                                <Link href={value.link} ><a>
                                    <div className="user-diff box-rdus-shdw rounded-12  overflow-hidden mb-md-4 mb-4">
                                        {/* <LazyLoad loaderImage originalSrc={`${website}/${value.image_path}`} effect="blur"

                                            imageProps={{
                                                src: "https://cerampakhsh.com/files/img/lazy/lazyloaddecor.jpg",
                                                alt: "lazyload",
                                                ref: "image",

                                            }} alt={value.title} title={value.title} /> */}
                                        <picture>
                                            <source srcSet={`${website}/${value.image_path.replace(/\.[^.]+$/, '.webp')}`} type="image/webp" />
                                            <img src={`${website}/${value.image_path}`}  alt={value.title} title={value.title} />
                                        </picture>
                                    </div>
                                </a></Link>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>

    )
}