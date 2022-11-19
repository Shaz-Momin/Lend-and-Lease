
// const LeaseTab = () => {
//     return (
//         <div className="flex justify-between p-5 text-md h-full">
//             <div className='bg-logoBg-400 w-full h-full'>
//                 Lease Tab
//             </div>
//         </div>
//     )
// }

// export default LeaseTab

/*eslint-disable @next/next/no-img-element */
import { setRevalidateHeaders } from 'next/dist/server/send-payload'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { IoImageSharp } from 'react-icons/io5';

export default function Card({product}) {
    const[name, setName] = useState('');
    const [images, setImages] = useState([])
    const [desc, setDesc] = useState('')
    const [tags, setTags] = useState([])
    const [rentalLength, setRentalLength] = useState(0)
    const [leaseStart, setLeaseStart] = useState('')
    const [leaseEnd, setLeaseEnd] = useState('')
    const [pricePerDay, setPricePerDay] = useState(0)
    const [safetyDeposit, setSafetyDeposit] = useState(0)
    const [size, setSize] = useState('M')
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    
    const divStyle = {
        margin:'20px'
        
    }

    useEffect(() => {
        fetch("http://localhost:3000/api/data")
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            setData(data[0]);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            new SpeechSynthesisErrorEvent(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])  
        

    return (
        <div style ={divStyle} classname= "card">
                <a>
                    <img 
                    width="200"
                    src={data.images}
                    alt={data.name}
                    className="rounded shadow items-center p-1"
                    />
            </a>
            <div className="img-footer">
                <a>
                    <h2 className="text-sm p-2">{data.name}</h2>
                </a>
                    <p className="text-sm m-2">${data.pricePerDay} per day</p>
                    <p className="text-sm m-2 center">{data.leaseStart} - {data.leaseEnd}</p>
            </div>
        </div>
    )
}


// <div className="img-footer">
// <a>
//     <h2 className="text-sm p-2 mt-1 absolute not-italic font-semibold text-sm flex items-center text-black">{data.name}</h2>
// </a>
//     <p className="text-sm p-2 mt-5 absolute not-italic text-sm flex items-center text-black">${data.pricePerDay} per day</p>
//     <p className="text-sm p-1 mt-9 center absolute not-italic text-sm flex items-center text-black">{data.leaseStart} - {data.leaseEnd}</p>
// </div>
// </div>

