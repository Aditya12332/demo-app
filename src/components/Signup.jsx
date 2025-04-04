import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Signup = () => {
   const [formData, setFormData] = useState({
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      company: "",
      isAgency: "no",
   });
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(formData));
      alert("Signup successful!");
      navigate("/login");
   };

   return (
      <div className="flex flex-col items-center justify-end min-h-screen px-6 text-center bg-white">
         <div className="flex flex-col w-full max-w-md min-h-screen p-6 bg-[#fbfbfb] rounded-lg shadow-md">
            <h1 className="mb-5 text-3xl font-bold text-left font-rubik text-rubik-28 font-medium text-textColor capitalize">Create your your PopX account</h1>
            <form onSubmit={handleSubmit} className="space-y-6 font-rubik text-rubik-13 font-regular">
               {[
                  { label: "Full Name", name: "fullName", type: "text" },
                  { label: "Phone Number", name: "phoneNumber", type: "tel" },
                  { label: "Email Address", name: "email", type: "email" },
                  { label: "Password", name: "password", type: "password" },
                  { label: "Company Name", name: "company", type: "text" },
               ].map(({ label, name, type }) => (
                  <div key={name} className="relative">
                     <label className="absolute px-1 text-sm text-purple-600 bg-[#fbfbfb] top-[-10px] left-2">
                        {label}
                     </label>
                     <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        required
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-black rounded-lg focus:outline-none focus:ring-0 focus:border-purple-600"
                     />
                  </div>
               ))}

               <p className="text-start font-rubik text-rubik-13 font-regular">Are you in an Agency?</p>
               <div className="flex items-center space-x-4 font-rubik text-rubik-14 font-regular">
                  {["yes", "no"].map((value) => (
                     <label key={value} className="flex items-center space-x-2">
                        <input
                           type="radio"
                           name="isAgency"
                           value={value}
                           checked={formData.isAgency === value}
                           onChange={handleChange}
                           className="text-blue-500"
                        />
                        <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                     </label>
                  ))}
               </div>

               <div className="mt-20 mb-4">
                  <button
                     type="submit"
                     className="w-full py-3 font-semibold text-white transition bg-purple-600 rounded-md hover:bg-purple-700 "
                  >
                    <p className="font-rubik text-rubik-16 font-regular "> Create Account</p> 
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Signup;
