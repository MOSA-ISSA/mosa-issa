import React, { useContext, } from 'react';
import { motion } from "framer-motion";
import { H1, P, Page } from '../theme/elements';
import TheContext from '../hooks/TheContext';
import { darkCoverImage, lightCoverImage, Links } from '../res/data';
import ExperienceCarousel from './../components/ExperienceCarousel';

const Home = () => {
    const { isDark } = useContext(TheContext)
    const image = "https://avatars.githubusercontent.com/u/124443901?u=cab741f1a3029b9592f29e61bb198aad469825fe&v=4";

    const HedProfile = () => {
        return (
            <motion.div style={{ ...styles.HedProfile, backgroundImage: `url(${isDark ? darkCoverImage : lightCoverImage})` }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.2, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.3 }}
                    style={styles.profileImage}
                    onClick={() => window.open('https://github.com/MOSA-ISSA', '_blank')}
                >
                    <img
                        className='profileImage'
                        src={image}
                        alt="Mosa Issa"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </motion.div>

                <div style={styles.profileInfo}>
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <H1>Mosa Issa</H1>
                    </motion.div>
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <H1 style={{ fontSize: 'clamp(18px, 4vw, 35px)', }}>+972543938366</H1>
                    </motion.div>
                </div>
            </motion.div>
        )
    }

    const Footer = () => {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={styles.linksContainer}
            >
                {Links.map((item, index) => (
                    <a
                        className='link'
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: item.background,
                            color: item.color,
                        }}
                    >
                        {item.icon()}
                    </a>
                ))}
            </motion.div>
        );
    };

    const Content = () => {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={styles.content}
            >
                <P>
                    Full Stack Developer specializing in React, React Native, Node.js, and MongoDB.
                    Passionate about creating seamless user experiences and scalable web solutions.
                </P>
                <ExperienceCarousel />
            </motion.div>
        )
    }

    return (
        <Page>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={styles.page}
            >
                <HedProfile />
                <Content />
                <Footer />

            </motion.div>
        </Page>
    );
};

export default Home;

const styles = {
    page: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100dvh',
        width: '100%',
        textAlign: 'center',
        padding: '2rem',
    },
    HedProfile: {
        marginTop: '2rem',
        display: 'flex',
        flex: 2,
        maxHeight: '270px',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // padding: '2rem',
        borderRadius: '20px',
        transition: 'all 0.5s ease',
        flexWrap: 'wrap',
        maxWidth: '1600px',
    },
    profileImage: {
        width: '10dvw',
        height: '10dvw',
        minHeight: '85px',
        minWidth: '85px',
        maxHeight: '250px',
        maxWidth: '250px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid #00000050',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    profileInfo: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center',
        alignItems: 'center',
        gap: '1rem',
    },
    linksContainer: {
        display: 'flex',
        flex: 1,
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: '1rem',
        flexWrap: 'wrap',
        // border: '5px solid #fff',
    },
    content: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        flexWrap: 'wrap',
        // border: '5px solid #fff',
    },
}