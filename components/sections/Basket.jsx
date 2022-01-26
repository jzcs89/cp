import React, { useContext, useState } from 'react'

import { CartContext } from '../../Contexts/CartContext';
import { numberFormat } from './NumberFormat';
import Link from 'next/link'
import { ShoppingBasket } from './../icons/SvgIcons';
import Config from '../../configs/Cerampakhsh';

export default function Basket(props) {

    const cContext = useContext(CartContext)
    const [showCart, setshowCart] = useState(false)


    return (< >


        <div className="dropdown hdr-basket cursor-pointer">
            <div className="btn-basket dropdown-toggle " onClick={(e) => setshowCart(!showCart)}>
                <ShoppingBasket className="border-left ml-1 pl-1  w-25px" />
                سبد خرید
                {(cContext && cContext.cart && cContext.cart.cart && cContext.cart.cart.orderdetails && (cContext.cart.cart.orderdetails).length > 0) &&

                    <span className="count-basket">{(cContext.cart.cart.orderdetails).length}</span>
                }

            </div>

            <div onClick={(e) => setshowCart(false)} className={showCart ? '' : 'd-none'} style={{
                height: '100%',
                width: '100%',
                top: '0',
                left: '0',
                position: 'fixed',
                background: '#00000040'
            }}></div>
            <div  onClick={(e) => setshowCart(!showCart)} className={`dropdown-menu sabad ${showCart ? 'show' : ''}`} style={{position:'absolute',    marginTop: 20}}>


                {(cContext && cContext.cart && cContext.cart.cart && cContext.cart.cart.orderdetails && (cContext.cart.cart.orderdetails).length > 0) ?
                    <>
                        <div className="basket-box" >
                            <div className="basket-header">
                                <div className="basket-total">
                                    <span>مبلغ کل خرید:</span>

                                    <span> {numberFormat((cContext.cart.cart.subtotal / 10).toFixed())} تومان</span>
                                </div>

                            </div>
                            <div className="basket-list">


                                {cContext.cart.cart.orderdetails && Object.entries(cContext.cart.cart.orderdetails)?.map(([key, cart]) =>
                                    <div key={key} className="basket-item-content row-ak">
                                        <div className="basket-item-image col-2 p-0">
                                            {cart && cart.product && cart.product.thumbnail && cart.product.thumbnail.image_path ?
                                                <img className="p-1" alt="  کاشی سرامیک" title="  کاشی سرامیک" src={`https://cerampakhsh.com/resize/small/${(cart.product.thumbnail.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} />
                                                :
                                                <img className="p-1" alt="  کاشی سرامیک" title="  کاشی سرامیک" src={Config.logo} />
                                            }
                                        </div>
                                        <div className="basket-item-details col-10 p-0">
                                            <div className="basket-item-title">{cart?.product?.product}</div>
                                            <div className="basket-item-params col-12">
                                                <div className="basket-item-props">
                                                    <span> {cart.amount} عدد</span>
                                                    <span> قیمت هر واحد:<label>{numberFormat(cart.price / 10)} تومان</label></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}

                            </div>
                            <Link href="/cart"><a className="basket-submit">سبد خرید </a></Link>
                        </div>


                    </>
                    :
                    <div className="basket-box" >
                        <div className="basket-list">
                            <Link href="/cart"><a className="basket-submit">سبد خرید شما خالی میباشد.</a></Link>
                        </div>
                    </div>
                }




            </div>
        </div>
    </>
    )
}