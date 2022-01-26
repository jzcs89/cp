import React, { useContext} from 'react'
import dynamic from 'next/dynamic'

import { ProductSmallContext } from '../../Contexts/ProductSmallContext'
import Axios from '../../Services/Axios'
import { Spinner } from'../icons/SvgIcons'
const CountDecorSocial = dynamic(() => import('../products/CountDecorSocial'))
const CountProduct = dynamic(() => import('../products/CountProduct'))

export const ProductSmall = (props) => {

    const proSmall = useContext(ProductSmallContext)

    // const [buyDecor, setbuyDecor] = useState(proSmall.data.buyDecor);
    // const [buyProduct, setbuyProduct] = useState(proSmall.data.buyProduct);

    // const [decor, setDecor] = useState(proSmall.data.decor);
    // const [product, setProduct] = useState(proSmall.data.product);
    // const [products_, setProducts_] = useState(proSmall.data.products_);

    
    const loadBranchesPrice = (id, merchantid) => {
        // alert(id)
        Axios({
            method: 'get',
            url: encodeURI(`v1/load-price-branches-product`),// 
            type: 'get',
            params: {
                id: id,
                merchantid: merchantid,
                type: 'decor',
            }
        })
            .then(response => {
                // setProducts_(response.data)

            });
    }
    
    const closeModal = () => (e) => {
        // alert(id)
        e.preventDefault()

        proSmall.setProductSmall({ ...proSmall,
            typeContext: 'SETDATA', 
            product: null, 
            decor: null, 
            buyDecor: false,
            buyProduct: false, 
            products_: null, 
            slug: null, 
            type: null, 
            title: null,
            
        })
        
    }

    return (
        <div className="text-center ProductSmall">

            {proSmall.data.buyProduct &&

                <div className="modal-box-cp d-flex align-items-center" id="fast-sell">
                    <div className="modal-dialog " style={{zIndex:2}}>

                        <div className="modal-content ">
                            <div className="bg-stl p-3">
                                <h6 className="modal-title float-right ">{proSmall.data.title}</h6>

                                <span className="text-danger cursor-pointer float-left" data-dismiss="modal" onClick={closeModal()}>x</span>
                            </div>
                            <div className="modal-body px-0 px-md-2">

                                {(proSmall && proSmall.data && proSmall.data.product && proSmall.data.product.data && proSmall.data.product.data.info) ?
                                    <CountProduct 
                                    listBeranchesPrice={proSmall.data.product.data.listBeranchesPrice} 
                                    products={[proSmall.data.product.data.info]} 
                                    imgs={proSmall.data.product.data.info.images} 
                                    id={proSmall.data.product.data.info.productid} 
                                    type='product' 
                                    price={proSmall.data.product.data.info.price} 
                                    priceid={proSmall.data.product.data.info.priceid} 
                                    category={proSmall.data.product.data.category} 
                                    factory_en={proSmall.data.product.data.info.manufactory.manufacturer_en} 
                                    factory={proSmall.data.product.data.info.manufactory.manufacturer} 
                                    loadBranchesPrice={loadBranchesPrice} 
                                    notShowOtherLink={'notShow'} 
                                    closeModal={closeModal}
                                    />

                                    :
                                    <Spinner className=" m-0 spinner fa-spin"/>
                                }



                            </div>
                        </div>

                    </div>
                    <div onClick={closeModal()} className="close-modal-div-dark" style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'fixed',
                        background: '#2ed4f91f',
                        zIndex: 1
                    }}></div>
                </div>

            }

            {proSmall.data.buyDecor &&

                <div className="modal-box-cp d-flex align-items-center" id="fast-sell">
                    <div className="modal-dialog " style={{zIndex:2}}>

                        <div className="modal-content">
                            <div className="bg-stl p-3">
                                <h6 className="modal-title float-right ">{proSmall.data.title}</h6>

                                <span className="text-danger cursor-pointer float-left" data-dismiss="modal" onClick={closeModal()}>x</span>
                            </div>
                            <div className="modal-body px-0 px-md-2">

                                {(proSmall && proSmall.data && proSmall.data.decor && proSmall.data.decor.data && proSmall.data.decor.data.info) ?
                                    <CountDecorSocial 
                                    listBeranchesPrice={proSmall.data.decor.data.listBeranchesPrice}
                                    products={proSmall.data.products_}
                                    imgs={proSmall.data.decor.data.info.images}
                                    id={proSmall.data.decor.data.info.id}
                                    type='decor'
                                    price={proSmall.data.decor.data.info.products[0].price}
                                    category={proSmall.data.decor.data.category}
                                    factory={proSmall.data.decor.data.info.products[0].manufactory.manufacturer}
                                    loadBranchesPrice={loadBranchesPrice}
                                    closeModal={closeModal}
                                     />
                                    :
                                    <Spinner className=" m-0 spinner fa-spin"/>
                                }



                            </div>
                        </div>

                    </div>
                    <div  onClick={closeModal()} className="close-modal-div-dark" style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'fixed',
                        background: '#2ed4f91f',
                        zIndex: 1,
                        top: 0
                    }}></div>
                </div>

            }
        </div>
    )
}
