import React, { useEffect, useState } from 'react'
import '../../css components/EffectHook.css'
const EffectHook = () => {
    const [apiData, setApiData] = useState()

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
                           
                                <th           >Street</th>
                                <th>Suite</th>
                                <th>City</th>
                                <th>Zipcode</th>
                           
                        </th>
                        <th>phone</th>
                        <th>Website</th>
                        <th>Company
                            
                                <th>Name</th>
                                <th>Catch Phrase</th>
                                <th>BS</th>
                           
                        </th>
                    </tr>


                    {apiData.map((item) => {
                        return (
                            <tr>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.username}</th>
                                <th>{item.email}</th>
                                <th >
                                    
                                        <th >{item.address.street}</th>
                                        <th>{item.address.suite}</th>
                                        <th>{item.address.city}</th>
                                        <th>{item.address.zipcode}</th>
                                    
                                </th>
                                <th>{item.phone}</th>
                                <th>{item.website}</th>
                                <th>
                                    
                                        <th>{item.company.name}</th>
                                        <th>{item.company.catchPhrase}</th>
                                        <th>{item.company.bs}</th>
                                    
                                </th>

                            </tr>
                        )
                    })}

                </table>
            </div>
        </>
    )
}

export default EffectHook;