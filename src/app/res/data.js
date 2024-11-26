import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaNodeJs, } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import {
    SiAsana,
    SiGmail,
    SiMongodb,
    SiExpo,
    SiWordpress,
    SiPostman,
    SiVite,
    SiRender,
    SiVercel
} from 'react-icons/si';

export const pages = [
    { title: 'Home', content: () => <Home /> },
    { title: 'Projects', content: () => <Projects /> },
    { title: 'Skills', content: () => <Skills /> },
    { title: 'About Me', content: () => <AboutMe /> },
    { title: 'Contact Me', content: () => <ContactMe /> }
];

export const Links = [
    {
        name: 'GitHub',
        icon: () => <FaGithub />,
        link: 'https://github.com/MOSA-ISSA',
        color: '#ffffff',
        background: '#0c0c0c'
    },
    {
        name: 'LinkedIn',
        icon: () => <FaLinkedin />,
        link: 'https://www.linkedin.com/in/mosa-issa-858433262/',
        color: '#ffffff',
        background: '#0077b5'
    },
    {
        name: 'FaWhatsapp',
        icon: () => <FaWhatsapp />,
        link: 'https://wa.me/972543938366', // WhatsApp direct link
        color: '#ffffff',
        background: '#25D366'
    },
    {
        name: 'Gmail',
        icon: () => <SiGmail />,
        link: 'mailto:mosasenio@gmail.com', // Email link
        color: '#ffffff',
        background: '#D44638'
    }
];

export const experiences = [
    {
        name: 'JavaScript',
        icon: (props) => <IoLogoJavascript {...props} />,
        color: '#f7df1e',
        backgroundColor: '#000',
    },
    {
        name: 'React',
        icon: (props) => <FaReact {...props} />,
        color: '#00d8ff',
        backgroundColor: '#20232a',
    },
    {
        name: 'RN',
        icon: (props) => <FaReact {...props} />,
        color: '#61dafb',
        backgroundColor: '#20232a',
    },
    {
        name: 'Node.js',
        icon: (props) => <FaNodeJs {...props} />,
        color: '#3c873a',
        backgroundColor: '#f6f6f6',
    },
    {
        name: 'MongoDB',
        icon: (props) => <SiMongodb {...props} />,
        color: '#47a248',
        backgroundColor: '#e6f4ea',
    },
    {
        name: 'Expo',
        icon: (props) => <SiExpo {...props} />,
        color: '#000',
        backgroundColor: '#fff',
    },
    {
        name: 'WordPress',
        icon: (props) => <SiWordpress {...props} />,
        color: '#21759b',
        backgroundColor: '#f5f8fa',
    },
    {
        name: 'Postman',
        icon: (props) => <SiPostman {...props} />,
        color: '#ef5b25',
        backgroundColor: '#fff2ed',
    },
    {
        name: 'Asana',
        icon: (props) => <SiAsana {...props} />,
        color: '#f06a6a',
        backgroundColor: '#fdeef1',
    },
    {
        name: 'Vite',
        icon: (props) => <SiVite {...props} />,
        color: '#646cff',
        backgroundColor: '#f5f7ff',
    },
    {
        name: 'Render',
        icon: (props) => <SiRender {...props} />,
        color: '#0097e6',
        backgroundColor: '#eaf6fd',
    },
    {
        name: 'Vercel',
        icon: (props) => <SiVercel {...props} />,
        color: '#000',
        backgroundColor: '#eaeaea',
    },
    {
        name : 'next.js',
        icon: (props) => <RiNextjsFill  {...props} />,
        color: '#000',
        backgroundColor: '#eaeaea',
    }
];