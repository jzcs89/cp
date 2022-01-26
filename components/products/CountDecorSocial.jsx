import React, { useState, useMemo, useEffect, useContext } from 'react'

// import { website } from '../../../Services/Helper'
import { numberFormat } from '../sections/NumberFormat'
import { CartContext } from '../../Contexts/CartContext';
import { authContext } from '../../Contexts/AuthContext';
import Axios from '../../Services/Axios';
import CommingSoon from './CommingSoon';
import { ProductSmallContext } from '../../Contexts/ProductSmallContext';
import { toast } from 'react-toastify';
import { getCookie } from '../../Services/getCookie';
import { website } from '../../Services/Helper';
import { useRouter, withRouter } from 'next/router';
import { Spinner } from '../icons/SvgIcons';

function CountDecorSocial(props) {
    let router = useRouter()
    const cContext = useContext(CartContext)
    const userContext = useContext(authContext)


    const proSmall = useContext(ProductSmallContext)


    let [total, setTotal] = useState(0)
    let [subtotal, setsubTotal] = useState(0)
    let [totalcount, setTotalcount] = useState(0)
    let [newProduct, setnewProduct] = useState(1)
    let [loder, setLoder] = useState(false)
    let [loder2, setLoder2] = useState(false)
    let [goToCart, setgoToCart] = useState(false)
    let [size, setSize] = useState([])
    let [count, setCount] = useState([])
    // let [kafOrDivar, setkafOrDivar] = useState('کف')
    let kafCalculate = ((getCookie("calculat-kaf") !== null) ? getCookie("calculat-kaf") : null)
    let divarCalculate = ((getCookie("calculat-divar") !== null) ? getCookie("calculat-divar") : null)
    let [price, setPrice] = useState([])
    let [discount, setdiscount] = useState([])
    const [cartSubmit, setCartSubmit] = useState('v1/add-cart/product')
    const [token_cart, setTokenCart] = useState((getCookie("token_cart")) ? getCookie("token_cart") : null)

    useEffect(() => {
        if ((userContext.data && userContext.data.token && getCookie("token") !== 'undefined')) {
            setCartSubmit('v1/add-cart/product/user?token=' + (userContext.data.token)?.replace(/\r?\n|\r/g, ''))
        }
    }, [])

    const products = props.products;


    useMemo(() => {
        // let row = 0;
        let count_ = [];
        let size_ = [];
        let price_ = [];
        let discount_ = [0];
        let value_ = [];
        let sizePrime = parseFloat(1.0)
        if (products) {
            (products)?.map(function (product, key_) {
                count_[key_] = 1; setCount(count_)
                price_[key_] = product.price; setPrice(price_)
                discount_[key_] = product.discount; setdiscount(discount_);
                size_[key_] = 1; setSize(size_)
                product.extrafieldvalues &&
                    Object.entries(product.extrafieldvalues)?.map(([key, extra]) => {

                        if (extra.field === "متراژ در کارتن") {


                            size_[key_] = (product.ratio) ? Number(product.ratio) : Number((extra.value).replace('/', '.'))
                            setSize(size_)
                            price_[key_] = product.price
                            setPrice(price_)
                            discount_[key_] = product.discount
                            setdiscount(discount_)
                            setTotal(total => (Number(product.price) * Number((extra.value).replace('/', '.'))) + Number(total))
                            setsubTotal(subtotal => (((100 - Number(product.discount)) * (Number(product.price) * Number((extra.value).replace('/', '.')))) / 100) + Number(subtotal))
                            return true
                        }
                        if (extra.fieldid === 3) {
                            value_.push(extra.value)
                        }
                        if (extra.fieldid === 6 && (extra.value)?.includes('دیوار') && divarCalculate) {

                            count_[key_] = Number(divarCalculate)
                            setCount(count_)
                            return true

                        } else if (extra.fieldid === 6 && (extra.value)?.includes('کف') && kafCalculate) {
                            count_[key_] = Number(kafCalculate)
                            setCount(count_)
                            return true

                        } if (extra.fieldid === 394 && (extra.value) === ('دیوار') && divarCalculate) {
                            count_[key_] = Number(divarCalculate)
                            setCount(count_)
                            return true

                        } else if (extra.fieldid === 394 && (extra.value) === ('کف') && kafCalculate) {

                            count_[key_] = Number(kafCalculate)
                            setCount(count_)
                            return true
                        } else if (extra.fieldid === 6 && kafCalculate) {
                            count_[key_] = Number(kafCalculate)
                            setCount(count_)
                            return true

                        }
                        setTotalcount(totalcount => Number(count_[key_]) + Number(totalcount))
                        if (newProduct && product.priceid && product.price === 0) {
                            setnewProduct(0)
                        }
                        return true
                    })
                return true
            });
        }
        setTotal(0)
        setsubTotal(0)
        setTotalcount(0)

        Object.entries(count_)?.map(([item, value]) => {
            if (products.length === 2) {
                if (value_[item] === 'روشن') {
                    sizePrime = parseFloat(2 / 3)
                } else if (value_[item] === 'تیره') {
                    sizePrime = parseFloat(1 / 3)
                } else if (value_[item] === 'ساده') {
                    sizePrime = parseFloat(1 / 2)
                }
            }

            if (products.length > 2) {
                if (value_[item] === 'روشن') {
                    sizePrime = parseFloat(2 / 3)
                } else if (value_[item] === 'تیره') {
                    sizePrime = parseFloat(1 / 3)
                } else if (value_[item] === 'ساده') {
                    sizePrime = parseFloat(1 / 2)
                } else {
                    sizePrime = Number(1 / ((5 * products.length) - 10))
                }
            }

            count_[item] = Math.ceil((count_[item]) / (size_[item] / sizePrime))
            setCount(count_)
            setTotal(total => (Number(price_[item]) * Number(size_[item]) * Number(count_[item])) + Number(total))
            setsubTotal(subtotal => (((100 - discount_[item]) * (Number(price_[item]) * Number(size_[item]) * Number(count_[item])) / 100) + Number(subtotal)))
            setTotalcount(totalcount => Number(count_[item]) + Number(totalcount))
            return true
        });
        if (process.browser) {
            document.cookie = `calculat-divar=; path=/;max-age=` + 0;
            document.cookie = `calculat-kaf=; path=/;max-age=` + 0;
        }
    }, [props.products])

    const changeCount = (key) => (event) => {
        count[key] = englishNumber(event.target.value);
        if (count[key] && count[key] < 0) {
            count[key] = 0
            event.target.value = 0
            setCount(count)
        }
        if (count[key] > 5000) {
            count[key] = 5000
            event.target.value = 5000
            setCount(count)
        }
        setCount(count)
        setTotal(0)
        setsubTotal(0)
        setTotalcount(0)
        count?.map((value, item) => {
            setTotal(total => (Number(price[item]) * Number(size[item]) * Number(count[item])) + Number(total))
            setsubTotal(subtotal => (((100 - discount[item]) * (Number(price[item]) * Number(size[item]) * Number(count[item])) / 100) + Number(subtotal)))
            setTotalcount(totalcount => Number(count[item]) + Number(totalcount))
            return true
        })
    }

    const englishNumber = (str) => {

        var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
            arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
        }
        return str;
    }

    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        setLoder(true)
        if (goToCart) {
            setLoder2(true)
        }
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

                toast(response.data.message, { type: response.data.status })


                proSmall.setProductSmall({
                    ...proSmall,
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

                if (goToCart) {
                    setLoder2(false)
                    router.push('/cart')
                }

                setLoder(false)
            });
    }
    return (

        <>

            <form method="post" onSubmit={handleSubmit(cartSubmit)} className="pcp-hidden ajaxCart">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="product-guarantee default m-0">
                        <ul className="list-group">
                            {products &&
                                Object.entries(products)?.map(([key, product]) => {
                                    return (
                                        <>
                                            <li className="list-group-item metraj">
                                                <div className="row">
                                                    <div className="col-2 text-right px-0 pb-2">
                                                        <div className="row">
                                                            <div className="col-12  p-0 ">
                                                                <img className="row-list-add-cart-img-product" itemProp="image" src={`${website}/resize/small/${(product.thumbnail?.image_path)?.replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} height="30" width="50" alt={product.product} title={product.product} />
                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="col-10 p-0 pr-2 d-flex align-items-center">

                                                        <div className="col-6 text-center mtr-con">
                                                            {product.avail_type ?
                                                                <small className="text-muted muted-ak">{product.avail_type}</small>
                                                                :
                                                                <small className="text-muted muted-ak">کارتن</small>
                                                            }
                                                            <input type="text" min="0" className="form-control size-palet " defaultValue={count[key]} placeholder="" product="0" id="product_avail" name={`count[${key}]`} onChange={changeCount(key)} />


                                                        </div>
                                                        {product.avail_type !== 'عدد' &&
                                                            <div className="col-6 text-center mtr-con">

                                                                {product.avail_type === 'عدد' ?
                                                                    <small className="text-muted muted-ak">{product.avail_type}</small>
                                                                    :
                                                                    <small className="text-muted muted-ak">متراژ</small>
                                                                }

                                                                <input type="text" className="form-control size-calculate" product="0" name="size[]" placeholder="متراژ" value={(size[key] * count[key]).toFixed(2)} />
                                                            </div>

                                                        }
                                                    </div>



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

                    <div className="clearfix">
                    </div>



                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 pt-2">

                    <div className="product-params default parent-btn-sell">

                        <div className=" text-center  fontS-16" itemProp="offers" itemScope={1} itemType="http://schema.org/Offer">

                            {totalcount ?
                                <>
                                    {subtotal ?
                                        <>


                                            <div className="col-12 firoozei pt-2">
                                                <span className="float-right h4 mt-0">قیمت کل</span>
                                                <span className="float-left h4 mt-0">
                                                    <meta itemProp="priceCurrency" content="تومان" />

                                                    <span className="total-prices number" itemProp="price">{numberFormat(((subtotal) / 10).toFixed())}</span> تومان

                                                </span>
                                                <link itemProp="itemCondition" href="http://schema.org/UsedCondition" />
                                                <br />
                                                <link itemProp="availability" href="http://schema.org/InStock" />

                                            </div>
                                        </>
                                        :

                                        <CommingSoon type={newProduct ? "بزودی" : "ناموجود"} listproduct={products?.map(a => a.productid)} />

                                    }
                                </>
                                :
                                <>
                                    <span className="text-info">لطفا تعداد را بیشتر از 1 عدد انتخاب نمایید.</span>
                                </>
                            }

                        </div>



                        {total ?
                            <div className="row-ak catalog text-center w-100">
                                <div className="my-2 default">
                                    <div className="parent-btn">
                                        <button type="submit" title="خرید محصول" className="dk-btn dk-btn-info basket-one" onClick={() => setgoToCart(true)}>
                                            افزودن به سبد خرید

                                            <img className="add-to-basket" src={`${website}/files/img/add-to-basket3.svg`} alt="" />

                                        </button>
                                        <div className="w-100">
                                            <div className="row-ak basket-two">
                                                <div className="col-6 ">
                                                    <button type="submit" className="  btn  w-100 btn-success" onClick={() => setgoToCart(false)}>
                                                        {loder ?
                                                            <Spinner className=" m-0 spinner fa-spin" />
                                                            :
                                                            <> افزودن به سبد خرید
                                                            </>
                                                        }
                                                    </button>
                                                </div>
                                                <div className="col-6 ">
                                                    <button type="submit" className="btn  w-100 btn-firoozei" onClick={() => setgoToCart(true)}>
                                                        {loder2 ?
                                                            <Spinner className=" m-0 spinner fa-spin" />
                                                            :
                                                            <>
                                                                ثبت سفارش
                                                            </>
                                                        }
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                </div>

                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>

                <input type="hidden" name="token_cart" value={token_cart} />
                <input type="hidden" name="type" value="product" />
            </form>


        </>

    )
}


export default withRouter(CountDecorSocial);