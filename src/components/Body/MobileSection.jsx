import { useEffect, useState } from 'react'
import '../../css components/MobileSection.css'

const MobileSection = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const url = "https://jsonplaceholder.typicode.com/users";
            const getData = await fetch(url);
            const parseData = await getData.json();
            setData(parseData);

        }
        fetchData();
    }, [])

    return (
        <>
            <div className='cardBorder'>
                {data.map((item) => {
                    return (
                      
                            <div  key={item.id} className="card">
                                <img src={item.email} alt="photo not available" />
                                <div className="card-content">
                                    <div className="phone-name">{item.name}</div>
                                    <ul className="specs">
                                        <li> {item.company.name}</li>
                                        <li> {item.company.catchPhrase}</li>
                                        <li> {item.company.bs}</li>
                                    </ul>
                                </div>
                                <button className='cartButton'>Add to Cart +</button>
                            </div>
                  
                    )

                })}
            </div>

        </>
    )
}

export default MobileSection
