import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
function List() {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }

      console.log(response.data);
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (_id) =>{
    try {
      
      const response = await axios.post(backendUrl + "/api/product/remove" , {_id} ,{headers:{token}})
      if (response.data.success) {
        toast.success(response.data.message)
       await fetchList()
      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log("Error:", error);
      toast.error(error.message);
    }
  }


  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="text-xl font-semibold text-gray-800 mb-4">
        All Products List
      </p>

      <div className="w-full overflow-auto rounded-lg shadow border border-gray-200">
        {/* --------List Table Title------- */}
        <div className="min-w-[700px] grid grid-cols-5 bg-gray-100 px-6 py-4 border-b border-gray-300 font-medium text-gray-700 text-sm">
          <b className="text-left">Image</b>
          <b className="text-left">Name</b>
          <b className="text-left">Category</b>
          <b className="text-left">Price</b>
          <b className="text-left">Action</b>
        </div>

        {/* ---------Product List ------- */}
        {list.map((item, index) => (
          <div
            key={index}
            className="min-w-[700px] grid grid-cols-5 items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition text-sm"
          >
            <div className="flex items-center">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-md border border-gray-200"
              />
            </div>

            <p className="text-gray-800 font-medium">{item.name}</p>

            <p className="text-gray-500">{item.category}</p>

            <p className="text-gray-700 font-semibold">
              {currency}
              {item.price}
            </p>

            <p onClick={()=>removeProduct(item._id)} className="text-red-600 font-semibold cursor-pointer hover:underline transition duration-150 ease-in-out">
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
