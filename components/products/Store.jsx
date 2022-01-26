import React from 'react'

export default function Store(props) {

    const { priceMerchant } = props;

    const emitChange = (id) => (e) => {
        props.loadBranchesPrice(id, e.target.value);
        // alert(e.target.value)
    }
    return (
        < >


            <div className="form-group-anbar">

                <select className="form-control my-2" id="sel1" onChange={emitChange(props.id)}>
                    {/* <option>تامین‌کنندگان</option> */}
                    {priceMerchant && Object.entries(priceMerchant)?.map(([key, price]) => 
                        <option value={price.merchant_id} key={key}>
                            {price.title ?
                            `انبار ${price.city} ( ${price.title} )`
                                :
                                ' قیمت تامین‌کنندگان'
                            }
                        </option>
                    )}
                </select>
                <label className="text-right" htmlFor="sel1">انتخاب انبار: </label>
            </div>



        </>

    )
}
