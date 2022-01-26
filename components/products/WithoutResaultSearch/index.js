import React from 'react'
// import { useParams, Link } from 'react-router-dom';
// import Product from './../../components/sections/Product';
// import Axios from './../../Axios';
// import queryString from 'query-string'
// import Helmet from 'react-helmet';
// import Pagination from './../../components/sections/Pagination';
// import HeaderTags from '../../components/sections/HeaderTags';
// import BreadCrumb from '../../components/sections/Breadcrumb';
// import ProductRelations from '../../components/sections/ProductRelations';
// import LoadProduct from './loadProduct';
// import LoadFilters from '../../components/sections/LoadFilters';
// import { website } from '../../Helper';
// import Division from './Division';
// import Filterv2 from '../../components/sections/Filterv2';
// import { SortFilter } from '../../components/icons/SvgIcons';
import Link from 'next/link';
import Style from './Style'
export default function WithoutResaultSearch(props) {

    return (< >
        <Style />

        {/* Zarezade Codes */}
        <div className="container-body Search-Result border mb-5 rounded-12">
            <img className="search-resault-img" src="https://cerampakhsh.com/files/img/landing/Search-Result/Searchresults.svg" alt="برای جستجوی شما هیچ نتیجه ای یافت نشد!" title="برای جستجوی شما هیچ نتیجه ای یافت نشد!" />
            <div className="Search-Result-Box mb-5 mt-2 rounded-12">
                <p className="m-0 p-3 my-1 text-right font-weight-bold alert1">برای جستجوی شما هیچ نتیجه ای یافت نشد!</p>
            </div>
            <div className="row-ak">
                <div className="col-12 text-right my-2">
                    <h5 className="mb-4 font-weight-bold">دسته بندی های دیگر</h5>
                    <div className="row-ak dastebandi my-5 justify-content-between m-auto Advantages-Tile">

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl mx-auto col-dastebandi  my-md-2 my-2 px-md-2 px-2 text-center">
                            <div className="body-of-typeoftile shadow-none bg-khakestari rounded-12 m-auto">
                                <Link href="/products/کاشی-و-سرامیک-">
                                    <a>
                                        <div className="p-2"><div className="importantkashi-img mt-2">
                                            <img className="mb-3" src="https://cerampakhsh.com/files/wizard/kashi.svg" alt="کاشی سرامیکی" width="70" draggable="false" />
                                            <h6>کاشی و سرامیک</h6>
                                        </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl mx-auto col-dastebandi  my-md-2 my-2 px-md-2 px-2 text-center">
                            <div className="body-of-typeoftile shadow-none bg-khakestari rounded-12 m-auto">
                                <Link href="/products/پرسلان-">
                                    <a>
                                        <div className="p-2"><div className="importantkashi-img mt-2">
                                            <img className="mb-3" src="https://cerampakhsh.com/files/wizard/porcelan.svg" alt="کاشی سرامیکی" width="70" draggable="false" />
                                            <h6>پرسلان</h6>
                                        </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl mx-auto col-dastebandi  my-md-2 my-2 px-md-2 px-2 text-center">
                            <div className="body-of-typeoftile shadow-none bg-khakestari rounded-12 m-auto">
                                <Link href="/products/چینی-بهداشتی-">
                                    <a>
                                        <div className="p-2"><div className="importantkashi-img mt-2">
                                            <img className="mb-3" src="https://cerampakhsh.com/files/wizard/chini.svg" alt="کاشی سرامیکی" width="70" draggable="false" />
                                            <h6>چینی بهداشتی</h6>
                                        </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl mx-auto col-dastebandi  my-md-2 my-2 px-md-2 px-2 text-center">
                            <div className="body-of-typeoftile shadow-none bg-khakestari rounded-12 m-auto">
                                <Link href="/products/اکسسوری-و-شیرآلات">
                                    <a>
                                        <div className="p-2"><div className="importantkashi-img mt-2">
                                            <img className="mb-3" src="https://cerampakhsh.com/files/wizard/shiralat.svg" alt="کاشی سرامیکی" width="70" draggable="false" />
                                            <h6>شیرآلات و اکسسوری</h6>
                                        </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl mx-auto col-dastebandi  my-md-2 my-2 px-md-2 px-2 text-center">
                            <div className="body-of-typeoftile shadow-none bg-khakestari rounded-12 m-auto">
                                <Link href="/products/تجهیزات-نصب-">
                                    <a>
                                        <div className="p-2"><div className="importantkashi-img mt-2">
                                            <img className="mb-3" src="https://cerampakhsh.com/files/wizard/abzar.svg" alt="کاشی سرامیکی" width="70" draggable="false" />
                                            <h6>تجهیزات نصب</h6>
                                        </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl mx-auto col-dastebandi  my-md-2 my-2 px-md-2 px-2 text-center">
                            <div className="body-of-typeoftile shadow-none bg-khakestari rounded-12 m-auto">
                                <Link href="/products/سنگ-موزاییک">
                                    <a>
                                        <div className="p-2"><div className="importantkashi-img mt-2">
                                            <img className="mb-3" src="https://cerampakhsh.com/files/wizard/sang.svg" alt="کاشی سرامیکی" width="70" draggable="false" />
                                            <h6>سنگ و موزائیک</h6>
                                        </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>


                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl mx-auto col-dastebandi  my-md-2 my-2 px-md-2 px-2 text-center">
                            <div className="body-of-typeoftile shadow-none bg-clrful wonder-full-btn rounded-12 m-auto">
                                <Link href="/products?state_of=offer">
                                    <a>
                                        <div className="p-2"><div className="importantkashi-img mt-2">
                                            <img className="mb-3" src="https://cerampakhsh.com/files/img/landing/Search-Result/Discount.svg" alt="کاشی سرامیکی" width="70" draggable="false" />
                                            <h6>شگفت انگیزها </h6>
                                        </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="better-result my-3">
                        <h5 className="my-3 mt-5 font-weight-bold">برای نتایج بهتر در دفعات بعدی:</h5>
                        <div className="square d-inline-block ml-2"></div><p className="d-inline">املای کلمه را بررسی کنید.</p><br />
                        <div className="square d-inline-block ml-2"></div><p className="d-inline">از کلمات کمتری استفاده کنید.</p><br />
                        <div className="square d-inline-block ml-2"></div><p className="d-inline">از عبارات متداول تر استفاده کنید.</p><br />
                        <div className="square d-inline-block ml-2"></div><p className="d-inline">کلمات مخفف را استفاده کنید.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Zarezade Codes */}


    </>
    )
}