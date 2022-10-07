import React, { useState, useEffect } from 'react'

const HomeTab = () => {
    return (
        <div className="grid grid-cols-1 gap-5 p-5 text-md h-5/6">
            <div className="grid grid-cols-2 gap-5">
                <div className="bg-slate-400">Quote</div>
                <div className="bg-slate-400">#1 Selling product</div>
            </div>
            <div className="grid bg-slate-400">
               <div>Top 5 Products</div> 
            </div>
        </div>
    )
}

export default HomeTab