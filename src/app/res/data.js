import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

export const pages = [
    { title: 'Home', content: () => <Home /> },
    { title: 'Projects', content: () => <Projects /> },
    { title: 'Skills', content: () => <Skills /> },
    { title: 'About Me', content: () => <AboutMe /> },
    { title: 'Contact Me', content: () => <ContactMe /> }
];