import React, { useState, useEffect } from 'react'
import { RiDatabase2Fill } from 'react-icons/Ri'

let userInfo = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '123-456-7890',
}

const LendTab = () => {
    let sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    const [name, setName] = useState('')
    const [images, setImages] = useState([])
    const [desc, setDesc] = useState('')
    const [tags, setTags] = useState([])
    const [rentalLength, setRentalLength] = useState(0)
    const [leaseStart, setLeaseStart] = useState('')
    const [leaseEnd, setLeaseEnd] = useState('')
    const [pricePerDay, setPricePerDay] = useState(0)
    const [safetyDeposit, setSafetyDeposit] = useState(0)
    const [size, setSize] = useState('M')

    let listProduct = (e) => {
        e.preventDefault();
        console.log("images: ", images);
        
        // TODO: push data to firestore (database)
        
    }

    return (
        <div className="flex flex-col p-3 text-md sm:px-16 md:px-24 lg:px-48 pb-12 z-0">
            <div className="text-center pt-8">
                <h1 className="text-2xl font-bold tracking-wide">Lend an Item</h1>
            </div>
            <form className="flex flex-col p-5" onSubmit={(e) => listProduct(e)}>
                <div className="w-full py-2.5">
                    <h1 className="text-lg py-2 font-semibold tracking-wide">Photos</h1>
                    <input type="file" onChange={(e) => setImages(e.target.value)} required multiple className="w-full"/>
                </div>
                <div>
                    <h1 className="text-lg py-2 font-semibold tracking-wide">Product Information</h1>
                </div>
                <div className="w-full py-1.5">
                    <label for="title" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Product Title</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} required id="title" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-md tracking-wider border outline-none border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder='Vintage UT Longhorn Jacket'/>
                </div>
                <div className="w-full py-1.5">
                    <label for="description" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Description</label>
                    <textarea id="description" onChange={(e) => setDesc(e.target.value)}  required rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 tracking-wider rounded-md border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Embroidered logo on the front and back..."></textarea>
                </div>
                <div className="w-full py-1.5 flex flex-row">
                    <div className="w-full pr-2">
                        <label for="size" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Size</label>
                        <select id="sizes" required onChange={(e) => setSize(e.target.value)} defaultValue={'M'} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm tracking-wider rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            {sizeOptions.map((size) => {
                                return <option value={size}>{size}</option>
                            })}
                        </select>
                    </div>
                    <div className="w-full pl-2">
                        <label for="tags" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Tags</label>
                        <input type="text" onChange={(e) => setTags((e.target.value).split(' '))}  required id="tags" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-md tracking-wider border outline-none border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder='#new #cooldesign #perfectfit'/>
                    </div>
                </div>
                <div className="w-full py-1.5">
                    <label for="rentalLength" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Length of Rental (days)</label>
                    <input type="number" onChange={(e) => setRentalLength(e.target.value)}  required id="rentalLength" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-md tracking-wider border outline-none border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder='6'/>
                </div>
                <div className="w-full py-1.5 flex flex-row">
                    <div className="w-full pr-2">
                        <label for="leaseStart" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Lease Start</label>
                        <input type="date" onChange={(e) => setLeaseStart(e.target.value)} required id="leaseStart" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-md tracking-wider border outline-none border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder='6'/>
                    </div>
                    <div className="w-full pl-2">
                        <label for="leaseEnd" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Lease End</label>
                        <input type="date" onChange={(e) => setLeaseEnd(e.target.value)} required id="leaseEnd" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-md tracking-wider border outline-none border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder='6'/>
                    </div>
                </div>

                <div>
                    <h1 className="text-lg pt-4 py-1 font-semibold tracking-wide">Pricing</h1>
                </div>
                <div className="w-full py-1.5 flex flex-row">
                    <div className="w-full pr-2">
                        <label for="pricePerDay" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Lease price per day</label>
                        <div className="flex">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">$</span>
                            <input type="number" onChange={(e) => setPricePerDay(e.target.value)}  step={0.01} required id="pricePerDay" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-r-md tracking-wider border outline-none border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder='8.50'/>
                        </div>
                    </div>
                    <div className="w-full pl-2">
                        <label for="safetyDeposit" class="block mb-2 text-sm font-medium tracking-wider text-gray-900">Safety Deposit</label>
                        <div className="flex">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">$</span>
                            <input type="number" onChange={(e) => setSafetyDeposit(e.target.value)}  step={0.01} required id="safetyDeposit" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-r-md tracking-wider border outline-none border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder='75.00'/>
                        </div>
                    </div>     
                </div>
                <div className="py-14 w-full ">
                    <button type="submit" class="text-white w-full bg-slate-500 hover:bg-slate-700 hover:text-white focus:ring-blue-300 font-semibold tracking-wider outline-none rounded-lg text-sm px-5 py-2.5 mr-2 mb-4">List</button>
                    <button type="reset" class="text-slate w-full bg-slate-300 hover:bg-red-800 hover:text-white focus:ring-blue-300 font-semibold tracking-wider outline-none rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Reset</button>
                </div>
            </form>
        </div>
    )
}

export default LendTab