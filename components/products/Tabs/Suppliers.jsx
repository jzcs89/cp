import React from 'react'
import Link from 'next/link'
import {  StoreLight } from '../../../components/icons/SvgIcons'
// export default class Product extends Component {
export default function Suppliers(props) {


    return (

        <>
            <div className="tab-pane " id="doing"   aria-expanded="false">
                <div className="row">

                    <div className="container-ak">
                        <h3 className="text-center">نزدیکترین نماینده به شما</h3>
                        <div className="parent-btn text-center  bg-stl border  py-5 bg-location  mb-5">
                            {/* {props.factory_ && */}
                            <Link href={`/merchants?type=merchant&manufacturor=${(props.factory_)?.toString()?.split(' ').join("+")}`}><a title="نزدیکترین نماینده به شما" className="m-auto dk-btn dk-btn-success">نزدیکترین نماینده به شما <StoreLight/>
                            </a></Link>
                            {/* } */}
                        </div>
                        <p>
                            سرام پخش برای کاهش هزینه‌های شما و برای اطمینان از خرید مناسب و باکیفیت می‌توانید با مراجعه به بخش فروشندگان که معرف تمامی نمایندگان فروش آن برند می‌باشد، بتوانید سریع‌تر محصول مورد نظر خود را بیابید و کار شما با سرعت بیشتری انجام پذیرد، سرام پخش با ارائه آدرس و راه‌ههای ارتباطی نماینده، شما را در پیدا کردن فروشندگان و نمایندگان آن محصول یا برند در سرتاسر ایران راهنمایی می‌کند. شما می‌توانید در فرصت زمانی کوتاه با نماینده مربوطه آن برند در شهر خودتان ارتباط برقرار کرده و محصول مورد نیاز خود را با سرعتی بیشتر تهیه کنید.
                        </p>
                        
                        {/* {props.merchants &&
                            <MapCeram data={props.merchants} type='merchant' />
                        } */}
                    </div>
                </div>
            </div>

        </>

    )
}

