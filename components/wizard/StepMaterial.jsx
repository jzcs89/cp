import React, {  useState } from 'react'


import { website } from '../../Services/Helper';

export default function StepMaterial(props) {

    // const wContext = useContext(WizardContext)

    const [materials, setMaterials] = useState(props.material)
    const [modalVisible, setModalVisible] = useState(false)

    const handleChangeAll = (evt) => {
        let materials_ = materials + '|' + evt.target.value
        let showbtns = (evt.target.getAttribute("showbtn") === "on") ? true : false
        
        if(modalVisible !== evt.target.getAttribute("data-modalvisible")){
            materials_ = evt.target.value
        }
        if (materials && materials?.includes(evt.target.value)) {
            // materials_ = materials_.split('|' + evt.target.value).join('')
            materials_ = materials_.split(evt.target.value).join('')
        }
        setModalVisible(evt.target.getAttribute("data-modalvisible"))
        setMaterials(materials_)
        // wContext.setWizard({
        //     type: 'MATERIAL',
        //     material: materials_
        // })
        props.handleMaterial(materials_, showbtns)

    }
    return (<>


        <div className="hdr-tags-top-w row-ak ">
            <h1 className="w-100">
                <img   src={`${website}/files/img/cplogo.png`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="25" height="25" />
                    کالای مورد نظر خود را انتخاب کنید.
                       </h1>

        </div>

        <div className="col-12 text-right p-2 ">
            <div className="custom-control custom-radio custom-control-inline p-0 text-right ">
                <input type="checkbox" className="custom-control-input" id="customRadio1" onChange={handleChangeAll} showbtn="on" checked={props.material && (props.material !=='' && (props.material)?.includes('کاشی-و-سرامیک-'))} name="example" value="کاشی-و-سرامیک-"  data-modalvisible={false} />
                <label className="custom-control-label" htmlFor="customRadio1">کاشی و سرامیک</label>
            </div>
        </div>
        <div className="col-12 text-right p-2 ">
            <div className="custom-control custom-radio custom-control-inline p-0 text-right ">
                <input type="checkbox" className="custom-control-input" id="customRadio6" onChange={handleChangeAll} showbtn="on" checked={props.material && (props.material !=='' && (props.material)?.includes('پرسلان-'))} name="example" value="پرسلان-"  data-modalvisible={false} />
                <label className="custom-control-label" htmlFor="customRadio6">پرسلان</label>
            </div>
        </div>
        <div className="col-12 text-right p-2 ">
            <div className="custom-control custom-radio custom-control-inline p-0 text-right">
                <input type="checkbox" className="custom-control-input" id="customRadio2" onChange={handleChangeAll} showbtn="on" checked={props.material && (props.material !=='' && (props.material)?.includes('سنگ-'))} name="example" value="سنگ-"  data-modalvisible={false} />
                <label className="custom-control-label" htmlFor="customRadio2">سنگ</label>
            </div>
        </div>
        <div className="col-12 text-right p-2 ">
            <div className="custom-control custom-radio custom-control-inline p-0 text-right">
                <input type="checkbox" className="custom-control-input" id="customRadio3" onChange={handleChangeAll} showbtn="off" checked={props.material && (props.material !=='' && (props.material)?.includes('اکسسوری-و-شیرآلات'))} name="example" value="اکسسوری-و-شیرآلات"  data-modalvisible={false} />
                <label className="custom-control-label" htmlFor="customRadio3">اکسسوری و شیرآلات</label>
            </div>
        </div>

        <div className="col-12 text-right p-2  ">
            <div className="custom-control custom-radio custom-control-inline p-0 text-right">
                <input type="checkbox" className="custom-control-input" id="customRadio4" onChange={handleChangeAll} showbtn="off" checked={props.material && (props.material !=='' && (props.material)?.includes('چینی-بهداشتی-'))} name="example" value="چینی-بهداشتی-"  data-modalvisible={false} />
                <label className="custom-control-label" htmlFor="customRadio4">چینی بهداشتی</label>
            </div>
        </div>

        <div className="col-12  text-right p-2  border-bottom border-top mt-2 py-3">
            <div className="custom-control custom-radio custom-control-inline p-0 text-right">
                <input type="checkbox" className="custom-control-input" id="customRadio5" onChange={handleChangeAll} showbtn="off" checked={props.material && props.material !=='' && (props.material)?.includes('تجهیزات-نصب-')} name="example" value="تجهیزات-نصب-"  data-modalvisible={true} />
                <label className="custom-control-label" htmlFor="customRadio5">ابزار آلات نصب</label>
            </div>
            {(modalVisible === true || modalVisible === 'true') &&
                <>
                    <div className="hdr-tags-top-w row-ak ">
                        <h1 className="w-100">
                            <img   src={`${website}/files/img/cplogo.png`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش"width="25" height="25" />
                       نوع ابزار مورد نیاز را انتخاب کنید.
                       </h1>
                    </div>

                    <div className="row-ak text-center ">
                        <div className="box-step box-step-tools col-6	">

                            <input type="checkbox" className="inp-tools d-none " id="tool1" name="defaultExampleRadios" value="تخریب-ومحاسبه" onChange={handleChangeAll} showbtn="off" checked={(props.material && props.material !=='' && (props.material)?.includes('تخریب-ومحاسبه'))} data-modalvisible={true} />
                            <label className="lbl-tools" htmlFor="tool1" >

                                <img className="pt-3" src={`${website}/files/wizard/ruler.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="50" height="50" />

                                <p>تخریب و محاسبه</p>
                            </label>

                        </div>
                        <div className="box-step box-step-tools col-6	">
                            <input type="checkbox" className="inp-tools d-none" id="tool3" name="defaultExampleRadios" value="مصالح-و-تجهیزات" onChange={handleChangeAll} showbtn="off" checked={(props.material && props.material !=='' && (props.material)?.includes('مصالح-و-تجهیزات'))} data-modalvisible={true} />
                            <label className="lbl-tools" htmlFor="tool3" >

                                <img className="pt-3" src={`${website}/files/wizard/material.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="50" height="50" />
                                <p>مصالح</p>
                            </label>
                        </div>
                        <div className="box-step box-step-tools col-6	">
                            <input type="checkbox" className="inp-tools d-none" id="tool4" name="defaultExampleRadios" value="نصب-و-تکمیل" onChange={handleChangeAll} showbtn="fale" checked={(props.material && props.material !=='' && (props.material)?.includes('نصب-و-تکمیل'))} data-modalvisible={true} />
                            <label className="lbl-tools" htmlFor="tool4" >

                                <img className="pt-3" src={`${website}/files/wizard/equ.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="50" height="50" />
                                <p>تجهیزات نصب</p>
                            </label>
                        </div>
                        <div className="box-step box-step-tools col-6	">
                            <input type="checkbox" className="inp-tools d-none" id="tool5" name="defaultExampleRadios" value="نظافت-و-نگهداری" onChange={handleChangeAll} showbtn="fale" checked={(props.material && props.material !=='' && (props.material)?.includes('نظافت-و-نگهداری'))} data-modalvisible={true} />
                            <label className="lbl-tools" htmlFor="tool5" >

                                <img className="pt-3" src={`${website}/files/wizard/cleaning.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="50" height="50" />
                                <p>نظافت</p>
                            </label>
                        </div>
                    </div>
                </>
            }

        </div>


    </>
    )
}