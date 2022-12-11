import {
   FaHtml5,
   FaCss3Alt,
   FaNodeJs,
   FaReact,
   FaPhoneAlt,
   FaUser,
   FaMapMarkerAlt,
   FaPaperPlane,
   FaInstagram,
   FaLinkedin,
   FaVuejs,
   FaGithub,
   FaFacebook,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss, SiMaterialui } from "react-icons/si";
import portfolio from "./assets/portfolio.jpg";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

// export const socialIcons = [<FaGithub />, <FaInstagram />, <FaLinkedin />, <FaFacebook />];
export const socialIcons = [
   {
      id: 1,
      icon: <FaGithub />,
      social: "https://github.com/maaammos",
   },
   {
      id: 2,
      icon: <FaInstagram />,
      social: "https://www.instagram.com/mossssx/",
   },
   {
      id: 3,
      icon: <FaLinkedin />,
      social: "https://www.linkedin.com/in/natdanai-kanyakoon-3a0526228/",
   },
   {
      id: 4,
      icon: <FaFacebook />,
      social: "https://www.facebook.com/maaammos/",
   },
];

export const bios = [
   {
      id: 1,
      icon: <FaUser />,
      key: "Name",
      value: "Natdanai",
   },
   {
      id: 2,
      icon: <FaPhoneAlt />,
      key: "Phone",
      value: "+66836536262",
   },
   {
      id: 3,
      icon: <FaPaperPlane />,
      key: "Email",
      value: "moss10612@gmail.com",
   },
];

export const icons = [
   <FaHtml5 />,
   <FaCss3Alt />,
   <DiJavascript1 />,
   <FaVuejs />,
   <FaReact />,
   <FaNodeJs />,
   <SiTailwindcss />,
   <SiMaterialui />,
];

export const experiences = [
   {
      id: 1,
      year: "2022",
      position: "Junior Frontend Developer",
      company: "Dosetech Company, Sep-Nov",
   },
   {
      di: 2,
      year: "2022",
      position: "Learner Software Developer",
      company: "Generation Thailand, May-Aug",
   },
   {
      id: 3,
      year: "2015-2019",
      position: "Human Resource Management",
      company: "Prince of Songkhla University",
   },
];
export const finishes = [
   {
      id: 1,
      number: "3 months",
      itemName: "Experience",
   },
   {
      id: 2,
      number: "10+",
      itemName: "Completed Project",
   },
];
export const workImages = [
   {
      id: 1,
      img: work1,
      name: "project 1",
      category: "web",
      github: "https://github.com/maaammos",
      website: "https://natdanai-averyandco.vercel.app/",
   },
   {
      id: 2,
      img: work2,
      name: "project 2",
      category: "web",
      github: "https://github.com/maaammos",
      website: "https://natdanai-averyandco.vercel.app/",
   },
   {
      id: 3,
      img: work3,
      name: "project 3",
      category: "web",
      github: "https://github.com/maaammos",
      website: "https://natdanai-averyandco.vercel.app/",
   },
   {
      id: 4,
      img: work4,
      name: "project 4",
      category: "web",
      github: "https://github.com/maaammos",
      website: "https://natdanai-averyandco.vercel.app/",
   },
   {
      id: 5,
      img: work5,
      name: "project 5",
      category: "web",
      github: "https://github.com/maaammos",
   },
   {
      id: 6,
      img: work6,
      name: "project 6",
      category: "web",
      github: "https://github.com/maaammos",
      website: "https://natdanai-averyandco.vercel.app/",
   },
   {
      id: 7,
      img: work6,
      name: "project 6",
      category: "web",
      github: "https://github.com/maaammos",
      website: "https://natdanai-averyandco.vercel.app/",
   },
   {
      id: 8,
      img: work6,
      name: "project 6",
      category: "web",
      github: "https://github.com/maaammos",
      website: "https://natdanai-averyandco.vercel.app/",
   },
   {
      id: 9,
      img: work6,
      name: "project 6",
      category: "web",
      github: "https://github.com/maaammos",
      website: "https://natdanai-averyandco.vercel.app/",
   },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
   {
      id: 1,
      icon: <FaMapMarkerAlt />,
      infoText: "Bangkok, Thailand",
   },
   {
      id: 2,
      icon: <FaPaperPlane />,
      infoText: "moss10612@gmail.com",
   },
   {
      id: 3,
      icon: <FaPhoneAlt />,
      infoText: "+66-83653-6262",
   },
];
