
import React, { useState } from 'react'
import { AngleDown } from '../icons/SvgIcons';
import Link from 'next/link';
import { website } from '../../Services/Helper';
import Config from '../../configs/Cerampakhsh';
// import { website } from '../Services/Helper'

export default function Brands(props) {

    let { manufacturer } = props

    const [showcontact, setShowcontact] = useState(false);

    return (
        <section className="Brand-Box-section mt-5">
            <div className="container">
                <div className="brand-box w-100 p-sm-3">

                    <div className="row-ak">

                        <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12 d-flex p-md-0 p-sm-0">
                            <div className="brand-box-img bg-gray">
                                <img src={`${website}/${manufacturer?.image}`} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} alt={manufacturer?.manufacturer} title={manufacturer?.manufacturer} width="100" height="auto" />

                                <div className="brand-box--header">

                                    {/* <h1><div dangerouslySetInnerHTML={{ __html: manufacturer?.manufacturer }}></div></h1> */}
                                    <div className="box-call-information posiotion-relative">
                                        <span className="brand-box--header__icon position-absolute">
                                            <img src="https://cerampakhsh.com/files/img/icon-landing/Triangle1.svg" alt={manufacturer?.manufacturer} />
                                        </span>
                                    </div>


                                    <div className="box-call-information-xl-lg p-relative">
                                        <button onClick={e => setShowcontact(!showcontact)} className="btn bg-btn3 center-ak mt-4">اطلاعات تماس</button>
                                        <div className={`box-call-information-card p-md-4 p-2  position-absolute  ${(showcontact) && "true"}`}>
                                            <div className="posation-relative content-call-information ">
                                                <button onClick={e => setShowcontact(!showcontact)} className="bg-khakestari danger float-left fontS-18 rounded-9 w-25px">x</button>
                                                {manufacturer?.email &&
                                                    <h6 className="text-right mb-3">پست الکترونیک:<br /> <br />
                                                        <Link href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${manufacturer?.email ?? ''}`}><a className="call font-weight-normal">{manufacturer?.email ?? ''}
                                                            <div className="see-more-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 320 512" className="svg-inline--fa ">
                                                                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
                                                        </a></Link>

                                                    </h6>
                                                }
                                                {manufacturer?.website_address &&
                                                    <h6 className="text-right mb-3">آدرس سایت:<br /> <br />
                                                        <Link href={`${manufacturer?.website_address ?? '-'}`} ><a className="call font-weight-normal"  rel="noreferrer noopener nofollow">{manufacturer?.website_address ?? '-'}
                                                            <div className="see-more-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 320 512" className="svg-inline--fa ">
                                                                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
                                                        </a></Link>
                                                    </h6>
                                                }
                                                {manufacturer?.sale &&
                                                    <>
                                                        <h6 className="text-right color">دفتر فروش:</h6>

                                                        {manufacturer?.sale?.address &&
                                                            <p className="text-right"><span className="font-weight-bold">آدرس: </span>
                                                                {manufacturer?.sale?.address} </p>
                                                        }
                                                        {manufacturer?.sale?.phones &&
                                                            <h6 className="text-right mb-3">تلفن:
                                                                <Link href={`tel:${manufacturer?.sale?.phones ?? '-'}`} ><a className="call">{manufacturer?.sale?.phones ?? '-'}
                                                                    <div className="see-more-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 320 512" className="svg-inline--fa ">
                                                                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
                                                                </a></Link>
                                                            </h6>
                                                        }
                                                        {manufacturer?.sale?.email &&
                                                            <h6 className="text-right mb-3">پست الکترونیک:<br /> <br />
                                                                <Link href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${manufacturer?.sale?.email ?? '-'}`}><a className="call font-weight-normal">{manufacturer?.sale?.email ?? '-'}
                                                                    <div className="see-more-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 320 512" className="svg-inline--fa ">
                                                                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
                                                                </a></Link>
                                                            </h6>
                                                        }
                                                    </>
                                                }
                                                {manufacturer?.office &&
                                                    <>
                                                        <h6 className="text-right color">دفتر مرکزی:</h6>

                                                        {manufacturer?.office?.address &&
                                                            <p className="text-right"><span className="font-weight-bold">آدرس: </span>
                                                                {manufacturer?.office?.address} </p>
                                                        }
                                                        {manufacturer?.office?.phones &&
                                                            <h6 className="text-right mb-3 phone-box-footer">تلفن:
                                                                <span className="call">{manufacturer?.office?.phones ?? '-'}
                                                                    <div className="see-more-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 320 512" className="svg-inline--fa ">
                                                                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
                                                                </span>
                                                            </h6>
                                                        }
                                                        {manufacturer?.office?.email &&
                                                            <h6 className="text-right mb-3 email-box-footer">پست الکترونیک:<br /> <br />
                                                                <span className="call font-weight-normal">{manufacturer?.office?.email ?? '-'}
                                                                    <div className="see-more-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 320 512" className="svg-inline--fa ">
                                                                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
                                                                </span>
                                                            </h6>
                                                        }
                                                    </>
                                                }

                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>




                        <div className="col-lg-10 col-md-12 col-sm-12 col-xl-10 p-md-0 p-sm-0 pr-lg-4">
                            <div className="row-ak pr-xl-3 pr-lg-3">
                                <div className="paragh-text col-lg-12 col-md-12 col-sm-12 col-xl-12 d-flex p-md-0 p-sm-0">
                                    <div className="brand-box-txt custom-control custom-checkbox mb-md-4 mb-sm-4">
                                        {/* <p className="text-justify">





                                                {description?.length > 500 &&
                                                    <>
                                                        <input type="checkbox" className="custom-control-input brand-box-btn " id="brands" name="brands" />
                                                        <label className="custom-control-label font-weight-bold read-more" htmlFor="brands">
                                                        </label>
                                                    </>
                                                }
                                                <div className="active-brand-btn m-0">
                                                    <p className="text-justify">

                                                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                                                    </p>
                                                    <input type="checkbox" className="custom-control-input brand-box-btn " id="brands" name="brands" />
                                                    <label className="custom-control-label font-weight-bold read-more" htmlFor="brands">
                                                        <span className="open-more"> </span>
                                                        <AngleDown />
                                                    </label>
                                                </div>
                                            </p> */}

                                        <p className="text-justify">

                                            {manufacturer?.description?.length > 500 &&
                                                <>
                                                    <input type="checkbox" className="custom-control-input brand-box-btn " id="brands" name="brands" />
                                                    <label className="custom-control-label font-weight-bold read-more" htmlFor="brands">
                                                        <span className="open-more-nxtjs"><AngleDown /> </span>

                                                    </label>
                                                </>
                                            }
                                            <div className="active-brand-btn">
                                                <h1 >{manufacturer?.h1_head}</h1>
                                                <p className="text-justify">
                                                    <div dangerouslySetInnerHTML={{ __html: manufacturer?.description }}></div>
                                                </p>
                                            </div>
                                        </p>



                                    </div>
                                </div>
                            </div>



                            <div className="more-information row-ak pr-2 p-md-0 p-sm-0">

                                {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                                    <p className="text-justify mt-4">
                                        محصولات در سایت {manufacturer?.products_count}

                                    </p>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                                    <p className="text-justify mt-4">
                                        نمایندگی های موجود {manufacturer?.merchants_count}
                                    </p>
                                </div> */}
                                {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 text-left px-1">
                                     
                                </div> */}

                                <Link href={`/merchants?type=merchant&manufacturor=${manufacturer?.manufacturer?.split(' ').join('+')}`}><a className="btn bg-btn3 mt-2 mx-3">نقشه نمایندگان  </a></Link>
                                <Link href={`/products-price-list?page=1&factory=${manufacturer?.manufacturerid}`}><a className="btn bg-btn3 mt-2 ml-3">لیست قیمت محصولات </a></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}


