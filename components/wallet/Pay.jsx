import React, { useState } from 'react'
import Axios from '../../Services/Axios';
import { getCookie } from '../../Services/getCookie';
import { urlBase } from '../../Services/Helper';
import { Spinner } from '../icons/SvgIcons'
import { PayWallet } from '../routesApi';
import { numberFormat } from '../sections/NumberFormat';



export default function Pay() {
    let token = getCookie("token")
    const [loader, setLoader] = useState(false)
    const [errors, setErrors] = useState({})
    const [amount, setAmount] = useState(50000)

    const submit = () => async (event) => {
        event.preventDefault();
        
        setLoader(true)
        setErrors({})
        await Axios({
            method: 'post',
            url: encodeURI(PayWallet + '?token=' + token?.replace(/\r?\n|\r/g, '')),// 
            data: new FormData(event.target)
        }).then(response => {
            setLoader(false)
        }, (errors) => {
            if (errors.response.data.errors) {
                setErrors(errors.response.data.errors)
            }
            setLoader(false)
        })
            .catch(function (error) {
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

    const changeAmount = (am) => (e) => {
        e.preventDefault();
        if(englishNumber(am) >= 0){
            setAmount(am)
        }
    }

    return (
        <>
            {/* <form action="" onSubmit={submit()}> */}
            <div className="row-ak mb-5">
                <div className="col-12 pt-3 p-md-2  p-0">

                    <h2 className="mb-2 font-size18 font-weight-bold">افزایش موجودی کیف پول</h2>
                    <p>مبلغ مورد نظر جهت افزایش اعتبار را وارد کنید. پس از پرداخت از طریق درگاه بانکی، موجودی کیف پول شما افزوده خواهد شد .</p>


                    <br />
                    <div className="pay-cart-profile">
                        <span className=" btn btn3" onClick={changeAmount(Number(amount) + 10000)}>+</span>
                        <input type="text" className="form-control" value={amount} id="amount" name="amount" placeholder="مبلغ به تومان" onChange={(event) => setAmount(englishNumber(event.target.value))} />
                        <span className=" btn btn3" onClick={changeAmount(Number(amount) - 10000)}>-</span>
                        <br />
                        <small className="feed-back text-success text-right float-right error-amount">{amount ? (numberFormat(amount)) + ' تومان' : ''}</small>
                        <small className="feed-back text-danger text-right error-amount float-left">
                            ورود مبلغ بر حسب تومان
                        </small>

                    </div>



                    <br />
                    <div className="pay-cart-sample text-center ">

                        <div className="sample-cart-amount" onClick={changeAmount(25000)}>
                            25,000 <span>تومان</span>
                        </div>
                        <div className="sample-cart-amount" onClick={changeAmount(50000)}>
                            50,000 <span>تومان</span>
                        </div>
                        <div className="sample-cart-amount" onClick={changeAmount(100000)}>
                            100,000 <span>تومان</span>
                        </div>
                        <div className="sample-cart-amount" onClick={changeAmount(200000)}>
                            200,000 <span>تومان</span>
                        </div>
                        <div className="sample-cart-amount" onClick={changeAmount(500000)}>
                            500,000 <span>تومان</span>
                        </div>



                        <br />

                        {Number(amount) >= 10000 ?
                        <a className="btn btn3 mt-4" href={urlBase + '/' + PayWallet + '/' + (Number(amount) * 10) + '?token=' + token?.replace(/\r?\n|\r/g, '')}>
                            پرداخت و افزایش اعتبار
                        </a>
                        :
                        <a className="btn btn3 mt-4 disabled" disabled={true}>
                            پرداخت و افزایش اعتبار (حداقل 1000 تومان)
                        </a>
                        }

                    </div>

                    {/* <input type="text" className="form-control" id="amount" name="amount" placeholder="مبلغ به ریال" onKeyUp={(event) => setAmount(englishNumber(event.target.value))} /> */}
                    {/* <small className="feed-back text-success text-right float-right error-amount">{amount ? (numberFormat(amount / 10)) + ' تومان' : ''}</small>
                    <small className="feed-back text-danger text-right float-right error-amount"></small> */}
                    {/* <a className="btn btn-firoozei" href={urlBase + '/' + PayWallet + '/' + amount + '?token=' + token?.replace(/\r?\n|\r/g, '')}>
                        پرداخت
                    </a> */}
                </div>


            </div>
            {/* </form> */}
        </>
    )
}