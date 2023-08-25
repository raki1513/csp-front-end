import React, { useState } from "react";
import "../App.css";
import svg from '../assets/svg.svg'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import { motion } from "framer-motion";
import BaseHOC from "../layout/BaseHOC";
import { Link, useNavigate} from "react-router-dom";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
const SignupPage = () => {
  const [data,setData] = useState({
    email:'',
    username: '',
    password: '',
    confirmPassword:'',
    gender:'',
    fullname: '',
  })
  const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate()
  const SubmitHandle = (e)=>{
    e.preventDefault();
    
    axios.post("http://localhost:8000/SignUp",data).then(res =>alert(res.data)).catch((err)=>alert(err))
  }
  return (
    <>
    <div className="flex w-auto">
      <div className="flex w-[60rem] z-[100] rounded-sm">
      <img src={svg} alt="" className="bg-[#355E3B]" />
      </div>
      <div className="grid place-content-center h-screen">
        <div className="w-[53rem] grid place-content-center rounded-md">
          <h1 className="font-[poppins] text-center text-2xl mt-12">Signup</h1>
          <div className="h-auto mt-[4vh] mx-[10vh] flex flex-col space-y-6">
            <form className="space-y-6" autoComplete="off">
            <div className="flex space-x-4">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="border-4 w-[50vh]  focus:placeholder:px-4 h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
              />
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Enter Your Username"
                className="border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
              />
            </div>
            <div className="flex space-x-4">
            <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
              />
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm Password"
                className="border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
              />
              </div>
              <div className="flex space-x-6 justify-center">
              <input
                type="text"
                name="fullname"
                onChange={handleChange}
                placeholder="Enter Your Full name"
                className="border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
              />
              <select className="h-[5vh] w-[50vh] bg-[#A8D692] border-4 font-[Montserrat]"
              name="gender"
              onChange={handleChange}>
                <option className="opacity-25">Select your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Trans">Others</option>
              </select>
              </div>
            </form>
            <div className="flex justify-center">
              <motion.button
                className="w-auto h-[5vh] px-[4vh] bg-[#cf845a] rounded-md font-[poppins] shadow-xl "
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  duration: 0.3,
                }}
                onClick={SubmitHandle}
              >
                Create Account
              </motion.button>
            </div>
            <div className="font-[poppins] mt-16 text-center	">
              Already a Member?
              <Link to={"/Login"}>
                <p className="px-20 font-semibold underline hover:text-sky-500/100">
                  Login
                </p>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex">
              <motion.li
                className=" mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <BsFacebook size={35} color="#3b5998" />
              </motion.li>
              <motion.li
                className=" mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <FcGoogle size={35} />
              </motion.li>
              <motion.li
                className=" mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <BsApple size={30} color="grey" />
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BaseHOC(SignupPage);
