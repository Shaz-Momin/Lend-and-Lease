import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MdFavorite } from 'react-icons/md'
import { IoBagRemove } from 'react-icons/io5'
import { RiAccountCircleFill } from 'react-icons/Ri'

const Headbar = ({ setTab }) => {

    let headerStyle = "relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300 mx-4 cursor-pointer py-1";

    return (
        <div className="w-full flex justify-between px-24 text-md uppercase tracking-wide cursor-default bg-logoBg-400">
            <div className="flex justify-around cursor-pointer">
                <Image src="/L3Logo.svg" height={90} width={241} color={"white"} />
            </div>
            <div className="flex justify-around font-semibold tracking-wider items-center">
                <a onClick={() => setTab(0)} className={headerStyle}>Home</a>
                <a onClick={() => setTab(1)} className={headerStyle}>Lend</a>
                <a onClick={() => setTab(2)} className={headerStyle}>Lease</a>

            </div>
            <div className="flex justify-end w-[241px]">
                <div className="flex items-center px-4 hover:text-red-500 cursor-pointer"><MdFavorite size={25}/></div>
                {/*<div className="flex items-center px-4 hover:text-indigo-500 cursor-pointer"><IoBagRemove size={25}/></div>*/}
                <div className="flex items-center px-4 hover:text-gray-500 cursor-pointer"><RiAccountCircleFill size={27}/></div>
            </div>
        </div>
    )
}

export default Headbar