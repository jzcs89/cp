import React, { useContext, useState } from "react";
import Axios from '../../Services/Axios';
import { ProductSmallContext } from "../../Contexts/ProductSmallContext";
import { CartPlus } from '../../components/icons/SvgIcons'

export default function PopUpAddCard(props) {

    const proSmall = useContext(ProductSmallContext)

    const [buyDecor, setbuyDecor] = useState(false);
    const [buyProduct, setbuyProduct] = useState(false);

    const chageBuyModalProduct = (slug, type) => (e) => {
        
        proSmall.setProductSmall({ ...proSmall,
            typeContext: 'SETDATA', 
            product: null, 
            decor: null, 
            buyDecor: false,
            buyProduct: true, 
            products_: null, 
            slug: props.slug, 
            type: props.type, 
            title: props.title,
            
        })

        if (type === 'product') {

            setbuyProduct(!buyProduct)
            Axios({
                method: 'get',
                url: encodeURI('v1/product/' + slug),
                data: ''
            })
                .then(res => {
                    
                    proSmall.setProductSmall({ ...proSmall,
                        typeContext: 'SETDATA', 
                        product: res, 
                        decor: null, 
                        buyDecor: false,
                        buyProduct: true, 
                        products_: null, 
                        slug: props.slug, 
                        type: props.type, 
                        title: props.title,
                        
                    })
                    
                    
                }, (errors) => {
                }).catch((error) => {
                });
        }
        if (type === 'decor') {
            setbuyDecor(!buyDecor)

            Axios({
                method: 'get',
                url: encodeURI('v1/decor/' + slug),
                data: ''
            })
                .then(res => {
                    
                    proSmall.setProductSmall({ ...proSmall,
                        typeContext: 'SETDATA', 
                        product: null, 
                        decor: res, 
                        buyDecor: true,
                        buyProduct: false, 
                        products_: res.data.info.products, 
                        slug: props.slug, 
                        type: props.type, 
                        title: props.title,
                        
                    })
                }, (errors) => {
                }).catch((error) => {
                });
        }
    }

    return (
        < >
            <div className="add-to-basket-btn" onClick={chageBuyModalProduct(props.slug, props.type)}>
           <CartPlus />
                <span>&zwnj; افزودن به سبد خرید &zwnj; </span>
            </div>

        </>

    )
}
