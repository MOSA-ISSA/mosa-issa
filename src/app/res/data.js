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
        name: 'next.js',
        icon: (props) => <RiNextjsFill  {...props} />,
        color: '#000',
        backgroundColor: '#eaeaea',
    }
];

export const projects = [
    {
        name: 'Shift Management',
        gitHubLink: 'https://github.com/MOSA-ISSA/shift-management',
        liveLink: 'https://shiftmanagement.example.com', // Replace with actual live link
        images: ['https://wallpaperaccess.com/full/478295.jpg', 'https://wallpaperaccess.com/full/478295.jpg'], // Replace with actual image links
        about: 'A web-based application designed to streamline shift management and project tracking for teams. It provides real-time updates, task assignments, and performance analytics.',
        technologies: ['React', 'Node.js', 'MongoDB', 'CSS', 'JavaScript', 'Vite v6', 'React Router'],
        challenges: 'Ensuring scalability while maintaining real-time updates for multiple users.',
        achievements: 'Built the project end-to-end with a responsive UI and integrated analytics for improved decision-making.'
    },
    {
        name: 'Educational App',
        gitHubLink: 'https://github.com/MOSA-ISSA/educational-app',
        liveLink: 'https://educationapp.example.com', // Replace with actual live link
        images: ['https://wallpaperaccess.com/full/478295.jpg', 'https://wallpaperaccess.com/full/478295.jpg'], // Replace with actual image links
        about: 'An educational platform allowing teachers to upload materials and assignments, and students to submit tasks and track progress.',
        technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'CSS'],
        challenges: 'Implementing file uploads and ensuring compatibility across mobile and web platforms.',
        achievements: 'Successfully created a cross-platform application with user-friendly features for both teachers and students.'
    },
    {
        name: 'Art Store',
        gitHubLink: 'https://github.com/MOSA-ISSA/art-gallery-store',
        liveLink: 'https://artstore.example.com', // Replace with actual live link
        images: ['https://wallpaperaccess.com/full/478295.jpg', 'https://wallpaperaccess.com/full/478295.jpg'], // Replace with actual image links
        about: 'An online store for selling and showcasing art pieces, including a seamless shopping experience with secure payment integration.',
        technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'CSS'],
        challenges: 'Designing a modern and responsive layout for a high-quality user experience.',
        achievements: 'Built a visually appealing and functional e-commerce platform optimized for performance.'
    },
    {
        name: 'MGL Game Library',
        gitHubLink: 'https://github.com/MOSA-ISSA/mgl-game-library',
        liveLink: 'https://mgl.example.com', // Replace with actual live link
        images: ['https://wallpaperaccess.com/full/478295.jpg', 'https://wallpaperaccess.com/full/478295.jpg'], // Replace with actual image links
        about: 'A game library application inspired by MyAnimeList. Users can organize games they have played, want to play, dropped, or are not interested in. The platform supports reviews and ratings for games.',
        technologies: ['React Native', 'CLI', 'Node.js', 'MongoDB', 'RAWG API'],
        challenges: 'Integrating the RAWG API for real-time game data and building a user-friendly game organization feature.',
        achievements: 'Implemented advanced filtering and sorting capabilities with a smooth user experience, making it easier for users to manage their gaming libraries.'
    }
];
