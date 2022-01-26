import React, { useState } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

export default function StepPrice(props) {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         value: { min: 2, max: 10 },
    //     };

    // }


    // const wContext = useContext(WizardContext)

    const [value, setValue] = useState({ min: props.min ?? 0, max: props.max ?? 20000000 })


    const handlePrice = (price) => (event) => {
        setValue(event)
        // console.info(event)
        // wContext.setWizard({
        //     type: 'PRICE',
        //     price: event.min + ',' + event.max
        // })
        
        props.HandlePrice([Number(event.min), Number(event.max)])
    }

    return (<>

        <div className="end-step-range ">


            <div className="hdr-tags-top-w row-ak end-step-range ">
                <h1 className="w-100">
                    <img   src="https://cerampakhsh.com/files/img/cplogo.png" alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش"width="25" height="25"/>چه رنج قیمتی  مد نظرتون هست؟
               </h1>
            </div>



            <div className=" p-5 " dir="ltr">
                <InputRange
                    formatLabel={value => `${value}`}
                    maxValue={20000000}
                    minValue={0}
                    value={value}
                    // onChange={value => handlePrice(value)}
                    onChange={handlePrice(value)}
                />
            </div>
            {/* <div className="end-step-wizard">
                <BtnSteps prev="step-style" next="" />

            </div> */}
       
        </div>

    </>
    )
}