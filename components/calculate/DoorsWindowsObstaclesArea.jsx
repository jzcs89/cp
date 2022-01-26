import React, { useState, useEffect } from 'react'
import { Minus, PlusCircle } from '../../components/icons/SvgIcons'



export default function DoorsWindowsObstaclesArea(props) {


    const [data, setData] = useState(props.defultData)

    useEffect(() => {
        props.Result(data)
    }, [data])

    useEffect(() => {
        
        if (props.defultData !== undefined)
            setData(props.defultData)
    }, [props.defultData])

    // multi Floor area
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const inputs = [...data.inputs];
        inputs[index][name] = Math.abs(value);
        const unit = inputs[index]['unit'];
        inputs[index]['result'] = Number(((inputs[index]['x'] * inputs[index]['y']) / unit).toFixed(3));
        let newSum = inputs.reduce((a, v) => a = a + v.result, 0)
        setData({ ...data, inputs: inputs, sum: newSum })
    };

    const handelSelectMultiDwArea = (e, index) => {
        const { value } = e.target;
        const inputs = [...data.inputs];
        inputs[index]['unit'] = Number(value);
        inputs[index]['result'] = Number(((inputs[index]['x'] * inputs[index]['y']) / value).toFixed(3));
        let newSum = inputs.reduce((a, v) => a = a + v.result, 0)
        setData({ ...data, inputs: inputs, sum: newSum })
    }

    const handleRemoveClick = index => {
        const inputs = [...data.inputs];
        inputs.splice(index, 1);
        let newSum = inputs.reduce((a, v) => a = a + v.result, 0)
        setData({ ...data, inputs: inputs, sum: newSum })
    };

    const handleAddClick = () => {
        const inputs = [...data.inputs];
        const show = inputs.length % 2
        const obj = { x: "", y: "", uses: show, unit: 1, result: 0 };
        let pushing = inputs
        pushing.push(obj)
        setData({ ...data, inputs: pushing })
    };


    return (
        <>
            <div className="col-sm-12 col-xl-6 order-2 order-sm-1 p-0 p-md-2 mb-3">
                <div className="Enter-door-area p-3 rounded-12">
                    <p>{props?.title}</p>
                    <div className="calc-area row-ak pb-0" >

                        <div className=" hdr-col-unit-calc">
                            {props?.name}
                        </div>
                        <div className="col-2 col-md-1 col-xl-2 col-height-calc">
                            ارتفاع
                        </div>
                        <div className="d-flex px-md-2 px-0 col-x-calc op-0 fontS-20">×</div>
                        <div className="col-2 col-md-1 col-xl-2 col-width-calc">
                            طول
                        </div>
                        <div className="col-2 col-md-1 col-xl-2 col-unit-calc">
                            واحد
                        </div>
                        <div className="d-flex m-md-auto col-source-calc">
                        </div>
                    </div>
                    {data?.inputs?.map((input, i) =>
                        <div key={i} className="calc-area row-ak pr-0">

                            <div className="d-flex col-unit-calc">
                                <select name="uses" className="select select-place " ng-model="row.unit">
                                    {props?.select?.map((item, key) => <option key={key} value={key} selected={key === input.uses}>{item}</option>)}
                                </select>
                            </div>
                            <div className="col-2 col-md-1 col-xl-2 col-height-calc"><input type="number" name="x" placeholder="0" value={input.x} onChange={e => handleInputChange(e, i)} /></div>
                            <div className="d-flex px-md-2 px-0 col-x-calc fontS-20">×</div>
                            <div className="col-2 col-md-1 col-xl-2 col-width-calc"><input type="number" name="y" placeholder="0" value={input.y} onChange={e => handleInputChange(e, i)} /></div>
                            <div className="col-2 col-xl-2 col-unit-calc">
                                <select name="unit" className="select" ng-model="row.unit" onChange={e => handelSelectMultiDwArea(e, i)}>
                                    {props?.selectUnit?.map((itemSelect, keySelect) => <option key={keySelect} value={itemSelect.value} data-unit={itemSelect.unit} selected={itemSelect.value === input.unit} >{itemSelect.text}</option>)}
                                </select>
                            </div>
                            <div className="d-flex mr-md-auto col-source-calc">
                                <span className="" dir="ltr"> {input.result} m² </span> <span className="unity"> (مترمربع) </span>

                            </div>
                            {data?.inputs?.length !== 1 && <div className="remove-calc-area" onClick={() => handleRemoveClick(i)} ><Minus className="mb-1" />حذف  </div>}
                        </div>
                    )}
                    {(data?.inputs?.length) && <div className="addmore-calc-area" onClick={handleAddClick} ><PlusCircle /> اضافه کردن </div>}
                    <div className="col-sm-8 d-flex justify-content-md-end justify-content-center mr-auto mt-md-3 my-2 px-0 px-md-auto">
                        <div className="sum-calc Total-calc px-0">مجموع مساحت {props?.name} :  <span dir="ltr">{data?.sum} m²</span> <span className="">(مترمربع)</span></div>

                    </div>
                </div>
                {/* <div style={{ marginTop: 20 }}>{JSON.stringify(data?.inputs?)}</div> */}
            </div>
        </>
    )
}