import { Div, DivText, DivHead } from './sidebarStyles';
export const Sidebar:React.FC = () => {

    return(
        <>
    <div className="container m-0 p-0">
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
    </div>
    </>
)
}
