import React from 'react'

// export default class Product extends Component {
export default function Items(props) {


    return (

        <>
            <ul className="nav nav-decor-tab" role="tablist">




                <li className="box-tabs-tab">
                    <a className="nav-show-jq active show" data-toggle="tab" href="#desc" role="tab" aria-expanded="true" aria-selected="false">
                         مشخصات فنی
                    </a>
                </li>

                {props.showDetails &&
                    <li className="box-tabs-tab">
                        <a className="nav-show-jq  " data-toggle="tab" href="#descriptions" role="tab" aria-expanded="false" aria-selected="true">
                        توضیحات محصول
                        </a>
                    </li>
                }

                <li className="box-tabs-tab">
                    <a data-toggle="tab" href="#questions" role="tab" aria-expanded="false" className="nav-show-jq" aria-selected="false">
                       نظرات کاربران
                        <span itemProp="reviewCount" className="badge-ak danger zero-white">4</span>


                    </a>
                </li>

                <li className="box-tabs-tab">
                    <a data-toggle="tab" href="#doing" role="tab" aria-expanded="false" className="nav-show-jq">
                     فروشندگان
                    </a>
                </li>

              
                {(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-' || props.type === 'decor') &&
                    <>
                       
                        <li className="box-tabs-tab">
                            <a data-toggle="tab" href="#install" role="tab" aria-expanded="false" className="nav-show-jq " aria-selected="true">
                              نصب و نظافت
                            </a>
                        </li>

                        <li className="box-tabs-tab">
                            <a data-toggle="tab" href="#trans" role="tab" aria-expanded="false" className="nav-show-jq" aria-selected="false">
                               بسته بندی و حمل
                            </a>
                        </li>
                        <li className="box-tabs-tab">
                            <a data-toggle="tab" href="#piece" role="tab" aria-expanded="false" className="nav-show-jq">
                               تجهیزات نصب
                            </a>
                        </li>

                    </>
                }
                <li className="box-tabs-tab">
                    <a data-toggle="tab" href="#installment" role="tab" aria-expanded="false" className="nav-show-jq">
                        قسطی خرید کن
                    </a>
                </li>
            </ul>
        </>

    )
}