import '../../css components/Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
  
    const handleRemoveItem = (id) => {
      dispatch(removeItem(id));
    };
  
    return (
      <div className='cartContainer'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cartItem">
                <img src={item.image} alt={item.title} className='cartItemImage' />
                <div className="cartItemDetails">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;
