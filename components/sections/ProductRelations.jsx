import React, { useMemo, useState } from 'react'
// import { website } from '../../../Services/Helper'
import Slider from "react-slick";

import Product from './Product';
import Axios from '../../Services/Axios';
import { useRouter } from 'next/router';
import ProductSlider from '../products/ProductSlider';

export default function ProductRelations(props) {

    let router = useRouter()
    let { category } = props;
    const [products, setproducts] = useState()

    useMemo(() => {
        Axios({
            method: 'get',
            url: encodeURI('v1/products-relations/' + category),
            data: ''
        })
            .then(res => {
                setproducts(res)
            });
    }, [router.asPath])

    return (
        < >
        <div className="listing-prd ">
            {products && products.data && products.data.products && products.data.products.length > 0 &&
                <>
                    <h2 className="right-header mb-2 "><div className="p-2">پیشنهاد سرام پخش </div></h2>
                    {/* <div className="container"> */}

                        <div className="w-100 pb-5 owl-navss relateddecor  bg-white">

                            <ProductSlider>
                                {products.data.products && Object.entries(products.data.products)?.map(([key, value]) =>
                                    <div className="item " key={key}>
                                        <Product
                                            key={key}
                                            classes=''
                                            classp_0=""
                                            product_id={value.productid}
                                            product_slug={value.slug}
                                            product_code={value.productcode}
                                            product_title={value.product}
                                            product_image={value.thumbnail.image_path}
                                            decor_image={(value.decors[0]) ? value.decors[0].image_path : ''}
                                            decor_code={(value.decors[0]) ? value.decors[0].code : ''}
                                            decor_id={(value.decors[0]) ? value.decors[0].code : ''}
                                            price={value.price / 10}
                                            favorite={(value && value.favorites && value.favorites[0] && value.favorites[0].user_login) ? true : false}
                                        />
                                    </div>
                                )}

                            </ProductSlider>


                        </div>

                    {/* </div> */}
                </>
            }
            </div>
        </>

    )
}
