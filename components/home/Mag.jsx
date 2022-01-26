import React, { useState, useMemo } from 'react'
import Slider from "react-slick";
import { website } from './../../Services/Helper'
import momentJalaali from 'moment-jalaali';

import Axios from '../../Services/Axios';
import { useRouter } from 'next/router';

export default function Mag(props) {
    let router = useRouter()
    const [posts, setposts] = useState()
    ;

    useMemo(() => {
        // let posts_ = useRequestApi('get', 'https://cerampakhsh.com/mag/wp-json/wp/v2/posts?per_page=4&_embed', '');
        // setposts(posts_)
        Axios({
            method: 'get',
            url: encodeURI('v1/get-mag-posts'),
            data: '',
        })
            .then(res => {
                setposts(res.data)
            }, (errors) => {
            });
    }, [router])


    return (

        <>
            {posts ?
                <div className="blog-box ">
                    <div className="container-body pt-5  " dir="rtl">
                        <Slider

                            className="owl-theme "
                            loop
                            margin={10}
                            items={1}
                            nav={false}
                            dots={true}
                            mouseDrag={false}
                            touchDrag={false}
                            lazyLoad
                            autoplay
                            autoplayTimeout={8000}
                            // autoplaySpeed={20000}
                            smartSpeed={1500}
                            animateOut="fadeOutDown"



                        >

                            {Object.entries(posts)?.map(([key, post]) => {
                                return (

                                    <div key={key} className="row-ak  item ">
                                        <div className="text-blog-box col-12  col-sm-12 col-md-12 col-lg-6">
                                            <a   href={post.link}>
                                                {post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia']['0'] &&
                                                    <img className=" " src={post._embedded['wp:featuredmedia']['0'].source_url} alt="  سرام پخش" title="  سرام پخش" />
                                                }
                                            </a>
                                        </div>
                                        <div className="text-blog-box col-12  col-sm-12 col-md-12 col-lg-6">
                                            <div className="date text-right w-100 mb-5 h-1">
                                                <span className="float-right px-1">{momentJalaali(post.date).format(' jD ')}</span>
                                                <span className="float-right px-1">{momentJalaali(post.date).format(' jMMMM ')}</span>
                                                <span className="float-right px-1">{momentJalaali(post.date).format(' jYYYY ')}</span>
                                            </div>
                                            <a   href={post.link}>
                                                <h3 className="text-right w-100" dir="rtl">
                                                    {post.title.rendered}
                                                </h3>
                                            </a>
                                            <div dangerouslySetInnerHTML={{ __html: (post.excerpt.rendered).substring(0, 420) + ' ...' }}></div>
                                            <div className="brtsh-btn text-right my-1 mr-2">
                                                <a   href={post.link}>
                                                    <div className="b-button">ادامه مطلب</div>
                                                </a>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })}

                        </Slider>
                    </div>
                </div>
                :

                <div className="web-loader" style={{ width: '100%', height: '50vh', position: 'relative', zIndex: 1 }}>
                    <img src={`${website}/files/img/loading_.gif`} alt="سرام پخش |   کاشی و سرامیک" title="سرام پخش |   کاشی و سرامیک" />
                </div>
                // <Loading />
            }
        </>

    )
}