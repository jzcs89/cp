import React from 'react'
// import BtnSteps from './BtnSteps';
// import { WizardContext } from '../../Contexts/WizardContext';
import { website } from '../../Services/Helper';

export default function StepRoom(props) {

    // const wContext = useContext(WizardContext)
    // const [installplace, setinstallplace] = useState(props.installplace)
    // const [use, setuse] = useState(props.use)

    // const [rooms, setRooms] = useState('')

    const handlerooms = (event) => {
        // let rooms_ = rooms + '|' + event.target.value
        // if (rooms.includes(event.target.value)) {
        //     rooms_ = rooms_.split('|' + event.target.value).join('')

        // }
        // setRooms(rooms_)
        // // wContext.setWizard({
        // //     type: 'ROOM',
        // //     room: rooms_
        // // })
        let use___ = event.target.getAttribute("use")
        let place___ = event.target.getAttribute("installplace")


        if (props.installplace && !props.installplace?.includes(place___)) {
            place___ = props.installplace + '|' + place___
        }

        if (props.installplace && props.installplace?.includes(place___)) {
            place___ = (props.installplace).split(place___).join('')
            place___ = (place___).split('|').join('')
        }

        if (props.use !== use___) {
            place___ = event.target.getAttribute("installplace")
        }
        props.handlePlace(use___, place___)
    }

    return (
        <>

            <div className="hdr-tags-top-w row-ak ">
                <h1 className="w-100">
                    <img src={`${website}/files/img/cplogo.png`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="25" height="25" />
                    محصول را برای کدام بخش پروژه نیاز دارید؟
                </h1>
            </div>




            <div className="row-ak border-bottom pb-3 ">
                <div className="box-step box-step-room col-6	">

                    <input type="checkbox" className="inp-top d-none" id="top1" name="defaultExampleRadios" value="آشپزخانه,دیوار" onChange={handlerooms} use="آشپزخانه" installplace="دیوار" checked={(props.use && props.use === 'آشپزخانه' && props.installplace && props.installplace?.includes('دیوار'))} />
                    <input type="checkbox" className="inp-bottom d-none" id="bottom1" name="defaultExampleRadios" value="آشپزخانه,کف" onChange={handlerooms} use="آشپزخانه" installplace="کف" checked={(props.use && props.use === 'آشپزخانه' && props.installplace && props.installplace?.includes('کف'))} />

                    <label className="lbl-top row-ak" htmlFor="top1" >
                        <div className="col-6 pt-2">
                            <div className="d-flex m-auto">
                                <img className="m-auto" src={`${website}/files/wizard/wall.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />

                            </div>
                        </div>

                        <p className="col-6 pt-2 text-right">دیوار</p>
                    </label>
                    <label className="lbl-bottom row-ak" htmlFor="bottom1" >
                        <img className="col-6 pt-2" src={`${website}/files/wizard/floor.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />
                        <p className="col-6 pt-2 text-right">کف</p>
                    </label>

                    <img src={`${website}/files/wizard/kitchen.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="50" height="50" />

                    <p>آشپزخانه</p>

                </div>
                <div className="box-step box-step-room col-6	">
                    <input type="checkbox" className="inp-top d-none" id="top2" name="defaultExampleRadios" value="دستشویی+و+حمام,دیوار" onChange={handlerooms} use="دستشویی+و+حمام" installplace="دیوار" checked={(props.use && props.use === 'دستشویی+و+حمام' && props.installplace && props.installplace?.includes('دیوار'))} />
                    <input type="checkbox" className="inp-bottom d-none" id="bottom2" name="defaultExampleRadios" value="دستشویی+و+حمام,کف" onChange={handlerooms} use="دستشویی+و+حمام" installplace="کف" checked={(props.use && props.use === 'دستشویی+و+حمام' && props.installplace && props.installplace?.includes('کف'))} />

                    <label className="lbl-top row-ak" htmlFor="top2" >
                        <div className="col-6 pt-2">
                            <div className="d-flex m-auto">
                                <img className="m-auto" src={`${website}/files/wizard/wall.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />

                            </div>
                        </div>

                        <p className="col-6 pt-2 text-right">دیوار</p>
                    </label>
                    <label className="lbl-bottom row-ak" htmlFor="bottom2" >
                        <img className="col-6 pt-2" src={`${website}/files/wizard/floor.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />
                        <p className="col-6 pt-2 text-right">کف</p>
                    </label>
                    <img src={`${website}/files/wizard/toilet.svg`} alt="فروشگاه اینترنتی سرام پخش" width="50" height="50" />


                    <p>دستشویی و حمام </p>
                </div>
                <div className="box-step box-step-room col-6	">
                    <input type="checkbox" className="inp-top d-none" id="top3" name="defaultExampleRadios" value="اتاق+و+پذیرایی,دیوار" onChange={handlerooms} use="اتاق+و+پذیرایی" installplace="دیوار" checked={(props.use && props.use === 'اتاق+و+پذیرایی' && props.installplace && props.installplace?.includes('دیوار'))} />
                    <input type="checkbox" className="inp-bottom d-none" id="bottom3" name="defaultExampleRadios" value="اتاق+و+پذیرایی,کف" onChange={handlerooms} use="اتاق+و+پذیرایی" installplace="کف" checked={(props.use && props.use === 'اتاق+و+پذیرایی' && props.installplace && props.installplace?.includes('کف'))} />

                    <label className="lbl-top row-ak" htmlFor="top3" >
                        <div className="col-6 pt-2">
                            <div className="d-flex m-auto">
                                <img className="m-auto" src={`${website}/files/wizard/wall.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />

                            </div>
                        </div>

                        <p className="col-6 pt-2 text-right">دیوار</p>
                    </label>
                    <label className="lbl-bottom row-ak" htmlFor="bottom3" >
                        <img className="col-6 pt-2" src={`${website}/files/wizard/floor.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />
                        <p className="col-6 pt-2 text-right">کف</p>
                    </label>
                    <img src={`${website}/files/wizard/room.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="50" height="50" />


                    <p> اتاق و پذیرایی</p>
                </div>
                <div className="box-step box-step-room col-6	">
                    <input type="checkbox" className="inp-top d-none" id="top4" name="defaultExampleRadios" value="نما+و+راهرو,دیوار" onChange={handlerooms} use="نما+و+راهرو" installplace="دیوار" checked={(props.use && props.use === 'نما+و+راهرو' && props.installplace && props.installplace?.includes('دیوار'))} />
                    <input type="checkbox" className="inp-bottom d-none" id="bottom4" name="defaultExampleRadios" value="نما+و+راهرو,کف" onChange={handlerooms} use="نما+و+راهرو" installplace="کف" checked={(props.use && props.use === 'نما+و+راهرو' && props.installplace && props.installplace?.includes('کف'))} />

                    <label className="lbl-top row-ak" htmlFor="top4" >
                        <div className="col-6 pt-2">
                            <div className="d-flex m-auto">
                                <img className="m-auto" src={`${website}/files/wizard/wall.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />

                            </div>
                        </div>

                        <p className="col-6 pt-2 text-right">دیوار</p>
                    </label>
                    <label className="lbl-bottom row-ak" htmlFor="bottom4" >
                        <img className="col-6 pt-2" src={`${website}/files/wizard/floor.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />
                        <p className="col-6 pt-2 text-right">کف</p>
                    </label>
                    <img src={`${website}/files/wizard/house.svg`} alt="فروشگاه اینترنتی سرام پخش" width="50" height="50" />


                    <p>نما و راهرو</p>
                </div>
                <div className="box-step box-step-room col-6	">
                    <input type="checkbox" className="inp-top d-none" id="top5" name="defaultExampleRadios" value="تجاری+و+پارکینگ,دیوار" onChange={handlerooms} use="تجاری+و+پارکینگ" installplace="دیوار" checked={(props.use && props.use === 'تجاری+و+پارکینگ' && props.installplace && props.installplace?.includes('دیوار'))} />
                    <input type="checkbox" className="inp-bottom d-none" id="bottom5" name="defaultExampleRadios" value="تجاری+و+پارکینگ,کف" onChange={handlerooms} use="تجاری+و+پارکینگ" installplace="کف" checked={(props.use && props.use === 'تجاری+و+پارکینگ' && props.installplace && props.installplace?.includes('کف'))} />

                    <label className="lbl-top row-ak" htmlFor="top5" >
                        <div className="col-6 pt-2">
                            <div className="d-flex m-auto">
                                <img className="m-auto" src={`${website}/files/wizard/wall.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />

                            </div>
                        </div>

                        <p className="col-6 pt-2 text-right">دیوار</p>
                    </label>
                    <label className="lbl-bottom row-ak" htmlFor="bottom5" >
                        <img className="col-6 pt-2" src={`${website}/files/wizard/floor.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />
                        <p className="col-6 pt-2 text-right">کف</p>
                    </label>
                    <img src={`${website}/files/wizard/paking.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="50" height="50" />

                    <p>تجاری و پارکینگ</p>
                </div>

                <div className="box-step box-step-room col-6	">
                    <input type="checkbox" className="inp-top d-none" id="top6" name="defaultExampleRadios" value="مینیاتوری+و+استخری,دیوار" onChange={handlerooms} use="مینیاتوری+و+استخری" installplace="دیوار" checked={(props.use && props.use === 'مینیاتوری+و+استخری' && props.installplace && props.installplace?.includes('دیوار'))} />
                    <input type="checkbox" className="inp-bottom d-none" id="bottom6" name="defaultExampleRadios" value="مینیاتوری+و+استخری,کف" onChange={handlerooms} use="مینیاتوری+و+استخری" installplace="کف" checked={(props.use && props.use === 'مینیاتوری+و+استخری' && props.installplace && props.installplace?.includes('کف'))} />

                    <label className="lbl-top row-ak" htmlFor="top6" >
                        <div className="col-6 pt-2">
                            <div className="d-flex m-auto">
                                <img className="m-auto" src={`${website}/files/wizard/wall.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />

                            </div>
                        </div>

                        <p className="col-6 pt-2 text-right">دیوار</p>
                    </label>
                    <label className="lbl-bottom row-ak" htmlFor="bottom6" >
                        <img className="col-6 pt-2" src={`${website}/files/wizard/floor.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="40" height="40" />
                        <p className="col-6 pt-2 text-right">کف</p>
                    </label>
                    <img src={`${website}/files/wizard/pool.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="50" height="50" />

                    <p>مینیاتوری و استخری</p>
                </div>
            </div>


        </>
    )

}