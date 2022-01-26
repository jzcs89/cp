import React, { useState, useEffect, useMemo } from 'react'
import Loading from '../../components/sections/Loading';
import HeadHome from './HeadHome';
import FooterHead from '../../components/sections/FooterHead';
import TopViewWithCategory from '../../components/sections/TopViewWithCategory';
import { GetsAdverts, homeBanner, homeV2, homeWithColor } from '../../components/routesApi';
import Axios from '../../Services/Axios';
import ViewMe from './ViewMe';
import SliderTop from './SliderTop';
import MobileSuggestsUses from './MobileSuggestsUses';
import MobileSuggestsCategory from './MobileSuggestsCategory';
import Link from 'next/link'
import { RequestData } from '../../Services/RequestData';
import { website } from '../../Services/Helper';
import router, { useRouter } from 'next/router';
function HomeMobile() {
    // console.time('timer')
    let router = useRouter()
    const [loading, setloading] = useState(true);
    const [step2, setstep2] = useState(false);
    const [step3, setstep3] = useState(false);
    // const [step4, setstep4] = useState(false);
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

        Axios({
            method: 'get',
            url: encodeURI(homeBanner)
        }).then(response => {
            if (response && response.data) {
                setBanners(response.data)
                setloading(false)
            }
        });
        if (process.browser) {
            window.scroll(0, 0)
        }
        if (banners && products && decorsUser) {
            setloading(false)
        }

        const ads = await RequestData('post', GetsAdverts);
        setAds(ads.data)
    }, []);
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    // const ads = useRequestApi('post', GetsAdverts, '');
    const handleScroll = () => {
        if (document.documentElement.scrollTop > 50) {
            setstep2(true)
        }
        if (document.documentElement.scrollTop > 700) {
            setstep3(true)
        }
        // if (document.documentElement.scrollTop > 1500) {
        //     setstep4(true)
        // }
    }
    // console.timeEnd('timer')
    return (
        <>
            <HeadHome />
            {loading ?
                <Loading />
                :
                <>
                    <div className=" bg-ptrn bg-light home-page-cp home-mobile">
                        <div className="list">

                            {banners && <SliderTop ads={ads} type="C" banners={banners} className=" " />}

                            <TopViewWithCategory />
                            <MobileSuggestsUses />
                            {products && <ViewMe products={products?.views_me?.slice(0, 1)[0]} />}

                            {/* {products && <Offers products={products} />} */}
                            {/* <AdvertiseC ads={ads?.data?.data?.data} type="C" className=" " /> */}
                            <MobileSuggestsCategory banners={banners} />
                            <div className="container-body">
                                <div className="home-ghesti-box">
                                    <div className="row-ak">
                                        <div className="col-md-6 px-4 mb-n3 mb-sm-0">
                                            <img src="https://cerampakhsh.com/files/img/landing/ghesti-cart3.png" alt="دکورت رو قسطی بچین" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="home-ghesti-box-txt mt-0 mt-md-5">
                                                <h2><div>
                                                    دکورت رو قسطی بچین!</div></h2>
                                                <p>
                                                    تا سقف 20 میلیون تومان، محصولات مورد نیازتان را از سرام پخش قسطی بخرید</p>
                                                <div className=" m-auto  pt-3 pb-5  py-md-4 rounded-lg text-center mt-2">
                                                    <Link href="/page/خرید+قسطی/86" className="d-inline-block btn-warning btn"><a>نحوه خرید قسطی </a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <img src="https://cerampakhsh.com/files/img/landing/bg-basket.svg" /> */}
                                    </div>
                                </div>
                            </div>
                            {products && <ViewMe products={products?.views_me?.slice(1, 2)[0]} />}
                            {products && <ViewMe products={products?.views_me?.slice(2, 3)[0]} />}

                        </div>
                    </div>
                    <FooterHead href={website+router.asPath} />
                </>
            }
        </>
    )
}
export default HomeMobile;