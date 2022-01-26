import React, { useState, useMemo, useEffect } from 'react'
import Axios from '../../Services/Axios';
import Link from 'next/link';
import { Home, IndustryAlt, TimesCircle, UserClock } from '../icons/SvgIcons';
import { Boxes, AngleLeftSolid } from './../icons/SvgIcons';
import { useRouter, withRouter } from 'next/router';
import { ArrowNext, ArrowPrev } from './Arrow';
import { website } from '../../Services/Helper';
import { getCookie } from '../../Services/getCookie';
import Slider from 'react-slick';
import { getCountStatistics } from '../routesApi';
import Config from '../../configs/Cerampakhsh';

function Search(props) {

    let router = useRouter()
    const queryStrings = router.query;//

    const [listSearch, setListSearch] = useState([]);
    const [txtSearch, setTxtSearch] = useState(queryStrings?.product);
    const [display, setDisplay] = useState('');
    const [loading, setloading] = useState(false);
    const [stopType, setStopType] = useState(0);
    
    const {statictis} = props;
    let searchStorage = JSON.parse(getCookie('search'));

    useEffect(() => {

        if (process.browser) {
            sleep(1000).then(() => {
                if (props.showSearch) {
                    let element2 = document.getElementById('txtSearchTopMobile')
                    if (element2) {
                        document.getElementById('txtSearchTopMobile').focus()
                    }
                }
            });
        }
    });

    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    useMemo(() => {

        if (process.browser) {
            setDisplay('hidden');
            let element = document.getElementById('txtSearchTop')
            if (element)
                document.getElementById('txtSearchTop').blur()



            let element1 = document.getElementById('txtSearchTopMobile')
            if (element1)
                document.getElementById('txtSearchTopMobile').blur()


            if (element) document.getElementById('txtSearchTop').value = ''// queryStrings?.product ?? ''
            if (element1) document.getElementById('txtSearchTopMobile').value = ''// queryStrings?.product ?? ''

            setTxtSearch('')//queryStrings?.product
        }
    }, [router.asPath])

    // useMemo(() => {

    //     Axios({
    //         method: 'get',
    //         url: encodeURI(getCountStatistics),// 
    //         data: null
    //     })
    //         .then(response => {
    //             setStatictis(response.data)
    //         });
    // }, [])

    const handleKeyUp = (e) => {
        setloading(true)
        const target = e.currentTarget;
        if (e.keyCode === 13) {
            redirectResult(e.target.value)
            setDisplay('hidden');
            return;
        }
        setTxtSearch(e.target.value)
        if (e.target.value) {
            setListSearch([])
        }

        let c = 0
        setStopType(1) 

        // setStopType(false)
        setTimeout(() => {
            if (stopType !== 1) {

                c += 1;
                if (c > 0) {
                    Axios({
                        method: 'get',
                        url: encodeURI('v1/search?title=' + e.target.value),// 
                        data: {
                            title: e.target.value
                        }
                    })
                        .then(response => {
                            setListSearch(response.data)
                            setDisplay('');
                            c = 0
                            setloading(false)
                            setStopType(0)
                            target.focus();
                        }, (errors) => {

                        })
                        .catch(function (error) {

                        });
                }
            }
        }, 1000);

    }

    const redirectResult = (txtSearch) => (e) => {
        e.preventDefault();

        let sN = [txtSearch]
        if (searchStorage && Array.isArray(searchStorage) && !searchStorage?.includes(txtSearch)) {
            searchStorage.push(txtSearch)
            sN = searchStorage
        }

        if (process.browser) {
            
            document.cookie = `search=${JSON.stringify(sN)}; path=/;max-age=` + 31104000;

            document.getElementById("btnSearchTop").click()
            router.push('/products/?product=' + txtSearch)
            setDisplay('hidden');
            document.getElementById('txtSearchTop').blur()
        }
    }

    const handleBlur = (e) => {
        setDisplay('hidden');
    }
    const handleClick = (e) => {
        setDisplay('');
    }


    if (!process.browser) {
        return ''
    }

    return (
        <div className="search-area default">
            <form method="get" action="/products" name="productsearchform" className="search" onSubmit={redirectResult(txtSearch)}>


                <div className="pos-rltv ">
                    <input id="txtSearchTop" type="text" name="product" autoComplete="off" placeholder={`از همین جا پیدا کن (${statictis?.products ?? '11954'} محصول، ${statictis?.decors ?? '3395'} دکور و ${statictis?.factories ?? '305'} تولید کننده)`} className="search_head search-input pc-show-srch" onKeyUp={handleKeyUp} onBlur={handleBlur} onClick={handleClick} />
                    <input id="txtSearchTopMobile" type="text" name="product" autoComplete="off" placeholder={`جستجو کنید`} className=" mt-5 search_head search-input mob-show-srch" onKeyUp={handleKeyUp} onBlur={handleBlur} onClick={handleClick} />

                    <div className={`box-over ${display}`}>
                        <div id="suggesstion-box" className="row" >

                            {!(listSearch && txtSearch) && Array.isArray(searchStorage) && searchStorage &&
                                <div className="col-md-12 col-12 mt-2 px-md-2 px-0 border-bottom ">
                                    <div className="  i-clr-srch   py-3 px-2 "><UserClock className="w-20px ml-2" /> تاریخچه جستجو شما:</div>
                                    <ul className="d-inline-flex mb-0">
                                        <li>
                                            {searchStorage?.map((s, k) =>
                                                <Link key={k} href={`/products?product=${s}`}><a>
                                                    <label role="button" className="btn btn-light mx-1 fontS-12 cursor-pointer bg-ftl"> {s} <AngleLeftSolid className="w-20px mr-n1  svg-dark " /></label>
                                                </a></Link>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            }
                            {listSearch && txtSearch ?
                                <>
                                    {listSearch?.categories && listSearch.categories.length > 0 &&


                                        <div className="col-md-12 col-12 mt-2 px-md-2 px-0 border-bottom categorys ">

                                            <ul className="mb-0">
                                                <li className="   i-clr-srch d-inline-flex py-3 px-2">
                                                    <img src="https://cerampakhsh.com/files/img/svg/srchlist.svg" className="ml-3" alt="لیست محصول" width="17px" height="17px" />

                                                    دسته بندی:
                                                </li>
                                                {
                                                    Object.entries(listSearch.categories)?.map(([key, category]) =>
                                                        <li key={key}>
                                                            <Link href={(category.link) ? ('/' + category.link).replace('//', '/') : (`/products/${category.slug}`).replace('//', '/')}><a>
                                                                <label role="button" className="px-1 px-md-2 py-1 rounded-6 btn-light ml-1 mb-1 fontS-12 cursor-pointer bg-ftl">{category.category} <AngleLeftSolid className="w-15px mr-n2  svg-dark " /></label>
                                                            </a></Link>
                                                        </li>
                                                    )
                                                }

                                            </ul>
                                        </div>
                                    }

                                    {!loading ? <>
                                        <div className="card-body default py-0">
                                            <ul className="nav nav-decor-tab border-bottom" role="tablist">
                                                <li className="box-tabs-tab ">
                                                    <a className="nav-show-jq py-2 active show font-weight-bold" data-toggle="tab" href="#desc" role="tab" aria-expanded="true" aria-selected="false">محصولات
                                                    </a>
                                                </li>
                                                <li className="box-tabs-tab ">
                                                    <a className="nav-show-jq py-2 font-weight-bold" data-toggle="tab" href="#questions" role="tab" aria-expanded="false" aria-selected="false">دکوراسیون

                                                    </a>
                                                </li>


                                            </ul>
                                        </div>
                                        <div className="card-body default px-md-2 px-0 py-0 border-bottom">
                                            <div className="tab-content text-right">
                                                <div className="tab-pane  active" id="desc" aria-expanded="false">

                                                    <div className="w-100 shw-mbl-srch p-0 border-left">
                                                        <ul id="country-list">

                                                            {(listSearch && listSearch?.products && listSearch?.products.length > 0) ?
                                                                Object.entries(listSearch.products)?.map(([key, product]) =>
                                                                    <Link key={key} href={`/product/${product.slug}`}><a className="mx-0 mx-md-2">
                                                                        <li className="row-ak py-1">
                                                                            <div className=" col-2 pl-1 pr-0 col-2">
                                                                                {(product && product.thumbnail && product.thumbnail.image_path) ?
                                                                                    <img className="piece-image-decor-list" src={`${website}/resize/small/${(product.thumbnail.image_path).replace('/var/www/vhosts/cerampakhsh.com/httpdocs/', '')}`} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} height="auto" width="100 " alt={product.product} titles={product.product} />
                                                                                    :
                                                                                    <img className="piece-image-decor-list" src={Config.logo} height="auto" width="70" alt={product.product} title={product.product} />
                                                                                }
                                                                            </div>
                                                                            <div className="col-10 col-md-10 m-auto p-1 pr-2 text-right"> {product.product}</div>

                                                                        </li>
                                                                    </a></Link>
                                                                )
                                                                :
                                                                <div className="col-12 py-5 p-3">
                                                                    <span>
                                                                        جستجو برای عبارت <strong className="text-firoozei">«{txtSearch}»</strong> با هیچ محصولی هم‌خوانی نداشت.
                                                                    </span>

                                                                </div>

                                                            }

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane " id="questions" aria-expanded="false">
                                                    <div className="w-100 shw-mbl-srch  p-0 border-left">
                                                        <ul id="country-list">
                                                            {(listSearch?.decors && listSearch?.decors.length > 0) ?
                                                                Object.entries(listSearch.decors)?.map(([key, decor]) =>
                                                                    <Link key={key} href={`/decor/${decor.slug}`}><a>
                                                                        <li className="row-ak ">
                                                                            <div className="col-2 pl-1 pr-0">
                                                                                {decor.images && decor.images[0] &&
                                                                                    <img className="piece-image-decor-list" src={`${website}/resize/small/${decor.images[0].image_path}`} height="auto" width="70" alt={decor.title} title={decor.title} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} />
                                                                                }
                                                                            </div>
                                                                            <div className="col-10 m-auto p-1  text-right"> {decor.title}</div>
                                                                        </li>
                                                                    </a></Link>
                                                                ) :
                                                                <div className="col-12 py-5 p-3">
                                                                    <span >
                                                                        جستجو برای عبارت <strong className="text-firoozei">«{txtSearch}»</strong> با هیچ دکوراسیونی هم‌خوانی نداشت.
                                                                    </span>

                                                                </div>
                                                            }

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <img className=" search-load" alt="کاشی سرامیک تجاری و پارکینگ" title="کاشی سرامیک تجاری و پارکینگ" src={`${website}/files/img/newcp.gif`} /> */}
                                    </>
                                        :
                                        <><img className=" search-load" alt="کاشی سرامیک تجاری و پارکینگ" title="کاشی سرامیک تجاری و پارکینگ" src={`${website}/files/img/newcp.gif`} /></>}





                                    {listSearch?.factories && listSearch?.factories.length > 0 &&
                                        <div className="col-12 shw-mbl-srch  p-0">
                                            <div className="border-top i-clr-srch  pr-md-3 pr-5  pl-3 py-2"> تولیدکنندگان:</div>


                                            <div className="px-3 brand-slider" dir="rtl">
                                                <Slider
                                                    {...{
                                                        dots: false,
                                                        infinite: false,
                                                        speed: 500,
                                                        slidesToShow: 3,
                                                        slidesToScroll: 3,
                                                        nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                                                        prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                                                        responsive: [
                                                            {
                                                                breakpoint: 400,
                                                                settings: {
                                                                    slidesToShow: 2,
                                                                    slidesToScroll: 2,

                                                                }
                                                            },

                                                        ]

                                                    }}

                                                >

                                                    {
                                                        Object.entries(listSearch.factories)?.map(([key, factory]) =>
                                                            <div className="item bg-ftl" key={key}>
                                                                <Link href={`/producer/${(factory.manufacturer_en).split(' ').join('+')}/${(factory.manufacturer).split(' ').join('+')}`}><a>
                                                                    <div className="row-ak py-1">
                                                                        <div className="col-3 p-0">
                                                                            {factory.image &&
                                                                                <img className="piece-image-decor-list factory-list" src={`${website}/resize/small/${factory.image}`} height="auto" width="70" alt={factory.manufacturer} title={factory.manufacturer} onError={(e) => { e.target.onerror = null; e.target.src = website + '/' + factory.image }} />
                                                                            }
                                                                        </div>
                                                                        <div className="col-9 m-auto p-0 pr-2 text-right"> {factory.manufacturer}</div>
                                                                    </div>
                                                                </a></Link>
                                                            </div>
                                                        )
                                                    }
                                                </Slider>
                                            </div>
                                        </div>
                                    }
                                </>
                                :
                                <>
                                    {txtSearch &&
                                        <img className=" search-load " alt="کاشی سرامیک تجاری و پارکینگ" title="کاشی سرامیک تجاری و پارکینگ" src={`${website}/files/img/newcp.gif`} />

                                    }
                                </>
                            }

                        </div>
                    </div>



                    <button type="submit" id="btnSearchTop">
                        <img className="border-right" src={`${website}/skin1/topkala_assets/img/search-2.png`} width="25" height="25" alt="از همین جا پیدا کن" title="از همین جا پیدا کن" />
                    </button>
                </div>





                <div className="search-data-prd ">

                    <p  >
                        <span className="new-menu-fix-close" onClick={(e) => props.closeSearchbox()}>
                            <TimesCircle className="w-25px dangerSvg cursor-pointer" />
                        </span>


                        از همین جا پیدا کن
                    </p>

                    <div  ><Boxes className="svg-count-search" /><span>  {`    ${statictis?.products ?? ''} `}</span>محصول</div>
                    <div  > <Home className="svg-count-search" /><span>     {`   ${statictis?.decors ?? ''}  `}</span>دکور</div>
                    <div  ><IndustryAlt className="svg-count-search" />      <span> {`  ${statictis?.factories ?? ''} `}</span>تولید کننده</div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Search)
