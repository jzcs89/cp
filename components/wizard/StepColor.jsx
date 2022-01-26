import React, { useState } from 'react'

// import { WizardContext } from '../../Contexts/WizardContext';
import { website } from '../../Services/Helper';
import { toast } from 'react-toastify';
import Config from '../../configs/Cerampakhsh';

export default function StepColor(props) {

    // const wContext = useContext(WizardContext)
    // const [colors, setColors] = useState('')
    // const [diabled, setdiabled] = useState(false)
    const [_color_, set_color_] = useState((props.color) ? props.color : '')

    const handleColors = (color) => (event) => {
        
        let value = event.target.value;
        let color_ = '|' + value//colors + '|' + value
        if (_color_ !== '') {
            color_ = _color_ + '|' + value
        }

        if (_color_ !== '' && (_color_)?.includes(value)) {
            color_ = color_.split('|' + value).join('')
        }
        if((color_).split("|").length > 3){
            toast('بیشتر از دو مورد نمیتوانید انتخاب نمایید.', {type: 'error'})
            
        }else{
            set_color_(color_)
            props.handleColor(color_)
        }
    }

    return (<>
        {/* <div className="main-wizard row-ak col-md-4 col-12 center-ak text-center"> */}
            <div className="hdr-tags-top-w row-ak ">
                <h1 className="w-100">
                    <img   src={Config.logo} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" height="auto" />
                رنگ مورد علاقه خود را انتخاب کنید.
                       </h1>
            </div>

            {/* <h6 className="text-right py-4">رنگ مورد علاقه تونو  انتخاب کنید.</h6> */}


            <div className="row-ak clr-box border-bottom pb-3">


                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-sefid" checked={(props && props.color && (props.color)?.includes('سفید'))} name="defaultExampleRadios" value="سفید" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-sefid" htmlFor="color-sefid">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>سفید</p>
                </div>
                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-khakestary" checked={(props && props.color && (props.color)?.includes('خاکستری'))} name="defaultExampleRadios" value="خاکستری" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-khakestary" htmlFor="color-khakestary">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>خاکستری</p>
                </div>

                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-sabz" checked={(props && props.color && (props.color)?.includes('سبز'))} name="defaultExampleRadios" value="سبز" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-sabz" htmlFor="color-sabz">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>سبز</p>
                </div>

                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-cerem" checked={(props && props.color && (props.color)?.includes('کرم'))} name="defaultExampleRadios" value="کرم" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-cerem" htmlFor="color-cerem">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>کرم</p>
                </div>

                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-beig" checked={(props && props.color && (props.color)?.includes('بژ'))} name="defaultExampleRadios" value="بژ" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-beig" htmlFor="color-beig">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>بژ</p>
                </div>

                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-soorati" checked={(props && props.color && (props.color)?.includes('صورتی'))} name="defaultExampleRadios" value="صورتی" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-soorati" htmlFor="color-soorati">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>صورتی</p>
                </div>

                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-abi" checked={(props && props.color && (props.color)?.includes('آبی'))} name="defaultExampleRadios" value="آبی" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-abi" htmlFor="color-abi">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>آبی</p>
                </div>
                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-zard" checked={(props && props.color && (props.color)?.includes('زرد'))} name="defaultExampleRadios" value="زرد" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-zard" htmlFor="color-zard">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>زرد</p>
                </div>
                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-ghermez" checked={(props && props.color && (props.color)?.includes('قرمز'))} name="defaultExampleRadios" value="قرمز" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-ghermez" htmlFor="color-ghermez">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>قرمز</p>
                </div>
                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-ghahvei" checked={(props && props.color && (props.color)?.includes('قهوه ای'))} name="defaultExampleRadios" value="قهوه ای" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-ghahvei" htmlFor="color-ghahvei">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>قهوه ای</p>
                </div>

                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-narengi" checked={(props && props.color && (props.color)?.includes('نارنجی'))} name="defaultExampleRadios" value="نارنجی" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-narengi" htmlFor="color-narengi">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>نارنجی</p>
                </div>

                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-banafsh" checked={(props && props.color && (props.color)?.includes('بنفش'))} name="defaultExampleRadios" value="بنفش" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-banafsh" htmlFor="color-banafsh">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>بنفش</p>
                </div>

                <div className="col-3 py-1 px-0">
                    <input type="checkbox" className="inp-color d-none" id="color-siah" checked={(props && props.color && (props.color)?.includes('سیاه'))} name="defaultExampleRadios" value="سیاه" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-siah" htmlFor="color-siah">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>سیاه</p>
                </div>
                <div className="col-3 py-1 px-0 ">
                    <input type="checkbox" className="inp-color d-none" id="multi-color" checked={(props && props.color && (props.color)?.includes('چند رنگ'))} name="defaultExampleRadios" value="چند رنگ" onChange={handleColors()}  />

                    <label className="row mx-1 b-color b-multi" htmlFor="multi-color">
                        <div className="col b-light">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col b-dark">
                        </div>
                    </label>
                    <p>چند رنگ</p>
                </div>



            </div>

            {/* <BtnSteps prev="step-room" next="step-style" /> */}

        
        {/* </div> */}
    </>
    )


}