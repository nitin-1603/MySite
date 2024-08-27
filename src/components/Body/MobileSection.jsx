// components/MobileSection.js
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import '../../css components/MobileSection.css';

const MobileSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addItem(item));
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
