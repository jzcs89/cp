import React, { useState, useEffect, useMemo } from 'react';


import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
 
// // explicitly ask for the React version
// import Overlay from 'pigeon-overlay/react'
 
// // explicitly ask for the Inferno version
// import Overlay from 'pigeon-overlay/inferno'
 
// // choose the Inferno or React version based on BABEL_ENV
// import Overlay from 'pigeon-overlay/infact'
 


import Pin from './Pin';
import Collapsible from 'react-collapsible';
import Link from 'next/link'
import Axios from '../../Services/Axios';
import Loading from './Loading';
import { getCookie } from '../../Services/getCookie';


export default function MapBox(props) {


    let linkback = getCookie("linkback")
    // let mapContainer = React.createRef();


    const [viewport, setviewport] = useState({
        lat: 31.897423,
        lng: 54.356857,
        latitude: 31.897423,
        longitude: 54.356857,
        zoom: 15
    })

    const [showList, setShowList] = useState(false)
    const [selectGeo, setSelectGeo] = useState(null)

    const { data } = props

    const handleClick = (location) => (e) => {
        setviewport({
            ...viewport,
            latitude: Number(location.latitude),
            longitude: Number(location.longitude),
            zoom: 10
        })
        setSelectGeo(location)
    }


    return (
        <>
            <div style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, ight: 0, zIndex: 9999, background: '#fff', direction: 'ltr !important' }}>
                {props.load ?
                    <Loading />
                    :
                    <>
                        <div className="bg-white order-1 col-12 col-md-4 col-lg-3 maps-list p-2" style={{
                            zIndex: '10000',
                            top: 10,
                            right: 10,
                            overflow: 'auto',
                            position: 'absolute',
                            // height: '100vh',
                            maxHeight: '100vh',

                        }}>
                            <button className="btn btn-block btn-params" onClick={(e) => { setShowList(!showList) }}>نمایش لیست فروشندگان / نصابان</button>
                            {/* <input type="text" defaultValue="" className="form-control" onChange={props.handleChange} onFocus={(e) => { setShowList(true) }} /> */}
                            {showList &&
                                <ul className="list-group">

                                    {data ?
                                        <>
                                            {Object.entries(data)?.map(([key, geo]) => {

                                                return (
                                                    <>
                                                        <div className="map-ceram">
                                                            <li className="list-group-item seller" onClick={handleClick(geo)} >

                                                                <Collapsible trigger={geo.title + ' ' + geo.city}>
                                                                    <p> {geo.address}</p>
                                                                    <p>{geo.phone_number}</p>
                                                                    <p>ساعات کاری {geo.time_work}</p>
                                                                </Collapsible>

                                                            </li>
                                                        </div>


                                                    </>
                                                )
                                            })}
                                        </>
                                        :

                                        <div className="map-ceram">
                                            <li className="list-group-item seller" >

                                                <Collapsible trigger="هیچ موردی برای نمایش وجود ندارد" >
                                                </Collapsible>

                                            </li>
                                        </div>
                                    }

                                </ul>

                            }
                        </div>
                        {linkback && <Link to={linkback} className="btn btn-danger" style={{ position: 'absolute', left: 10, top: 10, zIndex: 9999 }}>بازگشت</Link>}

                        <Map defaultCenter={[50.879, 4.6997]} defaultZoom={12} width={600} height={400}>
                            <Overlay anchor={[50.879, 4.6997]} offset={[60, 39]}>
                            <img src='pigeon.jpg' width={120} height={79} alt="نقشه" title="نقشه" />
                            </Overlay>
                        </Map>
                        {/* <Map center={[50.879, 54.356857]} zoom={12} width={600} height={400}>
                            <Marker anchor={[54.356857, 54.356857]} payload={1} onClick={({ event, anchor, payload }) => { }} />

                            <Overlay anchor={[54.356857, 54.356857]} offset={[120, 79]}>
                                <img src='pigeon.jpg' width={240} height={158} alt='' />
                            </Overlay>
                        </Map> */}

                    </>
                }
            </div>

        </>
    )
}

