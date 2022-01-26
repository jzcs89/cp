import React from 'react'
import Config from '../../configs/Cerampakhsh'
import { website } from '../../Services/Helper'

export default function LoadingMini() {


    return (

        <>
            <div className="loadingcp-mini-back my-5">
                <div className="loadingcp-mini">
                    <img className="loadingcp-mini-png " src={Config.logo} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170"  height="auto"/>

                    <img className="loadingcp-mini-gif  " alt="کاشی سرامیک تجاری و پارکینگ" title="کاشی سرامیک تجاری و پارکینگ" src={`${website}/files/img/newcp.gif`} />

                </div>
            </div>
        </>

    )
}