import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const HomeTab = () => {
    return (
        <div className="grid grid-cols-1 gap-5 p-5 text-md h-full w-full">
            <div className="grid grid-cols-2 gap-5">
                <div className="px-12 flex flex-col text-center items-center justify-center">
                    <div className="text-4xl font-bold text-burntOrange-800 tracking-wide leading-tight">
                        "Cultivated mind is the guardian genius of democracy. What Starts Here, Changes the World"
                    </div>
                    <div className="p-4 font-semibold italic">
                        <span>&mdash;</span> LONGHORN LEND & LEASE
                    </div>
                </div>
                <div className="relative">
                    <div className="relative p-32 top-20">
                        <Image  src="/webShopping.svg" layout={"fill"} color={"white"} />
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