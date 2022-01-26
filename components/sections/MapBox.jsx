import React, { useMemo, useRef, useState } from 'react';
import ReactMapGl, { Marker, Popup, FlyToInterpolator, setRTLTextPlugin } from 'react-map-gl';
import Pin from './Pin';
import Collapsible from 'react-collapsible';
import Link from 'next/link'
import Loading from './Loading';
import { website } from '../../Services/Helper';
import Axios from '../../Services/Axios';
import { MapBoxSearch } from '../routesApi';
import { Search, TimesCircle } from '../icons/SvgIcons';
import { getCookie } from '../../Services/getCookie';
import { useRouter, withRouter } from 'next/router';
import FullUrlAddressbar from '../FullUrlAddressbar';
import OnboardingSteps from '../map/OnboardingSteps';
import ImageFull from '../ImageFull';
setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js", null, true);
function MapBox(props) {
    let router = useRouter()
    const queryStrings = router.query
    let manufacturorQuery=queryStrings?.manufacturor
    let stateQuery=queryStrings?.state

    let linkback = getCookie("linkback")
    const [viewport, setviewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 31.897423,
        longitude: 54.356857,
        zoom: 5,
        pan: { animate: true },
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator(),
        easing: function (t) {
            return t;
        },
        // this animation is considered essential with respect to prefers-reduced-motion
        essential: true
    })
    const [selectGeo, setSelectGeo] = useState(null)
    const [dataSearch, setDataSearch] = useState({
        data: [],
        typingTimeout: 0
    })
    // const { type } = props
    const [states, setStates] = useState(props.states)
    const [manufactorers, setManufactorers] = useState(props.manufactorers)
    const [merchants, setMerchants] = useState(props.merchants)
    useMemo(() => {
        setStates(props.states)
        setManufactorers(props.manufactorers)
        setMerchants(props.merchants)
        let merchantsFind = (props?.merchants)?.find(value => value.id === Number(queryStrings.merchant_id))
        setSelectGeo(merchantsFind)
    }, [props, queryStrings.merchant_id])
    useMemo(() => {
        setviewport({
            ...viewport,
            latitude: queryStrings.latitude ? Number(queryStrings.latitude) : 31.897423,
            longitude: queryStrings.longitude ? Number(queryStrings.longitude) : 54.356857,
            zoom: queryStrings.latitude ? 15 : 5
        })
    }, [router.asPath])
    const handleClick = (location) => (e) => {
        setviewport({
            ...viewport,
            latitude: Number(location.latitude),
            longitude: Number(location.longitude),
            zoom: 15
        })
        setSelectGeo(location)
    }
    const handleClickFactory = (location) => (e) => {
        
        setviewport({
            ...viewport,
            latitude: Number(location.latitute),
            longitude: Number(location.longitute),
            zoom: 15
        })
        setSelectGeo({
            role: 3,
            active: 1,
            address: location.city,
            city: location.city,
            id: location.manufacturerid,
            latitude: location.latitute,
            longitude: location.longitute,
            manufactories: location ,
            name_manage_store: location.manufacturer,
            phone: location.relation_phone,
            phone_number: location.relation_phone,
            slug: location.manufacturer_en+'/'+location.manufacturer?.split(' ').join('+'),
            state: '',
            time_work: '',
            title: location.manufacturer,
            type_merchant: '',
        })
    }

    const textAreaRef = useRef(null);
    const changeUrlPage = (url) => (e) => {
    }
    const updateQueryStringParameter = (key, value) => (e) => {
        let uri = router.asPath
        uri = removeURLParameter(uri, 'merchant_id')
        uri = removeURLParameter(uri, 'latitude')
        uri = removeURLParameter(uri, 'longitude')
        uri = removeURLParameter(uri, 'merchant')
        uri = addQueryString(uri, key, value)
        router.push(uri)
    }
    function removeURLParameter(url, parameter) {
        var urlparts = url.split('?');
        if (urlparts.length >= 2) {
            var prefix = encodeURIComponent(parameter) + '=';
            var pars = urlparts[1].split(/[&;]/g);
            //reverse iteration as may be destructive
            for (var i = pars.length; i-- > 0;) {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }
            url = urlparts[0] + '?' + pars.join('&');
            return url;
        } else {
            return url;
        }
    }
    function addQueryString(uri, key, value) {
        //prefer to use l.search if you have a location/link object
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            uri = uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            uri = uri + separator + key + "=" + value;
        }
        return uri
    }
    const removeMerchant = () => (e) => {
        let uri = router.asPath
        uri = removeURLParameter(uri, 'merchant_id')
        uri = removeURLParameter(uri, 'latitude')
        uri = removeURLParameter(uri, 'longitude')
        uri = removeURLParameter(uri, 'merchant')
        router.push(uri)
    }
    const removeQueryOther = (key) => (e) => {
        let uri = router.asPath
        uri = removeURLParameter(uri, key)
        router.push(uri)
    }
    const updateQueryStringParameterMerchant = (merchant) => (e) => {
        let uri = router.asPath
        if (merchant.latitude) {
            let key = 'latitude';
            uri = addQueryString(uri, key, merchant.latitude)
        }
        if (merchant.longitude) {
            let key = 'longitude';
            uri = addQueryString(uri, key, merchant.longitude)
        }
        if (merchant.title) {
            let key = 'merchant';
            uri = addQueryString(uri, key, merchant.title)
        }
        if (merchant.id) {
            let key = 'merchant_id';
            uri = addQueryString(uri, key, merchant.id)
        }
        router.push(uri)
    }
    const SearchManufactorers = e => {
        const name_ = e?.target?.name;
        const value_ = e?.target?.value;
        let data_ = {};

        if (name_)
            data_ = {
                ...dataSearch,
                [name_]: value_
            }
        if (dataSearch.typingTimeout) {
            clearTimeout(dataSearch.typingTimeout)
        }
        setDataSearch({
            data: data_,
            typingTimeout: setTimeout(() => {
                if (name_ === 'states') {
                    let newStates_ = states.filter((item, index) => {
                        return item?.state?.includes(value_)
                    });
                    setStates(newStates_)
                } else {
                    Axios({
                        method: 'get',
                        url: encodeURI(MapBoxSearch),
                        params: {
                            ...data_,
                            ...queryStrings
                        }
                    }).then(response => {
                        if (response && response.data && response.data.manufactorers) {
                            setManufactorers(response?.data?.manufactorers)
                        }
                        if (response && response.data && response.data.merchants) {
                            setMerchants(response?.data?.merchants)
                        }
                    });
                }
            }, 500)
        })

    }

    const isLatLong = (lat, lng) => {
        // Regular expression to check if string is a latitude and longitude
        // const regexExp = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;

        // return regexExp.test(str);

        let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');

        return pattern.test(lat) && pattern.test(lng);
    }

    return (
        <>
            <div style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, right: 0, zIndex: 99, background: '#fff', direction: 'rtl !important' }}>
                <textarea
                    ref={textAreaRef}
                    style={{ zIndex: -1, height: 0, width: 0, opacity: 0, position: 'absolute' }}
                    defaultValue={FullUrlAddressbar()}
                />
                {props.load ?
                    <Loading />
                    :
                    <>



                        <div className="helpmystep">
                            <div className="helparea">

                            </div>
                        </div>


                        <nav className="btn-pluss-wrapper ">
                            <h2 className="tooltip pluss">راهنمای نقشه</h2>
                            <div href="#" className="btn-pluss">
                                <ul>
                                    <li><OnboardingSteps /></li>
                                    <li><Link href="/landings/suppliers/"><a>فروشنده شوید</a></Link></li>
                                    {/* <li><Link href="#projects"><a>Projects</a></Link></li> */}
                                    <li>

                                        {linkback ?
                                            <Link href={linkback}  ><a >صفحه قبل</a></Link>
                                            :
                                            <Link href="/"><a  >بازگشت به سایت</a></Link>
                                        }


                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="select-category">
                            <label className={`select-cat-item item-num1 ${queryStrings.manufacturor ? 'active' : ''}`} htmlFor="mapadd3" >
                                <img className="ml-2" src="https://cerampakhsh.com/files/img/landing/map/factory.svg" alt="" width="22px" height="20px" />

                                {queryStrings.manufacturor ?
                                    <span  > {queryStrings.manufacturor} </span>
                                    :
                                    " تامین کننده"
                                }
                                <span onClick={removeQueryOther('manufacturor')}>
                                    <TimesCircle className=" mt-n1 w-15px dangerSvg mr-2" />
                                </span>

                            </label>
                            <label className={`select-cat-item item-num2 ${queryStrings.state ? 'active' : ''}`} htmlFor="mapadd2" >
                                <img className="ml-2" src="https://cerampakhsh.com/files/img/landing/map/map.svg" alt="" width="20px" height="20px" />

                                {queryStrings.state ?
                                    <span  > {queryStrings.state} </span>
                                    :
                                    " استان"
                                }
                                <span onClick={removeQueryOther('state')}>
                                    <TimesCircle className=" mt-n1 w-15px dangerSvg mr-2" />
                                </span>
                            </label>
                            <label className={`select-cat-item item-num3 ${queryStrings.merchant ? 'active' : ''}`} htmlFor="mapadd1" >
                                <img className="ml-2" src="https://cerampakhsh.com/files/img/landing/map/Store.svg" alt="" width="20px" height="20px" />

                                {queryStrings.merchant ?
                                    <span  > {queryStrings.merchant} </span>
                                    :
                                    " نمایندگی"
                                }
                                <span onClick={removeMerchant()} ><TimesCircle className=" mt-n1 w-15px dangerSvg mr-2" /></span>
                            </label>
                            <label className="select-cat-item active d-none" htmlFor="mapadd4" >
                            </label>
                            <input className="mapadd-inp d-none " id="mapadd4" name="mapadd" type="radio" />
                        </div>
                        <div className="prd-map-store">
                            <div className=" f-right w-100" >
                                <div className=" order-2 order-md-1 col-12 col-md-4 col-lg-3 maps-list p-0 pt-1  p-md-2" style={{
                                    // zIndex: '10000',
                                    maxHeight: '100vh',
                                    position: 'absolute'
                                }}>
                                    <div className="reprs-list">
                                        <input className="mapadd-inp d-none " id="mapadd3" name="mapadd" type="radio" />
                                        <div className="  prd-map-container">
                                            <label htmlFor="mapadd4">
                                                <ul className="list-group">
                                                    <li className="list-representation-item list-representation-factory">
                                                        <div className="search-maps">
                                                            <label className="merchant-lbl-factory" htmlFor="merchant-inp-factory">
                                                                <Search className="mt-n2 w-15px" />
                                                            </label>
                                                            <input className="form-control" id="merchant-inp-factory" autoComplete="none" type="text" name="factory" placeholder="جستجو تامین کننده" onKeyUp={SearchManufactorers} />
                                                        </div>
                                                    </li>
                                                    {manufactorers && Object.entries(manufactorers)?.map(([key, factory]) =>
                                                        <li key={key} onClick={updateQueryStringParameter('manufacturor', factory.manufacturer)} className="  list-representation-item list-representation-factory  ">
                                                            <div className={`prd-map-list ${(props.manufacturer === factory.manufacturer) ? 'active' : ''}`} >
                                                                <div className="rot-maps">
                                                                    <img src={`${website}/${factory.image}`} alt={factory.manufacturer} title={factory.manufacturer} width="170" />
                                                                    <p>{factory.manufacturer}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )}
                                                </ul>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="reprs-list">
                                        <input className="mapadd-inp d-none " id="mapadd1" name="mapadd" type="radio" />
                                        <div className="  prd-map-container">
                                            <label htmlFor="mapadd4">
                                                <ul className="list-group">
                                                    <li className="list-representation-item list-representation-factory">
                                                        <div>
                                                            <div className="search-maps">
                                                                <label className="merchant-lbl-factory" htmlFor="merchant-inp-agent">
                                                                    <Search className="mt-n2 w-15px" />                                                                </label>
                                                                <input className="form-control" id="merchant-inp-agent" autoComplete="none" type="text" name="merchants" placeholder="جستجو در نمایندگی ها" onKeyUp={SearchManufactorers} />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {merchants ?
                                                        <>
                                                            {Object.entries(merchants)?.map(([key, geo]) =>
                                                                <div key={key}>
                                                                    <div onClick={updateQueryStringParameterMerchant(geo)} type="button" className="  list-representation-item " >{geo.title}</div>
                                                                </div>
                                                            )}
                                                        </>
                                                        :
                                                        <div className="map-ceram">
                                                            <li className="list-group-item seller" >
                                                                <Collapsible trigger="هیچ موردی برای نمایش وجود ندارد" >
                                                                </Collapsible>
                                                            </li>
                                                        </div>
                                                    }
                                                </ul>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="reprs-list">
                                        <input className="mapadd-inp d-none " id="mapadd2" name="mapadd" type="radio" />
                                        <div className="  prd-map-container">
                                            <label htmlFor="mapadd4">
                                                <ul className="list-group">
                                                    <li className="list-representation-item list-representation-factory">
                                                        <div>
                                                            <div className="search-maps">
                                                                <label className="merchant-lbl-factory" htmlFor="merchant-inp-city">
                                                                    <Search className="mt-n2 w-15px" />                                                                </label>
                                                                <input id="merchant-inp-city" className="form-control" autoComplete="none" type="text" name="states" placeholder="جستجو در استان ها" onKeyUp={SearchManufactorers} />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {states ?
                                                        <>
                                                            {Object.entries(states)?.map(([key, geo]) =>
                                                                <li key={key} type="button" className="  list-representation-item " onClick={updateQueryStringParameter('state', geo.state)}>{geo.state}</li>
                                                            )}
                                                        </>
                                                        :
                                                        <div className="map-ceram">
                                                            <li className="list-group-item seller" >
                                                                <Collapsible trigger="هیچ موردی برای نمایش وجود ندارد" >
                                                                </Collapsible>
                                                            </li>
                                                        </div>
                                                    }
                                                </ul>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <ReactMapGl
                            {...viewport}
                            onViewportChange={(viewport) => setviewport(viewport)}
                            mapboxApiAccessToken="pk.eyJ1IjoiY2VyYW1wYWtoc2giLCJhIjoiY2thM2cyY3VlMDNsYzNmbzZxbzQ0MXM4eiJ9.nRNmAuuEz0U2Y77eCru4sQ"
                            mapStyle="mapbox://styles/mapbox/outdoors-v10?optimize=true"
                        >
                            
                            {merchants && (merchants)?.filter(item => isLatLong(item.latitude, item.longitude))?.map((geo, key) =>
                                // (Number(geo.latitude) && Number(geo.longitude)) ?
                                <Marker
                                    key={key}
                                    latitude={Number(geo.latitude)}
                                    longitude={Number(geo.longitude)}
                                >
                                    <div className="cursor-pointer" style={{ fontSize: "18px" }} onClick={handleClick(geo)}>
                                        <ImageFull src="https://cerampakhsh.com/files/img/svg/pingreensd.svg" alt="" width="12" height="15" />

                                    </div>
                                </Marker>
                                // :
                                // <>
                                // </>
                            )
                            }
                            {manufactorers && (manufactorers)?.filter(item =>(manufacturorQuery ? item.manufacturer == manufacturorQuery : true) && (stateQuery ? item.state == stateQuery : true) &&  isLatLong(item.latitute, item.longitute))?.map((geo, key) =>
                                <Marker
                                    key={key}
                                    latitude={Number(geo.latitute)}
                                    longitude={Number(geo.longitute)}
                                >
                                    <div className="cursor-pointer" style={{ fontSize: "18px" }} onClick={handleClickFactory(geo)}>
                                        <ImageFull src="https://cerampakhsh.com/files/img/svg/pinreda.svg" alt="" width="12" height="15" />

                                    </div>
                                </Marker>
                            )
                            }

                            {selectGeo &&
                                <Popup
                                    latitude={Number(selectGeo.latitude)}
                                    longitude={Number(selectGeo.longitude)}
                                    onClose={() => { setSelectGeo(null) }}
                                    closeButton={true}
                                    closeOnClick={false}
                                >
                                    {selectGeo.active === 1 && selectGeo.role === 3 &&
                                        <>
                                            <h6 className="factory-map-popup">{selectGeo.title}</h6>
                                            {selectGeo.phone_number && (selectGeo.phone_number).length > 4 &&
                                                <a className="btn btn-firoozei mb-2   d-block" href={`tel:${selectGeo.phone_number}`}>تماس با : <span dir="ltr"> ( {(selectGeo.phone_number) ? selectGeo.phone_number : selectGeo.phone} )</span></a>
                                            }
                                            <a className="btn btn-brown  d-block " onClick={changeUrlPage(`/producer/${selectGeo.slug}`)} href={`/producer/${selectGeo.slug}`}> اطلاعات کامل </a>
                                        </>
                                    }
                                    {selectGeo.active === 1 && (!selectGeo.role || selectGeo.role === 2) &&
                                        <>
                                            <h6 className="factory-map-popup">{selectGeo.title}</h6>
                                            {selectGeo.phone_number && (selectGeo.phone_number).length > 4 &&
                                                <a className="btn btn-firoozei mb-2   d-block" href={`tel:${selectGeo.phone_number}`}>تماس با : <span dir="ltr"> ( {(selectGeo.phone_number) ? selectGeo.phone_number : selectGeo.phone} )</span></a>
                                            }
                                            <a className="btn btn-brown  d-block " onClick={changeUrlPage(`/merchant/${selectGeo.slug}`)} href={`/merchant/${selectGeo.slug}`}> اطلاعات کامل </a>
                                        </>
                                    }
                                </Popup>
                            }
                        </ReactMapGl>

                    </>
                }
            </div>
        </>
    )
}
export default withRouter(MapBox)