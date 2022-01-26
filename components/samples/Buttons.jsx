import React from 'react'
import { AngleLeft } from './../../components/icons/SvgIcons';

export default function Buttons() {


    return (
        < >

            <div>
                <button type="submit" title="خرید محصول" className="dk-btn dk-btn-info">افزودن به سبد خرید 
                </button>
                <hr />

                <div className="parent-btn"><a title="نزدیکترین نماینده به شما" className="m-auto dk-btn dk-btn-success" >نزدیکترین نماینده به شما </a>
                </div>
                <hr />
                <button className=" btn-params   "> مرحله بعد</button>

                <hr />
                <button className="btn-params undo"> مرحله قبل</button>
                <hr />
                <button className="btn-params warning"> اطلاعات بیشتر</button>
                <hr />
                <button className="btn-params success"> موفقیت امیز</button>
                <hr />
                <div className="user-diff">
                    <div className="see-more offset "
                        style={{
                            float: 'initial',

                            width: 'fit-content',
                        }}>مشاهده و خرید
                         <AngleLeft/>
                    </div>
                </div>

                <hr />
                <button className="btn btn-firoozei "> ثبت نهایی سفارش</button>
                <hr />
                <a className="btn btn-firoozei" >اطلاعات تکمیلی</a>
                <hr />
                <a className="  btn btn-danger" >بازگشت به صفحه قبل</a>
                <hr />
                <a className="  btn btn-success" >موفقیت</a>
                <hr />
                <a className="  btn btn-warning" >اخطار</a>
                <hr />
                <div className="pager-box row-ak">
                    <div className="center-ak">
                        <div className="row-ak">
                            <div className="col-6 px-1">
                                <a >
                                    <div className="txt-pager-box"><span>صفحه ی قبلی</span> </div>
                                </a>
                            </div>
                            <div className="col-6 px-1">
                                <a>
                                    <div className="txt-pager-box"><span> صفحه ی بعدی</span>
                                       </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}
