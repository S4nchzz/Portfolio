import styles from "../UI/styles/modules/index.module.css"
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion"
import { useState, useEffect, useRef} from "react";

const Index = () => {
    return(
        <>
            <section className={styles.presentation}>
                <motion.h1 
                className={styles.title}
                initial={{ x: -300 }}
                animate={{ x: 0 }}>
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                />
            </section>
        </>
    )
};

export default Index