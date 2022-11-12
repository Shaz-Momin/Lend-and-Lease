import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.js'

const LeaseTab = () => {

    // HOW TO PULL DATA FROM FIREBASE:
    const colRef = collection(db, "marketplace")

    // Collection data
    getDocs(colRef)
    .then((snapshot) => {
      let items = []
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id})
      })
      console.log(items);
    })
    .catch(err => {
      console.log(err.message)
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