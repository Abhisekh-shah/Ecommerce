import React, { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
     
      console.log(email, password);
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      console.log("Response:", response);

      if (response.data.success) {
        console.log("inside if");
        setToken(response.data.token);

      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Admin Panel
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email Address</label>
            <input
              className="rounded-md w-full px-4 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              className="rounded-md w-full px-4 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
           
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
