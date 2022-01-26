import React from 'react'
import Link from "next/link";
import { AvatarUpdateRR } from '../routesApi';
import CropProfile from '../sections/CropProfile';
import { BoxHeart } from '../icons/SvgIcons';
import Style from '../../pages/profile/Style'
import { useRouter } from 'next/router';
import { website } from '../../Services/Helper';

function SidebarGuest() {
    let router = useRouter()

    let urlBack = router?.query?.back ?? '/'

    const fruits = [
        "/u/confirm", "/u/password", "/u/register", "/u/login", "/u/change-password",
        "/confirm", "/password", "/register", "/login"
    ];
    urlBack = fruits.includes(router.pathname) ? urlBack : router.asPath
    return (

        <>
            <Style />
            <div className="profile-sidebar">
                <div className="tp-profile-box row mb-2 pt-5">


                    <div className="row mt-5">
                        <div className="col-12  my-4 text-center">
                            <label id="uploadImage">
                                <span className="btn btn-raised btn-round btn-default btn-file p-0">
                                    <span className="fileinput-new btn-upload">
                                        <img className=" border-0 p-0 img-preview" src={`${website}/img/profile.png`} title="بارگذاری تصویر" alt="بارگذاری تصویر" width="100" />
                                    </span>
                                </span>
                            </label>
                        </div>

                        <div className="col-12">
                            <Link href={`/u/login?back=${urlBack}`} ><a className="form-control mx-auto font-size14 btn btn-firoozei text-white">ورود    </a></Link>
                        </div>
                        <div className="col-12 text-center my-4">یا</div>
                        <div className="col-12">
                            <Link href={`/register?back=${urlBack}`}><a className="form-control mx-auto font-size14 btn bg-info text-white">  ثبت نام</a></Link>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default SidebarGuest;