import React, { useState } from "react";
import Link from 'next/link'
import { AngleDown, AngleUp } from '../../components/icons/SvgIcons'
export default function FooterHead(props) {
    const [showtxt, setShowtxt] = useState(false);
    return (
        <>
            <div className=" home-page-cp  mb-n3 footerhead-box border-top">
                <div className=" container-body  ">
                    <div className="row mb-5">
                        <div className="col-12 col-md-12 ">
                        <div className={`  animated fadeIn diplay-control ${(showtxt) && "show"}`}>
                            <h1 className="footer-h1">   سرام پخش </h1>
                            <p className="footer-p  m-auto text-justify mb-2 ">
                         
                                فروشگاه آنلاین سرام پخش اولین   فعال در زمینه مصالح ساختمانی است. این پلتفرم مارکت پلیس، ارتباط بین فروشندگان و مصرف‌کنندگان حوزه ساختمانی را در کشور آسان‌تر کرده است. <br />
                                در پلتفرم سرام پخش، فروشندگان مصالح ساختمانی می‌توانند محصولاتشان در زمینه
                                <Link href="/products/%DA%A9%D8%A7%D8%B4%DB%8C-%D9%88-%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-"><a> کاشی و سرامیک </a></Link> در انواع طرح ها اعم از
                                <Link href="/products/%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-%D8%B7%D8%B1%D8%AD-%D9%81%D8%B1%D8%B4"><a> سرامیک طرح فرش </a></Link>،
                                <Link href="/decors/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%AF%DA%A9%D9%88%D8%B1%D8%A7%D8%AA%DB%8C%D9%88"><a> کاشی دکوراتیو </a></Link>،
                                <Link href="/products/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%B3%D9%86%D8%AA%DB%8C"><a> کاشی سنتی </a></Link>،
                                <Link href="/decors/%DA%A9%D8%A7%D8%B4%DB%8C-%D9%88-%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-/%D8%B3%D8%A8%DA%A9+%D8%B7%D8%B1%D8%AD/%D9%87%D9%86%D8%AF%D8%B3%DB%8C"><a> کاشی طرح هندسی </a></Link> و...را که متعلق به خانواده بزرگی به اسم
                                <Link href="/decors/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%AA%D8%B2%DB%8C%DB%8C%D9%86%DB%8C"><a> کاشی تزیینی </a></Link> و در کاربری‌های متنوع مانند
                                <Link href="/decors/%DA%A9%D8%A7%D8%B4%DB%8C-%D9%88-%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-/%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%DB%8C/%D8%A2%D8%B4%D9%BE%D8%B2%D8%AE%D8%A7%D9%86%D9%87"><a> کاشی اشپزخانه </a></Link>،
                                <Link href="/products/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%DB%8C"><a> کاشی استخری </a></Link>،
                                <Link href="/decors/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%A8%DB%8C%D9%86-%DA%A9%D8%A7%D8%A8%DB%8C%D9%86%D8%AA%DB%8C"><a> کاشی بین کابینتی </a></Link>،
                                <Link href="/decors/%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-%DA%A9%D9%81"><a> سرامیک کف </a></Link> و
                                <Link href="/decors/%DA%A9%D8%A7%D8%B4%DB%8C-%D9%88-%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-/%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%DB%8C/%D8%AF%D8%B3%D8%AA%D8%B4%D9%88%DB%8C%DB%8C+%D9%88+%D8%AD%D9%85%D8%A7%D9%85"><a> کاشی حمام و دستشویی </a></Link> هستند به فروش برسانند.
                                <br />
                            
                                    شما همچنین به‌عنوان مصرف‌کننده برای خرید محصولاتی مانند
                                    <Link href="/products/%D8%A7%DA%A9%D8%B3%D8%B3%D9%88%D8%B1%DB%8C-%D9%88-%D8%B4%DB%8C%D8%B1%D8%A2%D9%84%D8%A7%D8%AA"><a> انواع شیر آب </a></Link> نیز می‌توانید گشت‌و‌گذاری در سرام پخش داشته باشید و با قیمتی مناسب از نزدیک‌ترین فروشگاه آن‌ها را تهیه کنید. انواع شیرآلات موجود در سرام پخش،
                                    <Link href="/products/%D8%B4%DB%8C%D8%B1-%D8%B8%D8%B1%D9%81%D8%B4%D9%88%DB%8C%DB%8C"><a> شیرآلات ظرفشویی </a></Link>،
                                    <Link href="/products/%D8%B4%DB%8C%D8%B1%D8%A2%D9%84%D8%A7%D8%AA-%D8%AF%D8%B3%D8%AA%D8%B4%D9%88%DB%8C%DB%8C"><a> شیرآلات دستشویی </a></Link>،
                                    <Link href="/products/%D8%B4%DB%8C%D8%B1%D8%A2%D9%84%D8%A7%D8%AA-%D8%AD%D9%85%D8%A7%D9%85"><a> شیرآلات حمام </a></Link>،
                                    <Link href="/products/%D8%B4%DB%8C%D8%B1%D8%A2%D9%84%D8%A7%D8%AA-%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF"><a> شیرآلات هوشمند </a></Link> و
                                    <Link href="/products/%D8%B4%DB%8C%D8%B1%D8%A2%D9%84%D8%A7%D8%AA-%D8%B1%D9%88%D8%B4%D9%88%DB%8C%DB%8C"><a> انواع شیرآلات روشویی </a></Link>  هستند. سایر محصولات مرتبط با حوزه مصالح ساختمانی مانند
                                    <Link href="/products/%DA%86%DB%8C%D9%86%DB%8C-%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C-"><a> چینی بهداشتی </a></Link> را نیز در پلتفرم سرام پخش می‌توان پیدا کرد.
                                    <br />
                                    مصرف‌کنندگان همچنین می‌توانند برای نصب محصول مورد نظرشان از نصاب‌های حاضر در سایت سرام پخش کمک بگیرند و محصولاتشان مانند
                                    <Link href="/products/%D8%A2%DB%8C%D9%86%D9%87-%D9%88-%DA%A9%D8%A7%D8%A8%DB%8C%D9%86%D8%AA-%D8%B1%D9%88%D8%B4%D9%88%DB%8C%DB%8C"><a> آینه کابینت روشویی </a></Link>،
                                    <Link href="/products/%D9%88%D8%A7%D9%86-%D8%AD%D9%85%D8%A7%D9%85-%D8%AC%DA%A9%D9%88%D8%B2%DB%8C"><a> وان و جکوزی </a></Link>،
                                    <Link href="/products/%DA%A9%D8%A7%D8%A8%DB%8C%D9%86-%D8%AF%D9%88%D8%B4-%D9%88-%D8%B3%D9%88%D9%86%D8%A7"><a> کابین دوش و سونا </a></Link> را برای نصب به آن‌ها واگذار کنند. همچنین ابزار کار نصاب‌های حوزه مصالح ساختمانی نیز در سرام پخش وجود دارد و نصاب‌ها نیز می‌توانند
                                    <Link href="/products/%D8%A7%D8%A8%D8%B2%D8%A7%D8%B1-%D9%86%D8%B5%D8%A8-%DA%A9%D8%A7%D8%B4%DB%8C"><a> ابزار نصب کاشی </a></Link>،
                                    <Link href="/products/%DA%A9%D8%A7%D8%B4%DB%8C-%D8%A8%D8%B1"><a> کاشی بر </a></Link>،
                                    <Link href="/products/%DA%AF%D8%B1%D8%AF-%D8%A8%D8%B1"><a> گرد بر یا فارسی بر </a></Link>،
                                    <Link href="/products/%D8%AA%D8%B1%D8%A7%D8%B2-%DA%A9%D8%A7%D8%B4%DB%8C"><a> تراز کاشی </a></Link>،
                                    <Link href="/products/%D8%A7%D8%B3%DA%A9%D9%88%D9%BE-%DA%A9%D8%A7%D8%B4%DB%8C"><a> اسکوپ کاشی </a></Link>،
                                    <Link href="/products/%D8%B5%D9%84%DB%8C%D8%A8%DB%8C"><a> صلیبی کاشی و سرامیک </a></Link>،
                                    <Link href="/products/%DA%86%D8%B3%D8%A8-%DA%A9%D8%A7%D8%B4%DB%8C"><a> چسب کاشی </a></Link>،
                                    <Link href="/products/%D9%85%D9%84%D8%A7%D8%AA"><a> ملات بندکشی </a></Link> و
                                    <Link href="/products/%D8%AA%D8%AC%D9%87%DB%8C%D8%B2%D8%A7%D8%AA-%D8%A7%DB%8C%D9%85%D9%86%DB%8C"><a> تجهیزات ایمنی کار </a></Link> را از میان فروشندگان مختلف سرام پخش پیدا کرده و با قیمتی مقرون‌ به‌صرفه آن را خریداری کنند.
                                    <br />
                                    تلاش ما در سرام پخش این است که تجربه خرید آنلاین مطمئن در حوزه مصالح ساختمانی را برای مصرف‌کنندگان فراهم کنیم. آن‌ها با خرید از پلتفرم سرام پخش، می‌توانند تا حد زیادی در زمان و انرژی خود صرفه‌جویی کنند. همچنین در سرام پخش امکان مقایسه کالا و پیدا کردن نزدیک‌ترین فروشگاه یا انبار به محل ساختمان پروژه شما برای کاهش هزینه‌های حمل و نقل برای مصرف‌کنندگان فراهم شده است.
                                    <Link href="/page/%D8%AE%D9%88%D8%AF%D8%AA-%D9%86%D8%B5%D8%A8-%DA%A9%D9%86/39"><a> مشاوره نصب </a></Link>، نظافت و نگهداری کاشی، سرامیک و پرسلان نیز از جمله خدمات پس از فروش استارتاپ سرام پخش محسوب می‌شوند. ما همچنین در سرام پخش خدماتی مانند مشاوره رایگان پیش از خرید، نمایش دکور زنده و
                                    <Link href="/installment"><a> خرید اقساطی </a></Link> محصولات را نیز به مصرف‌کنندگان ارائه خواهیم داد.
                                
                            
                              
                           
                            </p>
                            </div>
                            {showtxt ?
                                    <>
                                        <label className="custom-control-label font-weight-bold read-more" htmlFor="brands">
                                            <span className="open-more" onClick={e => setShowtxt(!showtxt)}>بستن  <AngleUp/> </span>
                                        </label>
                                    </>
                                    :
                                    <>
                                        <label className="custom-control-label font-weight-bold read-more" htmlFor="brands">
                                            <span className="open-more" onClick={e => setShowtxt(!showtxt)}>مشاهده بیشتر  <AngleDown/></span>
                                        </label>
                                    </>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
