import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js'

const LeaseTab = () => {

    // Collection ref
    const colRef = collection(db, 'marketplace'); 

    // Collection data
    getDocs(colRef)
    .then((snapshot) => {
      console.log(colRef)
      console.log(snapshot.docs)
    })
  
    return (
        <div className="flex justify-between p-5 text-md h-full">
            <div className='bg-logoBg-400 w-full h-full'>
                Lease Tab
            </div>
        </div>
    )
}

export default LeaseTab