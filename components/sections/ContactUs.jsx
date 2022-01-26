
import React,{useState} from 'react'

export default function ContactUs(props) {

    const [papup, setPapup] = useState(false)
    return (
        <>
            <div className="fix-contactus">
                <div className="radar-motion"></div>
                <label className="lbl-contactpopup disable-select" htmlFor="contactpopup"> تماس باما</label>
                <input className="inp-contactpopup d-none" type="checkbox" name="" id="contactpopup" />
                <label className="lbl-contactpopup-close  flipInX  animated faster disable-select" htmlFor="contactpopup" onClick={()=>setPapup(false)}> X</label>
              {papup && 
                <div className="papup-mdl-fix-contactus request-call-step flipInX animated faster">
                    <label className="close-box" onClick={()=>setPapup(!papup)} >X</label>
                    <p>لطفا شماره همراه خود را وارد کنید تا همکاران ما در اولین فرصت با شما تماس بگیرند
                    </p>

                    <input className="form-control mt-4" type="text" placeholder="نام و نام خانوادگی" name="phonenumber" id="" />

                    <input className="form-control mb-3" type="number" placeholder="شماره موبایل" name="phonenumber" id="" />
                    <div className="btn btn-firoozei w-100"> ارسال درخواست</div>

                </div>
                }

                {!papup && 
                <div className="papup-mdl-fix-contactus flipInX animated faster">
                    <ul>
                        <li onClick={()=>setPapup(!papup)}>
                            <div className="request-call"> ثبت درخواست تماس</div>

                            <span className="phone-spn coll-absolute"></span>
                        </li>

                        <li>
                            <a href="tel:03538274760"> تلفن تماس <div className="d-flex-inline px-2" dir="ltr"> 035 38274760</div>
                                <span className="phone-spn str"></span>
                            </a>
                        </li>

                        <li><a href="https://wa.me/+989134570769">واتس آپ <div className="d-flex-inline px-2" dir="ltr">0913 457 0769</div> <span className="whatsapp-spn"> </span></a></li>

                    </ul>
                </div>
                    }
                
                <div className="fix-contactus-box">
                    <div className="fix-contactus-message">
                        <div className="fix-contact-stp col-4 stp2">
                           
                        </div>
                        <div className="fix-contact-stp col-4 stp1">
                        </div>
                        <div className="fix-contact-stp col-4 stp2">
                           
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}


