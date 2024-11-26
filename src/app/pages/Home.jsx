import React, { useContext, } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { H1, P } from '../theme/elements';
import TheContext from '../hooks/TheContext';

const lightCoverImage = "https://wallpaperaccess.com/full/478295.jpg"
const darkCoverImage = "https://wallpapercave.com/wp/wp7051639.jpg"
const funnyImage = "https://i.pinimg.com/originals/11/68/1b/11681b40c7ae84daef0477dda290da9b.gif"

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
                        <H1 style={{ fontSize: '2rem', }}>+972543938366</H1>
                    </motion.div>
                </div>
            </motion.div>
        )
    }

    const Footer = () => {
        const data = [
            {
                name: 'GitHub',
                icon: ()=><FaGithub />,
                link: 'https://github.com/MOSA-ISSA',
                color: '#000000',
                background: '#f3f3f3'
            },
            {
                name: 'LinkedIn',
                icon: ()=><FaLinkedin />,
                link: 'https://www.linkedin.com/in/mosa-issa-858433262/',
                color: '#ffffff',
                background: '#0077b5'
            },
            {
                name: 'WhatsApp',
                icon: ()=><FaWhatsapp />,
                link: 'https://wa.me/972543938366', // WhatsApp direct link
                color: '#ffffff',
                background: '#25D366'
            },
            {
                name: 'Gmail',
                icon: ()=><SiGmail />,
                link: 'mailto:mosasenio@gmail.com', // Email link
                color: '#ffffff',
                background: '#D44638'
            }
        ];

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{
                    display: 'flex',
                    flex:1,
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    padding: '1rem',
                    flexWrap: 'wrap',
                }}
            >
                {data.map((item, index) => (
                    <a
                        className='link'
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            padding: '1.2rem',
                            borderRadius: '50%',
                            background: item.background,
                            color: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
                        }}
                    >
                        {item.icon()}
                    </a>
                ))}
            </motion.div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={styles.page}
        >

            <HedProfile />


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    marginBottom: '2rem',
                }}
            >
                <P>
                    Full Stack Developer specializing in React, React Native, Node.js, and MongoDB.
                    Passionate about creating seamless user experiences and scalable web solutions.
                </P>
            </motion.div>

            <Footer />
        </motion.div>
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
        color: '#fff',
        textAlign: 'center',
        padding: '2rem',
    },
    HedProfile: {
        marginTop: '2rem',
        marginBottom: '2rem',
        display: 'flex',
        flex: 0.5,
        alignItems: 'flex-end',
        flexDirection: 'row',
        gap: '2rem',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
        borderRadius: '20px',
        transition: 'all 0.5s ease',
    },
    profileImage: {
        width: '200px',
        height: '200px',
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
    }
}