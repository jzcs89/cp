import React from 'react'
import Slider from "react-slick";
import Link from 'next/link'

import Product from '../../components/sections/Product';
import { AngleLeft } from './../../components/icons/SvgIcons';
import ProductSlider from '../products/ProductSlider';

export default function ViewMe(props) {

    let { products } = props

    return (
        < >
            {(products?.list?.data && (products.list.data).length) ?

                <div className="container-body pb-4 home-product owl-navss mt-4">
                    <div className="row-ak">
                        <div className="col-12   p-0 box-rdus-shdw bg-white">
                            <div className="decorproduct mob-newprd  desktop">

                                <div className="boxoff-txt-hdr">
                                    <p> {(products?.category).split('-').join(' ')}
                                        <small className="d-block"> بر اساس بازدید های شما </small>
                                    </p>

                                    <div className="read-more read-more-home"><Link href={`/products/${products?.category}`}><a target="_blank" rel="noreferrer"> مشاهده بیشتر     <AngleLeft className="w-10px mt-n1" />                       </a></Link></div>



                                </div>
                                <div className="p-md-3 px-1">
                                    <ProductSlider>
                                        {Object.entries(products.list.data)?.map(([key, product]) =>

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
                                                favorite={(product && product.favorites && product.favorites[0] && product.favorites[0].user_login) ? true : false}
                                            />
                                        )}
                                    </ProductSlider>
                                </div>


                            </div>
                        </div >
                    </div >
                </div >

                :
                <>
                </>
            }
        </>

    )
}