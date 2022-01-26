import React, { useState } from 'react'

export default function Popup(props) {

    const [showModalImportant, setshowModalImportant] = useState(true)
    let showPopup = props.showPopup

    const closePopup = () => (e) => {
        setshowModalImportant(false)
    }

    if (showPopup && showModalImportant) {
        return (
            <>
                <div className="modal-box-cp" id="nemone-raygan">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <button type="button" className="close text-danger border-bottom text-right w-100 " data-dismiss="modal" onClick={closePopup()}>×</button>
                            {/* <h3 className="right-header mb-4 w-auto mt-5 mx-2 ">
                                <p className="p-2  text-justify">
                           
                                فروش اقساطی محصولات<div className="bg-stl px-2 rounded-pill dir-ltr d-inline-flex" >  75x75 </div> , <div className="bg-stl px-2 rounded-pill d-inline-flex " >  60x120</div>   روکاسرام
                            </p>
                            </h3> */}
                            <p className=" mx-3 mt-5 text-justify">
                               <b>کاربر محترم ;</b> 
                              <br/>
                                در صورتی که تمایل به خرید <b className="firoozei"> اعتباری</b> محصولات با کیفیت روکاسرام دارید با شماره تلفنهای <a href="tel:۰۹۹۲۳۰۳۳۲۶۵"  className="  bg-success px-2 rounded-pill text-light  ">۰۹۹۲۳۰۳۳۲۶۵</a> , <a href="tel:۰۹۱۳۰۷۲۱۷۰۶"  className="  bg-success px-2 rounded-pill text-light  ">۰۹۱۳۰۷۲۱۷۰۶</a>  تماس حاصل فرمائید.
                                                        </p>
                        
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return ('')
    }


}
