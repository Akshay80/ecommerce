import * as ACTIONS from './action'
import { useDispatch, useSelector } from 'react-redux';
import { Div, DivText, DivHead } from './sidebarStyles';
import React, { useEffect, useState } from 'react';
import {
    getTodosSelector,
} from "./selector";
interface AllCategories {
    categories: string[]
    pending: boolean
}

interface categoryInterface {
    getProductByCategory: (val: string) => void
}

export const Sidebar: React.FC<categoryInterface> = ({getProductByCategory}) => {
    const [categories, setCategories] = useState<string[]>([])
    const [categoriesLoader, setCategoriesLoader] = useState<boolean>()
    const dispatch = useDispatch();
    let allCategories: AllCategories = useSelector(getTodosSelector)

    useEffect(() => {
        dispatch(ACTIONS.getCategories())
    }, [])

    useEffect(() => {
        setCategories(allCategories.categories)
        setCategoriesLoader(allCategories.pending)
    }, [allCategories])

    

    return (
        <React.Fragment>
            <Div>
                <DivHead>
                    Categories
                </DivHead>
                {
                    categoriesLoader ? <DivText>
                    Loading
                </DivText> :
                    categories.length > 0 &&
                    categories.map((item, index) => {
                        return (
                            <DivText key={item} onClick={() => getProductByCategory(item)}>
                                {item.toLocaleUpperCase()}
                            </DivText>
                        )
                    })
                }
            </Div>
        </React.Fragment>
    )
}

export default Sidebar;
