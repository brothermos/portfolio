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
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";

import { SiExpress, SiNextdotjs } from "react-icons/si";

import inskru from "./assets/inskru.png";
import live_exchange from "./assets/live-x.png";
import admin_inskru from "./assets/admin-inskru.png";
import admin_live_exchange from "./assets/admin-live-x.png";

export const navLinks = ["home", "about", "skills", "project", "contact"];

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
  <BiLogoTypescript />,
  <FaVuejs />,
  <FaReact />,
  <BiLogoTailwindCss />,
  <FaNodeJs />,
  <SiExpress />,

  <SiNextdotjs />,
];

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Software Engineer",
    company: "Odd-e Thailand, Jan-PRESENT",
  },
  {
    id: 2,
    year: "2022",
    position: "Junior Frontend Developer (Internship)",
    company: "Dosetech Company, Sep-Nov",
  },
  {
    id: 3,
    year: "2022",
    position: "Learner Software Developer",
    company: "Generation Thailand, May-Aug",
  },
  {
    id: 4,
    year: "2022 2019",
    position: "Seller on Shopee",
    company: "https://shopee.co.th/hugbearshop",
  },
  {
    id: 5,
    year: "2019 2015",
    position: "Human Resource Management",
    company: "Prince of Songkhla University",
  },
];
export const certificates = [
  {
    id: 1,
    year: "June 2022",
    position: "Certified in Learn HTML",
    company: "Codecademy",
  },
  {
    id: 2,
    year: "June 2022",
    position: "Certified in Learn CSS",
    company: "Codecademy",
  },
  {
    id: 3,
    year: "July 2022",
    position: "Certified in Learn JavaScript",
    company: "Codecademy",
  },
  {
    id: 4,
    year: "July 2022",
    position: "Certified in Learn React",
    company: "Codecademy",
  },
  {
    id: 5,
    year: "July 2022",
    position: "Certified in Learn Node.Js",
    company: "Codecademy",
  },
  {
    id: 6,
    year: "July 2022",
    position: "Certified in Learn Express.Js",
    company: "Codecademy",
  },
  {
    id: 7,
    year: "Aug 2022",
    position: "MongoDB Basics",
    company: "MongoDB University",
  },
  {
    id: 8,
    year: "June Aug 2022",
    position: "Ceitified In Junior Software Developer",
    company: "Generation Thailand",
  },
  {
    id: 9,
    year: "Aug 2022",
    position: "React 15 Workshop",
    company: "Udemy",
  },
  {
    id: 10,
    year: "Dec 2022",
    position: "TypeScripts",
    company: "Udemy",
  },
  {
    id: 11,
    year: "Jan 2023",
    position: "Certified in Learn Vue",
    company: "Codecademy",
  },
];
export const finishes = [
  {
    id: 1,
    number: "Experience",
    itemName: "1.5 years",
  },
];
export const workImages = [
  {
    id: 1,
    img: inskru,
    name: "Inskru",
    category: "Frontend",
    github: "https://github.com/brothermos",
    website: "https://new.inskru.com/idea-library/",
  },
  {
    id: 2,
    img: admin_inskru,
    name: "Admin Inskru",
    category: "Frontend",
    github: "https://github.com/brothermos",
    website: "https://admin-new.inskru.com/",
  },
  {
    id: 3,
    img: live_exchange,
    name: "LiVe Exchange",
    category: "Frontend",
    github: "https://github.com/brothermos",
    website: "https://www.live-platforms.com/live-exchange",
  },
  {
    id: 4,
    img: admin_live_exchange,
    name: "Admin LiVe Exchange",
    category: "Frontend",
    github: "https://github.com/brothermos",
    website: "https://www.live-platforms.com/live-exchange",
  },
];

export const workNavs = ["All", "Frontend", "Fullstack"];

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
