import React from 'react'
import Link from 'next/link'

export default function SuggestsUses(props) {


    const categoriesListJson = [
        { "subtitle" :" 13000+  ", "title": "آشپزخانه", "link": "/decors/کاشی-و-سرامیک-/کاربری/آشپزخانه", "pathSvg": "https://cerampakhsh.com/files/wizard/kitchenx.svg", },
        { "subtitle" :" 40000+ ", "title": "دستشویی، حمام", "link": "/decors/کاشی-و-سرامیک-/کاربری/دستشویی+و+حمام", "pathSvg": "https://cerampakhsh.com/files/wizard/toiletx.svg", },
        { "subtitle" :" 67000+ ", "title": "اتاق، پذیرایی", "link": "/decors/کاشی-و-سرامیک-/کاربری/پذیرایی", "pathSvg": "https://cerampakhsh.com/files/wizard/roomx.svg", },
        { "subtitle" :" 52000+ ", "title": "نما، راهرو", "link": "/decors/کاشی-و-سرامیک-/کاربری/نما+و+راهرو", "pathSvg": "https://cerampakhsh.com/files/wizard/housex.svg", },
        { "subtitle" :" 60000+ ", "title": "تجاری، پارکینگ", "link": "/decors/کاشی-و-سرامیک-/کاربری/تجاری+و+پارکینگ", "pathSvg": "https://cerampakhsh.com/files/wizard/pakingx.svg", },
        { "subtitle" :" 100000+ ", "title": "استخری", "link": "/products/کاشی-استخری", "pathSvg": "https://cerampakhsh.com/files/wizard/poolx.svg", },
    ]
    return (
        < >


            <div className="mob-user-row container-body py-3 ">


                <div className="boxoff-txt">

                    <Link href="/producer/RokaCeram/روکاسرام?showpopup=ROKACERAM"  ><a>
                        <p>کاربری کاشی و سرامیک



                        </p>

                    </a></Link>
                </div>
           
            {categoriesListJson?.map((category, keyCat) =>
                <div key={keyCat} className="mob-user-box">
                    <Link href={category.link}><a>
                        <img src={category.pathSvg} alt={`فروشگاه اینترنتی سرام پخش ${category.title}`} title={`فروشگاه اینترنتی سرام پخش ${category.title}`}  width="55" height="55" />
                        <p>{category.title}
                        <hr className="mb-1 mt-2 mx-auto w-50" /> 
                        
                       <small >{category.subtitle}</small><small>تومان</small>

                        <br />
                        </p>
                        

                    </a></Link>
                </div>
            )}
 </div>
        </>

    )
}