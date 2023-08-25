import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import  {useState,useContext,useEffect} from 'react'
import { Token } from '../../App';
import axios from 'axios';
function NavSm(){
  return(
    <>
    <div className='flex items-center w-full bg-[#3E8E16]'>
<img src={Logo} alt="" className='w-24' />
<div className=' w-full flex justify-end mx-4 mb-3'>
<GiHamburgerMenu size={40} color='white'/>
</div>
    </div>
    </>
  );
};

function NavLG() {
  const [token, setToken] = useContext(Token);
  const [data, setData] = useState(null); 
  useEffect(() => {
    axios
      .get("http://localhost:8000/Profile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return(
    <>
  <div className=' contianer rounded-sm flex items-center bg-[#3E8E16] h-[10vh]'>
  <div className='px-5 py-2'>
  <div className="w-full flex">
    <div className='w-1/6'>
      <Link to={'/'}>
      <img src={Logo} alt="Logo" className="mix-blend-multiply w-3/5"/>
      </Link>
    </div>
    <div className='flex items-center mb-7 spcae-x-4'>
      <ul className='flex space-x-[3vh] flex-row font-bold  text-md text-white px-[8vh] font-[Montserrat]'>
      <Link to={'/AboutUs'}>
      <motion.li className='px-16 cursor-default' whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.2 }}
        transition={{
          duration:0.4
        }}
        >About Us</motion.li></Link>
        <motion.li className='px-16 cursor-default' whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.2 }}
        transition={{
          duration:0.4
        }}
        >Gallery</motion.li>
        <Link to={'/ContactUs'}>
        <motion.li className='px-16 cursor-default' whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.2 }}
        transition={{
          duration:0.4
        }}
        >Contact us</motion.li></Link>
      </ul>
  {!token &&
      <div className='flex'>
      <Link to={'/Signup'} >
      <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='px-20 font-semibold text-white underline'>Signup</motion.p>
    </Link>
    <Link to={'/Login'} >
      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='bg-white rounded-md w-24 h-[4vh] font-semibold text-[#3E8E16] hover:text-white hover:bg-[#6EC21A] text-center'>
          Login
      </motion.button>
    </Link>
    </div>
    }
    {data &&
      <div className='flex'>
      <Link to={'/Profile'} >
      <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='px-20 font-semibold text-white underline'>Welcome {data.username}</motion.p>
    </Link>
    </div>
    }
    
    </div>
    </div>
  </div>
</div>
</>
);
}
const Navbarcomponent = () => {
  return (
    <div>
            <div className='flex md:hidden lg:hidden'>
        <NavSm/>
      </div>
      <div className='hidden md:hidden lg:flex'>
        <NavLG/>
      </div>
    </div>
  )
}

export default Navbarcomponent;
