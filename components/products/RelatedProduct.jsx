import React from 'react'
// import { website } from '../../../Services/Helper'
import Slider from "react-slick";
import Product from '../sections/Product';
import ProductSlider from './ProductSlider';



// export default class Product extends Component {
function RelatedProduct(props) {
    // 

    // let {similarPoduct, otherLaab, otherUses, decor_id} = useParams();

    const similarPoduct = props.similarPoduct;
    const title = props.title;
    const item = props.item;
    return (

        <>
            <div className="relatedproduct-box">

                {similarPoduct && similarPoduct.length > 0 &&
                    <h2 className="right-header mb-0 "><div className="p-2">{title}</div></h2>

                }

                <div className="w-100 pb-5 owl-navss relateddecor ">

                    <ProductSlider item={item}>
                        {similarPoduct &&
                            Object.entries(similarPoduct)?.map(([key, value]) =>
                                <Product
                                    key={key}
                                    classes=''
                                    classp_0=""
                                    product_id={value.productid}
                                    product_slug={value.slug}
                                    product_code={value.productcode}
                                    product_title={value.product}
                                    priceid={value.priceid}
                                    product_image={value.thumbnail.image_path}
                                    decor_image={(value.decors[0]) ? value.decors[0].image_path : ''}
                                    decor_code={(value.decors[0]) ? value.decors[0].code : ''}
                                    decor_id={(value.decors[0]) ? value.decors[0].code : ''}
                                    price={value.price / 10}
                                    // notAddCard={true}
                                    favorite={(value && value.favorites && value.favorites[0] && value.favorites[0].user_login) ? true : false}
                                />
                            )}

                    </ProductSlider>


                </div>

            </div>
        </>

    )
}

export default RelatedProduct;