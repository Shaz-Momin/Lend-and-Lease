import React, { useState, useEffect } from 'react'
import { getDocs, addDoc } from "firebase/firestore";
import { marketRef } from '../firebase.js'

const LeaseTab = () => {

    // HOW TO PULL DATA FROM FIREBASE:
    // Collection data
    getDocs(marketRef)
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