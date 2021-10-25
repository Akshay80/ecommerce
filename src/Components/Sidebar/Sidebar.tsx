import { Div, DivText, DivHead } from './sidebarStyles';
export const Sidebar:React.FC = () => {

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
