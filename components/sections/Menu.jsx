import React from 'react';
import { AngleLeft } from '../icons/SvgIcons';
import Link from 'next/link'
function Menu(props) {
    
    let categoriesList = props?.categories
    if (categoriesList && categoriesList.length > 0) {
        categoriesList?.reduce(function (sum, cat) {
            let total = cat.children?.reduce(function (sum1, cat1) {
                let sum__ = cat1?.children?.reduce(function (sum2, cat2) {
                    cat2.countChildren = sum2
                    return Number(sum2) + Number(cat2.children.length)
                }, cat1.children.length)
                cat1.countChildren = sum__
                return Number(sum1) + Number(sum__) + Number(cat1.children.length)
            }, 0)
            cat.countChildren = total
            return cat.countChildren
        }, 0)
    }
    const renderContent = (cat1, link, slug) => {
        let link1 = createLink(link, slug)
        if (link1 === '/mag') {
            return <a className="nav-link cursor-pointer pc-w top-nav-list" href='https://cerampakhsh.com/mag'><span className="menu-svg" dangerouslySetInnerHTML={{ __html: cat1.icon }}></span>
                <span> {cat1.category}</span>  <div className="brd"></div>
            </a>
        } else if (link1 !== '/products') {
            return <Link href={link1}><a className="nav-link cursor-pointer pc-w top-nav-list"><span className="menu-svg" dangerouslySetInnerHTML={{ __html: cat1.icon }}></span>
                <span> {cat1.category}</span>  <div className="brd"></div>
                </a></Link>
        }
        return <button className="nav-link cursor-pointer pc-w top-nav-list"><span className="menu-svg" dangerouslySetInnerHTML={{ __html: cat1.icon }}></span>
            <span> {cat1.category}</span>  <div className="brd"></div>
        </button>
    }
    const createLink = (link, slug) => {
        return link ? link : `/products/${slug}`;
    }
    return (
        <>
            <ul className="list float-right ">
                {categoriesList &&
                    Object.entries(categoriesList)?.map(([key1, cat1]) => 
                        <li key={cat1.categoryid} className="link-desktop submenu-btn list-item list-item-has-children mega-menu mega-menu-col-5 hvr direction-rtl float-right disp-flex ">
                            {renderContent(cat1, cat1.link, cat1.slug)}
                            {cat1?.children?.length > 0 &&
                                <div className="bgDark-sub-menus">
                                    <div className=" sub-menus frst-sub">
                                        {cat1.children &&
                                            Object.entries(cat1.children)?.map(([key2, cat2]) =>
                                                <div key={cat2.categoryid} className="sub-container">
                                                    <div className=" p-0 sub-category-w">
                                                        <div className="w-100 sub-btn ">
                                                            <div >
                                                                <span className="menu-svg" dangerouslySetInnerHTML={{ __html: cat2.icon }}></span>
                                                                <span>{cat2.category}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sub-content sub-content-w">
                                                        <div className="w-100">
                                                            {createLink(cat1.link, cat1.slug) === '/page/خودت-نصب-کن/39' ?
                                                                <Link href={createLink(cat2.link,cat2.slug)}><a>{cat2.category}<AngleLeft className=" angleleft svg-darkfiroozei" /></a></Link>
                                                                :
                                                                <Link href={createLink(cat2.link,cat2.slug)}><a>همه محصولات {cat2.category}<AngleLeft className=" angleleft svg-darkfiroozei " /></a></Link>
                                                            }
                                                        </div>
                                                        <div className=" ul-sub-content " style={{ columns: 4 }}>
                                                            {cat2.children &&
                                                                Object.entries(cat2.children)?.map(([key3, cat3]) => 
                                                                    <div key={cat3.categoryid} className="category-step-3 " parentid={cat3.parentid}>
                                                                        <Link href={createLink(cat3.link, cat3.slug)}><a className="nav-link"> {cat3.category}{cat3?.children?.length > 0 && <AngleLeft className=" angleleft" />}</a></Link>
                                                                        <div>
                                                                            {cat3?.children?.map((cat4, key4) =>
                                                                                <div key={cat4.categoryid} className="category-step-4" parentid={cat4.parentid}>
                                                                                    <Link href={(cat4.link) ? cat4.link : `/products/${cat4.slug}`}><a className="nav-link">{cat4.category}</a></Link>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                            {cat2.countChildren > 0 &&
                                                                <>
                                                                    {[...Array(Number(55 - cat2.countChildren)).keys()]?.map((r, k) =>
                                                                        <div key={k} className="category-step-4 " parentid="1" style={{ height: 30 }}>
                                                                            <span className="nav-link"></span>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            }
                        </li>
                    )
                }
            </ul>
        </>
    )
}
export default Menu;