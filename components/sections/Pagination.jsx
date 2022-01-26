import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Pagination(props) {

    let router = useRouter()
    let rows = []

    let page = props.page
    let total = props.total

    let link = router.asPath;


    function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }


    let styles = { height: '27px', width: '27px', textAlign: 'center', margin: 0, padding: 0, lineHeight: 1.7, };

    return (
        <>
            <div className="row w-100 my-4">
                <div className="col-md-12">
                    {(total > 1 && total >= page) &&
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center pagination-primary">
                                {(page > 1) &&
                                    <>
                                        <Link href={updateQueryStringParameter(link, 'page', page - 1)}><a><li className="page-item mx-1">
                                            <span className="page-link  paginate-filter btn text-muted rounded-circle" style={styles}>&lt;&lt;</span>
                                        </li></a></Link>
                                        <Link href={updateQueryStringParameter(link, 'page', page - 1)}><a><li className="page-item ">
                                            <span className="page-link  paginate-filter btn text-muted rounded-circle" style={styles} name="pageno" value="1" action="?pageno=4">&lt;</span>
                                        </li></a></Link>
                                    </>
                                }
                                {(page > 3 && total > 5) &&
                                    <Link href={updateQueryStringParameter(link, 'page', 1)}><a><li className="page-item mx-1">
                                        <span className="page-link  paginate-filter btn text-muted rounded-circle" style={styles} >1</span>
                                    </li></a></Link>
                                }
                                {(page > 4 && total > 5) &&
                                    <li className="page-item mx-1">...</li>
                                }

                                {(() => {
                                    let max_page = 6
                                    if (total > 4) {
                                        max_page = total + 1
                                    }
                                    if (total > 5) {
                                        max_page = 6
                                    } else {
                                        max_page = total + 1
                                    }

                                    // let rows = [];
                                    if (page <= 3) {
                                        for (let index1 = 1; index1 < max_page; index1++) {
                                            rows.push(index1)
                                        }
                                    } else if (total - page <= 1) {
                                        for (let index2 = total - 4; index2 < total + 1; index2++) {
                                            rows.push(index2)
                                        }
                                    } else {
                                        for (let index3 = Number(page) - 2; index3 < Number(page) + 3; index3++) {
                                            rows.push(index3)
                                        }
                                    }

                                })()}
                                {
                                    rows?.map((row, index) =>
                                        <Link key={index} href={updateQueryStringParameter(link, 'page', row)}><a><li className={`page-item mx-1 ${(row === page) ? 'active' : ''}`}>
                                            <span className={`page-link  paginate-filter btn  rounded-circle ${(row === page) ? ' bg-firoozei text-white ' : ' text-muted '}`} style={styles}>{row}</span>
                                        </li></a></Link>
                                    )}

                                {((total - page) > 3) && (total > 5) &&
                                    <li className="page-item mx-1">...</li>
                                }
                                {((total - page) > 2) && (total > 5) &&
                                    <Link href={updateQueryStringParameter(link, 'page', total)}><a><li className="page-item mx-1">
                                        <span className="page-link  paginate-filter btn text-muted rounded-circle" style={styles} >{total}</span>

                                    </li></a></Link>
                                }
                                {(page !== total) &&
                                    <>
                                        <Link href={updateQueryStringParameter(link, 'page', page + 1)}><a><li className="page-item mx-1">
                                            <span className="page-link  paginate-filter btn text-muted rounded-circle" style={styles}>&gt;</span>
                                        </li></a></Link>
                                        <Link href={updateQueryStringParameter(link, 'page', total)}><a><li className="page-item mx-1">
                                            <span className="page-link  paginate-filter btn text-muted rounded-circle" style={styles}>&gt;&gt;</span>
                                        </li></a></Link>
                                    </>
                                }
                            </ul>
                        </nav>
                    }
                </div>
            </div>

        </>
    )
}