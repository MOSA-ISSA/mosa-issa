// app/page.js
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';

const pages = [
  {
    title: 'Home',
    content: () => <Home />
  },
  {
    title: 'Projects',
    content: () => <Projects />
  },
  {
    title: 'Skills',
    content: () => <Skills />
  },
  {
    title: 'About Me',
    content: () => <AboutMe />
  },
  {
    title: 'Contact Me',
    content: () => <ContactMe />
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('section1');

  pages.forEach((page) => {
    page[`sectionRef`] = useRef(null);
  });

  const RenderNavBar = () => (
    pages.map((page, index) => (
      <li key={index}>
        <button
          onClick={() => scrollToSection(page.sectionRef)}
          className={`${styles.navButton} ${activeSection === `section${index + 1}` ? styles.active : ''}`}
        >
          {page.title}
        </button>
      </li>
    ))
  )

  const RenderSection = () => (
    pages.map((page, index) => (
      <section
        key={index}
        id={`section${index + 1}`}
        ref={page.sectionRef}
        className={`${styles.contentSection} ${styles[`section${index + 1}`]}`}
      >
        <h2>{page.title}</h2>
        {page.content()}
      </section>
    ))
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = pages.map((page) => page.sectionRef.current);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.smoothScrollContainer}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            {RenderNavBar()}
          </ul>
        </nav>

        <div className={styles.sectionsContainer}>
          {RenderSection()}
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <p className={styles.copyright}>© 2024 Mosa Issa. جميع الحقوق محفوظة</p>
            </div>

            <div className={styles.footerSection}>
              <p className={styles.quote}>"لا تقل مستحيل، قل سأحاول"</p>
            </div>

            <div className={styles.footerSection}>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.linkedin.com/in/mosa-issa-858433262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MOSA-ISSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}