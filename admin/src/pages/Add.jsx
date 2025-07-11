import React, { useState } from 'react'
import { assets } from '../assets/assets'

function Add() {
  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)



  return (
    <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl">
  <div>
    <p className="text-xl font-semibold text-gray-800 mb-4">Upload Product Images</p>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition" htmlFor="image1">
        <img src={assets.upload_area} alt="Upload" className="w-10 h-10 mb-2 opacity-60" />
        <span className="text-sm text-gray-500">Image 1</span>
        <input type="file" id="image1" hidden />
      </label>

      <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition" htmlFor="image2">
        <img src={assets.upload_area} alt="Upload" className="w-10 h-10 mb-2 opacity-60" />
        <span className="text-sm text-gray-500">Image 2</span>
        <input type="file" id="image2" hidden />
      </label>

      <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition" htmlFor="image3">
        <img src={assets.upload_area} alt="Upload" className="w-10 h-10 mb-2 opacity-60" />
        <span className="text-sm text-gray-500">Image 3</span>
        <input type="file" id="image3" hidden />
      </label>

      <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition" htmlFor="image4">
        <img src={assets.upload_area} alt="Upload" className="w-10 h-10 mb-2 opacity-60" />
        <span className="text-sm text-gray-500">Image 4</span>
        <input type="file" id="image4" hidden />
      </label>
    </div>

    <p className="text-sm text-gray-400 mt-3">First image will be used as the thumbnail. Max size: 2MB per image.</p>
  </div>
  <div className="mb-6">
  <label className="block text-gray-700 font-medium mb-2" htmlFor="productName">
    Product Name:
  </label>
  <input
    id="productName"
    type="text"
    placeholder="Type here"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
  />
</div>
<div className="mb-6">
  <label className="block text-gray-700 font-medium mb-2" htmlFor="productName">
    Product description:
  </label>
  <input
    id="productName"
    type="text"
    placeholder="Write content here"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
  />
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
  {/* Product Category */}
  <div>
    <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
      Product Category
    </label>
    <select
      id="category"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
    >
      <option value="Men">Men</option>
      <option value="Women">Women</option>
      <option value="Kids">Kids</option>
    </select>
  </div>

  {/* Sub Category */}
  <div>
    <label className="block text-gray-700 font-medium mb-2" htmlFor="subCategory">
      Sub Category
    </label>
    <select
      id="subCategory"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
    >
      <option value="Topwear">Topwear</option>
      <option value="Bottomwear">Bottomwear</option>
      <option value="Winterwear">Winterwear</option>
    </select>
  </div>

  {/* Product Price */}
  <div>
    <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
      Product Price
    </label>
    <input
      id="price"
      type="number"
      placeholder="25"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
    />
  </div>
</div>

<div className="mb-6">
  <p className="text-gray-700 font-medium mb-2">Product Sizes</p>
  <div className="flex flex-wrap gap-3">
    <div className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition">
      <p>S</p>
    </div>
    <div className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition">
      <p>M</p>
    </div>
    <div className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition">
      <p>L</p>
    </div>
    <div className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition">
      <p>XL</p>
    </div>
    <div className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition">
      <p>XXL</p>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 mb-4">
  <input
    type="checkbox"
    id="bestseller"
    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
  />
  <label htmlFor="bestseller" className="text-gray-700 font-medium cursor-pointer">
    Add to bestseller
  </label>
</div>
<button
  type="submit"
  className="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
>
  ADD
</button>

</form>

  )
}

export default Add
