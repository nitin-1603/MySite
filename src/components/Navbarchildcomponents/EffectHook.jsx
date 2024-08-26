import { useEffect, useState } from 'react'
import '../../css components/EffectHook.css'

const EffectHook = () => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const fetchData = await fetch(url)
            const data = await fetchData.json();
            setApiData(data)
        }
        fetchData();
    }, [])


    return (

        <>
            <div className='containerTable'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th >Address

                            <th className='addressChild'>Street</th>
                            <th className='addressChild'>Suite</th>
                            <th className='addressChild'>City</th>
                            <th className='addressChild'>Zipcode</th>

                        </th>
                        <th>phone</th>
                        <th>Website</th>
                        <th>Company

                            <th>Name</th>
                            <th>Catch Phrase</th>
                            <th>BS</th>

                        </th>
                    </tr>
                    {
                        apiData.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.name}</th>
                                    <th>{item.username}</th>
                                    <th>{item.email}</th>
                                    <th >

                                        <th className='addressChild'>{item.address.street}</th>
                                        <th className='addressChild'>{item.address.suite}</th>
                                        <th className='addressChild'>{item.address.city}</th>
                                        <th className='addressChild'>{item.address.zipcode}</th>

                                    </th>
                                    <th>{item.phone}</th>
                                    <th>{item.website}</th>
                                    <th>

                                        <th>{item.company.name}</th>
                                        <th>{item.company.catchphrase}</th>
                                        <th>{item.company.bs}</th>

                                    </th>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}

export default EffectHook;