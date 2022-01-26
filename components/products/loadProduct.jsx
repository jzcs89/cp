
import React, { useMemo } from 'react'

export default function LoadProduct() {

    useMemo(() => {
        if (process.browser) {
            window.scroll(0, 0)
        }
    }, [])

    return (
        <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((response, index) =>
                <div key={index} className="ph-item d-inlinecol-xl-2-5 col-lg-3 col-md-6  col-sm-4 col-6 p-0 bg-white">
                    <div className="ph-row mt-3 mb-2">
                        <div className="ph-col-12 ">
                            <h6 className="text-right op-0" > کاشی شیشه ای C6RE0062 قرمز 5*10 برند روکارنو
                            </h6>

                        </div>
                    </div>
                    <div className="ph-col-12">
                        <div className="ph-picture h-100">
                            <img src="https://cerampakhsh.com/resize/medium/files/uploads/products/2021-02-18/cf7c3262ee87d8f7c4796c6acad1cf9ce690310a.jpg" height="228" width="445" className="img-decor-list lazyload  op-0" alt="کاشی شیشه ای C6RE0062 قرمز 5*10 برند روکارنو" title="کاشی شیشه ای C6RE0062 قرمز 5*10 برند روکارنو" />
                        </div>
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
        </div>
    )
}
