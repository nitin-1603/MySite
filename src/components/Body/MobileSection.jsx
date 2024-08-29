// components/MobileSection.js
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import '../../css components/MobileSection.css';
import { selectCartItems } from '../redux/cartSlice';

const MobileSection = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);


    const handleAddToCart = (item) => {
        const itemInCart = cartItems.some(cartItem => cartItem.id === item.id);

        if (itemInCart) {
            // Open cart in a new tab if item is already in the cart
            const cartUrl = '/cart'; // Adjust this to the route where your cart is displayed
            window.open(cartUrl, '_blank');
        } else {
            // Otherwise, add item to cart
            dispatch(addItem(item));
        }
    };

    return (
        <div className='cardBorder'>
            {data.map((item) => (
                <div key={item.id} className="card">
                    <img className='cardImage' src={item.image} alt="photo not available" />
                    <div className="card-content">
                        <div className="phone-name">{item.title}</div>
                        <ul className="specs">
                            <li><b style={{ color: "red" }}>Price :</b> {item.price}</li>
                            <li><b style={{ color: "red" }}>Category :</b> {item.category}</li>
                            <li>{item.description}</li>
                            <li><b style={{ color: "green" }}>Rating :</b> {item.rating.rate}</li>
                            <li><b style={{ color: "blue" }}>Rating Count :</b> {item.rating.count}</li>
                        </ul>
                    </div>
                    <button className='cartButton' onClick={() => handleAddToCart(item)}>Add to Cart +</button>
                </div>
            ))}
        </div>
    );
};

export default MobileSection;
