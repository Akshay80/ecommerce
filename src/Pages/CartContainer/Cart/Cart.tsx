import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { Products } from '../../../Components/ProductList/index';

type Props = {
  cartItems: Products[];
  addToCart: (clickedItem: Products) => void;
  // removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart }) => {
  const calculateTotal = (items: Products[]) =>
    items?.reduce((ack: number, item) => item.price, 0);
    // items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems?.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems?.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          // removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems)?.toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;