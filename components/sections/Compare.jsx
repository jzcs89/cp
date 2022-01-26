import React, { useContext } from 'react'
import { compareContext } from '../../Contexts/CompareContext'
import Link from 'next/link'
import { Trash } from '../icons/SvgIcons'
import { useRouter } from 'next/dist/client/router'

export default function Compare() {
    let router = useRouter();
    const comContext = useContext(compareContext)
    let cc = [];
    if (comContext?.compare?.compares) {
        if (Array.isArray(comContext?.compare?.compares)) {
            cc = comContext?.compare?.compares;
        } else {
            cc = JSON.parse(comContext.compare.compares);
        }
    }

    const removeAllCompare = () => {

        document.cookie = `compare=[]; path=/;max-age=` + 31104000;
        comContext.setCompare({ type: 'REMOVE', compares: [] })
    }
    return (
        <>
            {(router.asPath != "/compare/" && Array.isArray(cc) && cc.length > 0) &&
                <div className="modal-fst animated fadeInUp active " id="Modal-fst">
                    <div className="mdl-fst-box">
                        <div className="fst-item animated fadeInUp  active">
                            <span className="trash-compare"><Trash /></span>
                            <div className="fst-item-content row-ak">
                                <div className="fst-item-image col-3">
                                    <img src="https://cerampakhsh.com/resize/small/files/uploads/products/2020-12-13/503893e24bd11a7cdba79552df68e85edde8eec4.jpg" className="img-decor-list" alt="  کاشی سرامیک" title="  کاشی سرامیک" />
                                </div>
                                <div className="fst-item-details col-9">
                                    <div className="fst-item-title">
                                        <p className="mdl-fst-txt">  کاشی سرامیک</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" row-ak">
                        <Link href="/compare"><a>
                            <div className="btn-fst-box btn btn-firoozei animated fadeInUp " id="cmpr">مقایسه:<span><label> {cc?.length}</label> کالا</span>
                            </div>
                        </a></Link>
                        <div className="text-danger col-2 clr-red btn" id="cncl" onClick={removeAllCompare}>انصراف </div>
                    </div>
                </div>
            }
        </>

    )
}