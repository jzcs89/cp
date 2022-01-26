import React from 'react'

export default function Box1(props) {

    let { banners } = props

    return (
        < >



            {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-text-box')?.map(([key, value]) =>
                <div key={key} className="col-lg-8 col-12  ">
                    <h3 className="text-d-green w-100 mr-2 mb-3 text-right jannat">{value.title}</h3>
                    <p className="textbox-fluid text-justify ">
                        <div dangerouslySetInnerHTML={{ __html: value.details }}></div>
                    </p>
                </div>
            )}

            <div className="col-lg-4 col-12 mt-4 pr-5  mb-3">
                {banners && banners.data && banners.data.data && Object.entries(banners.data.data).filter(([key, value]) => value.position === 'home-page-text-box-link')?.map(([key, value]) =>
                    <div key={key} className="brtsh-btn text-right    m-2" >
                        <a   href={value.link} target="_blank" rel="noopener noreferrer" >
                            <div className="b-button">{value.title}</div>
                        </a>
                    </div>
                )}
            </div>


        </>

    )
}