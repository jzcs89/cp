import React, { useState, useEffect, useMemo } from 'react'

import ManuFactories from './ManuFactories';
import Loading from '../../components/sections/Loading';

import Suggests from './Suggests';
import Offers from './Offers';
import ViewMe from './ViewMe';
import OfficeConnect from './OfficeConnect';
import Box2 from './Box2';
import HeadHome from './HeadHome';
import FooterHead from '../../components/sections/FooterHead';
import TopViewWithCategory from '../../components/sections/TopViewWithCategory';
import { GetsAdverts, home, homeBanner, homeV2, homeWithColor } from '../../components/routesApi';
import Axios from '../../Services/Axios';
import AdvertiseC from '../advertise/AdvertiseC';
import SliderTop from './SliderTop';
import SuggestsUses from './SuggestsUses';
import SuggestsCategory from './SuggestsCategory';
import { RequestData } from '../../Services/RequestData';
import { website } from '../../Services/Helper';
import router, { useRouter } from 'next/router';


function Home() {
    let router = useRouter()
    const [loading, setloading] = useState(true);
    const [step2, setstep2] = useState(false);
    const [step3, setstep3] = useState(false);
    const [step4, setstep4] = useState(false);

    const [banners, setBanners] = useState();
    const [products, setProducts] = useState();
    const [decorsUser, setDecorsUser] = useState();
    const [ads, setAds] = useState([]);

    useEffect(() => {
        if (step2)
            Axios({
                method: 'get',
                url: encodeURI(homeV2)
            }).then(response => {
                if (response && response.data) {
                    setProducts(response.data)
                }
            });
    }, [step2]);

    useEffect(() => {
        if (step3)
            Axios({
                method: 'get',
                url: encodeURI(homeWithColor)
            }).then(response => {
                if (response && response.data && response.data._data_) {
                    setDecorsUser(response.data._data_)
                }
            });
    }, [step3]);


    useMemo(async () => {
        await Axios({
            method: 'get',
            url: encodeURI(homeBanner)
        }).then(response => {
            if (response && response.data) {
                setBanners(response.data)
                setloading(false)
            }

        });
        if (banners && products && decorsUser)
            setloading(false)
            
            const ads = await RequestData('post', GetsAdverts);
            setAds(ads.data)
            
            
            if (process.browser) {
                window.scroll(0, 0)
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }

    }, []);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 50) {
            setstep2(true)
        }
        if (document.documentElement.scrollTop > 700) {
            setstep3(true)
        }
        if (document.documentElement.scrollTop > 1500) {
            setstep4(true)
        }
    }

    return (
        <>
            <HeadHome />
            {loading ?
                <Loading />
                :
                <>
                    <div className=" bg-ptrn bg-light home-page-cp">
                        <div className="list">
                            {banners && <SliderTop ads={ads} type="C" banners={banners} className=" " />}
                            {/* <Box2 /> */}
                            <TopViewWithCategory />
                            {products && <Suggests products={products} />}
                            {step2 &&
                                <>

                                    {decorsUser && decorsUser.box1 && <SuggestsUses decorsUser={decorsUser} />}
                                </>
                            }
                            {step3 &&
                                <>
                                    {products && <Offers products={products} />}
                                    {/* <AdvertiseC ads={ads} type="C" className=" " /> */}
                                    <SuggestsCategory banners={banners} />
                                </>
                            }
                            {step4 &&
                                <>
                                    {products && <ViewMe products={products?.views_me?.slice(0, 1)[0]} />}

                                    <div className="container-body brand-box  pb-5 px-0  d-md-block d-none">
                                        <section className="row-ak" dir="rtl">
                                            <OfficeConnect />
                                            <ManuFactories />
                                        </section>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <FooterHead href={website+router.asPath} />

                </>
            }

        </>

    )

}
export default Home;