import React from 'react'
import { website } from './../../../Services/Helper'
import Link from 'next/link'
import Slider from "react-slick";
import { ArrowNext, ArrowPrev } from '../../sections/Arrow';
export default function Tools() {

    return (

        <>
            <div className="tab-pane " id="piece" aria-expanded="false">
                {/* <div dangerouslySetInnerHTML={{ __html: html.data }}></div> */}








                <h3 className="text-center">مراحل نصب </h3>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 col-sm-12">
                        <ul className="nav nav-pills">
                            <li className="col-md-2"></li>

                            <li className="nav-item col-md-2 col-3 ">
                                <a className="nav-link ins-btn" data-toggle="pill" href="#insmenu1">
                                    <img className="img-sec" src={`${website}/files/img/static/101.png`} title="تخریب، محاسبه" alt="تخریب، محاسبه" />
                                    <h5>تخریب، محاسبه</h5>
                                </a>
                            </li>
                            <li className="nav-item col-md-2 col-3 ">
                                <a className="nav-link ins-btn" data-toggle="pill" href="#insmenu2">
                                    <img className="img-sec" src={`${website}/files/img/static/102.png`} title="مصالح و تجهیزات" alt="مصالح و تجهیزات" />
                                    <h5>مصالح و تجهیزات</h5>
                                </a>
                            </li>
                            <li className="nav-item col-md-2 col-3 ">
                                <a className="nav-link ins-btn" data-toggle="pill" href="#insmenu3">
                                    <img className="img-sec" src={`${website}/files/img/static/103.png`} title="نصب و تکمیل" alt="نصب و تکمیل" />
                                    <h5>نصب و تکمیل</h5>
                                </a>
                            </li>
                            <li className="nav-item col-md-2 col-3 ">
                                <a className="nav-link ins-btn" data-toggle="pill" href="#insmenu4">
                                    <img className="img-sec" src={`${website}/files/img/static/104.png`} title="نصب و تکمیل" alt="نصب و تکمیل" />
                                    <h5>نظافت و نگهداری</h5>
                                </a>
                            </li>
                            <li className="col-md-2"></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Tab panes --> */}
                <div className="tab-content mt-5 ">









                    <div className="tab-pane container fade" id="insmenu1">
                        <div className="container-ak ">
                            <h4 className="text-center">تخریب، محاسبه</h4>
                            <p>امروزه کاشی و سرامیک در قسمت های مختلفی مورد استفاده قرار می گیرد که ممکن است بعد از مدتی بخاطر وارد شدن ضربه یا افتادن وسیله سنگین بر روی آن، دچار شکستگی شود و نیاز به تعویض آن وجود داشته باشد. برخی کاشی های شکسته را با چسب به یکدیگر می چسبانند
                                که شاید این راه حل خوب باشد اما قسمت شکسته و ترک خورده قابل مشاهده است و مخصوصا در قسمت هایی از فضا که جلوی دید است ممکن است جالب نباشد و نتیجه رضایت بخشی نداشته باشد. عوض کردن کاشی شکسته؛ به نظر آسان است و نیاز به ابزار و وسیله خاصی نمی
                                باشد اما باید نکاتی را رعایت نمایید که در هنگام تعویض کاشی شکسته، به کاشی های مجاور آن ضربه ای وارد نشود و دچار شکستگی و لب پریدگی نگردند. در ضمن برای اجرای سرامیک ابتدا باید مساحت قسمتی را که قصد دارید سرامیک کنید، اندازه گیری نمایید.
                            </p>

                            <h4 className="text-center">مراحل تعویض کاشی شکسته: </h4>
                            <p> در ابتدای کار باید کاشی های مجاور کاشی شکسته، با نوار چسب پوشانده شود که در هنگام تعویض به لبه های کاشی های مجاور ضربه ای وارد نشود.
                                <br /> در مرحله بعدی برای جدا کردن کاشی شکسته، می توان با استفاده از مته و یا میخ در روی سطح کاشی سوراخ هایی ایجاد کنیم که با اینکار کاشی بدون لایه لایه شدن ترک میخورد و شکستن و از جا در آوردن آن راحت تر می شود، سپس با استفاده از سوراخ کن
                                و چکش، به آرامی دوغاب اطراف کاشی را جدا کرده و از قلم درز و چکش یا اسکنه برای کندن کاشی از کف استفاده نمایید.
                            </p>






                            <h4 className="text-center">ابزار آلات مورد نیاز </h4>


                            <Slider

                                {...{
                                    dots: true,
                                    infinite: false,
                                    speed: 500,
                                    slidesToShow: 8,
                                    slidesToScroll: 1,
                                    nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                                    prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 8, slidesToScroll: 1, infinite: true, dots: true
                                            }
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 2, slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 0,
                                            settings: {
                                                slidesToShow: 1, slidesToScroll: 1
                                            }
                                        },
                                    ]
                                }}

                            >
                                <div className="item">
                                    <Link href="/product/%D8%AE%D8%B7-%DA%A9%D8%B4-%DA%A9%D9%86%D8%AC"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                        <img src={`${website}/files/img/static/tools/خطکش-کنج.jpg`} title="خط کش کنج" alt="خط کش کنج" />
                                        <h6>خط کش کنج</h6>
                                    </a></Link>

                                </div>

                                <div className="item">
                                <Link href="/product/شابلون-لوله-دو-بازو"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                        <img src={`${website}/files/img/static/tools/کنج-متر.jpg`} title="کنج متر" alt="کنج متر" />
                                        <h6>کنج متر</h6>
                                    </a></Link>

                                </div>

                                <div className="item">
                                    <Link href="/products/تخریب-ومحاسبه"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                        <img src={`${website}/files/img/static/tools/other.jpg`} title="مشاهده محصولات بیشتر" alt="مشاهده محصولات بیشتر" />
                                        <h6>مشاهده محصولات بیشتر</h6>
                                    </a></Link>

                                </div>

                            </Slider>
                        </div>
                    </div>










                    <div className="tab-pane container fade" id="insmenu2">
                        <div className="container-ak">
                            <h4 className="text-center">مصالح و تجهیزات</h4>
                            <p>برای انجام کار کاشی کاری منزل یا محل کارتان در ابتدا باید کاشی مورد نظر را براساس رنگ و طرح از میان برندهای متنوع در سرام پخش انتخاب کرده و بعد از آن اگر تصمیم داشتید تا عملیات نصب را خودتان انجام دهید البته بعد از آگاهی و دیدن فیلم های آموزشی
                                لازمه و کسب اطلاعات و مهارت لازمه این حرفه می توانید تجهیزات نصب از قبیل؛ تجهیزات ایمنی شخصی و تجهیزات نصبی را انتخاب کرده و تهیه کنید. البته برای اینکه مراحل کار سریعتر و با کیفیت بهتری انجام پذیرد، می توانید با نصابان این حرفه ارتباط
                                برقرار کرده و با ارائه محل مورد نظر و دیدن رزومه فردی آن ها، تعمیرات یا اجرای کار را به آن ها بسپارید.</p>
                            <h4 className="text-center">ابزار آلات مورد نیاز </h4>
                        </div>
                        <Slider

                                {...{
                                    dots: true,
                                    infinite: true,
                                    speed: 500,
                                    slidesToShow: 8,
                                    slidesToScroll: 1,
                                    nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                                    prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 8, slidesToScroll: 1, infinite: true, dots: true
                                            }
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 2, slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 0,
                                            settings: {
                                                slidesToShow: 1, slidesToScroll: 1
                                            }
                                        },
                                    ]
                                }}

                            >

                            <div className="item">
                            <Link href="/product/%D9%85%DB%8C%DA%A9%D8%B3%D8%B1-%DA%86%D8%B3%D8%A8-%D9%BE%D9%88%D8%AF%D8%B1%DB%8C-%D9%88-%D8%B3%DB%8C%D9%85%D8%A7%D9%86" ><a className="blank-link" onClick="return false;"target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/میکسر-چسب-پودری-و-سیمان.jpg`} title="میکسر چسب پودری و سیمان" alt="میکسر چسب پودری و سیمان" />
                                    <h6>میکسر چسب پودری و سیمان</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D8%AF%D8%B3%D8%AA%DA%A9%D8%B4"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/دستکش.jpg`} title="دستکش" alt="دستکش" />
                                    <h6>دستکش</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/ملات-همه-کاره"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/ملات-همه-کاره.jpg`} title="ملات همه کاره" alt="ملات همه کاره" />
                                    <h6>ملات همه کاره</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D9%85%D8%A7%DB%8C%D8%B9-%D9%88-%D8%A7%D8%B3%D9%BE%D8%B1%DB%8C-%DA%86%D8%B3%D8%A8-%DB%B1%DB%B2%DB%B3"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/مایع-و-چسب1.2.3.jpg`} title="مایع چسب1.2.3" alt="مایع چسب1.2.3" />
                                    <h6>مایع چسب1.2.3</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/products/مصالح-و-تجهیزات"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/other.jpg`} title="مشاهده محصولات بیشتر" alt="مشاهده محصولات بیشتر" />
                                    <h6>مشاهده محصولات بیشتر</h6>
                                </a></Link>

                            </div>
                        </Slider>



                    </div>





                    <div className="tab-pane container fade" id="insmenu3">
                        <div className="container-ak">
                            <h4 className="text-center">نصب و تکمیل</h4>
                            <p>برای نصب کاشی و سرامیک در ابتدا باید از زیرسازی که در مرحله تخریب انجام پذیرفت، اطمینان حاصل کرد و بعد از آن آماده سازی چسب/ملات را انجام داد تا مراحل نصب کاشی را طی کنید و با توجه به انبساط و انقباضی که مخصوصا در ساختمان های اسکلت فلزی ایجاد
                                می&zwnj;شود، باعث می شود که سرامیک ها در اثر این سرما و گرما روی یکدیگر بلغزند و باعث لب پریدگی یا ترک خوردن یا جداشدن سرامیک ها شود در نتیجه بندکشی علاوه بر زیباتر شدن محیط از نظر فنی برای نصب سرامیک ها لازم و ضروری است.</p>

                            <h4 className="text-center">ابزار آلات مورد نیاز </h4>
                        </div>


                        <Slider

                                {...{
                                    dots: true,
                                    infinite: true,
                                    speed: 500,
                                    slidesToShow: 8,
                                    slidesToScroll: 1,
                                    nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                                    prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 8, slidesToScroll: 1, infinite: true, dots: true
                                            }
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 2, slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 0,
                                            settings: {
                                                slidesToShow: 1, slidesToScroll: 1
                                            }
                                        },
                                    ]
                                }}

                            >


                            <div className="item">
                            <Link href="/product/%D9%87%D9%85%D8%AA%D8%B1%D8%A7%D8%B2-%DA%A9%D8%A7%D8%B4%DB%8C-%D9%88-%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/همتراز-کاشی-و-سرامیک.jpg`} title="همتراز کاشی و سرامیک" alt="همتراز کاشی و سرامیک" />
                                    <h6>همتراز کاشی و سرامیک</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D9%BE%D9%84-%D8%AA%D8%B1%D8%A7%D8%B2-%DA%A9%D8%A7%D8%B4%DB%8C-%D9%81%DB%8C%DA%A9%D8%B3-%D8%AA%D8%A7%DB%8C%D9%84" ><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/پل-تراز.jpg`} title="پل تراز" alt="پل تراز" />
                                    <h6>پل تراز</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D8%A2%DA%86%D8%A7%D8%B1-%D9%BE%D9%84%D8%A7%D8%B3%D8%AA%DB%8C%DA%A9%DB%8C-%D8%AA%D8%B1%D8%A7%D8%B2-%DA%A9%D8%A7%D8%B4%DB%8C"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/آچار-تراز-پلاستیکی.jpg`} title="آچار تراز پلاستیکی" alt="آچار تراز پلاستیکی" />
                                    <h6>آچار تراز پلاستیکی</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D8%A2%DA%86%D8%A7%D8%B1-%D9%81%D9%84%D8%B2%DB%8C-%D8%AA%D8%B1%D8%A7%D8%B2-%DA%A9%D8%A7%D8%B4%DB%8C"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/آچار تراز فلزی.jpg`} title="آچار تراز فلزی" alt="آچار تراز فلزی" />
                                    <h6>آچار تراز فلزی</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D8%A7%D8%B3%DA%A9%D9%88%D9%BE-%D8%A8%D8%B2%D8%B1%DA%AF-%D9%BE%D8%B1%D9%88%D8%A7%D9%86%D9%87-%D8%A7%DB%8C%DB%8C-%DA%A9%D8%A7%D8%B4%DB%8C"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/اسکوپ-بزرگ-پروانه-ای.jpg`} title="اسکوپ بزرگ پروانه ای" alt="اسکوپ بزرگ پروانه ای" />
                                    <h6>اسکوپ بزرگ پروانه ای</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/-%D9%85%DA%A9%D9%86%D8%AF%D9%87-%DA%A9%D8%A7%D8%B4%DB%8C-%D8%B3%D9%87-%D9%82%D8%A7%D9%BE%DA%A9%D9%87-%D9%81%DB%8C%DA%A9%D8%B3-%D8%AA%D8%A7%DB%8C%D9%84"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/مکنده-کاشی.jpg`} title="مکنده کاشی" alt="مکنده کاشی" />
                                    <h6>مکنده کاشی</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D9%85%D8%A7%D9%84%D9%87-%D8%B4%D8%A7%D9%86%D9%87-%D8%A7%DB%8C%DB%8C-%D9%85%DB%8C%D9%84-W"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/ماله-شانه-ای.jpg`} title="ماله شانه ای" alt="ماله شانه ای" />
                                    <h6>ماله شانه ای</h6>
                                </a></Link>

                            </div>



                            <div className="item">
                            <Link href="/products/نصب-و-تکمیل"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/other.jpg`} title="مشاهده ی محصولات بیشتر" alt="مشاهده ی محصولات بیشتر" />
                                    <h6>مشاهده ی محصولات بیشتر</h6>
                                </a></Link>

                            </div>





                        </Slider>


                    </div>

                    <div className="tab-pane container fade" id="insmenu4">
                        <div className="container-ak">
                            <h4 className="text-center">نظافت و نگهداری</h4>
                            <p>بهترین و در دسترس ترین روش برای تمیز کردن سرامیک ها استفاده از مخلوط آب با پودرهای شستشو می باشد ولی برای تمیز کردن لکه های قوی مثل جوهر و چای و… می&zwnj;توان ازمخلوط آب و مواد سفیدکننده استفاده کرد. برای تمیز کردن درزها می&zwnj;توان از بخار شور استفاده
                                کرد اگر در دسترس ندارید مخلوط یکسان آب و جوش شیرین را به مدت شب تا صبح روی درزها ریخته و بعد با یک مسواک محکم تمیزش کنید. در کاشی های ضد اسیدی برای تمیز کردن آنها می&zwnj;توان از شوینده و مواد شیمیایی قوی استفاده کرد. از برس ها و ابزارهای خشن
                                برای تمیز کردن سطح کاشی استفاده نکنید .
                            </p>
                            <h4 className="text-center">ابزار آلات مورد نیاز </h4>
                        </div>

                        <Slider

                                {...{
                                    dots: true,
                                    infinite: true,
                                    speed: 500,
                                    slidesToShow: 8,
                                    slidesToScroll: 1,
                                    nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                                    prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 8, slidesToScroll: 1, infinite: true, dots: true
                                            }
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 4, slidesToScroll: 1, initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 2, slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 0,
                                            settings: {
                                                slidesToShow: 1, slidesToScroll: 1
                                            }
                                        },
                                    ]
                                }}

                            >

                            <div className="item">
                            <Link href="/product/%D9%85%D8%A7%D9%84%D9%87-%D8%A8%D9%86%D8%AF%DA%A9%D8%B4%DB%8C"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/ماله-بندکشی.jpg`} title="ماله بندکشی" alt="ماله بندکشی" />
                                    <h6>ماله بندکشی</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D8%A7%D8%B3%D9%81%D9%86%D8%AC"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/اسفنج.jpg`} title="اسفنج" alt="اسفنج" />
                                    <h6>اسفنج</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/product/%D8%AC%D8%A7%D8%B1%D9%88-%D8%B5%D9%86%D8%B9%D8%AA%DB%8C-%D8%AF%D8%B3%D8%AA%DB%8C"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/جارو-صنعتی-دستی.jpg`} title="جارو صنعتی دستی" alt="جارو صنعتی دستی" />
                                    <h6>جارو صنعتی دستی</h6>
                                </a></Link>

                            </div>

                            <div className="item">
                            <Link href="/products/نظافت-و-نگهداری"><a className="blank-link" onClick="return false;" target="_blank" rel="noreferrer">
                                    <img src={`${website}/files/img/static/tools/other.jpg`} title="مشاهده محصولات بیشتر" alt="مشاهده محصولات بیشتر" />
                                    <h6>مشاهده محصولات بیشتر</h6>
                                </a></Link>

                            </div>
                        </Slider>
                    </div>
                </div>
            </div>






        </>

    )
}

