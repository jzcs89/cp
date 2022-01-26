
import React from 'react'
import { website } from '../../Services/Helper'
import { AngleDown } from '../icons/SvgIcons';

export default function HeaderTags(props) {


    return (

        <>
            {props.top ?

                <div className="hdr-tags-top row-ak ">

                    <div className=" col-12 p-0">
                        <h1>
                            <img   src={`${website}/files/img/cplogo.png`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="25" height="25" />
                            {props.headerOne}
                        </h1>

                    </div>

                </div>
                :
                // <div className="hdr-tags row-ak ">
                //     <div className="col-md-3 col-12">
                //         <img className="center-ak mb-4  " src={Config.logo} alt="سرام پخش" title="سرام پخش" width="250" />
                //     </div>
                //     <div className="col-md-9 col-12 pt-3">

                //         <h2 className="m-0 header-h2">
                //         <div dangerouslySetInnerHTML={{ __html: props.headerTwo }}></div>
                //         </h2>
                //     </div>

                // </div>


                <div className="row-ak  py-3 brand-box bg-white  pos-rltv" >


                    <div className="col-12  d-flex   " >


                        <div className="brand-box-txt bg-white border custom-control custom-checkbox" >



                            <p className="text-justify" >
                                <input type="checkbox" className="custom-control-input brand-box-btn " id="brands" name="brands" />
                                <label className="custom-control-label font-weight-bold read-more" htmlFor="brands">
                                    <span className="open-more">مشاهده بیشتر </span>       <AngleDown />

                                </label>
                                <div className="active-brand-btn" >
                      
                                        <div dangerouslySetInnerHTML={{ __html: props.headerTwo }}></div>
                                   

                                </div>

                            </p>
                        </div>
                    </div>
                </div>



            }


        </>

    )
}