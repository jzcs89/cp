import React, { useState } from 'react'
import Axios from '../../../Services/Axios';
import Link from 'next/link'
// import moment from 'moment-jalaali';
import { toast } from 'react-toastify';
// export default class Product extends Component {
export default function Reviews(props) {
    const [errors, setErrors] = useState({})
    const [loader, setLoader] = useState(false)
    let { reviews } = props;
    const handleSubmit = (url) => async (event) => {
        event.preventDefault();
        setErrors({})
        setLoader(true)
        await Axios({
            method: 'post',
            url: encodeURI(url),// 
            data: new FormData(event.target)
        })
            .then(response => {
                toast(response.data.message, {type: response.data.status})
                document.getElementById('form-review').reset();
                setLoader(false)
            }, (errors) => {
                setErrors(errors.response.data.errors)
                setLoader(false)
            })
            .catch(function (error) {
                setLoader(false)
            });
    }
    return (
        <>
            <div className="tab-pane " id="questions"   aria-expanded="false">
                <div className="row">
                    <div className="container-ak">
                        <div className="loader-box row" >
                            {loader &&
                                <span className="loader"></span>
                            }
                        </div>
                        <form method="post" className="comment ajaxForm" id="form-review" onSubmit={handleSubmit('v1/review/add/' + props.type)} action="review/add">
                            <input type="hidden" name="type" value={props.type} />
                            <input type="hidden" name="id" value={props.id} />
                            <article>
                                <article>
                                    <div className="row">
                                        <div className="col-lg-2 col-md-1 col-sm-1  col-12"></div>
                                        <div className="col-lg-8 col-md-10 col-sm-10 col-12">
                                         <div className="comment-tag"> <h2 className="param-title text-center">
                                                افزودن نظر
                                    </h2></div>
                                            <p>شاید بیان حس و جذابیتی که طرح و رنگ یک کاشی به شما داده باشد بتواند انتخاب را برای دیگران آسان‌تر کند. شما می‌توانید نظر خودتان را برای ما بنویسید تا شاید در انتخاب کاشی مورد علاقه دیگران تاثیر داشته باشد. تاثیر نظرات و پیشنهادات شما بعضا برای کاربران بسیار موثر و سازنده خواهد بود.</p>
                                            <div className="form-group">
                                                <label htmlFor="name">نام  *</label>
                                                <input type="text" className="form-control" id="name" name="name" required="" />
                                                <small className="feed-back text-danger text-right float-right error-name">{errors.name}</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">ایمیل  *</label>
                                                <input type="email" className="form-control" id="email" name="email" required="" />
                                                <small className="feed-back text-danger text-right float-right error-email">{errors.email}</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message">نظر شما  *</label>
                                                <textarea name="message" className="form-control" placeholder="نظر" rows="3" required=""></textarea>
                                                <small className="feed-back text-danger text-right float-right error-message">{errors.message}</small>
                                            </div>
                                            <div id="html_element"></div>
                                            <button type="submit" className="btn btn-firoozei mb-5">ثبت نظر</button>
                                        </div>
                                    </div>
                                </article>
                            </article>
                        </form>
                        {reviews && reviews.lentgh &&
                            <h3 className="text-center">نظرات کاربران </h3>
                        }
                        {reviews ?
                            <div className="card">
                                <>
                                    {Object.entries(reviews)?.map(([key, review]) => {
                                        return (
                                            <>
                                                <div className="card-body" itemScope={1} itemType="http://schema.org/Review">
                                                    <meta itemProp="itemReviewed" itemScope={1} itemType="http://schema.org/Thing" />
                                                    <meta itemProp="url" content="http://ticketstoday.local/play/all-about-eve" />
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" height="50" width="50" className="img img-rounded img-fluid" alt="نظرات سرام پخش" title="نظرات سرام پخش" />
                                                            <p className="text-secondary text-center">
                                                                {reviews.name}
                                                                {/* {moment(review.created_at).format('jYYYY/jM/jD')} */}
                                                            </p>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <p itemProp="author" itemScope={1} itemType="https://schema.org/Person">
                                                                <Link href="/"><a  className="float-right"><strong  itemProp="name">{review.name}</strong></a></Link>
                                                            </p>
                                                            <div className="clearfix"></div>
                                                            <p itemProp="reviewBody">{review.message}</p>
                                                            <p>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {review.reply &&
                                                        <div className="card card-inner">
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-md-2">
                                                                        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" height="30" width="30" className="img img-rounded img-fluid" alt="نظرات سرام پخش" title="نظرات سرام پخش" />
                                                                    </div>
                                                                    <div className="col-md-10">
                                                                        <p><Link href="/"><a><strong>مدیریت</strong></a></Link></p>
                                                                        <p>{review.reply}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </>
                                        )
                                    })}
                                </>
                            </div>
                            :
                            <div className="alert alert-danger text-center"> هنوز نظری ثبت نشده است  </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
