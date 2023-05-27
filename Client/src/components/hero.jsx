import React, { useContext } from "react";
import blood from "../asset/blood.svg";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <img src={blood} alt="" className="" />
      </div>
      <div className="flex-col md:flex-col">
        <h1 className="text-4xl font-bold sm:text-xl md:text-3xl lg:text-4xl font-serif hover:text-red-300 transition-colors duration-300 ease-in-out">
          Save Life Donate Blood
        </h1>
        <p className="text-xl pt-5 text-justify mr-8 font-thin ">
          Donate blood to save lives. Your blood donation can save a life and
          help others to live a better life and make a better future for their
          families
        </p>
        <motion.button
          className="mt-5 px-6 py-3  rounded-md  ml-5 hover:opacity-80 transition-colors duration-300"
          style={{
            backgroundColor: theme.button.buttonBgColor,
            color: theme.button.buttonTextColor,
          }}
            initial={{ opacity: 0 , position: "relative", left: "-50px" }}
            animate={{ opacity: 1 , position: "relative", left: "0px" }}
            transition={{ duration: 1 }}
        >
          Get Blood Now
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;