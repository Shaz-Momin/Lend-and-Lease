import React, { useState, useEffect } from 'react'
import { imagesRef, storage } from '../firebase.js'
import { getDownloadURL, ref } from 'firebase/storage'

let userInfo = {
    name: 'John Doe',
    email: 'johndoe@utexas.edu',
    phone: '123-456-7890',
}

export default function Card({data}) {
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
    //const [data, setData] = useState([])
    const [imgUrl, setUrl] = useState('');


    const options = { month:"short", day: "numeric" };

    const url = getDownloadURL(ref(storage, 'images/'.concat(data.images[0])))
    .then((url) => {
        setUrl(url);
    })
    .catch((error) => {

    });

    /* useEffect(() => {
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
    }, [])   */
        
    // url.then((val) => {
    //     console.log(val);
    // })
    // .catch((err => console.log(err)));

    // "https://images.footballfanatics.com/texas-longhorns/mens-columbia-gray-texas-longhorns-ascender-ii-full-zip-jacket_pi4889000_altimages_ff_4889935-bc277a44770222ef546falt2_full.jpg?_hv=2&w=900"
    
    // console.log(data);
    return (
        <div classname= "card m-3">
            <a className='flex items-center justify-center hover:border h-48' href={imgUrl}>
                <img 
                    width="200"
                    src={imgUrl}
                    alt={data.name}
                    className="rounded items-center p-1"
                />
            </a>
            <div className="img-footer flex flex-col justify-center items-center hover:bg-logoBg-400">
                <div className='flex justify-center items-center'>
                    <div className="flex text-lg font-semibold mx-1 mt-4">{data.name}</div>
                </div>
                <p className="text-md mx-4 mt-2 mb-1">${data.pricePerDay}/day</p>
                <p className="text-sm mx-4">(Safety: ${data.safetyDeposit})</p>
                <p className="text-sm mx-4 mt-1 italic center">{new Date(data.leaseStart).toLocaleDateString('en-us', options) + " - " +  new Date(data.leaseEnd).toLocaleDateString('en-us', options)}</p>
                <p className="text-sm mx-4 mt-2 mb-4 text-center">Contact {userInfo.name} <a href={"mailto:" + userInfo.email}>{userInfo.email}</a></p>
            </div>
        </div>
    )
}

