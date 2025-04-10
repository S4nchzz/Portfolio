import styles from "../UI/styles/modules/index.module.css"
import TypewriterComponent from "typewriter-effect";
import { delay, motion, useInView } from "framer-motion"
import { StyleRegistry } from "styled-jsx";
import { useEffect, useRef, useState } from "react";

const Index = () => {
    const [animateCard1, setAnimateCard1] = useState<boolean>()
    const refCard1 = useRef(null)
    const card1InView = useInView(refCard1, {
        amount: "some"
    })

    useEffect(() => {
        setAnimateCard1(card1InView)
    }, [card1InView])

    return(
        <>
            <section  className={styles.presentation}>
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

            <section className={styles.resume_section}>
                <motion.h1
                    className={styles.projects_title}
                    initial={{ y: 300 }}
                    animate={animateCard1 ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}>
                    Projects</motion.h1>
                <motion.div
                    ref={refCard1}
                    className={styles.animated_card}
                    animate={ animateCard1 ? { opacity: 1, scaleX: 4} : { opacity: 0 }}>

                    </motion.div>
            </section>
        </>
    )
};

export default Index