import React, { useState, useMemo } from 'react'
import Link from 'next/link';
import { Truck } from '../../../components/icons/SvgIcons';
import Axios from '../../../Services/Axios';
import { website } from '../../../Services/Helper';

// export default class Product extends Component {
export default function Transportation(props) {
    const [html, setHtml] = useState({ __html: '' });

    // var __html = https://cerampakhsh.com/skin1/pages/factories/amin-tile/info.html');
    // var template = { __html: __html };

    // let { factory } = useParams()

    useMemo(() => {
   
        Axios({
            method: 'get',
            url: encodeURI('/v1/get-html?url=' + website + '/skin1/pages/factories/' + props.factory + '/transportation.html'),
            data: ''
        })
            .then(response => {
                if(!response?.data?.startsWith("<!DOCTYPE html>")){
                    setHtml(response)
                }
            });
    }, [props])

    return (

        <>
            <div className="tab-pane " id="trans"   aria-expanded="false">
                <div className="row">
                    <div className="container-ak">
                        <h3 className=" jq-dspn-h text-center ">بسته بندی و حمل</h3>
                        <div className="parent-btn text-center  bg-stl border py-5 bg-location mb-5">
                            {props.factory_ &&
                                <Link href={`/merchants?type=transporter&manufacturor=${(props.factory_).toString().split(' ').join("+")}`} title="نزدیکترین حمل کننده به شما " className="dk-btn dk-btn-success m-auto"><a>نزدیکترین حمل کننده به شما <Truck/></a></Link>
                            }
                        </div>
                        <p>محصولاتی که شما انتخاب می‌کنید با بسته‌بندی‌های متفاوتی برای شما ارسال خواهد شد. برای اینکه محصولات مورد نظرتان را سریع‌تر دریافت کنید می‌توانید مشخصات بسته بندی محصول را در نظر داشته باشید تا راحت‌تر بتوانید با در نظر گرفتن تعرفه‌های حمل که بسته به مبدا و مقصد متفاوت خواهند بود، شرکت حمل را انتخاب کرده و زمان دریافت محصول را برای خود کوتاه‌تر کنید. در ضمن اطلاع از شرایط بسته‌بندی محصول هزینه‌های شما را بطور قابل توجهی کاهش خواهد داد.</p>


                        <div className="html-box" dangerouslySetInnerHTML={{ __html: html.data }}></div>



                        <ul className="nav nav-tabs">


                            <li className="nav-item">
                                <a className="btn-firoozei btn-dspn-h nav-link" data-toggle="tab" href="#btn-shp22">قوانین حمل</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn-firoozei btn-dspn-h nav-link" data-toggle="tab" href="#btn-shp32">تعرفه های حمل</a>
                            </li>
                            <li className="nav-item">
                                <a className=" btn-firoozei btn-dspn-h nav-link" href="/mag/%d8%b4%d8%a8%da%a9%d9%87-%d9%87%d8%a7%db%8c-%d8%aa%d9%88%d8%b2%db%8c%d8%b9/" target="_blank">آموزش
                و راهکارها</a>
                            </li>
                        </ul>




                        <div className="tab-content show-tab">

                            {/* <div className="tab-pane container fade" id="btn-shp1">

                        <br />
                        <div className="row">

                            <div className="col-sm-12">
                                <div id="load-map-installer">
                                    <div id="map-installer" className="map" >
                                        {props.merchants &&
                                            <MapCeram data={props.merchants} type='transfor' />
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div> */}
                            <div className="tab-pane container fade" id="btn-shp22">

                                <p>- هنگام خرید کاشی و سرامیک ، 10 درصد بیشتر از نیازتان سفارش دهید.
                            <br />- از یک سنگ راهنما در گوشه کار استفاده کنید.
                            <br />- برای برش کاشی ها و سرامیک ها از شابلون استفاده کنید.
                            <br />- برای لبه های برش خورده از مداد شمعی استفاده کنید.
                            <br />- از مته الماسه برای سوراخ کردن کاشی و سرامیک استفاده کنید.
                            <br />- قبل از ریختن دوغاب اجازه دهید کاشی ها 24 ساعت استراحت کنند.
                            <br />- قبل از نصب کاشی ها همه را بچینید و از ترکیب آن ها مطمئن شوید.
                            <br />- به دوغاب هر شش ماه سیلر بزنید.
                            <br />- در اندازه گیری جایی که می خواهید کاشیکاری کنید دقت زیادی به خرج دهید.
                            <br />- فراموش نکنید که مقدمات و آماده سازی کاشی کاری و سرامیک کاری 75 درصد کل کار است.</p>

                            </div>
                            <div className="tab-pane container fade pt-3 " id="btn-shp32">
                                بزودی در این قسمت بروزترین تعرفه های حمل کشور جهت رفاه حال مشتریان و اطمینان از قیمت های مصوب قرار میگیرد.
                    </div>


                        </div>
                    </div>



                </div>
            </div>
        </>

    )
}
