import React, {useState, useContext} from "react";
import { Link,useNavigate} from 'react-router-dom'
import "../App.css";
import axios from "axios";
import BaseHOC from "../layout/BaseHOC";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { Token } from "../App";
function LoginSm  () {
  return(
  <div className="flex items-center justify-center h-screen">
    <div className="bg-[#D9D9D9] w-[60vh] flex flex-col rounded-md">
      <h1 className="font-[poppins] text-center text-2xl mt-12">LOGIN</h1>
      <div className="h-[45vh] mt-[0.2vh]  flex flex-col justify-center">
        <form className="mt-16 flex flex-col space-y-4 justify-center items-center">
          <input
            placeholder="Enter Username or Email"
            className="px-2 text-md border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
            type="text"
            name="username"
            id="username"
          />
          <input
            placeholder="Enter Password"
            className="px-2 text-md border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
            type="password"
            name="password"
            id="password"
          />
          <Link>
            <motion.button
              className="w-auto h-[5vh] px-[4vh] bg-[#cf845a] rounded-md font-[poppins] shadow-xl "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 0.3,
              }}
            >
              Login
            </motion.button>
          </Link>
        </form>
        <h1 className="font-[poppins] mt-12 text-right	">Forgot Password?</h1>
        <div className="font-[poppins] text-center">
          Not a Member
          <p className="px-20 font-semibold">
            <Link
              to={"/Signup"}
              className="hover:text-green-500/100 hover:underline"
            >
              Signin
            </Link>
          </p>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-[0.3vh]" />
      <div className="flex items-center justify-center">
        <ul className="flex">
          <motion.li
            className="mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <BsFacebook size={35} color="#3b5998" />
          </motion.li>
          <motion.li
            className="mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FcGoogle size={35} />
          </motion.li>
          <motion.li
            className="mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <BsApple size={30} color="grey" />
          </motion.li>
        </ul>
      </div>
    </div>
  </div>
  )
};
function LoginLG() {
  const [data,setData] = useState({
    username: '',
    password: '',
  })
  
  const navigate = useNavigate();
  const [token, setToken] = useContext(Token)
  const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const SubmitHandle = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/Login',data).then(
      res => setToken(res.data.token)).catch((err) => alert("Enter Valid Credentials"));

  }
  return(
  <div className="flex items-center justify-center h-screen">
    <div className="bg-[#D9D9D9] w-[75vh]  flex flex-col rounded-md">
      <h1 className="font-[poppins] text-center text-2xl mt-12">LOGIN</h1>
      <div className="h-[45vh] mt-[0.2vh]  flex flex-col justify-center">
        <form className="mt-16 flex flex-col space-y-4 justify-center items-center" autoComplete="off">
          <input
            placeholder="Enter Username or Email"
            className="px-2 text-md border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
            type="text"
            onChange={handleChange}
            name="username"
            id="username"
          />
          <input
            placeholder="Enter Password"
            className="px-2 text-md border-4 w-[50vh] h-[5vh] bg-[#A8D692] placeholder:text-center placeholder:font-[poppins] font-[Montserrat]"
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
          />
          <Link>
            <motion.button
              className="w-auto h-[5vh] px-[4vh] bg-[#cf845a] rounded-md font-[poppins] shadow-xl "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 0.3,
              }}
              onClick={SubmitHandle}
            >
              Login
            </motion.button>
          </Link>
        </form>
        <h1 className="font-[poppins] mt-12 text-right	">Forgot Password?</h1>
        <div className="font-[poppins] text-center">
          Not a Member
          <p className="px-20 font-semibold">
            <Link
              to={"/Signup"}
              className="hover:text-green-500/100 hover:underline"
            >
              Signin
            </Link>
          </p>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-[0.3vh]" />
      <div className="flex items-center justify-center">
        <ul className="flex">
          <motion.li
            className="mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            id="facebook-login"
          >
            <BsFacebook size={35} color="#3b5998" />
          </motion.li>
          <motion.li
            className="mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FcGoogle size={35} />
          </motion.li>
          <motion.li
            className="mr-6 mt-5 mb-6 rounded-full bg-white h-[6vh] shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <BsApple size={30} color="grey" />
          </motion.li>
        </ul>
      </div>
    </div>
  </div>
  )
};
const LoginPage = () => {
  return (
    <div>
      <div className="flex md:hidden lg:hidden justify-center">
        <LoginSm/>
      </div>
      <div className="hidden md:hidden lg:flex justify-center">
        <LoginLG/>
      </div>
    </div>
  );
};

export default BaseHOC(LoginPage);
