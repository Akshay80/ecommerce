import { Div, DivText, DivHead } from './sidebarStyles';

function Sidebar () {

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

export default Sidebar;
