import React, { useState } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import { website } from '../../Services/Helper';
import Link from 'next/link'
import { AngleDown } from '../icons/SvgIcons';

import { useRouter, withRouter } from 'next/router';
function Filterv2(props) {
    let router = useRouter()
    let {filters} = props
    const urlParams = router.query;
    let QSStateof = '?';
    QSStateof += urlParams?.state_of ? `&state_of=${urlParams?.state_of}` : '';
    QSStateof += urlParams?.field_0 ? `&field_0=${urlParams?.field_0}` : '';
    
    const [value, setValue] = useState({ min: (urlParams.min && urlParams.min > 0) ? urlParams.min : 0, max: (urlParams.max && urlParams.max > 0) ? urlParams.max : props.maxValueDefault })
    let link = router.asPath
    const handlePrice_ = (price) => (event) => {
        setValue(event)
    }
    const handlePrice = (price) => (e) => {
        let url = link
        url = updateQueryStringParameterCall(url, 'page', 1)
        url = updateQueryStringParameterCall(url, 'min', price.min)
        url = updateQueryStringParameterCall(url, 'max', price.max)
        router.push(url)
    }
    function updateQueryStringParameterCall(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }
    function getParameterByName(name) {
        const queryStrings = router.query;
        return queryStrings[name];
    }
    const updateQueryStringParameter = (uri, key, value) => (e) => {
        e.preventDefault();
        let vQueryString = getParameterByName(key);
        if (vQueryString && vQueryString?.includes(value)) {
            value = vQueryString.replace("|" + value, "")
        } else if (vQueryString) {
            value = vQueryString + '|' + value
        } else {
            value = '|' + value
        }
        value = value.split(' ').join('+')
        let redirect = uri;
        redirect = updateQueryStringParameterCall(redirect, 'page', 1)
        redirect = updateQueryStringParameterCall(redirect, key, value)
        router.push(redirect)
    }
    const createLink = (link,value)=>{
        return link ? `${link}${QSStateof}` : `/products/${value}${QSStateof}`;
        // return link ? link : `/products/${value}`;
    }
    return (
        < >
            <div className="col-lg-3 col-md-4 col-sm-12 col-12 col-xl-2 p-0 mb-4 mb-sm-0 filterss" style={{ position: 'relative' }}>
                <div className="support-pic">
                    <img   src={`${website}/files/img/n-w/main-contact-us-PRODUCTS1.jpg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" />
                </div>
                <label className="filter-more-lbl" htmlFor="filter-more"><span className="open-more">جستجوی پیشرفته   <AngleDown className="w-10px mr-2"/> </span></label>
                <input type="checkbox" className="filter-more-btn " id="filter-more" name="filter-more" />
                <div className="row filterBox " >
                    {props.subCategories && props.subCategories.length > 0 &&
                        <div className="col-md-12 col-sm-6 ">
                            <div className="filterchecker-box">
                                <input type="checkbox" className="d-none filterchecker-input" name="" id="categories-filters" />
                                <label className="filterchecker-label" htmlFor="categories-filters">دسته بندی ها
                                <AngleDown/>
                                </label>
                                <div className="filterchecker-content">
                                    {props.subCategories?.map((cat, keyCat) =>
                                    <Link href={createLink(cat.link,cat.value)} key={keyCat}><a><div className="pt-2 pb-1 ">
                                                <label className="custom-control-label" htmlFor={cat.id}>{cat.label}</label>
                                            </div></a></Link>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    { Object.entries(filters)?.filter(([indexFilter, valueFilter]) => (indexFilter !== 'max_price' && valueFilter))?.map(([key, fill]) =>
                            <div className="col-md-12 col-sm-6 " key={key}>
                                <div className="filterchecker-box">
                                    <input type="checkbox" className="d-none filterchecker-input" name="" id={'clickable-' + key} />
                                    <label className="filterchecker-label" htmlFor={'clickable-' + key}>{key}
                                        {getParameterByName('field_' + (fill[0]?.fieldid ?? '0'))?.split("|").filter((v,k)=> k !== 0)?.map((q, i) => 
                                          <span className="badge bg-light text-dark" key={i}>{q.split('+').join(' ')}</span>
                                         )}
                                        <AngleDown/></label>
                                    <div className="filterchecker-content">
                                        {fill?.map((fOne, keyFill) =>
                                            <div key={keyFill} className="custom-control custom-checkbox" onClick={updateQueryStringParameter(link, 'field_' + (fOne.fieldid ?? '0'), fOne.label)}>
                                                <input type="checkbox" className="custom-control-input" id={fOne.id} name={(fOne.fieldid ?? '0')} onChange={updateQueryStringParameter(link, 'field_' + (fOne.fieldid ?? '0'), fOne.label)} checked={getParameterByName('field_' + (fOne.fieldid ?? '0'))?.includes(fOne.label)} />
                                                <label className="custom-control-label" htmlFor={fOne.id}>{fOne.label}</label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div >
                        )}
                    <div className="col-md-12  ">
                        <div className="box-step box-step2 col-12 animated fadeInDown pc-box row-ak	">
                            <div className="  col-md-12 p-0 " dir="ltr">
                                <InputRange
                                    formatLabel={value => `${value}`}
                                    maxValue={props.maxValueDefault}
                                    minValue={0}
                                    step={1000}
                                    value={value}
                                    onChange={handlePrice_(value)}
                                />
                            </div>
                            <div className=" col-md-12 p-0">
                                <button className=" btn btn-firoozei center-ak mt-4 " onClick={handlePrice(value)}>اعمال قیمت</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default withRouter(Filterv2);