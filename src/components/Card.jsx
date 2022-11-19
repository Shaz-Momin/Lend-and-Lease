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
                    <h2 className="text-sm mx-1 mt-4">{data.name}</h2>
                </a>
                    <p className="text-sm mx-12 mt-2 mb-1">${data.pricePerDay} per day</p>
                    <p className="text-sm mx-7 center">{data.leaseStart} - {data.leaseEnd}</p>
            </div>
        </div>
    )
}

