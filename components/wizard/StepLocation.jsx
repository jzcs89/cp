import React, { useState, useContext, useEffect } from 'react'
// import MapSelect from './../../components/sections/MapSelect';
import MapSelectWizard from './../../components/sections/MapSelectWizard';
import { WizardContext } from '../../Contexts/WizardContext';
import { website } from '../../Services/Helper';



export default function StepLocation(props) {



    const wContext = useContext(WizardContext)
   const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    useEffect(() => {
        if (wContext && wContext.data && wContext.data.location) {
            let location = (wContext.data.location).split(',');
            setLatitude(location[0])
            setLongitude(location[1])
        }

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
         
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                
                props.handleAddress([position.coords.latitude, position.coords.longitude])
            });
          }

    }, [wContext,props])

    const handleSelect = () => (event) => {
        setLatitude(event[0])
        setLongitude(event[1])

        
        props.handleAddress(event)
        
    }

    return (
        <>

            <div className="hdr-tags-top-w row-ak ">
                <h1 className="w-100">
                    <img   src={`${website}/files/img/cplogo.png`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="25" height="25" />
                موقعیت مکانی پروژه ساختمانی خود را انتخاب نمایید.
                       </h1>
            </div>
            {/* <h6 className="text-right py-4"موقعیت مکانی پروژه ساختمانی خود را انتخاب نمایید.</h6> */}
            <div className=" row-ak border-bottom pb-3">
                <div className="rltv">
                    {/* <MapSelect latitude={latitude} longitude={longitude} HandleSelect={handleSelect()} /> */}
                    <MapSelectWizard  latitude={latitude} longitude={longitude} HandleSelect={handleSelect()} />
                </div>
            </div>

            {/* <BtnSteps prev="" next="step-material" /> */}

        </>
    )
}