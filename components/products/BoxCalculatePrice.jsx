import React from 'react'
import Link from 'next/link'
import { StoreIcon } from '../../../components/icons/SvgIcons';

import { website } from './../../../Services/Helper'
import { AngleLeft } from './../../../components/icons/SvgIcons';


function BoxCalculatePrice(props) {

    const products = props.products
    return (
        <>
            <form method="post" className="pcp-hidden ajaxCart">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="product-guarantee default m-0">
                        <ul className="list-group">
                            {products &&
                                Object.entries(products)?.map(([index,product]) => {
                                    return (
                                        <>
                                            <li className="list-group-item metraj">
                                                <div className="row">
                                                    <div className="col-12 text-right px-0 py-2">
                                                    <Link href={`/product/${product.slug}`}><a>
                                                            <div className="row">
                                                                <div className="col-2 p-0">
                                                                    <img className="row-list-add-cart-img-product" itemProp="image" src={`${website}/resize/small/${(product.thumbnail?.image_path)?.replace('/var/www/vhosts/cerampakhsh.com/httpdocs', '')}`} height="30" width="50" alt={product.product} title={product.product} />
                                                                </div>
                                                                <div className="col-10 p-0 pr-2">
                                                                    <div className="one-line">
                                                                    {product?.extrafieldvalues?.filter(val=>(val.fieldid == 18 || val.fieldid == 3)).reverse().reduce((result, extra)=> result= extra?.value ? extra.value : product.productcode,'')
                                                                    }
                                            
                                                                    </div>
                                                                    <p className="small text-secondary mb-1 pro-price-count">
                                                                    
                                                                    {product.priceid && product.price == 0 ?
                                                                        <span className="text-danger small">ناموجود</span>
                                                                                    :
                                                                        <span className="text-success small">بزودی</span>
                                                                    }
                                                                    
                                                                    {/* {price[key] ?
                                                                            <>
                                                                                {(product.avail_type === 'عدد' || product.avail_type === 'بسته') ?
                                                                                    <>هر {product.avail_type} </>
                                                                                    :
                                                                                    <>هر متر مربع</>
                                                                                }
                                                                                {discount[key] ?
                                                                                    <>

                                                                                        <del className="small">  {numberFormat(price[key] / 10)}  تومان</del>

                                                                                        <span className="badge badge-danger-new   mr-1">{discount[key]}%</span>
                                                                                        <p className=" pro-price-count float-left off">
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
                                                                        } */}
                                                                        {/* هر متر مربع
                                                                        <p className="small pro-price-count float-left off">
                                                                            ۹۰٬۰۰۰ تومان
                                                                        </p> */}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                    </a></Link>
                                                    </div>
                                                    <div className="col-6 text-center mtr-con">
                                                        <small className="text-muted muted-ak">کارتن</small>
                                                        <input type="text" min="0" className="form-control size-palet " placeholder="" product="0" id="product_avail" name="count[0]" value="1" />
                                                    </div>
                                                    <div className="col-6 text-center mtr-con">
                                                        <small className="text-muted muted-ak">متراژ</small>
                                                        <input type="text" className="form-control size-calculate" product="0" name="size[]" placeholder="متراژ" value="1.08" />
                                                    </div>
                                                    <input type="hidden" name="id[0]" value="8532" />
                                                    <input type="hidden" name="priceid[0]" value="58620" />
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
                        <div className=" text-center  fontS-16" itemProp="offers" itemType="http://schema.org/Offer">
                            <div className=" dk-btn-square-box  ">
                                <Link href="/merchants?type=merchant&amp;manufacturor=نوین+سرام"><a title="نزدیکترین نماینده به شما" className=" dk-btn-square  ">
                                    <div className="allert-toseller-tile-box ">
                                        <span> <StoreIcon />
                                    
                                        </span>نزدیک ترین نماینده به خود را از<div className="text-success d-inline"> اینجـا </div> پیدا کنید</div>
                                        <AngleLeft className="AngleLeft w-15px"/>
                                   
                                </a></Link>
                            </div>
                            <div className="px-2">
                                <div className="form-group-anbar">
                                    <select className="form-control my-2" id="sel1">
                                        <option> قیمت تامین‌کنندگان</option>
                                    </select>
                                    <label className="text-right" htmlFor="sel1">انتخاب انبار: </label>
                                </div>
                            </div>
                            <div className="col-12 firoozei pt-2">
                                <span className="float-right h4 mt-0">قیمت کل</span>
                                <span className="float-left h4 mt-0">
                                    <meta itemProp="priceCurrency" content="تومان" />
                                    <span className="total-prices number" itemProp="price">۳۲۴٬۰۰۰</span> تومان</span>
                                <link itemProp="itemCondition" href="http://schema.org/UsedCondition" />
                                <br />
                                <link itemProp="availability" href="http://schema.org/InStock" />
                            </div>
                        </div>
                        <div className="row-ak catalog text-center w-100">
                            <div className="my-2 default">
                                <div className="parent-btn">
                                    <button type="submit" title="خرید محصول" className="dk-btn dk-btn-info">افزودن به سبد خرید<img className="add-to-basket" src="https://cerampakhsh.com/files/img/add-to-basket3.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="token_cart" value="5059bf43-34e2-4352-a7f6-3ebb99550303" />
                <input type="hidden" name="type" value="product" />

            </form>
        </>
    )
}


export default withRouter(BoxCalculatePrice);