import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/portfolio.jpg";
import resume from '../../../assets/resume.pdf'
const About = () => {
   return (
      <div className="container " id="about">
         <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} className="title">
            <span>Who Am I?</span>
            <h1>About Me</h1>
         </motion.div>

         <div className="about_container">
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [-250, 0], opacity: 1 }}
               transition={{ duration: 1 }}
               className="about_left"
            >
               <motion.img src={portfolio} whileHover={{ y: -12, x: -12 }} transition={{ duration: 0.3 }} />
            </motion.div>
            <motion.div
               className="about_right"
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [250, 0], opacity: 1 }}
               transition={{ duration: 1 }}
            >
               <h2>Software Developer</h2>
               <p>
                  A simple person who want to push through to the limit " I will never do that " with fixed mindset that
                  I was not engineering student. After realize, my background degree is not fit with my interest at all
                  I want to try something new that I have never learned before. Then coding is an answer which can
                  improve this world to not stop orbit. Finally, I found it and i will dedicate for it.
               </p>
               {bios.map((bio) => {
                  return (
                     <div className="bio" key={bio.id}>
                        <span className="bioKey">
                           {bio.icon}
                           {bio.key}
                        </span>
                        <span className="bioValue">{bio.value}</span>
                     </div>
                  );
               })}
               <motion.a href={resume} download="" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  Download Resume
               </motion.a>
            </motion.div>
         </div>
      </div>
   );
};

export default About;
