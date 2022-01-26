import React, {  useState } from 'react';

import ReactMapGl, { Marker, Popup, FlyToInterpolator} from 'react-map-gl';
import Pin from './Pin';
import Link from 'next/link'
// setRTLTextPlugin("https://api?.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js");
// https://github.com/mapbox/mapbox-gl-rtl-text/issues/11
export default function MapboxSinglePoint(props) {

    const { point } = props
    
    const [viewport, setviewport] = useState({
        width: '100vw',
        height: '60vh',
        latitude: (point && point.latitude) ? Number(point.latitude) : 31.897423,
        longitude: (point && point.longitude) ? Number(point.longitude) : 54.356857,
        // lat: 31.897423,
        // lng: 54.356857,
        zoom: 4,
        pan: { animate: true },
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out

        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.

        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator(),

        // transitionDuration={10000} 
        // transitionInterpolator={new FlyToInterpolator()}
        easing: function (t) {
            return t;
        },

        // this animation is considered essential with respect to prefers-reduced-motion
        essential: true
    })
    //const [showList, setShowList] = useState(false)
    const [selectGeo, setSelectGeo] = useState(null)


    const handleClick = (location) => (e) => {
        setviewport({
            ...viewport,
            latitude: Number(location.latitude),
            longitude: Number(location.longitude),
            zoom: 15
        })
        setSelectGeo(location)
    }

    return (
        <>
        {point &&
            <div style={{ height: '60vh', width: '100vw', position: 'fixed', top: 0, ight: 0, background: '#fff', direction: 'ltr !important' }}>
                
                <ReactMapGl
                    {...viewport}
                    onViewportChange={(viewport) => setviewport(viewport)}
                    mapboxApiAccessToken="pk.eyJ1IjoiY2VyYW1wYWtoc2giLCJhIjoiY2thM2cyY3VlMDNsYzNmbzZxbzQ0MXM4eiJ9.nRNmAuuEz0U2Y77eCru4sQ"
                    mapStyle="mapbox://styles/mapbox/streets-v11"

                >

                    {point && point.latitude && point.longitude &&
                        <Marker
                            latitude={Number(point.latitude)}
                            longitude={Number(point.longitude)}
                        > 
                            <Pin size={40} handleclick={handleClick(point)} />

                        </Marker>
                    }
  
                    {selectGeo &&
                        <Popup
                            latitude={Number(selectGeo.latitude)}
                            longitude={Number(selectGeo.longitude)}
                            onClose={() => { setSelectGeo(null) }}

                            closeButton={true}
                            closeonClick={false}
                        // anchor="top"
                        >
                            {selectGeo.active === 1 ?
                                <>
                                    <h6 className="factory-map-popup mb-2">{selectGeo.title}</h6>
                                    {/* <p className="adrs-map-popup" >{selectGeo.city}-{selectGeo.address}</p> */}

                                    <a className="tel-map-popup mb-2" href={`tel:${selectGeo.phone_number}`}>تماس با : <span dir="ltr"> ( {selectGeo.phone_number} )</span></a>
                                    
                                </>
                                :
                                <>
                                    <Link href={`/producer/${selectGeo.manufactories[0].manufacturer_en}/${selectGeo.manufactories[0].manufacturer}`}><a>{selectGeo.title}</a></Link>
                                    <p>{selectGeo.city}-{selectGeo.manufactories[0].relation_phone}</p>
                                </>
                            }
                        </Popup>
                    }


                </ReactMapGl>
            </div>

}
        </>
    )
}
