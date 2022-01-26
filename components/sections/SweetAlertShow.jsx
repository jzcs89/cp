import React, { useContext } from 'react'
import { AlertContext } from '../../Contexts/AlertContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'next/router';

function SweetAlertShow(props) {

    const alContext = useContext(AlertContext)

    return (
        <>
            {(alContext && alContext.alert && alContext.alert.alerts.isShow) &&
                toast(alContext.alert.alerts.title, {type: alContext.alert.alerts.status})
            }
           
        </>
    )
}

export default withRouter(SweetAlertShow)