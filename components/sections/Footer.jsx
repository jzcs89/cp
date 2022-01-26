import React, { useState } from 'react';
import dynamic from 'next/dynamic'

import Link from 'next/link'
import Collapsible from 'react-collapsible';
import { toast } from 'react-toastify';
import { EnvelopeOpenText, PhoneSquare, Telegram, Linkedin, Instagram, Facebook, Pinterest, Twitter, AngleUp } from '../../components/icons/SvgIcons'
import { website } from '../../Services/Helper'
import Axios from '../../Services/Axios'
const Compare = dynamic(() => import('./Compare'))

function Footer(props) {
    const [loader, setLoader] = useState(false)
    const { pages } = props
    const srollTop = (e) => {
        window.scrollTo({ top: ' 0', behavior: 'smooth' });
        return;
    }
    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        setLoader(true)
        await Axios({
            method: 'post',
            url: encodeURI(url),
            data: new FormData(event.target)
        })
            .then(response => {
                toast(response.data.message, { type: response.data.status })
                setLoader(false)
            });
    }
    return (
        <>
            <footer className="main-footer default" style={{ position: 'relative' }}>
                <div className="back-to-top animated  bounceIn delay-5s">
                    <span onClick={srollTop} className="cursor-pointer"><span className="icon">
                        <AngleUp className=" mt-n2 w-15px" />
                    </span>
                        <span>بازگشت به بالا</span>
                    </span>
                </div>
                <div className="">
                    <div className="container-body " >
                        <div className="row email-phone-footer">
                            <div className=" order-md-1 order-0 col-md-6 col-12 col-lg-12"></div>
                            <div className=" order-md-3 order-3 order-lg-1 col-lg-3 p-0 col-md-6  folow-us-footer text-center"> <span>ما را دنبال کنید</span><img src="https://cerampakhsh.com/files/footer/FooterShape2.svg" width="250" alt="" /></div>
                            <div className=" order-md-2 order-1 order-lg-2 mb-2 mb-md-2 mb-lg-0 col-lg-4 pr-0 pl-2 col-md-6  col-12 text-md-right text-lg-left text-center "><PhoneSquare /><a href="tel:+983538274760"> تلفن تماس :  <span dir="ltr">035-38274760</span></a></div>
                            <div className=" order-md-4 order-2 order-lg-3 mb-2 mb-md-0 col-lg-5 p-0 col-md-6  col-12 text-md-right text-center"> <EnvelopeOpenText /><a href="mailto:support@cerampakhsh.com">ایمیل : support@cerampakhsh.com</a></div>
                        </div>
                        <div className="socials footer-link-socials row ">


                            <div className=" text-center socials-box col-md-6 col-12 p-0 px-md-3">
                                <div className="socials-style"><a className="socials-a-style" target="_blank" rel=" noreferrer noopener nofollow" href="https://t.me/cerampakhsh_iran"> <Telegram className="telegram" /></a></div>
                                <div className="socials-style"><a className="socials-a-style" target="_blank" rel=" noreferrer noopener nofollow" href="https://www.linkedin.com/company/cerampakhsh"><Linkedin className="linkedin" /></a></div>
                                <div className="socials-style"><a className="socials-a-style" target="_blank" rel=" noreferrer noopener nofollow" href="https://www.instagram.com/cerampakhsh/"><Instagram className="instagram" /></a></div>
                                <div className="socials-style"><a className="socials-a-style" target="_blank" rel=" noreferrer noopener nofollow" href="https://www.facebook.com/Cerampakhsh-462283141174293/"><Facebook className="facebook " /></a></div>
                                <div className="socials-style"><a className="socials-a-style" target="_blank" rel=" noreferrer noopener nofollow" href="https://www.pinterest.co.uk/cerampakhsh/"><Pinterest className="pinterest" /></a></div>
                                <div className="socials-style"><a className="socials-a-style" target="_blank" rel=" noreferrer noopener nofollow" href="https://twitter.com/rastegarimasoud"><Twitter className="twitter" /></a></div>
                                <div className="socials-style namasha"><a className="socials-a-style" target="_blank" rel=" noreferrer noopener nofollow" href="https://tamasha.com/cerampakhsh.com"><div className="f-namasha"></div></a></div>
                            </div>
                            <div className="col-md-6 col-12 text-center">
                                <p className=" txt-folow pr-2 mb-0 font-weight-bold ">دسترسی آسان به محصولات سرام پخش:</p>
                                <a className="robo-tel" href="https://t.me/cerampakhsh_bot"><img className="rounded-12" src="https://cerampakhsh.com/files/banners/robob250.png" alt="ربات تلگرام" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-body sub-footer-one">
                    <div className="first footer-widgets bg-yazd ">
                        <div className="row">

                            <div className="col-12 col-lg-8">
                                <div className="row-ak ">
                                    <div className="col-12 col-sm-4  col-lg-4 p-0">
                                        <div className="widget-menu widget card collapse-footer">
                                            <header className="card-header">
                                                <h5 className="card-title "> درباره سرام پخش</h5>
                                            </header>
                                            <ul className="footer-menu">
                                                {pages && Object.entries(pages)?.filter(([indexFilter, valueFilter]) => (valueFilter.orderby < 55))?.map(([key, page]) =>
                                                    <li key={key}>
                                                        <Link href={`/page/${(page.title).split(' ').join('-')}/${page.pageid}`}><a>{page.title}</a></Link>
                                                    </li>
                                                )
                                                }
                                                <li>
                                                    <Link href={`/landings/employ`} className="blank-link" ><a>فرصت های شغلی</a></Link>
                                                </li>
                                                {/* <li>
                                                    <Link href={`/advertise`} className="blank-link" ><a>تبلیغات در سرام پخش</a></Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4  col-lg-4 p-0">
                                        <div className="widget-menu widget card collapse-footer">
                                            <header className="card-header">
                                                <h5 className="card-title ">سرام پخش و کاربران</h5>
                                            </header>
                                            <ul className="footer-menu">
                                                {pages && Object.entries(pages)?.filter(([indexFilter, valueFilter]) => (valueFilter.orderby > 55 && valueFilter.orderby < 115))?.map(([key, page]) =>
                                                    <li key={key}>
                                                        <Link href={`/page/${(page.title).split(' ').join('+')}/${page.pageid}`}><a>{page.title}</a></Link>
                                                    </li>
                                                )
                                                }
                                                <li>
                                                    <Link href={`/landings/order-submit`} className="blank-link"  ><a >نحوه ثبت سفارش</a></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4  col-lg-4 p-0">
                                        <div className="widget-menu widget card collapse-footer">
                                            <header className="card-header">
                                                <h5 className="card-title ">سیاستهای کاری سرام پخش</h5>
                                            </header>
                                            <ul className="footer-menu">
                                                {pages && Object.entries(pages)?.filter(([indexFilter, valueFilter]) => (valueFilter.orderby > 115 && valueFilter.orderby < 175))?.map(([key, page]) =>
                                                    <li key={key}>
                                                        <Link href={`/page/${(page.title).split(' ').join('+')}/${page.pageid}`}><a>{page.title}</a></Link>
                                                    </li>
                                                )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <div className="collapse-footer-mobile">
                                            <Collapsible trigger="درباره سرام پخش" >
                                                <ul className="footer-menu">
                                                    {pages && Object.entries(pages)?.filter(([indexFilter, valueFilter]) => (valueFilter.orderby < 55))?.map(([key, page]) =>
                                                        <li key={key}>
                                                            <Link href={`/page/${(page.title).split(' ').join('-')}/${page.pageid}`}><a>{page.title}</a></Link>
                                                        </li>
                                                    )
                                                    }
                                                    <li>
                                                        <Link href={`/landings/employ`} className="blank-link" ><a>فرصت های شغلی</a></Link>
                                                    </li>
                                                    {/* <li>
                                                        <Link href={`/advertise" `} className="blank-link"  ><a>تبلیغات در سرام پخش</a></Link>
                                                    </li> */}

                                                </ul>
                                            </Collapsible>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="collapse-footer-mobile">
                                            <Collapsible trigger="سرام پخش و کاربران" >
                                                <ul className="footer-menu">
                                                    {pages && Object.entries(pages)?.filter(([indexFilter, valueFilter]) => (valueFilter.orderby > 55 && valueFilter.orderby < 115))?.map(([key, page]) =>
                                                        <li key={key}>
                                                            <Link href={`/page/${(page.title).split(' ').join('+')}/${page.pageid}`}><a>{page.title}</a></Link>
                                                        </li>
                                                    )
                                                    }
                                                    <li>
                                                        <Link href={`/landings/order-submit`} className="blank-link"  ><a >نحوه ثبت سفارش</a></Link>
                                                    </li>
                                                </ul>
                                            </Collapsible>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="collapse-footer-mobile">
                                            <Collapsible trigger="سیاستهای کاری سرام پخش" >
                                                <ul className="footer-menu">
                                                    {pages && Object.entries(pages)?.filter(([indexFilter, valueFilter]) => (valueFilter.orderby > 115 && valueFilter.orderby < 175))?.map(([key, page]) =>
                                                        <li key={key}>
                                                            <Link href={`/page/${(page.title).split(' ').join('+')}/${page.pageid}`}><a>{page.title}</a></Link>
                                                        </li>
                                                    )
                                                    }
                                                </ul>
                                            </Collapsible>
                                        </div></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 p-0 text-right border-sm">
                                <div className="col-12 col-md-12  p-0 text-right border-sm">
                                    <div className="symbol col-12 row-ak  p-0">
                                        <div className="col-xl col-3 mx-auto p-1 mt-0 mt-md-auto mt-lg-3 text-center">
                                            <Link href="/samandehi" rel="nofollow"><a>
                                                <img width="130" src={`https://cerampakhsh.com/files/footer/samandehii.png`} alt="enamad" title="enamad" className="cursor" />
                                            </a></Link>
                                        </div>
                                        <div className="col-xl col-3 mx-auto p-1 mt-0 mt-md-auto mt-lg-3 text-center">
                                            <Link href="/enemad" rel="nofollow"><a>
                                                <img width="130" src={`https://cerampakhsh.com/files/footer/enemad.png`} alt="enamad" title="enamad" className="cursor" />
                                            </a></Link>
                                        </div>
                                        <div className="col-xl col-3 mx-auto p-1 mt-0 mt-md-auto mt-lg-3 text-center">
                                            <Link href="/ecunion" rel="nofollow"><a>
                                                <img src={`https://cerampakhsh.com/files/footer/namad-majazi.png`} alt="نماد اتحادیه کشوری" title="نماد اتحادیه کشوری" className="cursor" width="130" />
                                            </a></Link>
                                        </div>
                                        {/* <div className="col-xl col-3 mx-auto p-1 mt-0 mt-md-5 mt-lg-3 text-center">
                                        <a href="http://ystp.ac.ir/?p=26183" target="_blank" rel=" noreferrer noopener nofollow">
                                            <img className="height-auto" src={`${website}/files/banners/parky.png`} alt="پارک علم و فناوری استان یزد" title="پارک علم و فناوری استان یزد" width="130" />
                                        </a>
                                    </div>
                                    <div className="col-xl col-3 mx-auto p-1 mt-0 mt-md-5 mt-lg-3 text-center">
                                        <a href="https://cerampakhsh.com/files/banners/Licensetrl.pdf" target="_blank" rel=" noreferrer noopener nofollow">
                                            <img className="height-auto" src={`${website}/files/banners/pajoohesh.png`} alt="ستاد ملی پژوهش و فناوری" title="ستاد ملی پژوهش و فناوری" width="130" />
                                        </a>
                                    </div>
                                    <div className="col-xl col-3 mx-auto p-1 mt-0 mt-md-5 mt-lg-3 text-center">
                                        <a href="https://cerampakhsh.com/files/banners/ostandari.pdf" target="_blank" rel=" noreferrer noopener nofollow">
                                            <img className="height-auto" src={`${website}/files/banners/ostandariyazd.png`} alt="استانداری یزد" rel=" noreferrer noopener nofollow" title="استانداری یزد" width="130" />
                                        </a>
                                    </div>
                                    <div className="col-xl col-3 mx-auto p-1 mt-0 mt-md-5 mt-lg-3 text-center">
                                        <a href="http://cerampakhsh.com/mag/%D9%85%D9%88%D9%81%D9%82%DB%8C%D8%AA-%D8%AF%DB%8C%DA%AF%D8%B1%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B3%D8%B1%D8%A7%D9%85-%D9%BE%D8%AE%D8%B4%D8%9B-%D8%A7%D8%B3%D8%AA%D8%A7%D8%B1%D8%AA-%D8%A2%D9%BE-%D8%A8/" target="_blank" rel=" noreferrer noopener nofollow">
                                            <img className="height-auto" src={`${website}/files/banners/100 استارت اپ.png`} alt="استارتاپ برگزیده جشنواره 100 استارتاپ" rel=" noreferrer noopener nofollow" title="استارتاپ برگزیده جشنواره 100 استارتاپ" width="130" />
                                        </a>
                                    </div>
                                    <div className="col-xl col-3 mx-auto p-1 mt-0 mt-md-5 mt-lg-3 text-center">
                                        <a className="p-0" target="_blank" rel=" noreferrer noopener nofollow" href="http://yazd-new.irannsr.org/fa/page/106788-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D9%87-%D8%A7%D8%B9%D8%B6%D8%A7.html?ctp_id=1086&id=24733">    <img src={`${website}/files/banners/nezam-senfi.png`} alt="سازمان نظام صنفی رایانه ای استان یزد" title="سازمان نظام صنفی رایانه ای استان یزد" className="cursor" width="130" /></a>
                                    </div> */}
                                    </div>
                                </div>

                                <div className="newsletter  mb-4">
                                    <div className="get-app-box footer-link-apk-email row">
                                        <p className="col-12 mb-0 mt-4 text-right p-0 ">دریافت اپلیکیشن سرام پخش:</p>

                                        <div className="col-4 px-1"><a href="https://cafebazaar.ir/app/com.cerampakhsh.cpcom" target="_blank" rel=" noreferrer noopener nofollow"  ><img className="android mt-2 ml-2" src={`${website}/files/img/badge-new.svg`} alt="دانلود نسخه اندروید سرام پخش" title="دانلود نسخه اندروید سرام پخش" width="130" height="auto" /></a></div>
                                        <div className="col-4 px-1"><a href="https://anardoni.com/ios/app/luFimXADf" target="_blank" rel=" noreferrer noopener nofollow"  ><img className="android mt-2 ml-2" src="https://cerampakhsh.com/files/banners/anardoni-badge-black-persian.png" alt="دانلود نسخه ios سرام پخش" title="دانلود نسخه ios سرام پخش" width="160" /></a></div>
                                        <div className="col-4 px-1"><a href="https://sibapp.com/applications/cerampakhsh" target="_blank" rel=" noreferrer noopener nofollow"  ><img className="android mt-2 ml-2" src="https://cerampakhsh.com/files/banners/Sibapp-Badge-Black.png" alt="دانلود نسخه ios سرام پخش از سیب اپ" title="دانلود نسخه ios سرام پخش از سیب اپ" width="160" /></a></div>

                                        <p className="text-right   mt-4  mb-0 w-100 ">از تخفیف&zwnj;ها و جدیدترین&zwnj;های سرام پخش باخبر شوید:</p>
                                        
                                        <div className="w-100">
                                        <div className="loader-box row mb-0" >
                                            {loader &&
                                                <span className="loader"></span>
                                            }
                                        </div>
                                            <form action="" method="post" className="ajaxForm" onSubmit={handleSubmit('v1/mail/guest/subscybe')}>
                                                <input type="hidden" name="mode" value="subscybe" />
                                                <input type="email" name="email" className="form-control" placeholder="آدرس ایمیل خود را وارد کنید" />
                                                <input type="submit" className="btn btn-primary" value="ارسال" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="sub-footer-two">
                    <div className="second footer-widgets ">
                        <div className="container-body  py-3 ">
                            <div className="mara row ">
                                <a className="col-2" href="/mag/" target="_blank" rel=" noreferrer noopener nofollow">
                                    <div className="mara-box ">
                                        <img className="height-auto" src={Config.logo} alt="مجله اینترنتی سرام پخش" title="مجله اینترنتی سرام پخش" width="90" />
                                    </div>
                                </a>
                                <a className="col-2" href="http://www.ictdc.ir/" target="_blank" rel=" noreferrer noopener nofollow">
                                    <div className="mara-box "><img src={`${website}/files/banners/1.png`} className="height-auto" alt="مرکز توسعه فناوری سرامیک ایران" title="مرکز توسعه فناوری سرامیک ایران" width="99" height="99" />
                                    </div>
                                </a>
                                <a className="col-2" href="http://icers.ir/" target="_blank" rel=" noreferrer noopener nofollow">
                                    <div className="mara-box "><img src={`${website}/files/banners/2.png`} className="height-auto" alt="انجمن صنفی سرامیک" title="انجمن صنفی سرامیک" width="99" height="99" />
                                    </div>
                                </a>
                                <a className="col-2" href="http://www.ircps.ir/" target="_blank" rel=" noreferrer noopener nofollow">
                                    <div className="mara-box "><img src={`${website}/files/banners/3.png`} className="height-auto" alt="انجمن صنفی تولیدکنندگان کاشی و سرامیک" title="انجمن صنفی تولیدکنندگان کاشی و سرامیک" width="99" height="99" />
                                    </div>
                                </a>
                                <a className="col-2" href="https://www.mimt.gov.ir/" target="_blank" rel=" noreferrer noopener nofollow">
                                    <div className="mara-box "><img src={`${website}/files/banners/4.png`} className="height-auto" alt="وزارت صنعت ومعدن و تجارت" title="وزارت صنعت ومعدن و تجارت" width="99" height="99" />
                                    </div>
                                </a>
                                <a className="col-2" href="http://iranmara.com/" target="_blank" rel=" noreferrer noopener nofollow">
                                    <div className="mara-box "><img src={`${website}/files/banners/iran-mara.png`} className="height-auto" alt="شرکت تخصصی صادرات مارا" title="شرکت تخصصی صادرات مارا" width="99" height="99" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="copyright pt-0 ">
                    <div className="container-body ">
                        <p>
                            © استفاده از مطالب فروشگاه اینترنتی سرام پخش فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.کلیه حقوق سایت متعلق به پلتفرم دانش بنیان سرام پخش می باشد .
                        </p>
                    </div>
                </div>
            </footer>
            <Compare />
        </>
    );
}
export default Footer;