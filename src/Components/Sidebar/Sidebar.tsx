import * as ACTIONS from './action'
import { useDispatch } from 'react-redux';
import { Div, DivText, DivHead } from './sidebarStyles';
import { useEffect } from 'react';
export const Sidebar:React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ACTIONS.getCategories())
    }, [])

    return(
        <>
    
    <Div>
        <DivHead>
            Categories
            </DivHead>
        <DivText>
            Electronics
            </DivText>
            <DivText>
            Jewellery
            </DivText>
            <DivText>
            Cloths
            </DivText>
            <DivText>
            Shoes
            </DivText>
    </Div>
  
    </>
)
}

export default Sidebar;
