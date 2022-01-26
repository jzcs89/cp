import React from 'react'
import Link from 'next/link'
import { website } from '../../Services/Helper';
import Config from '../../configs/Cerampakhsh';

export default function DecorOwl(props) {
    ;

    return (<>

        <div className={props.classes} row={props.decor_id} >

            <div className="product-box decor-box">
                
                <Link  href={`/decor/${props.decor_slug}`}><a className="product-box-img">
                    {props.decor_image &&
                        <img height="291" width="465" className="img-decor-list lazyload" src={`${website}/resize/medium/${props.decor_image}`} onError={(e) => { e.target.onerror = null; e.target.src = Config.logo }} alt={props.decor_title} title={props.decor_title} />
                    }
                </a></Link>
                <div className="product-box-content-row">
                    <Link href={`/decor/${props.decor_slug}     `}><a>
                        <h6 className="text-right" code={props.decor_code} data-toggle="tooltip" data-placement="top" title={props.decor_title} data-original-title={props.decor_title}>{props.decor_title}</h6>
                    </a></Link>
                </div>
    
                <div className="property-product">
                    {props.extrafieldvalues && Object.entries(props.extrafieldvalues)?.map(([index, value]) => {
                        let pro = '';
                        if (value.fieldid === 1 || value.fieldid === 2 || value.fieldid === 6 || value.fieldid === 17 || value.fieldid === 5){
                            
                            if(value.fieldid === 1){pro = 'size'} else
                            if(value.fieldid === 2){pro = 'color'} else 
                            if(value.fieldid === 6){pro = 'uses'} else 
                            if(value.fieldid === 5){pro = 'laab'} else 
                            if(value.fieldid === 17){pro = 'style'}

                            return (
                                <Link href={`/products/?${pro}=${value.value}`}><a>
                                    <label className="badge badge-warning ml-1 my-0">{value.value}</label>
                                </a></Link>
                            )
                        }
                        return true
                    })}
                </div>
            </div>
        </div>


    </>
    )
}