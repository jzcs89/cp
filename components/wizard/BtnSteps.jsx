import React from 'react'
// import { WizardContext } from '../../Contexts/WizardContext'
import Link from 'next/link'
import { Ellipsis } from '../../components/icons/SvgIcons'

export default function BtnSteps(props) {

    // const [url, seturl] = useState(props.url ?? '')

    // const wContext = useContext(WizardContext)

    const handleClick = (stepClick) => (event) => {
        props.changeSteps(stepClick)
    }

    return (
        <>
            <div className={(props.stepbtns && (!props.stepSelected || props.stepSelected !== 6)) ? "w-100 mt-3 d-inline-block px-3 " : 'end-step-wizard w-100 mt-1'}>
                {props.stepbtns &&
                <>
                {props.stepSelected && props.stepSelected > 1 &&
                    <button className="btn btn-danger  float-right ml-3 " onClick={handleClick(props.stepSelected - 1)} to={`/wizard/${props.stepSelected}`} >بازگشت</button>
                }
                {props.stepSelected && props.stepSelected < 6 &&
                    <button className="btn btn-firoozei float-left wizard-btn" onClick={handleClick(props.stepSelected + 1)} to={`/wizard/${props.stepSelected}`} >مرحله بعد</button>
                }
                </>
                }


                <Link  href={props.url}><a className="bg-stl float-left mt-2  show-result text-danger w-100">مشاهده نتایج  <Ellipsis className="w-20px dangerSvg"/>
                </a></Link>
            </div>
        </>
    )
}