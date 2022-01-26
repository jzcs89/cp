import React from 'react'
import Link from 'next/link';
import {RullerCombined } from './../../../components/icons/SvgIcons';
export default function Installer(props) {
    return (
        <>
            <div className="tab-pane  " id="install"   aria-expanded="false">
                <div className="row">
                    <div className="container-ak">
                        <h3 className="text-center jq-dspn " >نصب و نظافت کاشی</h3>
                        <div className="parent-btn text-center  bg-stl border py-5 bg-location  mb-5">
                            {props.factory_ &&
                                <Link href={`/merchants?type=installer&manufacturor=${(props.factory_)?.toString()?.split(' ').join("+")}`}  ><a className="dk-btn dk-btn-success m-auto" title="نزدیکترین نصاب به شما" >نزدیکترین نصاب به شما <RullerCombined/>
                                </a></Link>
                            }
                        </div>
                        <p className="text-justify jq-dspn" >
                            امروزه کاشی و سرامیک به عنوان کالای دکوراتیو و موثر بر دکوراسیون منزل و محل کار شناخته می&zwnj;شود. این موضوع زمینه&zwnj;ساز خواهد شد تا فرد بتواند مراحل مختلف نصب را با توجه به توانایی&zwnj;های خود انجام دهد. ظرافت در اجرای کاشی&zwnj;کاری، نقش به سزایی در زیبایی فضای ساختمان
            دارد و کاشی بی&zwnj;کیفیت و نصب اشتباه آن، محیط را به فضایی بی&zwnj;روح و بدشکل تبدیل می&zwnj;کند.<br /> رعایت چندین اصل ساده و مهم در کاشی&zwnj;کاری و توجه به این اصول بسیار مهم و موثر می&zwnj;باشد.<br /> در ابتدا برای نصب کاشی و سرامیک می&zwnj;بایست محیط مورد
            نظر را از نظر زیرسازی آماده و مهیا کنید. در ضمن برای اجرای مرحله نصب کاشی و سرامیک ابتدا باید مساحت قسمتی را که قصد دارید سرامیک کنید، اندازه&zwnj;گیری نمایید.<br /> بعد از اندازه&zwnj;گیری، شما باید کاشی مورد نظر را براساس رنگ، طرح و سایز از میان برندهای
            متنوع در   سرام پخش انتخاب کرده و بعد از آن اگر تصمیم داشتید تا عملیات نصب را خودتان انجام دهید، می&zwnj;توانید تجهیزات نصب از قبیل؛ ایمنی شخصی و ملات و نصب را انتخاب کرده و از   سرام پخش خرید کنید. البته برای اینکه مراحل
            کار سریع&zwnj;تر و با کیفیت بهتری انجام پذیرد، می&zwnj;توانید با نصابان این حرفه ارتباط برقرار کرده و ضمن بازدید ایشان از محل مورد نظر و کنترل رزومه فردی آن&zwnj;ها، تعمیرات یا اجرای کار را به آن&zwnj;ها بسپارید.<br /> در پایان کار خود را با بندکشی تکمیل کنید و
                                                                                                                خالق زیبایی منزل خود باشید.
        </p>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className=" btn-firoozei btn-dspn  nav-link" data-toggle="tab" href="#btn-Ins2">قوانین نصب</a>
                            </li>
                            <li className="nav-item">
                                <a className=" btn-firoozei btn-dspn  nav-link" data-toggle="tab" href="#btn-Ins3">تعرفه نصابان </a>
                            </li>
                            <li className="nav-item">
                                <a className=" btn-firoozei btn-dspn nav-link" target="_blank" rel="noopener noreferrer" href="https://cerampakhsh.com/mag/%d9%86%d8%b5%d8%a8-%d9%88-%d9%86%d8%b8%d8%a7%d9%81%d8%aa/">آموزش و راهکارها</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane container fade " id="btn-Ins2">
                                <p  >برای اینکه کار شما سریع‌تر و با رضایت بیشتری انجام گیرد گاهی نیازمند این هست که قوانین آن را بدانید تا راحت‌تر بتوانید با نصابان حرفه‌ای تعامل و گفتگو کنید. شما در اینجا می‌توانید قوانین نصب کاشی و سرامیک را مطالعه نمائید</p>
                                <p  >
                                    -            هنگام خرید کاشی و سرامیک ، 10 درصد بیشتر از نیازتان سفارش دهید.
                            <br />-            از یک سنگ راهنما در گوشه کار استفاده کنید.
                            <br />-            برای برش کاشی ها و سرامیک ها از شابلون استفاده کنید.
                            <br />-            برای لبه های برش خورده از مداد شمعی استفاده کنید.
                            <br />-            از مته الماسه برای سوراخ کردن کاشی و سرامیک استفاده کنید.
                            <br />-            قبل از ریختن دوغاب اجازه دهید کاشی ها 24 ساعت استراحت کنند.
                            <br />-            قبل از نصب کاشی ها همه را بچینید و از ترکیب آن ها مطمئن شوید.
                            <br />-            به دوغاب هر شش ماه سیلر بزنید.
                            <br />-            در اندازه گیری جایی که می خواهید کاشیکاری کنید دقت زیادی به خرج دهید.
                            <br />-            فراموش نکنید که مقدمات و آماده سازی کاشی کاری و سرامیک کاری 75 درصد کل کار است.
                        </p>
                            </div>
                            <div className="tab-pane container fade " id="btn-Ins3">
                                <p className="px-2">کاشی و سرامیک‌ها در سایزهای متنوعی هستند که برای نصب آن نیاز به تخصص می‌باشد. تعرفه نصب کاشی و سرامیک در سایزهای مختلف متفاوت خواهد بود و شما با اطلاع از این تعرفه راحت‌تر می‌توانید نصاب حرفه‌ای خود را بیابید.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
