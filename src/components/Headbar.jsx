import React, { useState, useEffect } from 'react'
import { MdFavorite } from 'react-icons/md'
import { IoBagRemove } from 'react-icons/io5'
import { RiAccountCircleFill } from 'react-icons/Ri'

const Headbar = () => {
    return (
        <div className="w-full flex justify-between py-6 text-md uppercase tracking-wide cursor-default">
            <div className="flex justify-around">
                <div className="text-lg font-extrabold hover:text-burntOrange-800 px-4">UT BIZ</div>
            </div>
            <div className="flex justify-around font-semibold tracking-wider">
                <div className="px-4">Home</div>
                <div className="px-4">Tag 1</div>
                <div className="px-4">Tag 2</div>
                <div className="px-4">Tag 3</div>
            </div>
            <div className="flex justify-around">
                <div className="flex items-center px-4 hover:text-red-500"><MdFavorite size={25}/></div>
                <div className="flex items-center px-4 hover:text-indigo-500"><IoBagRemove size={25}/></div>
                <div className="flex items-center px-4 hover:text-gray-500"><RiAccountCircleFill size={27}/></div>
            </div>
        </div>
    )
}

export default Headbar