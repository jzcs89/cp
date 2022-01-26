import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { website } from '../../Services/Helper';
import Config from '../../configs/Cerampakhsh';

// export default class Product extends Component {
export default function DecorPiece(props) {

    const [listImages, setlistImages] = useState(null);
    const [imagesProdduct, setimagesProdduct] = useState(null);
    const [imagesUsers, setimagesUsers] = useState(null);
    const [imageMain, setimageMain] = useState((props.image) ? props.image.image_path : '');

    // const products = props.products;
    // const imagesProdduct = props.imagesProdduct;
    // const imagesUsers = props.imagesUsers;
    const imagesDecor = props.imagesDecor;


    useMemo(() => {
        let _listImages_ = [];
        let _listImagesProduct_ = [];
        let _listImagesUses_ = [];
        Object.entries(props.products)?.map(([key, product]) => {
            _listImages_ = [..._listImages_, ...product.images, ...product.commentgallery]
            _listImagesProduct_ = [..._listImagesProduct_, ...product.images]
            _listImagesUses_ = [..._listImagesUses_, ...product.commentgallery]
            return true;
        })

        _listImages_ = [..._listImages_, ...imagesDecor]

        setlistImages(_listImages_)
        setimagesProdduct(_listImagesProduct_)
        setimagesUsers(_listImagesUses_)

    }, [])

    const loadImage = (path) => (e) => {
        setimageMain(path)
    }

    return (

        <>

            <div id="gallery_01f" className=" gallery_01f-decor row">

                <div className="row-ak w-100">

                    {listImages &&
                        Object.entries(listImages)?.map(([key, image]) =>
                            <div key={key} className="col-piece-decor" data-toggle="modal" data-target="#piece-modal">
                                <div className="item item-hdr">
                                    <img className="piece-image-decor-list" src={`${website}/resize/small/${image.image_path}`} onError={(e) => { e.target.onerror = null; e.target.src = `${website}/${image.image_path}` }} height="auto" width="70" alt={props.title} title={props.title} />
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

            {/* <!-- Modal --> */}
            <div id="piece-modal" className="modal fade" role="dialog">
                <div className="modal-dialog modal-xxl">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header ">
                            <button type="button" className="close text-danger" data-dismiss="modal">&times;</button>
                            <h5 className="m-0  mr-5">
                                {props.title}
                            </h5>

                        </div>



                        <div className="modal-body">

                            <div className="row">
                                <div className="col-md-8 col-12">
                                    <div className="logo-area-box">

                                        {/* <video width="320" height="240" controls>
  <source src="https://hajifirouz2.cdn.asset.aparat.com/aparat-video/965370b2368bfde32dadda7c7b14000232847666-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIwNjYxYjBlMTNjMWU4MmZkOWMwYjU2ODhiN2RmYmRkIiwiZXhwIjoxNjIwMDQ2MjY5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.mRhy9SGnSwuAyv3NVtKtAZkZZR18kBwoiliqdhsw3V0" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video> */}
                                        {/* <img className="w-100 m-auto" src={`${website}/resize/small/files/uploads/decors/2020-06-24/e1bd9b3f95dc7ba7f246fca3febde09da75b9a1e.jpg`} alt="" title="" width="700" /> */}
                                        <img className=" m-auto orginal" src={`${website}/${imageMain}`} alt="" title="" />
                                        <div className="box-over-logo-area">
                                            <div className="logo-area"> <img src={Config.logo}  alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" height="auto" /></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 col-12">

                                    <h2 className="right-header  "><div>تصاویر رسمی</div></h2>
                                    <div className="row">
                                        {imagesProdduct &&
                                            Object.entries(imagesProdduct)?.map(([key, image]) =>
                                                <div className="col-3 img-piece-modal" key={key}>
                                                    <img className="w-100" src={`${website}/resize/small/${image.image_path}`} alt={props.title} title={props.title} onClick={loadImage(image.image_path)} />

                                                </div>
                                            )
                                        }
                                        {imagesDecor &&
                                            Object.entries(imagesDecor)?.map(([key, image]) =>
                                                <div className="col-3 img-piece-modal" key={key}>
                                                    <img className="w-100" src={`${website}/resize/small/${image.image_path}`} alt={props.title} title={props.title} onClick={loadImage(image.image_path)} />

                                                </div>
                                            )
                                        }
                                        {/* <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/decors/2020-06-24/e1bd9b3f95dc7ba7f246fca3febde09da75b9a1e.jpg`} alt="" title="" />

                                        </div>
                                        <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/products/2020-06-24/018e49a2eb0b43e40063e0230a69ad94b0557739.jpg`} />
                                        </div>
                                        <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/products/2020-06-24/018e49a2eb0b43e40063e0230a69ad94b0557739.jpg`} />

                                        </div>
                                        <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/decors/2020-06-24/e1bd9b3f95dc7ba7f246fca3febde09da75b9a1e.jpg`} alt="" title="" />
                                        </div>
                                        <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/products/2020-06-24/018e49a2eb0b43e40063e0230a69ad94b0557739.jpg`} />

                                        </div> */}
                                    </div>
                                    <h2 className="right-header  "><div>تصاویر ارسالی خریداران</div></h2>
                                    <div className="row">

                                        {imagesUsers &&
                                            Object.entries(imagesUsers)?.map(([key, image]) =>
                                                <div className="col-3 img-piece-modal" key={key}>
                                                    <img className="w-100" src={`${website}/${image.image_path}`} alt={props.title} title={props.title} onClick={loadImage(image.image_path)} />

                                                </div>
                                            )
                                        }
                                        {/* <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/decors/2020-06-24/e1bd9b3f95dc7ba7f246fca3febde09da75b9a1e.jpg`} alt="" title="" />

                                        </div>
                                        <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/products/2020-06-24/018e49a2eb0b43e40063e0230a69ad94b0557739.jpg`} />
                                        </div>
                                        <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/products/2020-06-24/018e49a2eb0b43e40063e0230a69ad94b0557739.jpg`} />

                                        </div>
                                        <div className="col-3 img-piece-modal">
                                            <img className="w-100" src={`${website}/resize/small/files/uploads/decors/2020-06-24/e1bd9b3f95dc7ba7f246fca3febde09da75b9a1e.jpg`} alt="" title="" />
                                        </div> */}
                                        <div className="col-3 img-piece-modal ">
                                            <div className="camera-plus">
                                                <Link href={`/customer-room-gallery/${encodeURI(props.slug)}`}><a>
                                                    <img className="w-100  p-0" src={`${website}/files/img/n-w/upload-customer1.png`} title="بارگذاری تصویر" />
                                                </a></Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}