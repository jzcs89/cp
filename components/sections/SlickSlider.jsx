import React, { useMemo, useState } from 'react'


import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import { website } from '../../Services/Helper';
import Link from 'next/link'
import Config from '../../configs/Cerampakhsh';

function Division(props) {

    var settings = {
        dots: true,
        accessibility: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        // rtl: true,
        // autoplay: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let { type, products, decors } = props

    const [subCategories, setsubCategories] = useState(null)

    // const subCategories = props.subCategories;



    useMemo(() => {
        let subCategoriesResult = props?.subCategories?.filter(value => value.image && value.image.image_path)
        setsubCategories(subCategoriesResult)
    }, [props.subCategories])


    const title = props.title ?? 'دسته بندی دیگر';
    return (

        <>
            {/* <div className="Division-box"> */}

            {(subCategories && subCategories.length > 0) && <h2 className="right-header mb-0 "><div className="p-2">{title}</div></h2>}

            <div className="relatedproduct-box " >

                <Slider {...settings}  >
                    {products &&
                        Object.entries(products)?.map(([key, product]) =>
                            <Link key={key} to={`/product/${product.slug}`}>
                                <li className="row-ak py-1 direction-rtl" onClick="">
                                    <div className="col-md-2 col-2 p-1 ">
                                        {(product && product.thumbnail && product.thumbnail.image_path) ?
                                            <img className="piece-image-decor-list" src={`${website}/resize/small/${(product.thumbnail.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs/', '')}`} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} height="auto" width="100 " alt={product.product} titles={product.product} />
                                            :
                                            <img className="piece-image-decor-list" src={Config.logo} height="auto" width="70" alt={product.product} title={product.product} />
                                        }
                                    </div>
                                    <div className="col-10 col-md-10 m-auto p-1 pr-2 text-right"> {product.product}</div>

                                </li>
                            </Link>
                        )}
                    {decors &&
                        Object.entries(decors)?.map(([key, decor]) =>
                            <Link key={key} to={`/decor/${decor.slug}`}>
                                <li className="row-ak py-1 direction-rtl" onClick="">
                                    <div className="col-2 p-1">
                                        {decor.images && decor.images[0] &&
                                            <img className="piece-image-decor-list" src={`${website}/resize/small/${decor.images[0].image_path}`} height="auto" width="70" alt={decor.title} title={decor.title} onError={(e) => { e.target.onerror = null; e.target.src = website + '/' + decor.images[0].image_path }} />
                                        }
                                    </div>
                                    <div className="col-10 m-auto p-1  text-right"> {decor.title}</div>
                                </li>
                            </Link>
                        )}
                    {/* {[1, 2, 3, 4, 2]?.map((value, key) =>

                        <div className="filter-division-area">
                            <div className="filter-division-box">
                                <a href="/" className=" division-category ">
                                    <div className="c-filter-division_category-image">
                                        <img className="w-100" src="https://cerampakhsh.com/files/uploads/categories/2020-06-24/90a2d353a8e3ef440c2f5f6d20dd79e03582b14a.jpg" alt="دسته بندی" title="دسته بندی" />
                                    </div>
                                    <div className="c-filter-division_category-title">کاشی بین کابینتی </div>

                                </a>
                            </div>
                        </div>
                    )} */}


                </Slider>
            </div>

        </>

    )
}

export default Division;
