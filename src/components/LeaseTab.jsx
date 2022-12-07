import React, { useState, useEffect } from 'react'
import { getDocs } from "firebase/firestore";
import { marketRef } from '../firebase.js'
import Card from './Card';

const LeaseTab = () => {
    const [products, setProducts] = useState([]);

    // HOW TO PULL DATA FROM FIREBASE:
    // Collection data
    useEffect(() => {

      getDocs(marketRef)
      .then((snapshot) => {
        let items = []
        snapshot.docs.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id})
        })
        setProducts(items)
        //console.log(products);
      })
      .catch(err => {
        console.log(err.message)
      })
      , []}, [])
  
    return (
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Products</h1>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">Products</h2>
              {/* price per day, rental */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                    <li>
                      <a href="#">Clothes</a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-300">Backpacks</a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-300">Furniture</a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-300">Textbooks</a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-300">Accessories</a>
                    </li>
                  </ul>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                        <span className="font-medium text-gray-900">Color</span>
                        {/* <span className="ml-6 flex items-center">
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                          </svg>
                        </span> */}
                      </button>
                    </h3>
                    <div className="pt-6" id="filter-section-0">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">White</label>
                        </div>

                        <div className="flex items-center">
                          <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Beige</label>
                        </div>

                        <div className="flex items-center">
                          <input id="filter-color-2" name="color[]" value="blue" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">Blue</label>
                        </div>

                        <div className="flex items-center">
                          <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600">Brown</label>
                        </div>

                        <div className="flex items-center">
                          <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-color-4" className="ml-3 text-sm text-gray-600">Green</label>
                        </div>

                        <div className="flex items-center">
                          <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-color-5" className="ml-3 text-sm text-gray-600">Purple</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                        <span className="font-medium text-gray-900">Size</span>
                      {/*  <span className="ml-6 flex items-center">
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                          </svg>
                        </span> */}
                      </button>
                    </h3>
                    <div className="pt-6" id="filter-section-2">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">S</label>
                        </div>

                        <div className="flex items-center">
                          <input id="filter-size-1" name="size[]" defaultChecked value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">M</label>
                        </div>

                        <div className="flex items-center">
                          <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">L</label>
                        </div>

                        <div className="flex items-center">
                          <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">XL</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="lg:col-span-3">
                  {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full"> */}
                  <div className= "container mx-auto sm:px-4 grid-cols-4 grid-rows-2 p-6 items-center">
                    <div className= "flex flex-wrap ">
                      {products && products.map((product) => {
                        return (
                        <div className="lg:w-1/3 pr-4 pl-4 mb-12" key={product.name}> 
                          <Card data={product}></Card>
                        </div>)})}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
}

export default LeaseTab