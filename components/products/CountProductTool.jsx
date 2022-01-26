import React, { useState, useMemo, useEffect, useContext } from 'react'
import Link from 'next/link'

import { website } from './../../../Services/Helper'
import { numberFormat } from './../../../components/sections/NumberFormat'


import NemoneRaygan from './NemoneRaygan';
import AnbohSaz from './AnbohSaz';
import { AlertContext } from '../../../Contexts/AlertContext';
import { CartContext } from '../../../Contexts/CartContext';
import { authContext } from '../../../Contexts/AuthContext';
import Axios from '../../../Services/Axios';
import CommingSoon from './CommingSoon';
import PrpsPrice from './PrpsPrice';
import LessPrice from './LessPrice';
import Store from './Store';
import { toast } from 'react-toastify';
import { AngleLeft, StoreIcon } from '../../../components/icons/SvgIcons';
import { useRouter, withRouter } from 'next/router';
import { getCookie } from '../../Services/getCookie';
// export default class Product extends Component {
function CountProductTool(props) {

    let router = useRouter()
    const alContext = useContext(AlertContext)
    const cContext = useContext(CartContext)
    const userContext = useContext(authContext)


    
    let [total, setTotal] = useState(0)
    let [subtotal, setsubTotal] = useState(0)
    let [totalcount, setTotalcount] = useState(0)
    let [newProduct, setnewProduct] = useState(1)
    let [size, setSize] = useState([])
    let [count, setCount] = useState([])
    let [price, setPrice] = useState([])
    let [discount, setdiscount] = useState([])
    const [cartSubmit, setCartSubmit] = useState('v1/add-cart/product')
    const [token_cart, setTokenCart] = useState((getCookie("token_cart")) ? getCookie("token_cart") : null)

    useEffect(() => {
    }, [])

    const products = props.products;

    useMemo(() => {
        if (products) {
            (products)?.map(function (product, key) {
                product.extrafieldvalues &&
                    Object.entries(product.extrafieldvalues)?.map(([key, extra]) => {
                        
                        if (newProduct && product.priceid && product.price === 0) {
                            setnewProduct(0)
                        }
                        if (extra.field === "متراژ در کارتن") {
                            return (
                                setSize(size => [...size, (extra.value).replace('/', '.')]),
                                setCount(count => [...count, 1]),
                                setPrice(price => [...price, product.price]),
                                setdiscount(discount => [...discount, product.discount]),
                                setTotal(total => (Number(product.price) * Number((extra.value).replace('/', '.'))) + Number(total)),
                                setsubTotal(subtotal => (((100 - Number(product.discount)) * (Number(product.price) * Number((extra.value).replace('/', '.')))) / 100) + Number(subtotal)),
                                setTotalcount(totalcount => 1 + Number(totalcount))
                            )
                        } else {
                            return (
                                setSize(size => [...size, 1]),
                                setCount(count => [...count, 1]),
                                setPrice(price => [...price, product.price]),
                                setdiscount(discount => [...discount, product.discount]),
                                setTotal(Number(product.price)),
                                setsubTotal(((100 - Number(product.discount)) * Number(product.price)) / 100),
                                setTotalcount(totalcount => 1)
                            )
                        }
                    })


            });
        }
    }, [total, props.products])

    const changeCount = (key) => (event) => {
        count[key] = event.target.value;
        setTotal(0)
        setsubTotal(0)
        setTotalcount(0)
        count?.map((value, item) => (
            setTotal(total => (Number(price[item]) * Number(size[item]) * Number(count[item])) + Number(total)),
            setsubTotal(subtotal => (((100 - discount[item]) * (Number(price[item]) * Number(size[item]) * Number(count[item])) / 100) + Number(subtotal))),
            setTotalcount(totalcount => Number(count[item]) + Number(totalcount))
        ))
        // setTotal(total => (Number(price[key]) * Number(size[key]) * Number(count[key])) + Number(total))
    }

    const changeCountOne = (key) => (event) => {
        count[key] = event.target.value;
        setTotal((Number(price[0]) * Number(size[0]) * Number(count[0])))

        setsubTotal(((100 - discount[0]) * (Number(price[0]) * Number(size[0]) * Number(count[0]) / 100)))
        setTotalcount(totalcount => Number(count[0]))
        // count?.map((value,item) => (
        // ))
        // setTotal(total => (Number(price[key]) * Number(size[key]) * Number(count[key])) + Number(total))
    }
    const handleSubmit = (url) => async (event) => {

        if ((userContext.data && userContext.data.token && getCookie("token") !== 'undefined')) {
            url = 'v1/add-cart/product/user?token=' + getCookie("token")?.replace(/\r?\n|\r/g, '')
        }
        event.preventDefault();
        await Axios({
            method: 'post',
            url: encodeURI(url),// 
            data: new FormData(event.target)
        })
            .then(response => {
                if (response.data.uuid && response.data.uuid !== '' && response.data.uuid !== 'undefined') {
                    document.cookie = `token_cart=${response.data.uuid}; path=/;max-age=` + 31104000;
                }
                setTokenCart(response.data.uuid)
                cContext.setCart({ type: 'ADD', token_cart: response.data.uuid, cart: response.data.data })

                toast(response.data.message, {type: response.data.status})
                router.push('/cart')
            });
    }
    return (

        <>
            <form   method="post" onSubmit={handleSubmit(cartSubmit)} className="pcp-hidden ajaxCart">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="product-guarantee default">
                        <ul className="list-group">
                            {products &&
                                Object.entries(products)?.map(([key, product]) => {
                                    return (
                                        <>
                                            <li className="list-group-item metraj">
                                                <div className="row">
                                                    <div className="col-12 col-sm-12 col-md-12  text-right px-0 pb-2">
                                                        <Link href={`/product/${product.slug}`}><a>
                                                            <div className="row">
                                                                <div className="col-2   p-0 ">
                                                                    <img className="row-list-add-cart-img-product" src={`${website}/resize/medium/${(product.thumbnail.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} height="30" width="50" alt={product.product} title={product.product} />
                                                                </div>

                                                                <div className="col-10 p-0 pr-2">
                                                                    <div className="one-line-x">
                                                                        {product.extrafieldvalues &&
                                                                            Object.entries(product.extrafieldvalues)?.map(([key, extra]) => {
                                                                                if (extra.field === "قطعات" || extra.field === "نام محصول") {
                                                                                    return (
                                                                                        <>
                                                                                            {extra.value}
                                                                                        </>
                                                                                    )
                                                                                }
                                                                                //  else {
                                                                                //     if (key === 0)
                                                                                //         return (
                                                                                //             <>
                                                                                //                 {product.productcode}
                                                                                //             </>
                                                                                //         )
                                                                                // }
                                                                            })
                                                                        }
                                                                    </div>
                                                                    <p className="small text-secondary mb-1">
                                                                        {price[key] ?
                                                                            <>
                                                                                {(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-') ?
                                                                                    <>هر متر مربع </>
                                                                                    :
                                                                                    <>
                                                                                        هر
                                                                                    {product.avail_type ? product.avail_type : 'عدد'}
                                                                                    </>
                                                                                }
                                                                                {discount[key] ?
                                                                                    <>

                                                                                        <del className="small">  {numberFormat(price[key] / 10)}  تومان</del>

                                                                                        <span className="badge badge-danger-new   ml-1">{discount[key]}%</span>
                                                                                        <p className="small pro-price-count float-left off">
                                                                                            {numberFormat(((100 - discount[key]) * price[key]) / 1000)} تومان
                                                                                        </p>
                                                                                    </>
                                                                                    :
                                                                                    <p className="small pro-price-count float-left off">{numberFormat(price[key] / 10)} تومان</p>
                                                                                }
                                                                            </>
                                                                            :
                                                                            <>
                                                                            {product.priceid ?
                                                                                <span className="text-danger small">ناموجود</span>
                                                                                :
                                                                                <span className="text-success small">بزودی</span>
                                                                                }
                                                                            </>
                                                                            // <span className="text-success small">بزودی</span>
                                                                        }
                                                                    </p>

                                                                    {/* {() => handleTotal(product.price)} */}
                                                                </div>
                                                            </div>

                                                        </a></Link>

                                                    </div>

                                                    {(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-') ?
                                                        <>
                                                            <div className="col-6 text-center mtr-con">
                                                                {product.avail_type ?
                                                                    <small className="text-muted muted-ak">{product.avail_type}</small>
                                                                    :
                                                                    <small className="text-muted muted-ak">کارتن</small>
                                                                }
                                                                <input type="text" min="0" className="form-control size-palet" defaultValue={count[key]} placeholder="" product="0" id="product_avail" name={`count[${key}]`} onChange={changeCount(key)} />


                                                            </div>
                                                            <div className="col-6 text-center mtr-con">
                                                                <small className="text-muted muted-ak">متراژ</small>
                                                                <input type="text" className="form-control size-calculate" product="0" name="size[]" placeholder="متراژ" value={(size[key] * count[key]).toFixed(2)} />
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <div className="col-6 text-center mtr-con">
                                                                {product.avail_type ?
                                                                    <small className="text-muted muted-ak">{product.avail_type}</small>
                                                                    :
                                                                    <small className="text-muted muted-ak">عدد</small>
                                                                }
                                                                <input type="text" min="0" className="form-control size-palet" defaultValue={count[key]} placeholder="" product="0" id="product_avail" name={`count[${key}]`} onChange={changeCountOne(key)} />


                                                            </div>
                                                        </>
                                                    }


                                                    <input type="hidden" name={`id[${key}]`} value={product.productid} />
                                                    <input type="hidden" name={`priceid[${key}]`} value={product.priceid} />


                                                </div>


                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div className="product-params default parent-btn-sell">
                        <div className=" text-center  fontS-16" itemProp="offers" itemScope={1} itemType="http://schema.org/Offer">
                                            {/***************************************************** new-code *****************************************************/}
                                            <div className=" dk-btn-square-box  " >
                                                <Link href={`/merchants?type=merchant&manufacturor=${(props.factory)?.split(' ').join("+")}`}><a title="نزدیکترین نماینده به شما" className=" dk-btn-square  ">
                                                    <div className="allert-toseller-tile-box ">
                                                    <StoreIcon />
                                                نزدیک ترین نماینده به خود را از
                                            <div className="text-success d-inline"> اینجـا </div> پیدا کنید</div>
                                            <AngleLeft className="AngleLeft w-15px"/>
                                                </a></Link>
                                            </div>
                                            <div className="px-2">
                          <Store priceMerchant={props.listBeranchesPrice} loadBranchesPrice={props.loadBranchesPrice} id={props.id} />
                          </div>  
                                            {/***************************************************** new-code *****************************************************/}

                            {totalcount ?
                                <>

                                    {subtotal ?
                                        <>
                                            <div className="row float-right w-100"  >
                                                <div className="col-12 pt-2 firoozei">
                                                    <span className="float-right h4 mt-0">قیمت کل</span>
                                                    <span className="float-left h4 mt-0">
                                                        <meta itemProp="priceCurrency" content="تومان" />
                                                        <span className="total-prices number" itemProp="price">{numberFormat((subtotal).toFixed() / 10)}</span> تومان

                                </span>

                                                </div>

                                            </div>
                                        </>
                                        :
                                       
                                       
                                         <CommingSoon type={newProduct ? "بزودی" :"ناموجود"} listproduct={products?.map(a => a.productid)} />
                                          
                                       
                                    }
                                </>
                                :
                                <>
                                    <span className="text-info">لطفا تعداد را بیشتر از 1 عدد انتخاب نمایید.</span>
                                </>
                            }
                        </div>
                    
               
                {total ?
                    <div className="col-lg-12 col-md-12 col-sm-12 pt-2">
                        <div className="product-params default">
                            <div className="row-ak catalog text-center w-100">
                                <div className="my-2 default">
                                    <div className="parent-btn">
                                        <button type="submit" title="خرید محصول" className="dk-btn dk-btn-info m-0">
                                            افزودن به سبد خرید 
                                            <img className="add-to-basket" src={`${website}/files/img/add-to-basket3.svg`} alt=""/>

                                        </button>


                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
</div></div>
                <input type="hidden" name="token_cart" value={token_cart} />
                <input type="hidden" name="type" value="product" />
            </form>

            <div className="col-lg-12 col-md-12 col-sm-12 pt-2">
                <div  >

                    <div className="row-ak catalog text-center w-100">

                        <div className="row-ak catalog  default">
                            

                            <div className=" row-ak our-service footer-services sample ">



                                <NemoneRaygan id={props.id} type={props.type} category={props.category} />

                                <div className="service-item colss py-1 ">
                                    <Link disabled={(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-') ? false : true} className={(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-') ? '' : 'disable-ak'} href={(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-') ? `/calculate?url=${website+router.asPath}&img=${(props.imgs && props.imgs[0] ? props.imgs[0].image_path : website+router.asPath)}` : website+router.asPath}><a>
                                        <div className="d-flex-inline">
                                            <div className="img-box">
                                            <img src="https://cerampakhsh.com/files/img/svg/mohasebemetrajs.svg" alt="محاسبه متراژ" /> 
                                            </div>
                                            
                                        </div>
                                    </a></Link>
                                </div>
                                <PrpsPrice id={props.id} type={props.type} price={props.price} category={props.category} />

                                <LessPrice id={props.id} type={props.type} price={props.price} category={props.category} />

                                <AnbohSaz id={props.id} type={props.type} category={props.category} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default withRouter(CountProductTool)