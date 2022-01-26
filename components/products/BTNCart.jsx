import React, { useState } from 'react'

import SweetAlert from 'react-bootstrap-sweetalert';
import { website } from '../../../Services/Helper';
// export default class Product extends Component {
export default function BTNCart() {

    const [sweetAlert, setsSeetAlert] = useState(false)

    const clickss = () => {
        setsSeetAlert(true)
    }

    return (

        <>
            <div className="my-2 default">
                <div className="parent-btn">
                    <button type="submit" onClick={() => clickss()} title="خرید محصول" className="dk-btn dk-btn-info">
                        افزودن به سبد خرید                                             <img className="add-to-basket" src={`${website}/files/img/add-to-basket3.svg`} alt=""/>

                    </button>

                    {sweetAlert &&
                        <SweetAlert
                            title="محصول شما با موفقیت به سبد خرید اضافه شد."
                            onConfirm='true'
                            show='false'
                            btnSize="sm"
                            success
                            showCancel
                            confirmBtnText="نهایی کردن خرید"
                            cancelBtnText="بازگشت به فروشگاه"
                            cancelBtnBsStyle="params undo"
                            confirmBtnBsStyle="params"


                        />
                    }


                </div>



            </div>
        </>

    )
}

