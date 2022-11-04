import React, { useState, useEffect } from 'react'

const HomeTab = () => {
    return (
        <div className="grid grid-cols-1 gap-5 p-5 text-md h-full w-full">
            <div className="grid grid-cols-2 gap-5">
                <div className="bg-logoBg-400">Quote</div>
                <div className="bg-logoBg-400">#1 Lending product</div>
            </div>
            <div className="grid bg-logoBg-400">
                <div>Top 5 Products</div> 
            </div>
        </div>
    )
}

export default HomeTab