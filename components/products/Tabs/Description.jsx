import React from 'react'
import { website } from '../../../Services/Helper'
//import axios from 'axios';
//import { website } from './../../../Services/Helper'
//import Axios from '../../../Services/Axios';

// export default class Product extends Component {
export default function Description(props) {


    return (

        <>
            <div className="tab-pane " id="descriptions"   aria-expanded="false">

                {props.details && Object.entries(props.details)?.map(([key, value]) =>
                    <div className="row" key={key}>

<div className="container-ak">
    <div className=" row-ak mb-5">


        <div className="col-12 col-md-8 col-lg-9 p-3 pb-3">
            <h2>نقد و بررسی محصول </h2>
            <p dangerouslySetInnerHTML={{ __html: value.fulldescr }}>
            </p>
        </div>
        <div className=" col-12 col-md-4 col-lg-3 mt-0 mt-md-5 "><img className="center-ak"  src={`${website}/files/shirzad/Features-dis.svg`} alt="کاشی و سرامیک سرام پخش" title="کاشی و سرامیک سرام پخش" /></div>


    </div>
</div>




                        <div className="w-100" ></div>
                    </div>
                )}



            </div>
        </>

    )
}
