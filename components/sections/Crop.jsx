import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; 
import { website } from '../../Services/Helper';

export default function Crop(props) {
    const defaultSrc =  `${website}/files/img/n-w/upload-customer1.png`;
    const [src, setSrc] = useState({ src: ''})
    const [cropper, setCropper] = useState();

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
            
        };
        reader.readAsDataURL(files[0]);
    }

    const getCropData = () => {
        if (typeof cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        if (cropper && cropper.getCroppedCanvas() && cropper.getCroppedCanvas().toDataURL()) {
            props.updateSrc(cropper.getCroppedCanvas().toDataURL())
            setSrc({ src: cropper.getCroppedCanvas().toDataURL()});
        }
        
    }

        return (
            <div className="row-ak">
                <div className="col-md-5 col-12">
                    <label id="uploadImage" style={{ width: '100%', border: '1px dashed' }}>
                        <span className="btn btn-raised btn-round btn-default btn-file">
                            <span className="fileinput-new btn-upload"><p>عکس دکور محیط خود را بارگذاری کنید </p>
                                <img className="w-100 border-0 p-0 img-preview" src={src?.src ? src?.src : defaultSrc} title="بارگذاری تصویر" alt="بارگذاری تصویر"/> </span>

                            <input type="file" id="uploadImage" name="uploadImage" className="d-none" onChange={onChangeImage} />
                        </span>
                    </label>
                </div>
                <div className="col-md-7 col-12">
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
                <div className="modal-footer w-100 ">
                    <button className="btn btn-firoozei  m-auto px-5" onClick={getCropData}>
                        تایید عکس
                    </button>
                </div>
            </div>
        );
    }