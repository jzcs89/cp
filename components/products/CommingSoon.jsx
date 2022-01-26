import React, { useContext, useState } from 'react'
// import { website } from '../Services/Helper'
import { authContext } from '../../Contexts/AuthContext';
import Link from 'next/link'
import { toast } from 'react-toastify';
import { getCookie } from '../../Services/getCookie';
import Axios from '../../Services/Axios';

export default function CommingSoon(props) {

    const userContext = useContext(authContext)
    // const [errors, setErrors] = useState({})
    const [data, setData] = useState({
        listproduct: props.listproduct
    })
    // const [modal, setmodal] = useState(false)
    // const [loader, setLoader] = useState(false)
    // const [price, setprice] = useState('')

    

    // let listproduct = props.listproduct

    let token = getCookie("token");

    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        // setLoader(true)
        // setErrors({})
        await Axios({
            method: 'post',
            url: encodeURI(url + '?token=' + token?.replace(/\r?\n|\r/g, '')),// 
            data: data
        })
            .then(response => {
                toast(response.data.message, {type: response.data.status})

                // setmodal(false)
                // setLoader(false)
            }, (errors) => {
                // setErrors(errors.response.data.errors)
                // setLoader(false)
            });
    }


    return (
        < >


            <span className=" un-noun-text"  > {props.type}</span>
            <p className=" un-noun-box">متاسفانه این کالا در حال حاضر موجود نیست. شما می‌توانید از طریق لیست بالای صفحه، از محصولات مشابه این کالا دیدن نمایید</p>
            <button type="button" data-toggle="modal" data-target="#unnoun" title="خرید محصول" className="btn btn-dark">موجود شد به من اطلاع بده </button>
            <div id="unnoun" className="modal fade" role="dialog">
                <div className="modal-dialog modal-lg unnoun-modal">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        {userContext.data && userContext.data.token ?
                            <>
                            {props.listproduct && Object.entries(props.listproduct)?.map( ([key, product]) =>
                                <input key={key} type="hidden" name="productid[]" value={product}/>
                            )}
                                <div className="row ">
                                  
                                    <div className="col-md-12 col-12  py-5">

                                        <p className="text-right">به من اطلاع بده، از طریق:</p>
                                        <hr />
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck-email" name="email" disabled={(userContext.data.user.email) ? false : true} 
                                            onChange={(event) => setData({...data , email: (!data.email) ? 1 : 0  })} />
                                            <label className="custom-control-label" htmlFor="customCheck-email">ایمیل کن به <span className="bg-stl px-2">{(userContext.data.user.email) ? (userContext.data.user.email) : <Link href='/profile'><a>ایمیل خود را ثبت نمایید.</a></Link>}</span></label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck-number" name="sms"
                                            onChange={(event) => setData({...data , sms: (!data.sms) ? 1 : 0  })} />
                                            <label className="custom-control-label" htmlFor="customCheck-number"> پیامک کن به<span className="bg-stl px-2">{(userContext.data.user.login) ? (userContext.data.user.login).toString().replace('989', '09') : ''}</span></label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck" name="notification" checked={true} disabled onChange={(event) => setData({...data , notification: (!data.notification) ? 1 : 0  })}  />
                                            <label className="custom-control-label" htmlFor="customCheck">از طریق سیستم پیام سرام پخش اطلاع بده</label>
                                        </div>

                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">بازگشت</button>
                                    <button type="button" className="btn btn-default btn-firoozei" onClick={handleSubmit('v1/request/exists')}>ثبت </button>
                                </div>
                            </>
                            :
                            <div className="m-auto py-5 text-center">
                                <Link href='/u/login'><a id="sabt-drk " className="btn btn-firoozei m-auto ">
                                     ابتدا وارد حساب کاربری خود شوید
                                </a></Link>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </>

    )
}