import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/newPictures/Flag_of_the_United_Arab_Emirates.gif";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[60px] 2xl:text-[90px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>IT Support Based In</span>
          <span className="flex items-center gap-2">
            <img
              src={flag}
              alt="flag"
              className="w-[40px] md:w-[110px] 2xl:w-[130px] mt-1 md:mt-2"
            />
            <span>United Arab Emirates</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div
          className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative"
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          Welcome to my React portfolio! I'm <b>Nabeel Aymoonhi</b>, a passionate web developer specializing in crafting dynamic and responsive user interfaces using React.js. 
          My journey in web development is characterized by a deep understanding of <b>HTML5</b>, <b>CSS</b>, and <b>JavaScript (ES6)</b>, 
          complemented by proficiency in popular front-end frameworks such as <b>Bootstrap</b> and <b>Tailwind CSS</b>.
          <br/>
          <br />
          Driven by a commitment to seamless user experiences, I leverage my <b>UI/UX</b> design skills with <b>Figma</b>  to bring creativity to life. In the database landscape, 
          I confidently manage <b>MySQL</b> and <b>MSSQL</b> , ensuring efficient data handling.
          <br />
          <br />
          I prioritize creating clean and semantic code to ensure that my
          websites are not only visually appealing but also accessible to all
          users. I also have experience working with design tools such as
           Canva, and Figma, which enables me to work efficiently with
          design teams to bring their visions to life.
          <br />
          <br />
          I am passionate about staying up-to-date with the latest web
          development trends and technologies, and I am always learning and
          experimenting with new tools and techniques. I am a quick learner and
          can adapt to new technologies and programming languages quickly. In my
          free time, I enjoy contributing to open-source projects, writing
          articles, and experimenting with new technologies.
          <br />
          <br />
          If you're looking for a dedicated and skilled web developer for your
          next project, look no further. I am always open to new opportunities
          and excited to collaborate with you to bring your vision to life.

        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
