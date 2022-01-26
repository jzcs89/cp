import React, { useMemo, useState } from 'react'
// import { website } from '../../../Services/Helper'
import Slider from "react-slick";

import Product from './Product';
import Axios from '../../Services/Axios';
import { useRouter, withRouter } from 'next/router';

function ProductMe(props) {

    let router = useRouter()
    let { type } = useParams();
    const [products, setproducts] = useState()

    useMemo(() => {
        Axios({
            method: 'get',
            url: encodeURI('v1/products-me/' + type),
            data: props
        })
            .then(res => {
                setproducts(res)
            });
    }, [router.asPath])

    return (
        < >
        <div className="listing-prd default">
            {products && products.data && products.data.products && products.data.products.length > 0 &&
                <>
                    <h2 className="right-header mb-2 "><div className="p-2">پیشنهاد سرام پخش </div></h2>
                    {/* <div className="container"> */}

                        <div className="w-100 pb-5 owl-navss relateddecor bg-white">

                            <Slider

                                className="owl-theme"
                                loop={false}
                                margin={0}
                                items={1}
                                nav={true}
                                dots={false}
                                lazyLoad
                                autoplay={false}
                                animateIn
                                responsive={
                                    {
                                        0: {
                                            items: 2,
                                        },
                                        450: {
                                            items: 2,
                                        },
                                        600: {
                                            items: 3,
                                        },
                                        1000: {
                                            items: 4,
                                        },
                                        1300: {
                                            items: 6,
                                        },
                                    }
                                }

                            >
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

                            </Slider>


                        </div>

                    {/* </div> */}
                </>
            }
            </div>
        </>

    )
}
export default withRouter(ProductMe);