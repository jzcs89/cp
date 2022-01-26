import React from 'react'
import Link from 'next/link'
import { Home } from '../icons/SvgIcons'

export default function BreadCrumb(props) {


    return (
        < >

            <div className="Breadcrumb">

            <span><Link  href=""><a><Home className="w-20px"/> </a></Link> </span>
 
                {props.stepone && props.stepone?.map((value, key) => 
                    <span  key={key} ><Link  href={value.link}><a> {value.name} </a></Link> </span>
                )}
                {props.categories && props.categories?.map((cat, keyCat) => 
                    <span  key={keyCat}><Link   href={`/${props.type}/${cat.slug}`}><a> {cat.category} </a></Link> </span>
                )}
                {/* {props.steptwo && props.steptwo?.map((value, key) => 
                    <span  key={key}><Link  href={value.link}><a> {value.name} </a></Link> </span>
                )} */}
            </div>

        </>

    )
}
