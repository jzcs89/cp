import React, { useState, useEffect } from 'react'
import { Minus, PlusCircle } from '../../components/icons/SvgIcons'



export default function WallFloorArea(props) {

    const [data, setData] = useState(props.defultData)

    useEffect(() => {
        props.Result(data)
    }, [data])

    useEffect(() => {
        if (props.defultData !== undefined)
            setData(props.defultData)
    }, [props.defultData])

    //single wall area
    const handleWallArea = (e) => {

        let value = Math.abs(e.target.value);
        setData({
            ...data,
            input: {
                value: Number(value),
                unit: data?.unit,
                result: Number((value / data?.unit).toFixed(3))
            },
        })
    }

    const handelSelectwallArea = (e) => {
        let value = e.target.value;
        setData({
            ...data,
            input: { ...data.input, unit: Number(value), result: Number((data.input.value / value).toFixed(3)) },
        })
    }
    // multi wall area
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const inputs = [...data.inputs];
        const unit = inputs[index]['unit'];
        inputs[index][name] = Math.abs(value);
        inputs[index]['result'] = Number(((inputs[index]['x'] * inputs[index]['y']) / unit).toFixed(3));
        let newSum = inputs.reduce((a, v) => a = a + v.result, 0)
        setData({ ...data, inputs: inputs, sum: newSum })
    };

    const handelSelectMultiWallArea = (e, index) => {
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
        const obj = { x: "", y: "", unit: 1, result: 0 };
        let pushing = data?.inputs
        pushing.push(obj)
        setData({ ...data, inputs: pushing })
    };


    return (
        <>
            <div className="row-ak Enter-wall-area rounded-12 mx-auto mx-0">
                <div className="col-12 p-md-2 px-0">
                    <p>ابعاد {props?.title} خود را وارد کنید</p>

                    <div className="calc-area row-ak pb-0" >
                        <div className="d-flex col-wall-calc op-0">{props?.name} 1</div>
                        <div className="col-md-1 col-2 col-height-calc">
                            ارتفاع
                        </div>
                        <div className="d-flex px-md-2 px-0 col-x-calc op-0 fontS-20">×</div>
                        <div className="col-md-1 col-2 col-width-calc">
                            طول
                        </div>
                        <div className="col-md-1 col-2 col-unit-calc">
                            واحد
                        </div>
                        <div className="d-flex m-md-auto col-source-calc">
                        </div>
                    </div>

                    {data?.inputs?.map((input, i) =>
                        <div key={i} className="calc-area row-ak">
                            <div className="d-flex col-wall-calc">

                                {props?.name} {i + 1}
                            </div>
                            <div className="col-md-1 col-2 col-height-calc"><input type="number" name="x" placeholder="0" value={input.x} onChange={e => handleInputChange(e, i)} /></div>
                            <div className="d-flex px-md-2 px-0 col-x-calc fontS-20">×</div>
                            <div className="col-md-1 col-2 col-width-calc"><input type="number" name="y" placeholder="0" value={input.y} onChange={e => handleInputChange(e, i)} /></div>
                            <div className="col-md-2 col-3 col-unit-calc">
                                <select name="unit" className="select" ng-model="row.unit" onChange={e => handelSelectMultiWallArea(e, i)}>
                                    {props?.selectUnit?.map((itemSelect, keySelect) => <option key={keySelect} value={itemSelect.value} data-unit={itemSelect.unit} selected={itemSelect.value === input.unit}>{itemSelect.text}</option>)}
                                </select>
                            </div>
                            <div className="d-flex mr-md-auto col-source-calc">
                                <span className="" dir="ltr"> {input.result} m² </span> <span className="unity"> (مترمربع) </span>
                            </div>
                            {data?.inputs?.length !== 1 && <div className="remove-calc-area" onClick={() => handleRemoveClick(i)} ><Minus /> حذف  </div>}
                        </div>
                    )}
                    {(data?.inputs?.length) && <div className="addmore-calc-area" onClick={handleAddClick} > <PlusCircle className="mb-1" /> اضافه کردن </div>}


                </div>
            </div>
            <div className="row-ak mt-2">
                <div className="col-12 px-md-auto px-0">
                    <div className="m-auto sum-calc d-flex flex-md-row flex-column">
                        <div className="align-items-baseline col-lg-6 d-flex justify-content-md-start justify-content-center px-0">
                            <div className="circle_handler_area ml-1">
                                <img src="files/img/landing/calc/Elip.svg" alt="" width="30px" />
                            </div>
                            <p className="text-center">از قبل اندازه مساحت کل {props?.title} خود را می دانید؟</p>
                        </div>
                        <div className="calc-area calc-source ml-md-0 mx-auto row-ak" >
                            <div className="col-3">
                                <input type="number" name="" value={data?.input?.value} placeholder="0" id="" onChange={e => handleWallArea(e)} /></div>
                            <div className="col-3">
                                <select name="units" className="select" ng-model="row.unit" onChange={e => handelSelectwallArea(e)} >
                                    {props?.selectUnit?.map((itemSelect2, keySelect2) => <option key={keySelect2} value={itemSelect2.value} data-unit={itemSelect2.unit} selected={itemSelect2.value === data.input.unit} >{itemSelect2.text}</option>)}
                                </select>
                            </div>
                            <div className="mx-auto ml-md-4"><span dir="ltr">{data?.input?.result} m²</span> <span className="unity">(مترمربع)</span> </div>
                        </div>
                    </div>
                </div>
                <div className="icon-plus-col">
                    <div className="icon-plus--box">
                        <span className="negative"><svg xmlns="http://www.w3.org/2000/svg" className="position-absolute" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z" /></svg></span>
                        <span className="negative change-to-plus"><svg xmlns="http://www.w3.org/2000/svg" className="position-absolute" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z" /></svg></span>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-md-end justify-content-center mr-auto mt-md-3 my-2">
                <div className="sum-calc Total-calc">مجموع {props?.name}:  <span dir="ltr">{data?.input?.result > 0 ? data?.input?.result : data?.sum} m²</span> <span className="">(مترمربع)</span></div>
            </div>
            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(data)}</div> */}
        </>
    )
}