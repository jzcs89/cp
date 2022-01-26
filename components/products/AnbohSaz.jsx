import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link'
import { CheckCircle, City } from '../icons/SvgIcons';
import { authContext } from '../../Contexts/AuthContext';
import { getCookie } from '../../Services/getCookie';
import Axios from '../../Services/Axios';

export default function AnbohSaz(props) {
    const userContext = useContext(authContext)
    const [loader, setLoader] = useState(false)
    const [modal, setmodal] = useState(false)
    const [size, setsize] = useState('')
    const [phone, setphone] = useState('')

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
                toast(response.data.message, { type: response.data.status })

                setmodal(false)
                setLoader(false)
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
            <div className="service-item colss py-1  slide-hover-btn">
                <button  data-toggle="modal" data-target="#anboh-saz-modal" onClick={(e) => setmodal(true)}>
                    <div className="d-flex-inline">
                        <div className="img-box">
                            <img src="https://cerampakhsh.com/files/img/svg/anboohsazs.svg" alt="انبوه سازان" />
                        </div>
                    </div>
                </button>
            </div>

            {modal &&
                <div className="modal-box-cp" id="anboh-saz-modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content"><button type="button" className="close text-danger " data-dismiss="modal" onClick={(e) => setmodal(false)}>×</button>
                       <button type="button" className="close text-danger  bg-btn-modal" data-dismiss="modal" onClick={(e) => setmodal(false)}>×</button>
                            <h3 className="right-header mb-4 w-auto mt-5 mx-4 "><div className="p-2">فرم ارتباط با انبوه ساز</div></h3>
                            <div className="modal-body">
                                {userContext.data && userContext.data.token ?
                                    <form action="mail/anbohsaz" method="post" onSubmit={handleSubmit('v1/mail/anbohsaz')} className="pcp-hidden ajaxCart">
                                        {loader &&
                                            <span className="loader"></span>
                                        }
                                        <p className="text-justify p-4"> کاربر گرامی شما با توجه به انتخاب این طرح و محصول برای پروژه خود، می&zwnj;توانید مقدار(متراژ و تعداد) مورد نیاز خود را ارائه داده تا بتوانیم در سریع&zwnj;ترین زمان ممکن (حداکثر 12 ساعت کاری)، بهترین قیمت و کیفیت را به شما ارائه دهیم.</p>

                                        <input className=" input-field text-right" type="hidden" required="required" name="mode" value="anbohsaz" />
                                        <input className=" input-field text-right" type="hidden" required="required" name="id" value={props.id} />
                                        <input className=" input-field text-right" type="hidden" required="required" name="type" value={props.type} />
                                        <div className="row p-4">

                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-account-title text-right">آقا/ خانم / شرکت</div>
                                                <div className="form-account-row">
                                                    <input className=" input-field text-right" type="text" placeholder="نام خود را وارد نمایید" required="required" name="name" defaultValue={((userContext.data.user.firstname) ? userContext.data.user.firstname : '') + " " + ((userContext.data.user.lastname) ? userContext.data.user.lastname : '')} />
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                                <div className="form-account-title text-right"> حداقل متراژ/ تعداد مورد نیاز</div>
                                                <div className="form-account-row">
                                                    <input className="input-field" type="text" placeholder="متر مربع" required="required" name="size" onKeyUp={(event) => setsize(englishNumber(event.target.value))} defaultValue={size} />
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                                <div className="form-account-title text-right"> تماس جهت هماهنگی بیشتر </div>
                                                <div className="form-account-row">
                                                    <input className="input-field" type="text" placeholder="شماره تماس" required="required" name="phone"
                                                        defaultValue={(userContext.data.user.login) ? (userContext.data.user.login).toString().replace('989', '09') : phone} onKeyUp={(event) => setphone(englishNumber(event.target.value))} />
                                                </div>
                                            </div>

                                            <div className="col-sm-8 mx-auto">
                                                <div className="form-account-row form-account-submit">
                                                    <div className="parent-btn">
                                                        <button className="dk-btn dk-btn-info">
                                                            <City/>ثبت درخواست 
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                    :
                                    <div className="m-auto py-5 text-center" >
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
