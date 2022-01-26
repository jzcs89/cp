import React,{useEffect, useState} from "react";

import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import {  Vector as VectorLayer, Tile } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import OSM from 'ol/source/OSM';
import {  fromLonLat,toLonLat } from 'ol/proj';
import { useRouter } from "next/router";


export default function MapSelect(props) {

    let router = useRouter()
    ///////////////////////////////
    const [lat, setLatitude] = useState(props.latitude ?? 31.27)
    const [lon, setLongitude] = useState(props.longitude ?? 54.61)
    
    var idmap          = props.id ?? 'mapCeram';
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                
            });
          }

    }, [router])

    if (!process.browser) {
        return ''
    }

    var markerStyle = new Style({
        image: new Icon({
            // anchor: [0.3, 1],
            scale: 0.3,
            opacity: 1,
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            // src:require('./../../Assets/img/marker.png')
            src:'https://cerampakhsh.com/files/marker.png'
        })
    });


    var map = new Map({
        target: idmap,
        layers: [
            new Tile({
                source: new OSM()
            })
        ],
        view: new View({
            center: fromLonLat([lon, lat]), // Coordinates of New York
            zoom: 6 //Initial Zoom Level
        })
    });
  


    var marker = new Feature({
        geometry: new Point(
            fromLonLat([lon,lat])
        ),  // Cordinates of New York's Town Hall
    });
    var vectorSource = new VectorSource({
        features: [marker]
    });

    var markerVectorLayer = new VectorLayer({
        source: vectorSource,
        style: markerStyle
    });
    map.addLayer(markerVectorLayer);
    //////////////////////////////////////

    setInterval(() => {
        map.updateSize();
    }, 1000);

    
    map.on('click', function(evt){
        var coords = toLonLat(evt.coordinate);
        var lat = coords[1];
        var lon = coords[0];
        //alert("Lat, Lon : " + lat + ", " + lon)
        map.removeLayer(markerVectorLayer);
        
        marker = new Feature({
            geometry: new Point(
                fromLonLat([lon,lat])
            ),  // Cordinates of New York's Town Hall
        });
        vectorSource = new VectorSource({
            features: [marker]
        });

        markerVectorLayer = new VectorLayer({
            source: vectorSource,
            style: markerStyle
        });
        map.addLayer(markerVectorLayer);
        props.HandleSelect([lat,lon])
    });
    ///////////////////////////////
   
    return (
        <>
            <div className="row w-100" dir="ltr">
                <div id={idmap} className="order-2" style={{ width: "100%", height: "50vh" }}>
                    <div id="popup"></div>
                </div>
            </div>

        </>
    )
}