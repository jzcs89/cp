import React from 'react'
import { website } from '../../Services/Helper'
import Link from 'next/link'
import { AngleLeft } from '../../components/icons/SvgIcons'
// import SVG from 'react-inlinesvg';
export default function Box2(props) {
    return (
        <>
         <div className="d-none d-md-block">
            <div className=" row footer-services home-srv   pt-4 pb-5">
                <div className="container-body ">
                    <div className=" row footer-services">
                        <div className="service-item col  ">
                            <Link href="/installment" ><a>
                                <div className="img-box"><img src={`${website}/files/img/5.svg`} className="height-auto" alt=" خرید اقساطی" title=" خرید اقساطی" height="60" width="60" /></div>
                                <h2>خرید اقساطی <AngleLeft/> </h2>
                            </a></Link>
                        </div>
                        <div className="service-item col hidden-xs ">
                            <div className="img-box"><img src={`${website}/files/img/4.svg`} className="height-auto" alt="مشاوره رایگان" title="مشاوره رایگان" height="60" width="60" /></div>
                            <h2>مشاوره رایگان</h2>
                        </div>
                        <div className="service-item col hidden-xs ">
                            <div className="img-box"><img src={`${website}/files/img/3.svg`} className="height-auto" alt="دکور زنده محصولات" title="دکور زنده محصولات" height="60" width="60" /></div>
                            <h2>دکور زنده محصولات</h2>
                        </div>
                        <div className="service-item col  ">
                            <div className="img-box"><img src={`${website}/files/img/2.svg`} className="height-auto" alt="عودت قبل از نصب" title="عودت قبل از نصب" height="60" width="60" /></div>
                            <h2>عودت قبل از نصب </h2>
                        </div>
                        <div className="service-item col  m-auto ">
                            <div className="img-box"><img src={`${website}/files/img/1.svg`} className="height-auto" alt="ضمانت اصالت و کیفیت" title="ضمانت اصالت و کیفیت" height="60" width="60" /></div>
                            <h2>ضمانت اصالت و کیفیت </h2>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}