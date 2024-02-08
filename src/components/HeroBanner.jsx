import { useRef } from "react";
import { motion } from "framer-motion";

import Wrapper from "./Wrapper";
import man from "../assets/man.png";
import externalLinkIcon from "../assets/external-link-icon.png";
import logo2 from "../assets/logo2.svg";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";

const HeroBanner = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div
      id="hero"
      className="w-full h-[100vh] sm:h-[100vh] md:h-[120vh] lg:h-[130vh] 2xl:h-[130vh] relative bg-[#111111] overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <motion.span
        ref={ref}
        animate={{ x, y }}
        className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
      />
      <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
      <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      <Wrapper>
        {/* NAVBAR START */}
        <motion.div
          className="hidden md:flex items-center justify-between mt-[20px] 2xl:mt-[20px] relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="flex items-center gap-[6px]">
            {/* <div className="flex justify-center items-center">
              <img src={logo2} alt="logo" className="w-[100px] p-0 m-0 "  />
            </div> */}
            {/* <div className="flex justify-center items-center flex-col m-0 p-0 gap-0">
              <h1 className="text-2xl">Bro Code</h1>{" "}
              <p className="text-xs mt-0">Shivnandan</p>{" "}
            </div> */}
          </div>
          <ul className="flex 2xl:text-[20px]">
            <li
              className = "cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick   = {() => scrollTo("about")}
            >
              About me
            </li>
            
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("skills")}
            >
              Skills
            </li>
            {/* <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("work")}
            >
              Work
            </li> */}
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("contact")}
            >
              Contact me
            </li>
          </ul>
        </motion.div>
        {/* NAVBAR END */}

        {/* BIG HEADING START */}
        <motion.div
          className="flex justify-center text-center mt-16 mb-10 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        > 
          <h1 className="text-[35px] md:text-[70px] 2xl:text-[120px] leading-[60px] md:leading-[100px]  2xl:leading-[150px] font-oswald uppercase">
            I am a proffesional
            <br className="invisible md:visible" />
            Full Stack Developer
          </h1>
        </motion.div>
        {/* BIG HEADING END */}

        {/* INTRO START */}
        <motion.div
          className="flex flex-col mb-10 text-center md:text-left text-[20px] md:text-[18px] leading-[24px] md:leading-[28px] md:pt-[28px] relative"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className = "font-light mb-3"  >
           Hi, I Am <span className= "font-semibold">Nabeel Aymoonhi</span>
          </div>
          <div className="text-sm max-w-[810px]"  >
          As a <b>Full Stack Developer</b> and Programmer, I specialize in crafting user-centric web applications
          that embody your brand's essence. With a focus on functionality and aesthetics, I aim to deliver
          compelling online experiences tailored to your audience. Let's collaborate to elevate your 
          digital presence with precision and professionalism.
          </div>
        </motion.div>
        {/* INTRO END */}

        {/* NUMBER BLOCK START */}
        <motion.div
          className="hidden md:flex gap-8 relative z-10"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
       
          {/* <div className="flex items-center gap-3 ">
            <div className="text-[80px] font-light">20+</div>
            <div className="leading-[22px]">
              SUCCESSFULLY
              <br />
              COMPLETED
              <br />
              PROJECTS
            </div>
          </div> */}
        
          <div className="flex items-center gap-3">
            <div className="text-[80px] font-light">1+</div>
            <div className="leading-[22px]">
              YEARS OF
              <br />
              EXPERIENCE
            </div>
          </div>
      
        </motion.div>
        {/* NUMBER BLOCK END */}

        {/* PERSON BLOCK START */}
        <motion.div
          className="w-[300px] md:w-[360px] 2xl:w-[475px] absolute bottom-0 left-[50%] -translate-x-1/2"
          initial={{ y: 200, x: "-50%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={man} alt="profile_img" />

          {/* HIRE ME BUTTON START */}
          <div
            className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px] h-[140px] rounded-full
             bg-white/[0.7] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer 
             transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90"
            onClick={() => scrollTo("contact")}
          >
            <img src={externalLinkIcon} alt="" className="w-[15px]"  onClick={() => scrollTo("contact")} />
            <div className="text-black">Contact Me</div>
          </div>
          {/* HIRE ME BUTTON END */}
        </motion.div>
        {/* PERSON BLOCK END */}
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
