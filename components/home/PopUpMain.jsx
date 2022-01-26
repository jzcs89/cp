import React, { useEffect, useState } from 'react'
import Config from '../../configs/Cerampakhsh'
import { website } from '../../Services/Helper'

export default function PopUpMain(props) {
    const [popUpMain, setPopUpMain] = useState(false)
    useEffect(() => {
        if (!getCookie('popupmain')) {
            setCookie('popupmain', 'cerampakhsh', 7)
            setPopUpMain(true)
        }
    }, [])

    
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


    return (
        <>
        {popUpMain && 
            <div className="modal-box-cp home-modal-contact" id="">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <button type="button" className="close text-danger   "
                            onClick={() => setPopUpMain(false)}
                        >×</button>
                        <div className="row-ak">
                            <div className="row col-12 col-lg-6 p-0">
                                <div className="contact-info-img d-flex">
                                    <img effect="blur" className="w-100" src="https://cerampakhsh.com/files/img/operator1.jpg" alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" />
                                </div>
                            </div>
                            <div className="row col-12 col-lg-6 mt-n5 mt-lg-0">
                                <img effect="blur" className="m-auto pt-3  bg-white px-3 px-lg-0 rounded-lg" src={Config.logo} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" height="auto" />
                                <p className="firoozei w-100 fontS-16 text-center pt-3">مشاوره رایگان با کارشناسان سرام پخش</p>
                                <p className=" mx-1 mt-1 text-justify">

                                    اگر به دنبال اطلاعات بیشتری در حوزه کاشی و سرامیک و انواع تجهیزات خانه هستید و یا به راهنمایی مشاوران سرام پخش نیاز دارید، با ما در تماس باشید.</p>

                                <div className="row-ak w-100 pr-2">


                                    <div className="col-12 contact-info-modal">
                                        <a href="tel:03538274760">دفتر مرکزی:  38274760-035 </a>
                                    </div>
                                    <div className="col-12 contact-info-modal">
                                        <a href="tel:02122028816">دفتر تهران:  22028816-021</a>
                                    </div>
                                    <div className="col-12 contact-info-modal whatsapp mb-4 ">
                                        <a href="https://wa.me/+989134570769">واتس آپ:  09134570769</a>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
                <div onClick={() => setPopUpMain(false)} className="close-modal-div-dark" style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    background: '#2ed4f91f',
                    zIndex: 1,
                    top: 0
                }}></div>
            </div>
        }
        </>

    )
}