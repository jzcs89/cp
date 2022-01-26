import React, { useMemo, useState } from 'react';
import { website } from '../../Services/Helper';
import Link from 'next/link';
import { AngleLeft, ArrowFromLeft, CircleLeft } from '../icons/SvgIcons';
import Config from '../../configs/Cerampakhsh';


export default function NewMenuFix(props) {

    const [mainCategories, setmainCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [categoriesLink, setCategoriesLink] = useState({})
    const [categoriesIndex, setcategoriesIndex] = useState([])

    useMemo(() => {

     setCategories(props?.categories)
     setmainCategories(props?.categories)

    }, [props.categories])


    const setCategoriesChildren = (index) => (e) => {
        setCategoriesLink(categories[index])
        setCategories(categories[index].children)
     

        let indexes = categoriesIndex ?? [];

        indexes.push(index);
        setcategoriesIndex(indexes)


    }

    const backCategories = () => (e) => {
        let catsBack = mainCategories
        if (categoriesIndex.length === 0) {
            catsBack = mainCategories
            setCategoriesLink(null)
        } else if (categoriesIndex.length === 1) {
            catsBack = mainCategories
            setCategoriesLink(null)
            categoriesIndex.pop()
        } else if (categoriesIndex.length === 2) {
            catsBack = mainCategories[categoriesIndex[0]]?.children
            setCategoriesLink(mainCategories[categoriesIndex[0]])
            categoriesIndex.pop()
        } else if (categoriesIndex.length === 3) {
            catsBack = mainCategories[categoriesIndex[0]]?.children[categoriesIndex[1]]?.children
            setCategoriesLink(mainCategories[categoriesIndex[0]]?.children[categoriesIndex[1]])
            categoriesIndex.pop()
        } else if (categoriesIndex.length === 4) {
            catsBack = mainCategories[categoriesIndex[0]]?.children[categoriesIndex[1]]?.children[categoriesIndex[2]]?.children
            setCategoriesLink(mainCategories[categoriesIndex[0]]?.children[categoriesIndex[1]]?.children[categoriesIndex[2]])
            categoriesIndex.pop()
        }

        setCategories(catsBack)
    }
    return (
        <>
            <div className="li-sub-menu-fix li-sub-menu-fix-hdr" style={{ position: 'relative' }} >
                <Link href="/" className="center w-50 my-4"><a>
                    <img className="svg-logo" src={Config.logo} alt="فروشگاه اینترنتی سرام پخش" title="فروشگاه اینترنتی سرام پخش" width="170" height="auto" />
                    </a></Link>
                { categoriesIndex.length !== 0 &&
                <div className="d-md-block px-3 cursor" onClick={backCategories()}>
                    <div className="menu-fix-inbox pt-3 px-3  text-right">
                         <ArrowFromLeft className="w-20px"/>مرحله قبل  
                    </div>
                </div>
                }
            </div>
            <div className="d-sm-none- d-md-block px-3">
                {categoriesLink && 
                    <div className="li-sub-menu-fix " style={{ position: 'relative' }} >
                        <span className="menu-svg" dangerouslySetInnerHTML={{ __html: categoriesLink.icon }}></span>
                        <span className="mr-2">
                            <Link href={`${(categoriesLink.link) ? ('/' + categoriesLink.link).replace('//', '/') : `/products/${categoriesLink.slug}`}`}><a>
                            <span className="text-firoozei">
                            {
                            categoriesLink.categoryid === 1000 ? ' همه ' 
                            : 
                            (categoriesLink.parentid === 1000) ?
                             ' محصولات '  
                             :
                            ''
                             }
                             {categoriesLink.category}
                             </span>
                             <AngleLeft className="AngleLeft"/>
                             </a></Link>
                        </span>
                    </div>
                }
            </div>
            <div className="d-sm-none- d-md-block px-3">
                
                {categories && categories.length > 0 && categories?.map((category, keyCategory) =>
                 (category?.children && category.children.length > 0) ? 
                   <div key={keyCategory} className="li-sub-menu-fix cursor" style={{ position: 'relative' }} onClick={setCategoriesChildren(keyCategory)} >
                        <span className="menu-svg" dangerouslySetInnerHTML={{ __html: category.icon }}></span>
                        <span className="mr-2">
                            <button>{category.category}</button>
                            <span className="float-left">
                            <CircleLeft className="CircleLeft"/>
                            </span>
                            
                        </span>
                    </div>
                :
                <div key={keyCategory} className="li-sub-menu-fix cursor" style={{ position: 'relative' }} >
                <span className="menu-svg" dangerouslySetInnerHTML={{ __html: category.icon }}></span>
                <span className="mr-2">
                    
                    {category.link === '/mag' ?
                        <a href="https://cerampakhsh.com/mag">{category.category}</a>
                    :
                        <Link href={`${(category.link) ? ('/' + category.link).replace('//', '/') : `/products/${category.slug}`}`}><a>{category.category}</a></Link>
                    }
                </span>
            </div>
                )}
            </div>

        </>

    );
}
