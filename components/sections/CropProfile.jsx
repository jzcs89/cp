import React, {useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { website } from '../../Services/Helper';
import Axios from '../../Services/Axios';
import { toast } from 'react-toastify';
import { getCookie } from '../../Services/getCookie';

export default function CropProfile(props) {

    const [modalCrop, setModalCrop] = useState(false)
    const defaultSrc =  props.defaultSrc ? `${website}/${props.defaultSrc}` :  `${website}/img/profile.png`;
    const [src, setSrc] = useState({ src: ''})
    const [cropper, setCropper] = useState();
    
    let tokenUser = getCookie("token")

    const onChangeImage = (e) => {
        e.preventDefault();
        setSrc({ src:'' })
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setSrc({ src: reader.result })
            setModalCrop(true)
        };
        reader.readAsDataURL(files[0]);
    }

    const getCropData = () => {
        if (typeof cropper.getCroppedCanvas() === 'undefined') {
            setModalCrop(false)
            return;
        }
        if (cropper && cropper.getCroppedCanvas() && cropper.getCroppedCanvas().toDataURL()) {
            setSrc({ src: cropper.getCroppedCanvas().toDataURL()});
            Axios({
                method: 'post',
                url: encodeURI(props.url+'?token='+tokenUser?.replace(/\r?\n|\r/g, '')),
                data : {
                    base64 : src?.src
                }
            })
                .then(response => {
                    toast(response.data.message, {type: response.data.status})
                    setModalCrop(false)
                }, (errors) => {
                    // toast(response.data.message, {type: response.data.status})
                })
                .catch(function (error) {
                    // toast(response.data.message, {type: response.data.status})
                });

            
        }
        
    }


    return (
        <div className="row-ak">
            <div className="col-md-12 col-12 pl-2 pr-1">
                <label id="uploadImage">
                    <span className="btn btn-raised btn-round btn-default btn-file p-0">
                        <span className="fileinput-new btn-upload">
                            <img className=" border-0 p-0 img-preview" src={src?.src ? src?.src :  defaultSrc} title="بارگذاری تصویر" alt="بارگذاری تصویر"  width="100"/>
                        </span>
                        <input type="file" id="uploadImage" name="uploadImage" className="d-none" onChange={onChangeImage} />
                    </span>
                </label>
            </div>


            {modalCrop &&
                <div className="modal-box-cp" id="less-price">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            <button type="button" className="close text-danger" onClick={(e) => setModalCrop(false)} data-dismiss="modal">×</button>
                            <button type="button" className="close text-danger bg-btn-modal" onClick={(e) => setModalCrop(false)} data-dismiss="modal">×</button>
                            <h3 className="right-header mb-4 w-auto mt-5 mx-4 ">
                                <div className="p-2">
                                    برش و بارگزاری تصویر
                                </div>
                            </h3>
                            <div className="modal-body">
                                <div className="col-md-12 text-center">
                                    <button className="btn btn-firoozei m-auto px-5" onClick={getCropData}>
                                        ذخیره عکس
                                    </button>
                                </div>

                                <div className="mt-2">
                                    {src.src &&
                                        <Cropper
                                            style={{ width: '100%' }}
                                            initialAspectRatio={1}
                                            preview=".img-preview"
                                            src={src.src}
                                            viewMode={1}
                                            aspectRatio={1}
                                            guides={false}
                                            minCropBoxHeight={10}
                                            minCropBoxWidth={10}
                                            background={false}
                                            responsive={true}
                                            autoCropArea={1}
                                            onInitialized={(instance) => {
                                                setCropper(instance);
                                            }}
                                        />
                                    }
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            }

        </div>
    );
}
