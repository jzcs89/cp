import React, { useContext, useState } from 'react'
import BtnSteps from './BtnSteps';
import { WizardContext } from '../../Contexts/WizardContext';
import { website } from '../../Services/Helper';

export default function StepTools(props) {
    const wContext = useContext(WizardContext)

    const [categories, setcategories] = useState('')

    const handleChange = (evt) => {
        let category = categories + '|' + evt.target.value
        if (categories?.includes(evt.target.value)) {
            category = category.split('|' + evt.target.value).join('')
        }
        setcategories(category)
        wContext.setWizard({
            type: 'CATEGORY',
            category: category
        })

    }

    return (
        <>
            {/* <h6 className="text-right py-4">محصول را برای کدام بخش پروژه نیاز دارید؟</h6> */}
            <div className="hdr-tags-top-w row-ak ">
                <h1 className="w-100">
                    <img   src={`${website}/files/img/cplogo.png`} alt="فروشگاه اینترنتی سرام پخش"   title="فروشگاه اینترنتی سرام پخش"  width="25" height="25" />
                       نوع ابزار مورد نیاز را انتخاب کنید.
                       </h1>
            </div>

            <div className="row-ak text-center ">
                <div className="box-step box-step-tools col-6	">

                    <input type="checkbox" className="inp-tools d-none " id="tool1" name="defaultExampleRadios" value="تخریب-ومحاسبه" onChange={handleChange} checked={(wContext && wContext.data && (wContext.data.category)?.includes('تخریب-ومحاسبه'))} />
                    <label className="lbl-tools" htmlFor="tool1" >

                        <img className="pt-3" src={`${website}/files/wizard/ruler.svg`} alt="فروشگاه اینترنتی سرام پخش"   title="فروشگاه اینترنتی سرام پخش"  width="50" height="50" />

                        <p>تخریب و محاسبه</p>
                    </label>

                </div>
                <div className="box-step box-step-tools col-6	">
                    <input type="checkbox" className="inp-tools d-none" id="tool3" name="defaultExampleRadios" value="مصالح-و-تجهیزات" onChange={handleChange} checked={(wContext && wContext.data && (wContext.data.category)?.includes('مصالح-و-تجهیزات'))} />
                    <label className="lbl-tools" htmlFor="tool3" >

                        <img className="pt-3" src={`${website}/files/wizard/material.svg`} alt="فروشگاه اینترنتی سرام پخش"   title="فروشگاه اینترنتی سرام پخش"  width="50" height="50" />
                        <p>مصالح</p>
                    </label>
                </div>
                <div className="box-step box-step-tools col-6	">
                    <input type="checkbox" className="inp-tools d-none" id="tool4" name="defaultExampleRadios" value="نصب-و-تکمیل" onChange={handleChange} checked={(wContext && wContext.data && (wContext.data.category)?.includes('نصب-و-تکمیل'))} />
                    <label className="lbl-tools" htmlFor="tool4" >

                        <img className="pt-3" src={`${website}/files/wizard/equ.svg`} alt="فروشگاه اینترنتی سرام پخش"   title="فروشگاه اینترنتی سرام پخش"  width="50" height="50" />
                        <p>تجهیزات نصب</p>
                    </label>
                </div>
                <div className="box-step box-step-tools col-6	">
                    <input type="checkbox" className="inp-tools d-none" id="tool5" name="defaultExampleRadios" value="نظافت-و-نگهداری" onChange={handleChange} checked={(wContext && wContext.data && (wContext.data.category)?.includes('نظافت-و-نگهداری'))} />
                    <label className="lbl-tools" htmlFor="tool5" >

                        <img className="pt-3" src={`${website}/files/wizard/cleaning.svg`} alt="فروشگاه اینترنتی سرام پخش"   title="فروشگاه اینترنتی سرام پخش"  width="50" height="50" />
                        <p>نظافت</p>
                    </label>
                </div>
            </div>

        </>
    )
}