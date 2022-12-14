import React, { useState, useEffect } from 'react'
import Image from 'next/image.js'
import { imagesRef, storage } from '../firebase.js'
import { getDownloadURL, ref } from 'firebase/storage'

let userInfo = {
    name: 'John Doe',
    email: 'johndoe@utexas.edu',
    phone: '123-456-7890',
}

export default function Card({data}) {
    const [imgUrl, setUrl] = useState('');

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    
    var date = new Date();
    
    //console.log(date.addDays(5));

    const options = { month:"short", day: "numeric" };

    const url = getDownloadURL(ref(storage, 'images/'.concat(data.images[0])))
    .then((url) => {
        setUrl(url);
    })
    .catch((error) => {
        console.log(error);
    });

    return (
        <div classname= "card m-3 cursor-default" title={data.desc}>
            <a className='relative flex items-center justify-center hover:border h-52' rel="noreferrer" target="_blank" href={imgUrl}>
                {imgUrl ?
                <Image 
                    layout='fill'
                    objectFit='contain'
                    src={imgUrl}
                    alt={data.name}
                    className="rounded items-center justify-center"
                /> : <div className="text-center text-xl">Loading...</div>}
            </a>
            <div className="img-footer flex flex-col justify-center items-center hover:bg-logoBg-400">
                <div className='flex justify-center items-center w-5/6'>
                    <div className="flex h-7 text-md lg:text-lg font-semibold mx-2 mt-4 truncate text-ellipsis">{data.name}</div>
                </div>
                <p className="text-md mx-4 mt-2 mb-1">${data.pricePerDay}/day</p>
                <p className="text-sm mx-4">(Safety: ${data.safetyDeposit})</p>
                <p className="text-sm mx-4 mt-1 italic center">{new Date(data.leaseStart).addDays(1).toLocaleDateString('en-us', options) + " - " +  new Date(data.leaseEnd).addDays(1).toLocaleDateString('en-us', options)}</p>
                <p className="text-sm mx-4 mt-2 mb-4 text-center">Contact
                    <span className='font-semibold text-burntOrange-800 px-1'>{userInfo.name}</span><br></br>
                    <a className="italic" href={"mailto:" + userInfo.email}>{userInfo.email}</a>
                </p>
            </div>
        </div>
    )
}

