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
import {
    SiTailwindcss,
    SiMaterialui,
    SiTypescript,
    SiExpress,
    SiMongodb,
    SiMysql,
} from "react-icons/si";
// import portfolio from './assets/portfolio.jpg';
import work1 from "./assets/nike.png";
import work2 from "./assets/vue-mevn.jpg";
import work3 from "./assets/booking.jpg";
import work4 from "./assets/socialmedia1.png";
import work5 from "./assets/searchfilter.jpg";
import work6 from "./assets/mern.jpg";
import work7 from "./assets/jamming.jpg";
import work8 from "./assets/quiz.jpg";
import work9 from "./assets/calculator.jpg";
import work10 from "./assets/ai.jpg";
import work11 from "./assets/work11.jpg";
import work12 from "./assets/instagram.jpg";

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
    <SiTypescript />,
    <FaVuejs />,
    <FaReact />,
    <SiTailwindcss />,
    <SiMaterialui />,
    <FaNodeJs />,
    <SiExpress />,
    <SiMongodb />,
    <SiMysql />,
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
        number: "New Entry",
        itemName: "No Experience",
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
        img: work6,
        name: "project 6",
        category: "Fullstack",
        github: "https://github.com/maaammos/fitplus-project-frontend",
        website: "https://fitplus-project.vercel.app/",
    },
    {
        id: 2,
        img: work2,
        name: "project 2",
        category: "Fullstack",
        github: "https://github.com/maaammos/vue-crud-frontend",
        website: "https://vue-crud-mevnstack.herokuapp.com/",
    },
    {
        id: 3,
        img: work11,
        name: "project 11",
        category: "Fullstack",
        github: "https://github.com/maaammos/vue-frontend-test",
        website: "https://vue-crud-mysql.vercel.app/user",
    },
    {
        id: 4,
        img: work3,
        name: "project 3",
        category: "Frontend",
        github: "https://github.com/maaammos/react-booking-hotel",
        website: "https://natdanai-react-booking-hotel.vercel.app/",
    },
    {
        id: 5,
        img: work4,
        name: "project 4",
        category: "Frontend",
        github: "https://github.com/maaammos/react-socialmedia",
        website: "https://natdanai-react-socialmedia.vercel.app/",
    },
    {
        id: 6,
        img: work5,
        name: "project 5",
        category: "Frontend",
        github: "https://github.com/maaammos/react-redux-movie-api",
        website: "https://react-redux-movie-api.vercel.app/",
    },
    {
        id: 7,
        img: work1,
        name: "project 1",
        category: "Frontend",
        github: "https://github.com/maaammos/react-nike-ecommerce",
        website: "https://natdanai-react-ecommerce.vercel.app/",
    },
    {
        id: 8,
        img: work7,
        name: "project 7",
        category: "Frontend",
        github: "https://github.com/maaammos/jammming-assessment-mos",
        website: "http://natdanai-mos.surge.sh/",
    },
    {
        id: 9,
        img: work8,
        name: "project 8",
        category: "Frontend",
        github: "https://github.com/maaammos/front-end-exam-2",
        website: "https://front-end-exam-2.vercel.app/",
    },
    {
        id: 10,
        img: work9,
        name: "project 9",
        category: "Frontend",
        github: "https://github.com/maaammos/react-calculator",
        website: "https://natdanai-react-calculator.vercel.app/",
    },
    {
        id: 11,
        img: work10,
        name: "project 10",
        category: "Fullstack",
        github: "https://github.com/maaammos/mern-ai-image-generate",
        website: "https://mern-ai-image-generate.vercel.app/",
    },
    {
        id: 12,
        img: work12,
        name: "project 12",
        category: "Frontend",
        github: "https://github.com/maaammos/instagram-clone",
        website: "https://natdanai-instagram-clone.vercel.app",
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
