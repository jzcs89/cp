import React, { Component, useState } from 'react'
import { Link } from "v1/add-cart/product";
import {isMobile} from 'react-device-detect';

export default function WebShow() {

    const [showModal, setshowModal] = useState(true)

    const handleClose = (event) => {
        setshowModal(false)
    }


    return (

        <>

            {showModal && isMobile &&
                <div className="webshow-box row-ak">
                    <div className="  col-md-4 col-12 col-sm-2 "></div>
                    <div className=" overf-h  mt-5 p-0 webshow-area col-md-4 col-12 col-sm-8 ">
                        <Link  href="/device" ><a className="btn-params square m-5 ">انتخاب سریع محصول</a></Link>
                        <div className="btn-params square undo   m-5" onClick={handleClose}>مشاهده نسخه وب</div>
                    </div>
                    <div className="  col-md-4 col-12 col-sm-2 "></div>
                </div>
            }
        </>

    )
}