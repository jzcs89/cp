import React from 'react'
import Config from '../../configs/Cerampakhsh';
import { website } from '../../Services/Helper';
export default function Loading(props) {
    return (
        <>
            <div className="loadingcp-back">
                <div className="loadingcp">
                    <img className="loadingcp-png " src={Config.logo} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" height="auto" />
                    <img className="loadingcp-gif  " alt="کاشی سرامیک تجاری و پارکینگ" title="کاشی سرامیک تجاری و پارکینگ" src={`${website}/files/img/newcp.gif`} />
                </div>
            </div>
        </>
    )
}