import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link';
import Axios from '../../Services/Axios';
import { CheckCircle } from '../../components/icons/SvgIcons';
import { authContext } from '../../Contexts/AuthContext';
import { getCookie } from '../../Services/getCookie';


export default function PrpsPrice(props) {
    const userContext = useContext(authContext)
    const [errors, setErrors] = useState({})
    const [modal, setmodal] = useState(false)
    const [price, setprice] = useState('')
    const [size, setsize] = useState('')
    const [phone, setphone] = useState('')

    let token = getCookie("token")

    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        setErrors({})
        await Axios({
            method: 'post',
            url: encodeURI(url + '?token=' + token?.replace(/\r?\n|\r/g, '')),// 
            data: new FormData(event.target)
        })
            .then(response => {
                toast(response.data.message, {type: response.data.status})

                setmodal(false)
            }, (errors) => {
                setErrors(errors.response.data.errors)
            });
    }

  
    const englishNumber = (str) => {
        
        var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
            arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
        }
        return str;
   
    }

    return (

        <>
           
            <div className="service-item colss py-1 slide-hover-btn ">
                <button disabled={(props.price) ? false : true} className={(props.price) ? '' : 'disable-ak'}  data-toggle={(props.price) ? 'modal' : ''}  data-target="#prps-price-modal" onClick={(e) => setmodal(true)}>

                    <div className="d-flex-inline">
                        <div className="img-box">
                            <img src="https://cerampakhsh.com/files/img/svg/pishnehads.svg" alt="پیشنهاد قیمت" />
                        </div>
                    </div>
                </button>
            </div>

            {modal &&
                <div className="modal-box-cp" id="prps-price-modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content"><button type="button" className="close text-danger " data-dismiss="modal"  onClick={(e) => setmodal(false)}>×</button>
                 <button type="button" className="close text-danger bg-btn-modal " data-dismiss="modal"  onClick={(e) => setmodal(false)}>×</button>

                            <h3 className="right-header mb-4 w-auto mt-5 mx-4 "><div className="p-2">قیمت پیشنهادی</div></h3>

                            <div className="modal-body">


                                {userContext.data && userContext.data.token ?
                                    <form action="mail/guest/request-buy" method="post" onSubmit={handleSubmit('v1/mail/guest/request-buy')} className="pcp-hidden ajaxCart">

                                        <input className=" input-field text-right" type="hidden" required="required" name="mode" value="request-buy" />
                                        <input className=" input-field text-right" type="hidden" required="required" name="id" value={props.id} />
                                        <input className=" input-field text-right" type="hidden" required="required" name="type" value={props.type} />
                                        <input className=" input-field text-right" type="hidden" required="required" name="price_product" value={props.price} />

                                        <div className="row">
                                            <small className=" w-100 feed-back text-danger text-right float-right error-name">{errors.name}</small>
                                            <small className=" w-100 feed-back text-danger text-right float-right error-price">{errors.price}</small>
                                            <small className=" w-100 feed-back text-danger text-right float-right error-size">{errors.size}</small>
                                            <small className=" w-100 feed-back text-danger text-right float-right error-phone">{errors.phone}</small>
                                            <br />
                                        </div>
                                        <div className="row" data-data={((userContext.data.user.firstname) ? userContext.data.user.firstname : '')}>
                                            <p className="p-info-price px-4"><b>  کاربر گرامی </b>
                                            شما می‌توانید مقدار مصرفی محصول خود را طی تعامل و گفتگو با نماینده  <b> (±25 درصد) </b> قیمت خریداری نمایید.

                                            لذا پیشنهاد خود را در فرم ذیل درج نموده، تا در صورت تایید از طرف یکی از فروشندگان منطقه شما ، مذاکره و تعامل آغاز گردد.
                                            </p>
                                            <p className="px-4"> اینجانب
                                                            <input className=" input-price-modal text-right" type="text" placeholder="نام خود را وارد نمایید" required="required" name="name" defaultValue={((userContext.data.user.firstname) ? userContext.data.user.firstname : '') + " " + ((userContext.data.user.lastname) ? userContext.data.user.lastname : '')} />

                                                            تمایل به خرید محصول فوق با قیمت پیشنهادی
                                        <div className="reltv d-inline"> <input className="input-price-modal" type="text" placeholder="قیمت به تومان" required="required" name="price" defaultValue={price} onKeyUp={(event) => setprice(englishNumber(event.target.value))} />
                                                    <div className="info-price reltv" title="کاربر گرامی، قیمت پیشنهادی شما باید با کمینه و بیشینه 25% از قیمت کالا ارائه گردد." ><span className=" border border-light h5 px-2 rounded-circle">i</span>
                                                   
                                                    
                                                    </div >

                                                </div>
                                                تومان، به تعداد / متراژ (مترمربع)
                                                        <input className="input-price-modal" type="text" placeholder="مثال :10عدد یا20متر" required="required" name="size" defaultValue={size} onKeyUp={(event) => setsize(englishNumber(event.target.value))} />
                                                        را دارم، لطفا در صورت تایید به موبایل
                                                    <input className=" input-price-modal text-right" type="text" placeholder="شماره موبایل شما" required="required" name="phone"
                                                    defaultValue={(userContext.data.user.login) ? (userContext.data.user.login).toString().replace('989', '09') : phone} onKeyUp={(event) => setphone(englishNumber(event.target.value))} />
                                            اطلاع دهید.
                                                        </p>


                                            <div className="col-sm-8 mx-auto">
                                                <div className="form-account-row form-account-submit">
                                                    <div className="parent-btn">
                                                        <button className="dk-btn dk-btn-info" type="submit">
                                                            ثبت درخواست 
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    :
                                    <div className="m-auto py-5 text-center">
                                        <Link href='/u/login'><a id="sabt-drk " className="btn btn-firoozei m-auto " >
                                        <CheckCircle/>
                                             ابتدا وارد حساب کاربری خود شوید
                                    </a></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }


        </>

    )
}
