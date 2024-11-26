'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import { Page, Button } from './theme/elements';
import { pages } from './res/data';
import ThemeSwitch from './components/ThemeSwitch';

export default function Index() {
    const [activeSection, setActiveSection] = useState('section1');

    pages.forEach((page) => {
        page[`sectionRef`] = useRef(null);
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setActiveSection(sectionId);
                        const matchingPage = pages.find(
                            (page, index) => `section${index + 1}` === sectionId
                        );

                        if (matchingPage) {
                            const newHash = `#${matchingPage.title.replace(' ', '-').toLowerCase()}`;
                            if (window.location.hash !== newHash) {
                                window.history.pushState(null, '', newHash);
                            }
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = pages.map((page) => page.sectionRef.current);

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const targetPage = pages.find((page) => page.title.toLowerCase() === hash.toLowerCase());
            if (targetPage) {
                scrollToSection(targetPage.sectionRef);
            }
        }
    }, []);

    const scrollToSection = (sectionRef, title) => {
        // window.location.hash = `#${title?.replace(' ', '-').toLowerCase()}`;
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const RenderNavBar = () =>
        pages.map((page, index) => (
            <li key={index}>
                <Button
                    onClick={() => scrollToSection(page.sectionRef, page.title)}
                    className={`
                        ${styles.navButton} 
                        ${activeSection === `section${index + 1}` ? styles.active : ''}`
                    }
                >
                    {page.title}
                </Button>
            </li>
        ));

    const RenderSection = () =>
        pages.map((page, index) => (
            <section
                key={index}
                id={`section${index + 1}`}
                ref={page.sectionRef}
                className={styles.contentSection}
            >
                {/* <h2>{page.title}</h2> */}
                {page.content()}
            </section>
        ));

    const Header = () => {
        return (
            <nav className={styles.navbar}>
                <ThemeSwitch />
                {/* test */}
                <ul className={styles.navList}>{RenderNavBar()}</ul>
                {/* test */}
            </nav>
        )
    }

    return (
        <Page className={styles.smoothScrollContainer}>

            <Header />

            <div className={styles.sectionsContainer}>{RenderSection()}</div>


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
        </Page>
    );
}
