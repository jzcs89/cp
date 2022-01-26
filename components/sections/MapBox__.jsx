import React, { useState, useEffect, useMemo } from 'react';


import mapboxgl from 'mapbox-gl';

import Pin from './Pin';
import Collapsible from 'react-collapsible';
import Link from 'next/link'
import Axios from '../../Services/Axios';
import Loading from './Loading';
import { getCookie } from '../../Services/getCookie';


export default function MapBox(props) {


    let linkback = getCookie("linkback")
    // let mapContainer = React.createRef();

    const [mapContainer, setmapContainer] = useState(React.createRef())

    const [viewport, setviewport] = useState({
        lat: 31.897423,
        lng: 54.356857,
        latitude: 31.897423,
        longitude: 54.356857,
        zoom: 5
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


    mapboxgl.accessToken = 'pk.eyJ1IjoiY2VyYW1wYWtoc2giLCJhIjoiY2thM2cyY3VlMDNsYzNmbzZxbzQ0MXM4eiJ9.nRNmAuuEz0U2Y77eCru4sQ';
    // mapboxgl.setRTLTextPlugin("https://api?.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js");

    if (process.browser) {
        const container = document.getElementById('mapContainer')
    }
    if (container) {
        const map = new mapboxgl.Map({
            container: 'mapContainer',
            // container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [viewport.lng, viewport.lat],
            zoom: viewport.zoom,

            setRTLTextPlugin: "https://api?.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
        });
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
                                                                    <p> {geo.phone_number}</p>
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
                        {linkback && <Link href={linkback}><a className="btn btn-danger" style={{ position: 'absolute', left: 10, top: 10, zIndex: 9999 }}>بازگشت</a></Link>}


                        <div className="mapContainer" id="mapContainer" style={{ width: '100vw', height: '100vh', direction: 'ltr', textAlign: 'right' }} />
                        
                    </>
                }
            </div>

        </>
    )
}
