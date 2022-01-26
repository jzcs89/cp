import React from 'react'
export default function LoadFilters() {
    return (
        <>
            <div className="ph-item d-inline col-lg-12 col-xl-12 col-md-12 float-left col-sm-12 col-12 p-0 bg-white">
                {[1, 2, 3, 4, 5]?.map((response, index) =>
                    <div className="ph-row mt-3 mb-2" key={index}>
                        <div className="ph-col-12 py-4">
                            <h6 className="text-right op-0" >... </h6>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}