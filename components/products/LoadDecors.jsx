
import React from 'react'

export default function LoadDecors() {


    return (

        <>
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((response, index) =>
                    <div key={index} className="ph-item d-inline col-lg-6 col-xl-4 col-md-6 float-left col-sm-6 col-12 p-0 bg-white">
                        <div className="ph-row mt-3 mb-2">
                            <div className="ph-col-12 ">
                                <h6 className="text-right op-0" > کاشی شیشه ای C6RE0062 قرمز 5*10 برند روکارنو
          </h6>

                            </div>
                        </div>
                        <div className="ph-col-12">
                            <div className="ph-picture h-100">
                            <img height="291" width="465" className="img-decor-list lazyload op-0" src="https://cerampakhsh.com/resize/medium/files/uploads/decors/2021-02-22/d985787476a3d00a98b1c6590337397ff64838e1.jpg" alt="دکوراسیون کاشی شیشه ای 1000 طلایی 2.5*2.5 بهینا تایل" title="دکوراسیون کاشی شیشه ای 1000 طلایی 2.5*2.5 بهینا تایل"/>                            </div>
                            <div className="ph-row">
                                <hr />
                                <div className="ph-col-2 ml-1"></div>
                                <div className="ph-col-2 ml-1"></div>
                                <div className="ph-col-2 ml-1"></div>
                                <div className="ph-col-2 ml-1"></div>
                                <div className="ph-col-2 ml-1"></div>
                                <hr />

                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-4 empty big"></div>
                                <div className="ph-col-2 big"></div>

                            </div>
                        </div>
                    </div>
            )}
        </>

    )
}
