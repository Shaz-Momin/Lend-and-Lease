import React, { useState, useEffect } from 'react'
import { MdFavorite } from 'react-icons/md'
import { IoBagRemove } from 'react-icons/io5'
import { RiAccountCircleFill } from 'react-icons/Ri'

const Headbar = ({ setTab }) => {
    return (
        <div className="w-full flex justify-between py-6 text-md uppercase tracking-wide cursor-default">
            <div className="flex justify-around cursor-pointer">
                <div className="text-lg font-extrabold hover:text-burntOrange-800 px-4">UT BIZ</div>
            </div>
            <div className="flex justify-around font-semibold tracking-wider items-center">
                <a onClick={() => setTab(0)} className="px-4 cursor-pointer">Home</a>
                <a onClick={() => setTab(1)} className="px-4 cursor-pointer">Buy</a>
                <a onClick={() => setTab(2)} className="px-4 cursor-pointer">Sell</a>
            </div>
            <div className="flex justify-around">
                <div className="flex items-center px-4 hover:text-red-500 cursor-pointer"><MdFavorite size={25}/></div>
                <div className="flex items-center px-4 hover:text-indigo-500 cursor-pointer"><IoBagRemove size={25}/></div>
                <div className="flex items-center px-4 hover:text-gray-500 cursor-pointer"><RiAccountCircleFill size={27}/></div>
            </div>
        </div>
    )
}

export default Headbar