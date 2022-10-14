import React, { useState, useEffect } from 'react'
import LeaseTab from './LeaseTab'
import Headbar from './Headbar'
import HomeTab from './HomeTab'
import LendTab from './LendTab'

const Main = () => {
    // Home, Lend, Lease [0, 1, 2] respectively
    const [tab, setTab] = useState(0)

    useEffect(() => {
        console.log(tab)
    }, [tab])

    return (
        <div className="w-10/12 h-screen">
            <Headbar setTab={setTab} />
            {tab == 0 && <HomeTab />}
            {tab == 1 && <LendTab />}
            {tab == 2 && <LeaseTab />}
        </div>
    )
}

export default Main