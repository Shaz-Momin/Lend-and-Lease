import React, { useState, useEffect } from 'react'
import BuyTab from './BuyTab'
import Headbar from './Headbar'
import HomeTab from './HomeTab'
import SellTab from './SellTab'

const Main = () => {
    // Home, Buy, Sell [0, 1, 2] respectively
    const [tab, setTab] = useState(0)

    useEffect(() => {
        console.log(tab)
    }, [tab])

    return (
        <div className="w-10/12 h-screen">
            <Headbar setTab={setTab} />
            {tab == 0 && <HomeTab />}
            {tab == 1 && <BuyTab />}
            {tab == 2 && <SellTab />}
        </div>
    )
}

export default Main