import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link'
// import StateCity from '../../components/sections/StateCity'
import Axios from '../../Services/Axios';
import { CheckCircle } from '../../components/icons/SvgIcons';
import { authContext } from '../../Contexts/AuthContext';

import { getCookie } from '../../Services/getCookie'
// import { website } from '../../Services/Helper';

// export default class Product extends Component {
export default function NemoneRaygan(props) {

    const userContext = useContext(authContext)
    const [loader, setLoader] = useState(false)
    const [modal, setmodal] = useState(false)
    //const [zip, setzip] = useState('')
    const [addressId, setaddressId] = useState('')

    let token = getCookie("token");

    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        setLoader(true)
        await Axios({
            method: 'post',
            url: encodeURI(url + '?token=' + token?.replace(/\r?\n|\r/g, '')),// 
            data: new FormData(event.target)
        })
            .then(response => {
                toast(response.data.message, {type: response.data.status})
                setmodal(false)
                setLoader(false)
            });
    }
    // const handleKeyUp = (event) => {
    //     event.target.value = englishNumber(event.target.value)
    // }
    // const englishNumber = (str) => {
    //     // fixNumbers = function (str)
    //     // {
    //         var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    //             arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    //         if(typeof str === 'string')
    //         {
    //             for(var i=0; i<10; i++)
    //             {
    //             str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    //             }
    //         }
    //         return str;
    //         // };
    // }

    const changeAddressNemone = (number) => (e) => {
        setaddressId(number)
    }

    return (
        <>
            {/* <div className="col-sm-4 co-md-4 col-lg-4 col-6 text-center p-1">
                <a  data-toggle="modal" data-target="#nemone-raygan" className="btn-params btn-sm btn-block">
                   نمونه رایگان</a>
            </div> */}
            <div className="service-item colss py-1 slide-hover-btn ">
                <button disabled={(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-') ? false : true} className={(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-') ? '' : 'disable-ak'}  data-toggle={(props.category === 'پرسلان-' || props.category === 'کاشی-و-سرامیک-') ? "modal" : ''} data-target="#nemone-raygan" onClick={(e) => setmodal(true)} >
                    <div className="d-flex-inline">
                        <div className="img-box">
                        
<img src="https://cerampakhsh.com/files/img/svg/nemoones.svg" alt="" />                           
                            {/* <img   src={`${website}/files/img/head-svg/pattern.svg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="30" /> */}

                        </div>
                    </div>
                </button>
            </div>

            {modal &&
            <div className="modal-box-cp" id="nemone-raygan">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content"><button type="button" className="close text-danger " data-dismiss="modal"  onClick={(e) => setmodal(false)}>×</button>
                        {/* <div className="cntr-hdr  px-2  pt-4 pb-2"> فرم دریافت نمونه رایگان</div> */}
                     <button type="button" className="close text-danger bg-btn-modal " data-dismiss="modal"  onClick={(e) => setmodal(false)}>×</button>

                        <h3 className="right-header mb-4 w-auto mt-5 mx-4 "><div className="p-2">فرم دریافت نمونه رایگان</div></h3>


                        {userContext.data && userContext.data.token ?
                            <form action="mail/nemone-raygan" method="post" onSubmit={handleSubmit('v1/mail/nemone-raygan')} className="pcp-hidden ajaxCart">
                                <div className="loader-box row" >
                                    {loader &&
                                        <span className="loader"></span>
                                    }
                                </div>


                                <div className="modal-body">

                                    <p className="text-right">
                                        لطفا دقت نمایید در ارسال نمونه رایگان قطع کاشی 15 * 15 می باشد و شما صرفا هزینه پستی را پرداخت خواهید نمود.
                                    </p>
                                    <p className="text-right">
                                        کاربرگرامی لطفا آدرس محل ارسال نمونه را درج نمایید
                                    </p>
                                    <input className=" input-field text-right" type="hidden" required="required" name="mode" value="nemoneraygen" />
                                    <input className=" input-field text-right" type="hidden" required="required" name="id" value={props.id} />
                                    <input className=" input-field text-right" type="hidden" required="required" name="type" value={props.type} />
                                    <input className=" input-field text-right" type="hidden" required="required" name="address_id" defaultValue={addressId} />
                                   
                                    <div className="col-sm-8 mx-auto">
                                        <div className="form-account-row form-account-submit">
                                            <div className="parent-btn">
                                                <button className="dk-btn dk-btn-info" type="submit">
                                                    درخواست نمونه رایگان
                                        
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </form>
                            :
                            <div className=" py-5 m-auto">
                                <Link href='/u/login'><a id="sabt-drk " className="btn btn-firoozei m-auto " >
                                    <CheckCircle/>
                                     ابتدا وارد حساب کاربری خود شوید
                                </a></Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
            }
        </>

    )
}


