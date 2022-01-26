
import React from 'react'
import { website } from './../../Services/Helper'
import Link from 'next/link'
import { numberFormat } from './NumberFormat';


// export default class Product extends Component {
function ListCart(props) {

    
    let  listCart = props.listCart

    return (
        <>
            <div className="table-responsive checkout-content default">

                {listCart ?
                    <>
                        {Object.entries(listCart)?.map(([key, cart]) => {
                            return (
                                <>
                                    <div className="row sabad-box">
                                        <div className="col-md-1 col-sm-3 col-3 sabad sabad-i ">
                                            <div className="item product-decor-hover">
                                                <Link href={`/product/${cart?.product?.slug}`}><a>
                                                    <img id={cart?.product?.productid} src={`${website}/${(cart?.product?.thumbnail.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} width="120" border="0" alt={cart?.product?.product} title={cart?.product?.product} />
                                                </a></Link>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-9 col-9 sabad ">
                                            <div className="sabad-txt">
                                                <h6 className="checkout-title">
                                                    <Link href={`/product/${cart?.product?.slug}`} rel="noopener noreferrer"><a>
                                                        {cart?.product?.product}
                                                    </a></Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-12 sabad">
                                            <label htmlFor="sel1">تعداد:</label>

                                            <div className="row">
                                                <div className="col-12">
                                                    {cart.amount}
                                                </div>

                                            </div>
                                        </div>


                                        <div className=" col-md-2 col-sm-4 col-6 sabad">
                                            <label htmlFor="sel1">قیمت هر واحد:</label>
                                            <h6 className="sabad-price">

                                                {cart.discount > 0 ?
                                                    <>
                                                        {/* <del dir="rtl small">{numberFormat((Number(cart.price) * Number(cart.size) / 10).toFixed())} تومان </del> */}
                                                        <span dir="rtl">{numberFormat(((Number(cart.price) * Number(cart.size)) * ( 100 - cart.discount) / 1000).toFixed())} تومان </span>
                                                        <span className="badge badge-danger-new   ">{cart.discount}%</span>
                                                    </>
                                                    :
                                                    <span dir="rtl">{numberFormat((Number(cart.price) * Number(cart.size) / 10).toFixed())} تومان </span>
                                                }

                                            </h6>
                                        </div>

                                        <div className=" col-md-2 col-sm-4 col-6 sabad">
                                            <label htmlFor="sel1">جمع کل کالا:</label>
                                            <h6 className="sabad-price">
                                                {cart.discount ?
                                                    <span dir="rtl">{numberFormat((((Number(cart.price) * Number(cart.amount) * Number(cart.size)) * (100 - cart.discount)) / 1000).toFixed())} تومان </span>
                                                    :
                                                    <span dir="rtl">{numberFormat((((Number(cart.price) * Number(cart.amount) * Number(cart.size))) / 10).toFixed())} تومان </span>
                                                }
                                            </h6>

                                        </div>

                                    </div>
                                </>
                            )
                        })}
                    </>
                    :
                    <>
                        محصولی در این سفارش نیست
                    </>
                }

            </div>
        </>
    )
}

export default ListCart;