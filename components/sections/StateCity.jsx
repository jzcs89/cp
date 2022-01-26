import React, { useMemo, useState } from "react";
import Axios from "../../Services/Axios";

export default function StateCity(props) {
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    useMemo(() => {
        Axios({
            method: 'get',
            url: encodeURI('v1/get-states/0'),
            data: ''
        })
            .then(response => {
                setStates(response.data)
            });
            if(props.state !== undefined)
            Axios({
                method: 'get',
                url: encodeURI('v1/get-states/'+props.state),
                data: ''
            })
                .then(res => {
                    setCities(res.data)
                });

    }, [props.state])

    const handleCities = (e) => {
        var index = e.target.selectedIndex;
        var optionElement = e.target.childNodes[index]
        var option = optionElement.getAttribute('id');
        Axios({
            method: 'get',
            url: encodeURI('v1/get-states/' + option),
            data: ''
        })
            .then(res => {
                setCities(res.data)
            });
    }

    return (

        <>
            <div className="col-md-6 pt-2">
                <label className=" col-12 float-right text-right " htmlFor="state">استان</label>

                <select className="input-field state_edit" id="state" required="" name="state" onChange={handleCities}>
                    <option></option>
                    {states &&
                        states?.map((item, index) => <option key={index} selected={item.id === props.state} {...(item.id === props.state) ? 'selected' : ''} value={item.id} id={item.id}>{item.name}</option>)
                    }

                </select>

                <small className="feed-back text-danger text-right float-right error-state">{(props.errors) ? props.errors.state : ''}</small>
            </div>
            <div className="col-md-6 pt-2">
                <label className=" col-12 float-right text-right " htmlFor="state">شهر</label>

                <select className="input-field" required="" name="city" id="city">
                    {cities &&
                        cities?.map((item, index) => 
                           <option key={index} value={item.id} selected={item.id === props.city ? 'selected':''}>{item.name}</option>
                        )
                    }
                </select>

                <small className="feed-back text-danger text-right float-right error-city">{(props.errors) ? props.errors.city : ''}</small>
            </div>
        </>
    )
}