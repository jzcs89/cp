import React, { useState, useMemo } from 'react'
import Axios from '../../../Services/Axios';

import { website } from '../../../Services/Helper';
// export default class Product extends Component {
export default function Specifications(props) {


    const [html, setHtml] = useState({ __html: '' });

    

    useMemo(() => {
     
        Axios({
            method: 'get',
            url: encodeURI('/v1/get-html?url=' + website + '/skin1/pages/factories/' + props.factory + '/specification.html'),
            data: ''
        })
            .then(response => {
                if(!response?.data?.startsWith("<!DOCTYPE html>")){
                    setHtml(response)
                }
            });
    }, html)

    return (

        <>
            <div className="tab-pane  active" id="desc"   aria-expanded="false">
                <div className="row">

                    <div className="container-ak">
                        <h3 className="text-center px-2">مشخصات فنی کالا</h3>
                        <p>شما می‌توانید براساس سلیقه شخصی خود کاشی مورد نظرتان را از نظر طرح، رنگ و سایز انتخاب کنید. انتخاب شما تاثیر بسزایی در زیبایی خانه شما خواهد داشت. اما برای اینکه بتوانید محصولات مختلف را از نظر کیفیت و نوع کاربری با هم مقایسه کنید، می‌توانید مشخصات فنی محصولی که شامل مواردی چون مشخصات فیزیکی و شیمیایی و ابعادی و سطحی را بررسی کنید تا انتخابی ماندگارتر داشته باشید.
                        توجه فرمائید که مشخصات فنی به شما در کاربری محصول و محل نصب آن اطمینان خواهد داد.
</p>


                        <div dangerouslySetInnerHTML={{ __html: html.data }}></div>
                    </div>

                </div>
            </div>
        </>

    )
}
