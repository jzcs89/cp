import React from 'react'

export default function SpecificationsTool(props) {

    return (

        <>
            <div className="tab-pane  active" id="desc"   aria-expanded="false">
                <div className="row">

                    <div className="container-ak">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>

                                {props.extrafields &&
                                    <>
                                        <tr >

                                            <td width="30%">
                                                نوع ویژگی
                                            </td>
                                            <td>
                                                مقدار
                                            </td>
                                        </tr>
                                        {Object.entries(props.extrafields).filter(([indexFilter, valueFilter]) => (valueFilter.value))?.map(([key, extra]) =>
                                            <tr key={key}>

                                                <td width="30%">
                                                    {extra.field}
                                                </td>
                                                <td>

                                                    {(extra.value).split(',').join(" , ")}
                                                </td>
                                            </tr>
                                        )
                                        }
                                    </>
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}
