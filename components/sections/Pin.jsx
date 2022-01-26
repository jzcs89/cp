import React from "react";


export default function Pin(props) {
    const {size = 20} = props
    return (
        <img height={`${size}`} src="https://cerampakhsh.com/files/marker.png" alt="" onClick={props.handleclick} />
    )
}