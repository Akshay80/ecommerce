import * as ACTIONS from './action'
import { useDispatch, useSelector  } from 'react-redux';
import { Div, DivText, DivHead } from './sidebarStyles';
import { useEffect, useState } from 'react';
import {
    getTodosSelector,
  } from "./selector";
export const Sidebar:React.FC = () => {
    const [categories, setCategories] = useState<string[]>([])
    const dispatch = useDispatch();
    let allCategories = useSelector(getTodosSelector);

    useEffect(() => {
        dispatch(ACTIONS.getCategories())
    }, [])
   
    useEffect(() => {
        console.log(allCategories, 'insde second useeffect')
    }, [])

    

    return(
        <>
    
    <Div>
        <DivHead>
            Categories
        </DivHead>
            {
                categories.length > 0 &&
                categories.map((item, index) => {
                    return(
                        <li >
                        {item}
                        </li>
                    )
                })
            }
           
            {/* <DivText>
            Jewellery
            </DivText>
            <DivText>
            Cloths
            </DivText>
            <DivText>
            Shoes
            </DivText> */}
    </Div>
  
    </>
)
}

export default Sidebar;
