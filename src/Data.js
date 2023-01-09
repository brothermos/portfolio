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
import { SiTailwindcss, SiMaterialui, SiTypescript } from "react-icons/si";
// import portfolio from './assets/portfolio.jpg';
import work1 from "./assets/nike.png";
import work2 from "./assets/vue-mevn.jpg";
import work3 from "./assets/booking.jpg";
import work4 from "./assets/socialmedia1.png";
import work5 from "./assets/searchfilter.jpg";
import work6 from "./assets/cart.jpg";
import work7 from "./assets/jamming.jpg";
import work8 from "./assets/quiz.jpg";
import work9 from "./assets/calculator.jpg";
import work10 from "./assets/pagination.jpg";
import work11 from "./assets/avery.jpg";
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
        year: "2019-2022",
        position: "Seller on Shopee",
        company: "https://shopee.co.th/hugbearshop",
    },
    {
        id: 4,
        year: "2015-2019",
        position: "Human Resource Management",
        company: "Prince of Songkhla University",
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
        img: work1,
        name: "project 1",
        category: "Fontend",
        github: "https://github.com/maaammos/react-nike-ecommerce",
        website: "https://natdanai-react-ecommerce.vercel.app/",
    },
    {
        id: 2,
        img: work2,
        name: "project 2",
        category: "Backend",
        github: "https://github.com/maaammos/vue-crud-frontend",
        website: "vue-crud-mevnstack.herokuapp.com/",
    },
    {
        id: 3,
        img: work3,
        name: "project 3",
        category: "Fontend",
        github: "https://github.com/maaammos/react-booking-hotel",
        website: "https://natdanai-react-booking-hotel.vercel.app/",
    },
    {
        id: 4,
        img: work4,
        name: "project 7",
        category: "Fontend",
        github: "https://github.com/maaammos/react-socialmedia",
        website: "https://natdanai-react-socialmedia.vercel.app/",
    },
    {
        id: 5,
        img: work5,
        name: "project 5",
        category: "Fontend",
        github: "https://github.com/maaammos/react-search-filter",
        website: "https://natdanai-react-search-filter.vercel.app/",
    },
    {
        id: 6,
        img: work6,
        name: "project 6",
        category: "Fontend",
        github: "https://github.com/maaammos/react-shopping-cart",
        website: "https://natdanai-react-shopping-cart.vercel.app/",
    },
    {
        id: 7,
        img: work7,
        name: "project 1",
        category: "Fontend",
        github: "https://github.com/maaammos/jammming-assessment-mos",
        website: "http://natdanai-mos.surge.sh/",
    },
    {
        id: 8,
        img: work8,
        name: "project 8",
        category: "Fontend",
        github: "https://github.com/maaammos/front-end-exam-2",
        website: "https://front-end-exam-2.vercel.app/",
    },
    {
        id: 9,
        img: work9,
        name: "project 9",
        category: "Fontend",
        github: "https://github.com/maaammos/react-calculator",
        website: "https://natdanai-react-calculator.vercel.app/",
    },
    {
        id: 10,
        img: work10,
        name: "project 10",
        category: "Fontend",
        github: "https://github.com/maaammos/react-pagination",
        website: "https://natdanai-react-pagination.vercel.app/",
    },
    {
        id: 11,
        img: work11,
        name: "project 10",
        category: "Fontend",
        github: "https://github.com/maaammos/averyandco-test",
        website: "https://natdanai-averyandco.vercel.app/",
    },
    {
        id: 12,
        img: work12,
        name: "project 4",
        category: "Fontend",
        github: "https://github.com/maaammos/instagram-clone",
        website: "natdanai-instagram-clone.vercel.app",
    },
];

export const workNavs = ["All", "Fontend", "Backend"];

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
