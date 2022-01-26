import React, { useState } from 'react'
import { getCookie } from '../../Services/getCookie';
import LoadingMini from './LoadingMini';

export default function TelegramBot() {
    let token = getCookie("token")
    const [modalTelegram, setModalTelegram] = useState(false)
    const [tokenTelegram, setTokenTelegram] = useState(null)
    const CreateTokenBot = () => {
        setModalTelegram(true)
        fetch(`https://api.cerampakhsh.com/telegram/v1/login/telegram?token=${token}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setTokenTelegram(data.token)
            })
            .catch((error) => {
                setModalTelegram(false)
            });

    }
    const CopyTOClipoard = () => {
        
        if(process.browser){

            var copyText = document.getElementById("CopyToClipboard");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert('لینک کپی شد')
        }
    }
    return (
        <>
            <img className="cursor-pointer" src="https://cerampakhsh.com/files/img/dashboard/telegram.svg" title="ربات تلگرام سرام پخش" alt="ربات تلگرام سرام پخش" onClick={CreateTokenBot} />
            {modalTelegram &&
                <div className="modal-box-cp" id="less-price">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <button type="button" className="close text-danger" onClick={(e) => setModalTelegram(false)} data-dismiss="modal">×</button>
                            <button type="button" className="close text-danger bg-btn-modal" onClick={(e) => setModalTelegram(false)} data-dismiss="modal">×</button>
                            <h3 className="right-header mb-4 w-auto mt-5 mx-4 ">
                                <div className="p-2">
                                 
                                    عضویت در ربات تلگرام
                                </div>
                            </h3>
                            <div className="modal-body">
                                {tokenTelegram ?
                                <div className="m-auto text-center">
                                    <div className="col-md-12">
                                        <div className="alert alert-info text-right">
                                            <ul>
                                                <li>جهت عضویت ابتدا فیلتر شکن خود را روشن کنید</li>
                                                <li>دریافت تمامی پیام ها از طریق ربات تلگرام</li>
                                                <li>جستجو در محصولات</li>
                                                <li>دریافت فاکتور ها و وضعیت سفارشات</li>
                                            </ul>
                                        </div>
                                        <input type="text" dir="ltr" className="form-control" name="CopyToClipboard" id="CopyToClipboard" value={`t.me/cerampakhsh_bot?start=${tokenTelegram}`} />
                                        <br/>
                                        <button type="button" className=" btn btn-brown mt-2 mb-2 ml-2" onClick={CopyTOClipoard}>کپی لینک</button>
                                        <a href={`https://t.me/cerampakhsh_bot?start=${tokenTelegram}`} className=" btn btn-firoozei mt-2 mb-2" target="_blank" rel="noreferrer" >عضویت</a>
                                    </div>
                                </div>
                                :
                               <LoadingMini />
                               
                                }
                            </div>
                        </div>
                    </div>
                </div>   
             }
        </>
    );
}