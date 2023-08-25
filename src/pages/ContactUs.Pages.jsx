import React, { useState } from "react";
import LogoNec from "../assets/logo-nec1.webp";
import BaseHOC from "../layout/BaseHOC";
import Rakesh from "../assets/rakesh .jpeg";
import Jashwanth from "../assets/jashwanth.jpg";
import Ujera from "../assets/ujera.jpeg";
import Teja from "../assets/Teja.jpg";
import Chandana from "../assets/chandana.jpg";
import Dinesh from "../assets/Dinesh.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const ContactUsPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    {
      id: 1,
      name: "K. Jashwanth Raj",
      path: Jashwanth,
      Rollno: "21471A4331",
      Twitter: "https://twitter.com/jashwanthraj99",
      Instagram: "https://www.instagram.com/jashu_1903/",
      Github: "https://github.com/jashu2002",
      LinkedIn: "https://www.linkedin.com/in/jashwanth-raj-4400b4263/",
      Department: "Department of Artificial Intelligence",
      Role: "UI",
    },
    {
      id: 2,
      name: "G. Mani Chandana",
      path: Chandana,
      Rollno: "21471A4318",
      Twitter: "https://twitter.com/Chandana1512",
      Github: "https://github.com/ManiChandana1215",
      Instagram:"https://instagram.com/mani_chandana_1512?igshid=ZGUzMzM3NWJiOQ==",
      LinkedIn: "https://www.linkedin.com/in/mani-chandana-2a272a219",
      Department: "Department of Artificial Intelligence",
      Role: "Backend and Database",
    },
    {
      id: 3,
      name: "Sd. Ujera Siheb ",
      path: Ujera,
      Rollno: "21471A4358",
      Instagram:
        "https://www.instagram.com/ujera_siheb_0903/?igshid=MzNlNGNkZWQ4Mg%3D%3D",
      Twitter: "https://twitter.com/ujerasiheb?t=fa-kcQ-0UcMqg_ahkqzKVw&s=08",
      Github: "https://github.com/UjeraSiheb",
      LinkedIn: "https://www.linkedin.com/in/ujera-siheb-5053ab26a/",
      Department: "Department of Artificial Intelligence",
      Role: "Backend and Database",
    },
    {
      id: 4,
      name: "Y. Teja",
      path: Teja,
      Rollno: "21471A4365",
      Instagram:
        "https://www.instagram.com/tejayakkala87/?igshid=ZDc4ODBmNjlmNQ%3D%3D",
      Github: "https://github.com/TejaYakkala65",
      Twitter:
        "https://twitter.com/Teja04873922937?t=yr73WppLWXyaf0DWURbfrg&s=09",
      LinkedIn: "https://www.linkedin.com/in/tej-teja-a8307421b",
      Department: "Department of Artificial Intelligence",
      Role: "External Affairs and Database",
    },
    {
      id: 5,
      name: "K. Dinesh Babu",
      path: Dinesh,
      Rollno: "21471A4328",
      Instagram:
        "https://www.instagram.com/k.dinesh1129/?igshid=ZDc4ODBmNjlmNQ%3D%3D",
      Github: "https://github.com/dinesh181028",
      Twitter:
        "https://twitter.com/DineshB37512758?t=mxCJTc_wM6Hlh3KbY6SYHQ&s=08",
      LinkedIn: "https://www.linkedin.com/in/dinesh-babu-901643233",
      Department: "Department of Artificial Intelligence",
      Role: "External affairs",
    },
    {
      id: 6,
      name: "G. Rakesh Ratnam",
      path: Rakesh,
      Rollno: "21471A4349",
      Instagram: "https://www.instagram.com/_.rakeshhhh._/",
      Twitter: "https://twitter.com/rakeshhhh21",
      Github: "https://www.linkedin.com/in/rakeesshhhh/",
      LinkedIn: "https://www.linkedin.com/in/rakeesshhhh/",
      Department: "Department of Artificial Intelligence",
      Role: "Front-end and UI/UX Designing",
    },
  ];
  function AboutSm(){
    return(
      <>
            <div className='flex h-[12vh] place-self-center justify-center mt-[5vh]'>
      <img src={LogoNec} alt="NEC LOGO" />
      </div>
      <h1 className="text-center text-2xl font-bold font-[Montserrat] mt-[5vh]">Meet Our team </h1>
     <motion.div className="flex items-center justify-center h-auto">
        <motion.div className="grid grid-cols-3 gap-5 text-center ">
          {items.map((item) => (
            <motion.div
              className={`card bg-white hover:bg-green-500/100 hover:duration-300 rounded-lg  shadow-md cursor-pointer ease-out transition-transform duration-400 ${
                selectedId === item.id ? 'card-selected' : ''
              }`}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              initial={{ scale: 0}}
              animate={{ scale: selectedId === item.id ? 0 : 1}}
              transition={{ duration: 0.2 }} whileTap={{ scale: 0.2 }}
              
            >
              <motion.div className="flex flex-col items-center justify-center">
                <img src={item.path} alt=""  className="w-[45vh] h-64 flex my-3"/>
                <motion.h2 className="text-2xl font-[Montserrat] font-bold mb-2 text-purple-600">Name : {item.name}</motion.h2>
                <motion.h5 className="text-sm font-[Montserrat] font-bold mb-1 text-gray-700">Role : {item.Role}</motion.h5>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
  
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className=" w-auto fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0.2 }}
            >
              {items.map((item) => (
                item.id === selectedId && (
                  <motion.div
                    className="bg-white w-auto rounded-lg p-4 shadow-md  mx-auto"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 2, opacity: 1}}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className="relative flex">
                      <div>
                    <img src={item.path} alt=""  className="w-[45vh] h-64 rounded-md"/>
                      <motion.button
                        className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                        onClick={() => setSelectedId('')}
                      >
                        Close
                      </motion.button>
                      </div>
                      <div className="flex flex-col py-3 mx-4 justify-center">
                      <motion.h1 className="text-xl font-bold mb-2 font-[Montserrat]">Name : {item.name}</motion.h1>
                      <motion.h1 className=" font-bold mb-1 font-[Montserrat] text-gray-700">Role : {item.Role}</motion.h1>
                      <motion.h1 className=" text-gray-700 font-[Montserrat]">Roll.No : {item.Rollno}</motion.h1>
                      <motion.h1 className=" text-gray-700 font-[Montserrat] mb-4">Department : {item.Department}</motion.h1>
                      </div>
                    </motion.div>
                    <div className='flex mt-3 space-x-[15vh] items-center justify-center'>
                  <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href={item.LinkedIn}><BsLinkedin color='#0A66C2' size={35}/></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href={item.Github}><BsGithub size={35}/></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href={item.Instagram}><BsInstagram color='#d62976' size={35}/></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href={item.Twitter}><BsTwitter color='#26a7de' size={35}/></motion.a>
                </div>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </>
    )
  }
  function AboutLG (){
    return(
      <>
      <div className='flex h-[12vh] place-self-center justify-center mt-[5vh]'>
      <img src={LogoNec} alt="NEC LOGO" />
      </div>
      <h1 className="text-center text-2xl font-bold font-[Montserrat] mt-[5vh]">Meet Our team </h1>
     <motion.div className="flex items-center  justify-center h-auto pb-8">
        <motion.div className="grid grid-cols-3 gap-5 w-[150vh] text-center ">
          {items.map((item) => (
            <motion.div
              className={`card bg-green-400/100  hover:bg-white transition duration-0 hover:duration-0 rounded-lg  shadow-xl cursor-pointer ease-out transition-transform duration-400 ${
                selectedId === item.id ? 'card-selected' : ''
              }`}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              initial={{ scale: 0}}
              animate={{ scale: selectedId === item.id ? 0 : 1}}
              transition={{ duration: 0.2 }}>
              <motion.div className="flex flex-col items-center justify-center">
                <img src={item.path} alt=""  className="w-[45vh] h-64 flex my-3 rounded-md shadow-lg"/>
                <motion.h2 className="text-2xl font-[Montserrat] font-bold mb-2 text-purple-600">Name : {item.name}</motion.h2>
                <motion.h5 className="text-sm font-[Montserrat] font-bold mb-1 text-gray-700">Role : {item.Role}</motion.h5>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
  
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className=" w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {items.map((item) => (
                item.id === selectedId && (
                  <motion.div
                    className="bg-white w-auto rounded-lg p-4 shadow-md  mx-auto"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className="relative flex">
                      <div>
                    <img src={item.path} alt=""  className="w-[45vh] h-64 rounded-md shadow-lg"/>
                      <motion.button
                        className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                        onClick={() => setSelectedId('')}
                      >
                        Close
                      </motion.button>
                      </div>
                      <div className="flex flex-col py-3 mx-4 justify-center">
                      <motion.h1 className="text-xl font-bold mb-2 font-[Montserrat]">Name : {item.name}</motion.h1>
                      <motion.h1 className=" font-bold mb-1 font-[Montserrat] text-gray-700">Role : {item.Role}</motion.h1>
                      <motion.h1 className=" text-gray-700 font-[Montserrat]">Roll.No : {item.Rollno}</motion.h1>
                      <motion.h1 className=" text-gray-700 font-[Montserrat] mb-4">Department : {item.Department}</motion.h1>
                      </div>
                    </motion.div>
                    <div className='flex mt-3 space-x-[15vh] items-center justify-center'>
                  <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href={item.LinkedIn}><BsLinkedin color='#0A66C2' size={35}/></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href={item.Github}><BsGithub size={35}/></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href={item.Instagram}><BsInstagram color='#d62976' size={35}/></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href={item.Twitter}><BsTwitter color='#26a7de' size={35}/></motion.a>
                </div>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </>
    )
  }
  return (
    <>
    <div>
      <div className="flex flex-col md:hidden lg:hidden">
<AboutSm/>
      </div>
      <div className='hidden md:hidden lg:grid'>
<AboutLG />
      </div>
    </div>
    </>
  );
};

export default BaseHOC(ContactUsPage);
