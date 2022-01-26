import React, { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'v1/add-cart/product';

import Product from './../../components/sections/Product';
import Axios from './../../Services/Axios';
import Head from 'next/head';
import Loading from '../../components/sections/Loading';
import { useRouter } from 'next/router';
import WithoutResaultSearch from '../products/WithoutResaultSearch';


export default function ProductsWizard(props) {

    let router = useRouter()
    const [response_, setResponse_] = useState([]);
    const [load, setload] = useState(true);
    const [titlePage, settitlePage] = useState('');
    const [metaKeywords, setmetaKeywords] = useState('');
    const [metaDescription, setmetaDescription] = useState('');
    const [lastpage, setlastpage] = useState(1);


    const [categories, setcategories] = useState('');
    const [uses, setuses] = useState('');
    const [color, setcolor] = useState('');
    const [style, setstyle] = useState('');
    const [installplace, setinstallplace] = useState('');
    const [min, setmin] = useState('');
    const [max, setmax] = useState('');
    const [address, setaddress] = useState('');
    const [page, setPage] = useState(0);

    let { category } = useParams()
    useMemo(() => {

        const queryStrings = router.asPath
        if (queryStrings.categories) setcategories(queryStrings.categories)
        if (queryStrings.uses) setuses(queryStrings.uses)
        if (queryStrings.color) setcolor(queryStrings.color)
        if (queryStrings.style) setstyle(queryStrings.style)
        if (queryStrings.installplace) setinstallplace(queryStrings.installplace)
        if (queryStrings.min) setmin(queryStrings.min)
        if (queryStrings.max) setmax(queryStrings.max)
        if (queryStrings.address) setaddress(queryStrings.address)
        setPage(0)
        setload(true)
        setResponse_([])


    }, [router]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        if (!load) return;
        fetchMoreListItems(page + 1);
    }, [load]);

    const fetchMoreListItems = (page_) => {

        if (category === 'undefined') {
            category = '';
        }
        setPage(page_)

        let str = '';
        if (categories) { str += 'categories=' + categories + '&'; }
        if (uses) { str += 'uses=' + uses + '&'; }
        if (color) { str += 'color=' + color + '&'; }
        if (style) { str += 'style=' + style + '&'; }
        if (installplace) { str += 'installplace=' + installplace + '&'; }
        if (min) { str += 'min=' + min + '&'; }
        if (max) { str += 'max=' + max + '&'; }
        if (address) { str += 'address=' + address + '&'; }
        str += 'page=' + page_ + '&';


        if (page_ <= lastpage) {

            Axios({
                method: 'get',
                url: encodeURI('v1/products-device?' + str),
                data: ''
            })
                .then(res => {
                    setload(false)

                    let resArray = response_.concat(res.data.products.data)
                    setResponse_(resArray) //another array
                    if (Number(page_) === 0 || Number(page_) === 1 || !page_) {
                        settitlePage(res.data.title_page);
                        setmetaKeywords(res.data.meta_keywords);
                        setmetaDescription(res.data.meta_description);
                    }
                    setlastpage(res.data.products.last_page)
                });
        }
    }


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 500 <= document.documentElement.offsetHeight) return; // 890 is height footer
        setload(true)
    }



    return (< >
        <Head>
            <meta charSet="utf-8" />
            <title>{titlePage ?? "فروشگاه اینترنتی کاشی و سرامیک - سرام پخش"} </title>
            <meta name="description" content=
                {metaDescription ??
                    " سرام پخش معتبرترین فروشگاه اینترنتی کاشی و سرامیک است که خرید و فروش آنلاین انواع کاشی های آشپزخانه، سرویس بهداشتی، استخری، پرسلان را با دکوراسیون های زیبا و به همراه نظرات و مشاوره تخصصی و رایگان، امکان پذیر کرده است. ما به سه اصل: پرداخت در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا پایبند هستیم."
                }
            />
            <meta name="keywords" content=
                {metaKeywords ??
                    "کاشی , سرامیک , خرید کاشی , فروش کاشی , خرید سرامیک , فروش سرامیک , فروشگاه کاشی , فروشگاه سرامیک , شستشوی سرامیک , فروش اینترنتی کاشی , فروش اینترنتی سرامیک , کاشی سنتی , سرام پخش , سرام‌پخش , کاشی و سرامیک , کاشی چیست , سرامیک چیست , پرسلان , کاشی استخری , کاشی آشپزخانه , کاشی سرویس بهداشتی , کاشی توالت , کاشی کابینت , کاشی مدرن , کاشی سه بعدی , کاشی ایرانی , کاشی اروپایی , چسب کاشی , نصب کاشی , کاشی گلسرام , کاشی بر ج ,کاشی پرسپولیس , کاشی امین , کاشی نارین , کاشی نوین , کاشی ارگ , کاشی پردیس , کاشی میلاد , کاشی مریم , کاشی سرام نگار , کاشی نگین , کاشی گلچین , کاشی درساسرام , کاشی اطلس , کاشی یاقوت , کاشی کاریزما , کاشی طلاسرام"
                }
            />
            <meta name="title" content={titlePage ?? "فروشگاه اینترنتی کاشی و سرامیک - سرام پخش"} />
        </Head>


        <div className="col-12 col-sm-12 col-md-12 col-lg-12 order-2">
            <div className="listing-prd default">
                <div className="listing-counter">
                </div>

                <div className="tab-content default text-center" id="resultFilterProduct">
                    <div className="tab-pane active" id="related"   aria-expanded="true">
                        <div className="container pr-0">

                            <div className="row listing-items list-decors">
                                {(!response_ || !response_.length) && !load &&
                                    <>
                                                                            <WithoutResaultSearch/>

                                        {/* <div className="alert alert-danger text-center w-100">هیچ نتیجه ای با فیلتر شما یافت نشد</div>
                                        <Link  href="/onetwotree"><a className="btn btn-primary btn-block">جستجوی مجدد</a></Link> */}
                                    </>
                                }

                                {response_?.map((value, key) =>
                                    <Product
                                        key={key}
                                        classes='col-lg-3 col-md-4  col-sm-6 col-12 p-0'
                                        classp_0=""
                                        product_id={value.productid}
                                        product_slug={value.slug}
                                        product_code={value.productcode}
                                        product_title={value.product}
                                        product_image={value.thumbnail.image_path}
                                        decor_image={(value.decors[0]) ? value.decors[0].image_path : ''}
                                        decor_code={(value.decors[0]) ? value.decors[0].code : ''}
                                        decor_id={(value.decors[0]) ? value.decors[0].code : ''}
                                        price={value.price / 10}
                                        favorite={(value && value.favorites && value.favorites[0] && value.favorites[0].user_login) ? true : false}
                                    />
                     

                                )}

                                {load &&
                                    <Loading />
                                }


                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>







    </>
    )
}