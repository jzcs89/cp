import React, { useState } from 'react'

import { website } from '../../Services/Helper';
import { toast } from 'react-toastify';

export default function StepStyle(props) {
    // const wContext = useContext(WizardContext)
    
    const [_style_, set_style_] = useState((props.style) ? props.style : '')
    
    const handleStyles = (event) => {
        let value = event.target.value;
        let style_ = '|' + value//colors + '|' + value
        if (_style_ !== '') {
            style_ = _style_ + '|' + value
        }

        if (_style_ !== '' && (_style_)?.includes(value)) {
            style_ = style_.split('|' + value).join('')
        }
        if((style_).split("|").length > 3){
            toast('بیشتر از دو مورد نمیتوانید انتخاب نمایید.', {type: 'error'})
        }else{
            set_style_(style_)
            props.handleStyle(style_)
        }
    }
    
    return (<>
<div className="hdr-tags-top-w row-ak ">
                <h1 className="w-100">
                    <img   src={`${website}/files/img/cplogo.png`} alt="فروشگاه اینترنتی سرام پخش"  title="فروشگاه اینترنتی سرام پخش"  width="25" height="25" />
                    کدام سبک را می پسندید؟
                       </h1>
            </div>


        <div className="row border-bottom pb-3 box-step-style">


            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-wood" name="defaultExampleRadios" value="چوب" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('چوب'))} />

                <label className="row mx-1 b-color b-wood" htmlFor="color-wood">

                </label>
                <p>چوب</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-brief" name="defaultExampleRadios" value="آجر+و+سیمان" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('آجر+و+سیمان'))} />

                <label className="row mx-1 b-color b-brief" htmlFor="color-brief">

                </label>
                <p>آجر و بتن</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-geo" name="defaultExampleRadios" value="هندسی" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('هندسی'))} />

                <label className="row mx-1 b-color b-geo" htmlFor="color-geo">

                </label>
                <p>هندسی</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-stone" name="defaultExampleRadios" value="سنگ" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('سنگ'))} />

                <label className="row mx-1 b-color b-stone" htmlFor="color-stone">

                </label>
                <p>سنگ</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-wall" name="defaultExampleRadios" value="کاغذ+دیواری" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('کاغذ+دیواری'))} />

                <label className="row mx-1 b-color b-wall" htmlFor="color-wall">

                </label>
                <p>کاغذ دیواری</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-metal" name="defaultExampleRadios" value="طرح+فلز" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('طرح+فلز'))} />

                <label className="row mx-1 b-color b-metal" htmlFor="color-metal">

                </label>
                <p>طرح فلز</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-sample" name="defaultExampleRadios" value="ساده" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('ساده'))} />

                <label className="row mx-1 b-color b-sample " htmlFor="color-sample">

                </label>
                <p>ساده</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-pricat" name="defaultExampleRadios" value="پریکات" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('پریکات'))} />

                <label className="row mx-1 b-color b-pricat " htmlFor="color-pricat">

                </label>
                <p>پریکات</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-bookmatch" name="defaultExampleRadios" value="بوک مچ" onChange={handleStyles} checked={(props && props.style && (props.style)?.includes('بوک مچ'))} />

                <label className="row mx-1 b-color b-bookmatch " htmlFor="color-bookmatch">

                </label>
                <p>بوک مچ</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3  px-0">
                <input type="checkbox" className="inp-style d-none" id="color-decorative" name="defaultExampleRadios" value="موزائیکی"/>

                <label className="row mx-1 b-color b-decorative " htmlFor="color-decorative">

                </label>
                <p>تزئینی</p>
            </div>

        </div>


    </>
    )
}