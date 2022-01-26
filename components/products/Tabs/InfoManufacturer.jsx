import React, {useState, useMemo} from 'react'
import Axios from '../../../Services/Axios';
import { website } from '../../../Services/Helper';

// export default class Product extends Component {
export default function InfoManufacturer(props) {

    const [html, setHtml] = useState({ __html: '' });


    useMemo(()=>{
     
        Axios({
            method: 'get',
            url: encodeURI('/v1/get-html?url='+website+'/skin1/pages/factories/'+props.factory+'/info.html'),
            data: ''
        })
            .then(response => {
                if(!response?.data?.startsWith("<!DOCTYPE html>")){
                    setHtml(response)
                }
            });
    },html)

    return (

        <>
            <div className="tab-pane " id="info"   aria-expanded="false">
                <div dangerouslySetInnerHTML={{ __html: html.data }}></div>
            </div>
        </>

    )
}
