import React, { useState, useMemo } from 'react'

import { AngleRight, Edit, Trash } from '../../components/icons/SvgIcons'
// import { website } from '../../Services/Helper'
import { useRouter, withRouter } from 'next/router'
import { website } from '../../Services/Helper'


function MapStorage(props) {

    let router = useRouter()
    let [calculatorStorage, setCalculatorStorage] = useState(props.calculatorStorage)
    const queryStrings = router.query
    let img = queryStrings?.img;

    useMemo(() => {
        setCalculatorStorage(props.calculatorStorage)
    }, [props.calculatorStorage])



    const setCallbackStorage = (index) => e => {
        let calculatorStorageNew = calculatorStorage.filter((item, key) => key === index);
        let dataStorage = calculatorStorageNew[0]
        if (dataStorage.wall.area || dataStorage.floor.area) {
            document.cookie = `calculat-divar=${dataStorage.wall.area}; path=/;max-age=` + 31104000;
            document.cookie = `calculat-kaf=${dataStorage.floor.area}; path=/;max-age=` + 31104000;
            router.push(queryStrings.url)
        }

    }

    const setStorage = (index) => e => {
        let calculatorStorageNew = calculatorStorage.filter((item, key) => key === index);
        let dataStorage = calculatorStorageNew[0]
        if (dataStorage.wall.area || dataStorage.floor.area) {
            document.cookie = `calculat-divar=${dataStorage.wall.area}; path=/;max-age=` + 31104000;
            document.cookie = `calculat-kaf=${dataStorage.floor.area}; path=/;max-age=` + 31104000;
            router.push(`${window.location.pathname}?cal=true`)
        }
    }





    return (
        <div className="container-ak p-0 no-print">
            <div className="row-ak">
                {calculatorStorage?.map((itemStorage, index) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 pr-0 my-3" key={index}>
                            <div className="save-area-box rounded-12">

                                <div className="save-area-rows">
                                    {img &&
                                        <div className="py-0">
                                            <img src={`${website}/${img}`} alt="img tile" width="70px" className="rounded-30" />
                                        </div>
                                    }
                                    <h4>{calculatorStorage[calculatorStorage.length - index - 1].title}</h4>
                                </div>

                                <div className="d-flex">
                                    <div className="w-100 py-2 text-center font-weight-bold">مساحت کل:</div>
                                    <div className="w-100 py-2 text-center">{(calculatorStorage[calculatorStorage.length - index - 1].sum * calculatorStorage[calculatorStorage.length - index - 1].wastage).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} متر مربع</div>
                                </div>
                                {['product', 'decor'].includes(props.type) ?
                                    <div className="col-12 py-2">
                                        <button className="btn-params w-100 d-flex justify-content-center align-items-center" onClick={setStorage(calculatorStorage.length - index - 1)} > <AngleRight /> جایگزاری متراژ محصول</button>
                                    </div>
                                    :
                                    <>
                                        <div className="save-area-rows save-area-rows-pdf">
                                            <button className="row-ak" onClick={props.handlePrint(calculatorStorage.length - index - 1)} >
                                                <div className="bg-white d-flex px-2 rounded-30 position-relative mapstorage-button mr-xl-3 mr-md-2 mr-3">
                                                    <img src="https://cerampakhsh.com/files/img/landing/calc/pdf.svg" alt="logo pdf" />
                                                </div>
                                                <div className="mr-xl-5 mr-sm-4 mr-5 z-index-0">
                                                    <p>ساخت pdf</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="save-area-rows">
                                            <div className="col-6 save-area-edit" onClick={props.restoreItemStorage(calculatorStorage.length - index - 1)}> <Edit /> ویرایش </div>
                                            <div className="col-6 save-area-delete" onClick={props.removeItemStorage(calculatorStorage.length - index - 1)}><Trash /> حذف</div>

                                        </div>
                                        {queryStrings?.url &&
                                            <div className="col-12 py-2">
                                                <button className="btn-params w-100 d-flex justify-content-center align-items-center" onClick={setCallbackStorage(calculatorStorage.length - index - 1)} > <AngleRight /> جایگزاری متراژ محصول</button>
                                            </div>
                                        }
                                        
                                    </>
                                }

                            </div>
                        </div>
                    )
                })}
            </div>


        </div>

    )
}

export default withRouter(MapStorage)