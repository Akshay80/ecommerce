import Button from "@material-ui/core/Button";
import { Products } from "../../../Components/ProductList/index";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: Products;
  addToCart: (clickedItem: Products) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
      </div>
      <div className="buttons">
        {/* <Button size="small" disableElevation variant="contained">
          -
        </Button>

        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button> */}
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
