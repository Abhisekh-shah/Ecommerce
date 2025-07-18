import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Add({ token }) {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
   if (response.data.success) {
    toast.success(response.data.message)
    setName("")
    setDescription("")
    setImage1("")
    setImage2("")
    setImage3("")
    setImage4("")
    setPrice("")
    
   }else{
    toast.error(response.data.message)
   }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl"
    >
      <div>
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Upload Product Images
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <label
            className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
            htmlFor="image1"
          >
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt="Upload"
              className="w-10 h-10 mb-2 opacity-60"
            />
            <span className="text-sm text-gray-500">Image 1</span>
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>

          <label
            className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
            htmlFor="image2"
          >
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt="Upload"
              className="w-10 h-10 mb-2 opacity-60"
            />
            <span className="text-sm text-gray-500">Image 2</span>
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>

          <label
            className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
            htmlFor="image3"
          >
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt="Upload"
              className="w-10 h-10 mb-2 opacity-60"
            />
            <span className="text-sm text-gray-500">Image 3</span>
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>

          <label
            className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
            htmlFor="image4"
          >
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt="Upload"
              className="w-10 h-10 mb-2 opacity-60"
            />
            <span className="text-sm text-gray-500">Image 4</span>
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>

        <p className="text-sm text-gray-400 mt-3">
          First image will be used as the thumbnail. Max size: 2MB per image.
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="productName"
        >
          Product Name:
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="productName"
          type="text"
          placeholder="Type here"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="productName"
        >
          Product description:
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          id="productdescription"
          type="text"
          placeholder="Write content here"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Product Category */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="category"
          >
            Product Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="subCategory"
          >
            Sub CateMengory
          </label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
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
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="price"
          >
            Product Price
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
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
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
            className=" border border-gray-300 r text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition"
          >
            <p
              className={`${
                sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"
              } px-4 py-2 text-black`}
            >
              S
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
            className="border border-gray-300  text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition"
          >
            <p
              className={`${
                sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"
              } px-4 py-2 text-black`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
            className="border border-gray-300  text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition"
          >
            <p
              className={`${
                sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"
              } px-4 py-2 text-black`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
            className="border border-gray-300  text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition"
          >
            <p
              className={`${
                sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"
              } px-4 py-2 text-black`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"]
              )
            }
            className="border border-gray-300  text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition"
          >
            <p
              className={`${
                sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"
              } px-4 py-2 text-black`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          id="bestseller"
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestseller}
          className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label
          htmlFor="bestseller"
          className="text-gray-700 font-medium cursor-pointer"
        >
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
  );
}

export default Add;
