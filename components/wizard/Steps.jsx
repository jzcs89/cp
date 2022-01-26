import React from 'react'
import Link from 'next/link'
import { BorderNone, Home, MapMarkerQuestion, Shape, TimesCircle, Tint } from '../../components/icons/SvgIcons'
// import { WizardContext } from '../../Contexts/WizardContext'

export default function Steps(props) {

    // const wContext = useContext(WizardContext)

    const handleClick = (stepClick) => (event) => {
        // wContext.setWizard({
        //     type: 'STEP',
        //     step: stepClick
        // })
        props.changeSteps(stepClick)
    }
    return (
        <>
            <div className="nav nav-pills mt-4 w-100">
                <div className={`step-cir ${(props && props.stepSelected === 1) ? 'active' : ''}`} >
                    <span onClick={handleClick(1)} to="/wizard/step-location"  >
                        <div className="icon-circle checked">
                            <MapMarkerQuestion className="w-15px" />
                        </div>
                        موقعیت
                    </span>
                </div>
                <div className={`step-cir ${(props && props.stepSelected === 2) ? 'active' : ''}`}  >
                    <span onClick={handleClick(2)} to="/wizard/step-material" >
                        <div className="icon-circle">
                            <BorderNone className="w-20px" />
                        </div>
                        محصول
                    </span>
                </div>

                <div className={`step-cir ${(props && props.stepSelected === 3) ? 'active' : ''}`}  >
                    <span onClick={handleClick(3)} to="/wizard/step-room" >
                        <div className="icon-circle">
                            <Home className="w-20px" />
                        </div>
                        کاربری
                    </span>
                </div>
                <div className={`step-cir ${(props && props.stepSelected === 4) ? 'active' : ''}`}  >
                    <span onClick={handleClick(4)} to="/wizard/step-color" >
                        <div className="icon-circle">
                            <Tint className="w-20px mr-n1" />
                        </div>
                        رنگ بندی
                    </span>
                </div>

                <div className={`step-cir ${(props && props.stepSelected === 5) ? 'active' : ''}`}  >
                    <span onClick={handleClick(5)} to="/wizard/step-style" >
                        <div className="icon-circle">
                            <Shape className="w-20px"/>
                        </div>
                        طرح
                    </span>
                </div>



            </div>

            <div className="logo-area-login  ">
                <Link href="/"><a>
                    {/* <img src={imgLogo} width="100px" alt="کاشی و سرامیک سرام پخش" title="کاشی و سرامیک سرام پخش" /> */}
                    <TimesCircle className="w-25px dangerSvg" />

                </a></Link>
            </div>
        </>
    )
}