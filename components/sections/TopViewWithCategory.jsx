import React, { useMemo, useState } from "react";
import Axios from "../../Services/Axios";
import Slider from "react-slick";
import Product from '../../components/sections/Product';
// import Loading from "./Loading";
import { website } from "../../Services/Helper";
import LoadingMini from "./LoadingMini";
import Link from 'next/link'
    ;
import { ArrowNext, ArrowPrev } from "./Arrow";
import ProductSlider from "../products/ProductSlider";
import { getTopViewWithCategory } from "../routesApi";

export default function TopViewWithCategory() {

    const [category_slug, setCategory] = useState('کاشی-و-سرامیک-');
    const [products, setProducts] = useState(null);
    const [load, setload] = useState(true);

    const handleClick = (slug) => (e) => {
        setCategory(slug);
    }

    useMemo(() => {
        setload(true)
        Axios({
            method: 'get',
            url: encodeURI(getTopViewWithCategory(category_slug)),// 'v1/get-top-view/with-category/' + category_slug,
            data: '',

        })
            .then(res => {
                setProducts(res.data.views_top.data)
                setload(false)

            });

    }, [category_slug]);



    return (
        <>
            <div className="container-body pb-4 home-product owl-navss view-top-cmp ">
                <div className="row-ak  bg-white  rounded-6 p-relative">
                    <div className="w-100 p-md-3 p-2">
                        <div className="">
                            <>
                                {/* <h2 className="right-header mb-4 "><div>محبوب ترین ها <span className="d-none d-md-inline">  در سرام پخش</span>
                                </div></h2> */}


                                <div className="boxoff-txt"><p>محبوب ترین ها <span className="d-none d-md-inline">  در سرام پخش</span></p></div>



                                <div className="filter-view-com w-100">

                                    <div className="filter-view-box mb-2 mb-md-0 ">
                                        <span className={(category_slug === 'کاشی-و-سرامیک-') ? "active" : ""} onClick={handleClick('کاشی-و-سرامیک-')}> <img src="https://cerampakhsh.com/files/wizard/kashi.svg" alt="کاشی" title="کاشی" width="33" height="33" /><p> کاشی </p></span>
                                        <span className={(category_slug === 'پرسلان-') ? "active" : ""} onClick={handleClick('پرسلان-')}> <img src="https://cerampakhsh.com/files/wizard/porcelan.svg" alt="پرسلان " title="پرسلان " width="33" height="33" /><p> پرسلان </p></span>
                                        {/* <span className="disabled"><img   src="https://cerampakhsh.com/files/banners/filter-view-box-2.svg" alt=" سنگ" title=" سنگ" width="33" height="33" /><p> سنگ </p></span> */}
                                        <span className={(category_slug === 'اکسسوری-و-شیرآلات') ? "active" : ""} onClick={handleClick('اکسسوری-و-شیرآلات')}> <img src="https://cerampakhsh.com/files/wizard/shiralat.svg" alt=" شیرآلات " title=" شیرآلات " width="33" height="33" /><p>  شیرآلات </p></span>
                                        <span className={(category_slug === 'چینی-بهداشتی-') ? "active" : ""} onClick={handleClick('چینی-بهداشتی-')}> <img src="https://cerampakhsh.com/files/wizard/chini.svg" alt=" چینی بهداشتی" title=" چینی بهداشتی" width="33" height="33" /><p> چینی بهداشتی </p></span>
                                        <span className={(category_slug === 'سنگ-موزاییک') ? "active" : ""} onClick={handleClick('سنگ-موزاییک')}><img src="https://cerampakhsh.com/files/wizard/sang.svg" alt=" سنگ" title=" سنگ" width="33" height="33" /><p> سنگ </p></span>

                                        <span className={(category_slug === 'تجهیزات-نصب-') ? "active" : ""} onClick={handleClick('تجهیزات-نصب-')}> <img src="https://cerampakhsh.com/files/wizard/abzar.svg" alt="تجهیزات نصب " title="تجهیزات نصب " width="33" height="33" /><p> تجهیزات نصب </p></span>
                                    </div>
                                </div>

                                {load ?


                                    <LoadingMini />
                                    :
                                    <>
                                        {(products) ?
                                            <>
                                                <div className="view-top-product-box">
                                                    <ProductSlider>

                                                        {Object.entries(products)?.map(([key, product]) =>

                                                            <Product
                                                                key={key}
                                                                classes=''
                                                                classp_0=""
                                                                product_id={product.productid}
                                                                product_slug={product.slug}
                                                                product_code={product.productcode}
                                                                product_title={product.product}
                                                                product_image={product.thumbnail ? product.thumbnail.image_path : ''}
                                                                decor_image={(product.decors[0]) ? product.decors[0].image_path : ''}
                                                                decor_code={(product.decors[0]) ? product.decors[0].code : ''}
                                                                decor_id={(product.decors[0]) ? product.decors[0].code : ''}
                                                                price={product.price / 10}
                                                                sizeImg='small'
                                                            />


                                                        )}
                                                    </ProductSlider>
                                                </div>
                                                <div className=" m-auto mob-user-link pt-3 pb-3 py-md-4 rounded-lg text-center mt-2">
                                                    <Link href={`/products/${category_slug}`}><a  className="d-inline-block btn btn3 py-2 rounded-12 ">مشاهده همه محصولات <span>{category_slug.split('-').join(' ')}</span></a></Link>
                                                </div>
                                            </>
                                            :
                                            <div className="web-loader" style={{ width: '100%', height: '50vh', position: 'relative', zIndex: 1 }}>
                                                <img src={`${website}/files/img/loading_.gif`} alt="سرام پخش |   کاشی و سرامیک" title="سرام پخش |   کاشی و سرامیک" />
                                            </div>
                                        }
                                    </>
                                }

                            </>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
