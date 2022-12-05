import React from 'react'
import { BiCloset } from 'react-icons/bi'
import { SiConvertio } from 'react-icons/si'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { RiSpam2Fill } from 'react-icons/ri'
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
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-16 content-center justify-center">
                <div className="bg-logoBg-400 rounded-[1.5rem] p-9">
                    <div className='flex justify-between mb-4'>
                        <div className="text-xl font-semibold tracking-wide m-auto ml-0">Convenience</div>
                        <SiConvertio size={35} color={"#cc5500"}/>
                    </div>
                    <div className="text-md text-gray-500">Lend and Lease from fellow UT students without shipping and waiting hassles.</div>
                </div> 
                <div className="bg-logoBg-400 rounded-[1.5rem] p-10">
                <div className='flex justify-between mb-4'>
                        <div className="text-xl font-semibold tracking-wide m-auto ml-0">Affordability</div>
                        <RiMoneyDollarCircleFill size={40} color={"#cc5500"}/>
                    </div>
                     <div className="text-md text-gray-500">Find campus neccesities and other items below retail prices.</div>
                </div> 
                <div className="bg-logoBg-400 rounded-[1.5rem] p-10">
                    <div className='flex justify-between mb-4'>
                        <div className="text-xl font-semibold tracking-wide m-auto ml-0">Fraud Prevention</div>
                        <RiSpam2Fill size={40} color={"#cc5500"}/>
                    </div>
                    <div className="text-md text-gray-500">Every user is authenticated through their UT email, ensuring a safe transaction.</div>
                </div> 
                
            </div>
        </div>
    )
}

export default HomeTab