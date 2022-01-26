import React, { useMemo, useState } from 'react'


import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { website } from '../../Services/Helper';
import Link from 'next/link';

function Division(props) {

    var settings = {
        dots: true,
        accessibility: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        rtl: true,
        autoplay: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [subCategories, setsubCategories] = useState(null)

    useMemo(() => {
        let subCategoriesResult = props?.subCategories?.filter(value => value.image && value.image.image_path)
        setsubCategories(subCategoriesResult)
    }, [props.subCategories])


    const title = props.title ?? 'دسته بندی دیگر';
    return (

        <>
            {(subCategories && subCategories.length > 0) && <h2 className="right-header mb-0 "><div className="p-2">{title}</div></h2>}

            <div className="relatedproduct-box " >

                <Slider {...settings}  >
                    {subCategories?.filter(cat=>cat.image && cat.image.image_path)?.map((cat, keyCat) =><div className="item " key={keyCat}>
                                    <div className="filter-division-area" key={keyCat}>
                                        <div className="filter-division-box">
                                            <Link href={cat.link ? cat.link : `/products/${cat.value}`} className=" division-category "><a>
                                                <div className="c-filter-division_category-image">
                                                    <img className="w-100" src={website + '/' + cat.image.image_path} alt={cat.label} title={cat.label} />
                                                </div>
                                                <div className="c-filter-division_category-title">{cat.label}</div>

                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                    }


                </Slider>
            </div>

        </>

    )
}

export default Division;