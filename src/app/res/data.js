import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AboutMe from "../pagesSection/AboutMe";
// import ContactMe from "../pagesSection/ContactMe";
import Home from "../pagesSection/Home";
import Projects from "../pagesSection/Projects";
import Skills from "../pagesSection/Skills";
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
    SiVercel,
    SiNextdotjs,
    SiStyledcomponents,
    SiFramer,
    SiTailwindcss
} from 'react-icons/si';

export const lightCoverImage = "https://wallpaperaccess.com/full/478295.jpg"
export const darkCoverImage = "https://wallpapercave.com/wp/wp7051639.jpg"
export const funnyImage = "https://i.pinimg.com/originals/11/68/1b/11681b40c7ae84daef0477dda290da9b.gif"

export const pages = [
    { title: 'Home', content: () => <Home /> },
    { title: 'Projects', content: () => <Projects /> },
    { title: 'Skills', content: () => <Skills /> },
    { title: 'About Me', content: () => <AboutMe /> },
    // { title: 'Contact Me', content: () => <ContactMe /> }
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
        name: 'Art Store',
        gitHubLink: 'https://github.com/MOSA-ISSA/MI.Store',
        // demoLink: 'https://artstore.example.com',
        image: 'https://github.com/MOSA-ISSA/images/blob/master/canvas-48.jpg?raw=true',
        images: [
            'https://github.com/MOSA-ISSA/images/blob/master/artstore.png?raw=true',
            // 'https://wallpaperaccess.com/full/478295.jpg',
        ],
        // Replace with actual image links
        about: 'An online store for selling and showcasing art pieces, including a seamless shopping experience with secure payment integration.',
        technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'CSS'],
        challenges: 'Designing a modern and responsive layout for a high-quality user experience.',
        achievements: 'Built a visually appealing and functional e-commerce platform optimized for performance.'
    },
    {
        name: 'MGL Game Library',
        gitHubLink: 'https://github.com/MOSA-ISSA/MGL',
        // demoLink: 'https://mgl.example.com',
        image: 'https://github.com/MOSA-ISSA/MGL/blob/local-data/readme/logo.png?raw=true',
        images: [
            'https://github.com/MOSA-ISSA/MGL/blob/local-data/readme/list.gif?raw=true',
            'https://github.com/MOSA-ISSA/MGL/blob/local-data/readme/create-user.gif?raw=true',
            'https://github.com/MOSA-ISSA/MGL/blob/local-data/readme/fltering.gif?raw=true',
            "https://github.com/MOSA-ISSA/MGL/blob/local-data/readme/logo.png?raw=true",
            // 'https://github.com/MOSA-ISSA/MGL/blob/local-data/readme/tags.gif?raw=true',
            // 'https://github.com/MOSA-ISSA/MGL/blob/local-data/readme/search.gif?raw=true',
        ],
        // Replace with actual image links
        about: 'A game library application inspired by MyAnimeList. Users can organize games they have played, want to play, dropped, or are not interested in. The platform supports reviews and ratings for games.',
        technologies: ['React Native', 'CLI', 'Node.js', 'MongoDB', 'RAWG API'],
        challenges: 'Integrating the RAWG API for real-time game data and building a user-friendly game organization feature.',
        achievements: 'Implemented advanced filtering and sorting capabilities with a smooth user experience, making it easier for users to manage their gaming libraries.'
    },
    {
        name: 'Shift Management',
        // gitHubLink: 'https://github.com/MOSA-ISSA/shift-management',
        demoLink: 'https://code-zone-test.onrender.com/',
        image: 'https://code-zone-test.onrender.com/static/media/logoZone.dd5dc26bc8ce8a4586e8.png',
        images: [

            "https://media.licdn.com/dms/image/v2/D4E22AQEFpXQlDg4STQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1730668811978?e=1740614400&v=beta&t=wEGijazuqt8s_nhab7juJWJ0umrVuHHL-SE8V2ZHtTg",
            'https://media.licdn.com/dms/image/v2/D4E22AQHOEY0ofDUyGQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1730668811999?e=1740614400&v=beta&t=lTPY0_q0XWeupqk7YjaddRJVMYqi6c15jl5Kx_EHptE',
            'https://media.licdn.com/dms/image/v2/D4E22AQF_kDv9sJa0Kw/feedshare-shrink_1280/feedshare-shrink_1280/0/1730668811979?e=1740614400&v=beta&t=OcsxbNKSUfnxAccoLakbb69nVRSqEEHPL5JePfPkSHo',
        ],
        // Replace with actual image links
        about: 'A web-based application designed to streamline shift management and project tracking for teams. It provides real-time updates, task assignments, and performance analytics.',
        technologies: ['React', 'Node.js', 'MongoDB', 'CSS', 'JavaScript', 'Vite v6', 'React Router'],
        challenges: 'Ensuring scalability while maintaining real-time updates for multiple users.',
        achievements: 'Built the project end-to-end with a responsive UI and integrated analytics for improved decision-making.'
    },
    {
        name: 'Educational App',
        // gitHubLink: 'https://github.com/MOSA-ISSA/educational-app',
        // demoLink: 'https://educationapp.example.com',
        image: 'https://code-zone-test.onrender.com/static/media/logoZone.dd5dc26bc8ce8a4586e8.png',
        images: [], // Replace with actual image links
        about: 'An educational platform allowing teachers to upload materials and assignments, and students to submit tasks and track progress.',
        technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'CSS'],
        challenges: 'Implementing file uploads and ensuring compatibility across mobile and web platforms.',
        achievements: 'Successfully created a cross-platform application with user-friendly features for both teachers and students.'
    },
];

