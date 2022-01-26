import React, { useState } from 'react'
import Select from 'react-select';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import { website } from '../../Services/Helper';
import { SortFilter } from './../icons/SvgIcons';

export default function Filter(props) {

    const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get('myParam');
    const [value, setValue] = useState({ min: (urlParams.get('min') && urlParams.get('min') > 0) ? urlParams.get('min') : 0, max: (urlParams.get('max') && urlParams.get('max') > 0) ? urlParams.get('max') : props.maxValueDefault })

    const handlePrice_ = (price) => (event) => {
        setValue(event)
    }

    return (
        < >
            <div className="col-lg-3 col-md-4 col-sm-12 col-12 col-xl-2 p-0 mb-4 mb-sm-0 filterss" style={{ position: 'relative' }}>
                <div className="bg-sx-white w-100 p-1">
                    <div className="support-pic ">

                        <img   src={`${website}/files/img/n-w/main-contact-us-PRODUCTS1.jpg`} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" />
                    </div>

                    <label className="filter-more-lbl" htmlFor="filter-more"> <SortFilter className="w-15px"/><span className="open-more">جستجوی پیشرفته </span>


                    </label>

                    <input type="checkbox" className="filter-more-btn " id="filter-more" name="filter-more" />


                    {/* <div className="row  " id="filterBox"> */}
                    <div className="row filterBox " >

                        {(props && props.filters && props.filters.categories && props.filters.categories.length) &&
                            <div className="col-md-12 col-sm-6 ">
                                <Select
                                    isMulti
                                    name="categories"
                                    onChange={props.onChangeFilterCategory}
                                    options={Object.values(props.filters.categories)}
                                    className="basic-multi-select mt-4  bg-color-hover"
                                    classNamePrefix="select"
                                />
                                <label className=" text-right text-right pt-2">دسته بندی ها:</label>
                            </div>
                        }

                        {props && props.filters &&
                            Object.entries(props.filters).filter(([indexFilter, valueFilter]) => (indexFilter === 'کارخانه' && valueFilter))?.map(([key, fill]) =>
                           
                                <div className="col-md-12 col-sm-6 " key={key}>
                                    <Select
                                        defaultValue={props.factories ? Object.values(fill).filter(option => (option.value) ? (props.factories)?.includes((option.value).split('+').join(' ')) : false) : ''}
                                        isMulti
                                        name="factories"
                                        onChange={props.onChangeFilterFactory}
                                        options={Object.values(fill)}
                                        className="basic-multi-select mt-4 bg-color-hover text-right "
                                        classNamePrefix="select"

                                    />
                                    <label className=" text-right pt-2">تامین کننده :</label>
                                </div>
                                // )

                            )
                        }

                        {props && props.filters &&
                            Object.entries(props.filters).filter(([indexFilter, valueFilter]) => (indexFilter === 'سایز' && valueFilter))?.map(([key, fill]) =>

                                <div className="col-md-12 col-sm-6 " key={key}>
                                    <Select
                                        defaultValue={props.sizes ? Object.values(fill).filter(option => (option.value) ? (props.sizes)?.includes((option.value).split('+').join(' ')) : false) : ''}
                                        isMulti
                                        name="sizes"
                                        onChange={props.onChangeFilterSize}
                                        options={Object.values(fill)}
                                        className="basic-multi-select mt-4 text-right bg-color-hover"
                                        classNamePrefix="select"
                                    />
                                    <label className=" text-right pt-2">سایز:</label>
                                </div>
                            )

                        }

                        {props && props.filters &&
                            Object.entries(props.filters).filter(([indexFilter, valueFilter]) => (indexFilter === 'رنگ' && valueFilter))?.map(([key, fill]) =>

                                <div className="col-md-12 col-sm-6 " key={key}>
                                    <Select
                                        defaultValue={props.colors ? Object.values(fill).filter(option => (option.value) ? (props.colors)?.includes((option.value).split('+').join(' ')) : false) : ''}
                                        isMulti
                                        name="colors"
                                        onChange={props.onChangeFilterColor}
                                        options={Object.values(fill)}
                                        className="basic-multi-select mt-4 text-right bg-color-hover"
                                        classNamePrefix="select"
                                    />
                                    <label className=" text-right pt-2">رنگ:</label>
                                </div>
                            )

                        }
                        {props && props.filters &&
                            Object.entries(props.filters).filter(([indexFilter, valueFilter]) => (indexFilter === 'کاربری' && valueFilter))?.map(([key, fill]) =>

                                <div className="col-md-12 col-sm-6 " key={key}>
                                    <Select
                                        defaultValue={props.uses ? Object.values(fill).filter(option => (option.value) ? (props.uses)?.includes((option.value).split('+').join(' ')) : false) : ''}
                                        isMulti
                                        name="colors"
                                        onChange={props.onChangeFilterUses}
                                        options={Object.values(fill)}
                                        className="basic-multi-select mt-4 text-right bg-color-hover"
                                        classNamePrefix="select"
                                    />
                                    <label className=" text-right pt-2">کاربری:</label>
                                </div>
                            )

                        }

                        {props && props.filters &&
                            Object.entries(props.filters).filter(([indexFilter, valueFilter]) => (indexFilter === 'سبک طرح' && valueFilter))?.map(([key, fill]) =>
                                <div className="col-md-12 col-sm-6 " key={key}>
                                    <Select
                                        defaultValue={props.styles ? Object.values(fill).filter(option => (option.value) ? (props.styles)?.includes((option.value).split('+').join(' ')) : false) : ''}
                                        isMulti
                                        name="styles"
                                        onChange={props.onChangeFilterStyle}
                                        options={Object.values(fill)}
                                        className="basic-multi-select mt-4 text-right  bg-color-hover"
                                        classNamePrefix="select"
                                    />
                                    <label className=" text-right pt-2">سبک طرح:</label>
                                </div>
                            )

                        }

                        {props && props.filters &&
                            Object.entries(props.filters).filter(([indexFilter, valueFilter]) => (indexFilter === 'لعاب' && valueFilter))?.map(([key, fill]) =>
                                <div className="col-md-12 col-sm-6 " key={key}>
                                    <Select
                                        defaultValue={props.laab ? Object.values(fill).filter(option => (option.value) ? (props.laab)?.includes((option.value).split('+').join(' ')) : false) : ''}
                                        isMulti
                                        name="laab"
                                        onChange={props.onChangeFilterLaab}
                                        options={Object.values(fill)}
                                        className="basic-multi-select mt-4 text-right  bg-color-hover"
                                        classNamePrefix="select"
                                    />
                                    <label className=" text-right pt-2">لعاب:</label>
                                </div>
                            )

                        }

                        {/* //////////////////// */}


                        {/* {props.type === 'product' && */}
                        <div className="col-md-12  ">
                            <div className="box-step box-step2 col-12 animated fadeInDown pc-box row-ak	">


                                <div className="  col-md-12 p-0 " dir="ltr">
                                    <InputRange
                                        formatLabel={value => `${value}`}
                                        maxValue={props.maxValueDefault}
                                        minValue={0}
                                        step={1000}
                                        value={value}
                                        // onChange={value => handlePrice(value)}
                                        onChange={handlePrice_(value)}
                                    />
                                </div>
                                <div className=" col-md-12 p-0">
                                    <button className=" btn btn-firoozei center-ak mt-4   " onClick={props.handlePrice(value)}> اعمال قیمت</button>
                                </div>
                            </div>
                        </div>
                        {/* } */}






                    </div>



                </div>
            </div>

        </>
    )
}