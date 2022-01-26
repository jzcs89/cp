import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link'
import Axios from '../../Services/Axios';
import { CheckCircle, SearchDoller } from '../../components/icons/SvgIcons';
import { authContext } from '../../Contexts/AuthContext';
import { getCookie } from '../../Services/getCookie';


// export default class Product extends Component {
export default function LessPrice(props) {
    const userContext = useContext(authContext)
    const [errors, setErrors] = useState({})
    const [modal, setmodal] = useState(false)
    // const [loader, setLoader] = useState(false)
    const [price, setprice] = useState('')

    let token = getCookie("token");

    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        // setLoader(true)
        setErrors({})
        await Axios({
            method: 'post',
            url: encodeURI(url + '?token=' + token?.replace(/\r?\n|\r/g, '')),// 
            data: new FormData(event.target)
        })
            .then(response => {
                toast(response.data.message, {type: response.data.status})

                setmodal(false)
                // setLoader(false)
            }, (errors) => {
                setErrors(errors.response.data.errors)
                // setLoader(false)
            });
    }

    // const handleKeyUp = (event) => {
    //     event.target.value = englishNumber(event.target.value)
    // }
    const englishNumber = (str) => {
        // fixNumbers = function (str)
        // {
        var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
            arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
        }
        return str;
        // };
    }


    return (

        <>

            <div className="service-item colss py-1 m-auto slide-hover-btn ">
                <button disabled={(props.price) ? false : true} className={(props.price) ? '' : 'disable-ak'}  data-toggle={(props.price) ? 'modal' : ''}  data-target="#less-price" onClick={(e) => setmodal(true)} >

                    <div className="d-flex-inline">
                        <div className="img-box">
                        <img src="https://cerampakhsh.com/files/img/svg/eterazs.svg" alt="اعتراض قیمت" /> 

                        </div>
                    </div>
                </button>
            </div>


            {modal &&
                <div className="modal-box-cp" id="less-price">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content"><button type="button" className="close text-danger " data-dismiss="modal"  onClick={(e) => setmodal(false)}>×</button>
                            {/* <div className="cntr-hdr  px-2  pt-4 pb-2">اعتراض به قیمت</div> */}
                           <button type="button" className="close text-danger bg-btn-modal " data-dismiss="modal"  onClick={(e) => setmodal(false)}>×</button>

                            <h3 className="right-header mb-4 w-auto mt-5 mx-4 "><div className="p-2">اعتراض به قیمت</div></h3>

                            <div className="modal-body">

                                {userContext.data && userContext.data.token ?
                                    <form action="mail/guest/price-less" method="post" onSubmit={handleSubmit('v1/mail/guest/price-less')} className="pcp-hidden ajaxCart">

                                        <input className=" input-field text-right" type="hidden" required="required" name="mode" value="price-less" />
                                        <input className=" input-field text-right" type="hidden" required="required" name="id" value={props.id} />
                                        <input className=" input-field text-right" type="hidden" required="required" name="type" value={props.type} />
                                        <input className=" input-field text-right" type="hidden" required="required" name="price_product" value={props.price} />



                                        <p className="text-justify p-4">کابر گرامی، با توجه به سیاست قیمت‌ گذاری در سرام پخش که مبتنی بر اصول مشتری‌مداری و احترام به حقوق مصرف‌کننده می‌باشد، سرام پخش به هیچ عنوان در قیمت‌گذاری محصولی هیچ دخل و تصرفی ندارد و صرفا قیمت‌های ارائه شده عینا بدون هیچ کاستی و افزایش توسط تامین‌کننده و نماینده فروش نمایش داده می‌شود. برای قرار گرفتن در مسیری کاملا شفاف در صورت مشاهده قیمت‌هایی متضاد، حتما به مجموعه سرام پخش اطلاع دهید.</p>

                                        <div className="row p-4">

                                            <div className="col-md-6">
                                                <div className="form-account-title text-right">آقا/ خانم / شرکت</div>
                                                <div className="form-account-row">
                                                    <input className=" input-field text-right" type="text" placeholder="نام خود را وارد نمایید" required="required" name="name" defaultValue={((userContext.data.user.firstname) ? userContext.data.user.firstname : '') + " " + ((userContext.data.user.lastname) ? userContext.data.user.lastname : '')} />

                                                    <small className="feed-back text-danger text-right float-right error-name">{errors.name}</small>
                                                </div>
                                            </div>
                                            <div className="col-md-6 ">
                                                <div className="form-account-title text-right"> قیمت مشاهده شده </div>
                                                <div className="form-account-row">
                                                    <input className="input-field" type="text" placeholder=" قیمت به تومان" required="required" name="price" defaultValue={price} onKeyUp={(event) => setprice(englishNumber(event.target.value))} />

                                                    <small className="feed-back text-danger text-right float-right error-price">{errors.price}</small>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-account-title">آدرس فروشگاه یا سایت:</div>
                                                <div className="form-account-row">
                                                    <textarea required="" name="link" className="input-field text-right" rows="5" placeholder=" آدرس سایت ویا فروشگاهی که قیمت پایینتری از سرام پخش ارائه کرده وارد کنید">

                                                    </textarea>

                                                    <small className="feed-back text-danger text-right float-right error-link">{errors.link}</small>
                                                </div>

                                            </div>

                                            <div className="col-sm-8 mx-auto">
                                                <div className="form-account-row form-account-submit">
                                                    <div className="parent-btn">
                                                        <button className="dk-btn dk-btn-info" type={"submit"}>
                                                            <SearchDoller/>ثبت  
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </form>
                                    :
                                    <div className="m-auto py-5 text-center">
                                        <Link href='/u/login'><a id="sabt-drk " className="btn btn-firoozei m-auto ">
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
