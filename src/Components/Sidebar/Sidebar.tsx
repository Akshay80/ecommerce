import * as ACTIONS from './action'
import { useDispatch, useSelector } from 'react-redux';
import { Div, DivText, DivHead } from './sidebarStyles';
import { useEffect, useState } from 'react';

export const Sidebar:React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ACTIONS.getCategories())
    },[]);

    return(
        <>
    
    <Div>
        <DivHead>
            Categories
            </DivHead>
    </Div>
  
    </>
)
}

export default Sidebar;
