import styles from "../UI/styles/modules/index.module.css"
import TypewriterComponent from "typewriter-effect";
import { delay, motion, useInView } from "framer-motion"
import { StyleRegistry } from "styled-jsx";
import { useEffect, useRef, useState } from "react";
import TechList from "../UI/components/techList/TechList";

const Index = () => {
    return(
        <>
            <section className={styles.presentation}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                        mass: 1
                    }}>
                    Hi, my name is
                    <span style={{color: '#74C9FF'}}>
                        <TypewriterComponent options={{
                            strings: 'Iyan',
                            autoStart: true,
                            delay: 300
                        }}/>
                    </span>
                    and I'm a
                    <span style={{color: '#74C9FF'}}>
                        <TypewriterComponent options={{
                            strings: 'Full-Stack Developer.',
                            autoStart: true,
                            delay: 100
                        }}/>
                    </span>
                    </motion.h1>
                <motion.img
                    src="/img/home/profile_vector.png"
                    alt="Profile picture"
                    className={styles.profile_picture}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                        mass: 1
                    }}
                />
            </section>

            <TechList/>
        </>
    )
};

export default Index