import React, { useState, useEffect } from 'react'
import { BiCloset } from 'react-icons/bi'
import Image from 'next/image'

const HomeTab = () => {
    return (
        <div className="grid grid-cols-1 gap-5 p-5 text-md h-full w-full">
            <div className="grid grid-cols-2 gap-5">
                <div className="px-12 flex flex-col text-center items-center justify-center">
                    <div className="w-full flex justify-center">
                        <div className="p-2 m-3 bg-burntOrange-800 rounded-full text-white">
                            <BiCloset size={30} />
                        </div>
                    </div>
                    <div className="lg:text-5xl md:text-4xl font-bold text-burntOrange-800 tracking-normal leading-normal italic">
                        Changing your closet one lease at a time
                    </div>
                    <div className="p-4 font-semibold italic">
                        <span>&mdash;</span> LONGHORN LEND & LEASE
                    </div>
                </div>
                <div className="relative">
                    <div className="relative p-32 top-20">
                        <Image src="/webShopping.svg" layout={"fill"} color={"white"} />
                    </div>
                </div>
            </div>
            <div className="grid bg-logoBg-400">
                <div>Top 5 Products</div> 
            </div>
        </div>
    )
}

export default HomeTab