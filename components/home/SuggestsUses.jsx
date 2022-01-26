import React from 'react'
import { website } from '../../Services/Helper'
import Link from 'next/link'
import LazyLoad from 'react-image-lazy-load'
import { AngleLeft } from '../../components/icons/SvgIcons'

export default function SuggestsUses(props) {

    let { decorsUser } = props

    const imageStatic = {
        'آشپزخانه': 'resize/medium/files/uploads/banners/2020-07-27/32b870a549fb2b7b160417c72bb425e3c8a14573.jpg',
        'دستشویی و حمام': 'resize/medium/files/uploads/banners/2020-07-27/05cfc86a097e6c4a8b2e87ea20b0333e40fe7ac7.jpg',
        'اتاق پذیرایی': 'resize/medium/files/uploads/banners/2020-07-27/072919a4ba16be5602236b5c449cbbda9fe51a89.jpg',
        'نما و راهرو': 'resize/medium/files/uploads/banners/2020-07-27/fec739ebb33467d50b6ab1a86b17e4bbb65fa967.jpg',
        'تجاری و پارکینگ': 'resize/medium/files/uploads/banners/2020-07-27/86a923582cb26b70d940ecccd6f7c8007d34e30d.jpg',
        'مینیاتوری و استخری': 'resize/medium/files/uploads/banners/2020-07-11/be5f0c93530fe9d0e17ee56d80a433c063d921a3.jpg',
        'سرامیک حیاطی': 'resize/medium/files/uploads/banners/2020-07-27/7b1ce703522496530e2fee17b2917b64bde63536.jpg',
        'سرامیک بالکن': 'resize/medium/files/uploads/banners/2020-07-27/2b509a33d12a37bed3b86fa2d5c2620b2cef6a15.jpg',

    };
    return (
        < >
            {/* <h2 className="mob-user-row-h">کاربری کاشی و سرامیک</h2> */}



            <div className="container-body six-user-box ">


                <div className="row decor-home mt-4 ">
                    {
                        Object.entries(decorsUser.box1)?.map(([key, value]) =>

                            <div key={key} className="col-lg-4 col-md-6 col-6">
                                {value.start_price &&

                                    <p className="start-price">
                                        <span className="d-none d-md-inline">شروع قیمت ها</span> از
                                        <span className="num-price">{value.start_price} </span>
                                        <span className="alltoman">توما<span className="allnoon">ن</span></span>
                                    </p>
                                }

                                <Link href={value.link}><a>
                                    <div className="user-diff box-rdus-shdw">
                                        <LazyLoad loaderImage originalSrc={`${website}/resize/medium/${value.image_path}`} effect="blur"  
                                            imageProps={{
                                                src: "https://cerampakhsh.com/files/img/lazy/lazyloaddecor.jpg",
                                                alt: "lazyload",
                                                ref: "image",
                                                
                                            }}
                                            alt={value.title} title={value.title} onError={(e) => { e.target.onerror = null; e.target.src = `${website}/resize/medium/${imageStatic[value.title]}` }} />
                                        <div className="user-content">
                                            <h2>{value.title}</h2>
                                            <div className="see-more offset d-md-inline d-none" >
                                                مشاهده و خرید
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