export const skills = [
    {
        category: "Frontend Development",
        items: [
            { name: "React Native", icon: <FaReact />, level: "Advanced" },
            { name: "javaScript", icon: <IoLogoJavascript />, level: "Expert" },
            { name: "React", icon: <FaReact />, level: "Advanced" },
            { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
            { name: "HTML", icon: <FaHtml5 />, level: "Expert" },
            { name: "CSS", icon: <FaCss3Alt />, level: "Expert" },
            { name: "JavaScript", icon: <FaJsSquare />, level: "Expert" },
            { name: "Vite", icon: <SiVite />, level: "Advanced" },
            { name: "Expo", icon: <SiExpo />, level: "Advanced" },
        ],
    },
    {
        category: "Backend Development",
        items: [
            { name: "Node.js", icon: <FaNodeJs />, level: "Expert" },
            { name: "MongoDB", icon: <SiMongodb />, level: "Advanced" },
            { name: "Postman", icon: <SiPostman />, level: "Advanced" },
            { name: "render", icon: <SiRender />, level: "Advanced" },
            { name: "Vercel", icon: <SiVercel />, level: "Advanced" },
        ],
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "GitHub", icon: <FaGithub />, level: "Advanced" },
            { name: "Asana", icon: <SiAsana />, level: "Expert" },
            { name: "WordPress", icon: <SiWordpress />, level: "Intermediate" },
        ],
    },
];

/*
{ name: "Styled Components", icon: <SiStyledcomponents />, level: "Intermediate" },
            { name: "Framer Motion", icon: <SiFramer />, level: "Intermediate" },
            { name: "React Query", icon: <FaReact />, level: "Intermediate" },
            { name: "React Hook Form", icon: <FaReact />, level: "Intermediate" },
            { name: "React Context", icon: <FaReact />, level: "Intermediate" },
            { name: "React Toastify", icon: <FaReact />, level: "Intermediate" },
            { name: "React Select", icon: <FaReact />, level: "Intermediate" },
            { name: "React Table", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Navigation", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Gesture Handler", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Reanimated", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Paper", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Web", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Modal", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Bottom Sheet", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Reanimated", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Gesture Handler", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Paper", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Web", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Modal", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Bottom Sheet", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Reanimated", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Gesture Handler", icon: <FaReact />, level: "Intermediate" },
            { name: "React Native Paper", icon: <FaReact />, level: "Intermediate" },
*/