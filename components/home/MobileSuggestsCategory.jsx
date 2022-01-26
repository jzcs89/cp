import React from 'react'
import { website } from '../../Services/Helper'
import Link from 'next/link'
import LazyLoad from 'react-image-lazy-load'
import { AngleLeft } from '../../components/icons/SvgIcons'

export default function MobileSuggestsCategory(props) {
    let { banners } = props

    return (
        <>
      

            <div className="container-body ">
                <div className="row  decor-home">
                    {banners && Object.entries(banners).filter(([key1, value1]) => value1.position === 'home-box3')?.map(([key, value]) =>
                        <div key={key} className="col-lg-6 col-md-6 col-6">
                            {value.details &&
                                <p className="start-price"><span className="d-none d-md-inline">شروع قیمت ها</span> از <span className="num-price">{value.details} </span>  <span className="alltoman">توما<span className="allnoon">ن</span></span></p>
                            }

                            <Link href={value.link} ><a>
                                <div className="user-diff box-rdus-shdw rounded overflow-hidden">
                                    <LazyLoad loaderImage originalSrc={`${website}/${value.image_path}`} effect="blur"  

                                        imageProps={{
                                            src: "https://cerampakhsh.com/files/img/lazy/lazyloaddecor.jpg",
                                            alt: "lazyload",
                                            ref: "image",
                                            
                                        }}   alt={value.title} title={value.title} />
                                    <div className="user-content ">
                                        <h2>{value.title}</h2>
                                        <div className="see-more d-md-inline d-none">

                                            مشـاهده و خریــد
                                            <AngleLeft />
                                        </div>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                    )}

                </div>
            </div>
        </>

    )
}