import React from 'react'
import Slider from "react-slick";
import Link from 'next/link';
import Product from '../../components/sections/Product';
import { AngleLeft } from './../../components/icons/SvgIcons';
import ProductSlider from '../products/ProductSlider';

export default function Suggests(props) {

    let { products } = props

    return (
        < >

            {products && products.offer && products.offer.data &&

                <div className="off-box container-body">

                    <div className=" mb-3  boxoff-right row-ak">

                        <div className=" w-100 py-md-3 py-1 px-0 ">
                            <div className="boxoff-txt">

                                <Link href="/products?state_of=offer"  ><a>
                                    <p> پیشنهاد شگفت انگیز
                                        <span><AngleLeft className="w-10px svg-golden mr-2 " /> </span>
                                    </p>

                                </a></Link>


                            </div>



                            <div className=" w-100  pt-3">
                                <div className="fix-slider ">

                                    <ProductSlider>


                                        {Object.entries(products.offer.data)?.map(([key, product]) =>
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
                                                priceid={product.priceid}
                                                discount={product.discount}
                                                extrafieldvalues={product.extrafieldvalues}
                                                sizeImg='small'
                                                favorite={(product && product.favorites && product.favorites[0] && product.favorites[0].user_login) ? true : false}
                                            />
                                        )}
                                    </ProductSlider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>

    )
}