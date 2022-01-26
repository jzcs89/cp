import { withRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

import ReactMapGl, { Marker, FlyToInterpolator } from 'react-map-gl';
import Pin from './Pin';


// setRTLTextPlugin("https://api?.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js");
// https://github.com/mapbox/mapbox-gl-rtl-text/issues/11
function MapSelectWizard(props) {


    // var lat = props.latitude ?? 31.27;
    // var lon = props.longitude ?? 54.61;

    const { latitude, longitude } = props
    
    const [lati, setlati] = useState(latitude ?? 31.897423)
    const [longi, setlongi] = useState(longitude ?? 54.356857)

    const [viewport, setviewport] = useState({
        width: '100vw',
        height: '50vh',
        latitude: lati,
        longitude: longi,
        // lat: 31.897423,
        // lng: 54.356857,
        zoom: 4,
        pan: { animate: true },
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out

        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator(),

        easing: function (t) {
            return t;
        },

        essential: true
    })


    useMemo(() => {
        setviewport({
            ...viewport,
            latitude: Number(lati),
            longitude: Number(longi),
            zoom: 4
        })
    }, [])

    const selectLocation = (e) => {
        setlati(e.lngLat[1])
        setlongi(e.lngLat[0])

        props.HandleSelect([e.lngLat[1],e.lngLat[0]])
    }

    return (
        <>
            <ReactMapGl
                {...viewport}
                onViewportChange={(viewport) => setviewport(viewport)}
                mapboxApiAccessToken="pk.eyJ1IjoiY2VyYW1wYWtoc2giLCJhIjoiY2thM2cyY3VlMDNsYzNmbzZxbzQ0MXM4eiJ9.nRNmAuuEz0U2Y77eCru4sQ"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onClick={selectLocation}
            >
                <Marker
                    latitude={Number(lati)}
                    longitude={Number(longi)}
                >
                    <Pin size={40} />

                </Marker>

            </ReactMapGl>

        </>
    )
}

export default withRouter(MapSelectWizard)