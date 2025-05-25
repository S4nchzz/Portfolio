import styles from "../../styles/modules/techList.module.css"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";

const TechList = () => {
    const [animateTech, setAnimateTech] = useState<boolean>()
    const refCard1 = useRef(null)
    const card1InView = useInView(refCard1, {
        amount: "some"
    })

    useEffect(() => {
        setAnimateTech(card1InView)
    }, [card1InView])

    return (
        <section className={styles.resume_section}>
                <motion.h1
                    ref={refCard1}
                    className={styles.tech_title}
                    animate={animateTech ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                        mass: 1
                    }}>
                    Technologies</motion.h1>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                        
                    }}>
                        <div style={{ flex: '1 1 45%' }}>
                            <span className={styles.tech_subtitle}>
                                LANGUAGES:
                            </span>
                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1.5rem',
                                listStyle: 'none'
                            }}>
                                <motion.li
                                    className={styles.tech_li}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.05
                                    }}>
                                    <span className={styles.tech_name}>Typescript</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.10
                                    }}>

                                    <span className={styles.tech_name}>JavaScript</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.15
                                    }}>
                                    <span className={styles.tech_name}>Kotlin</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.20
                                    }}>
                                    <span className={styles.tech_name}>Java</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="56" height="56" />
                                </motion.li>
                            </ul>
                        </div>

                        <div style={{ flex: '1 1 45%' }}>
                            <span className={styles.tech_subtitle}>
                                FRONTEND:
                            </span>
                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1.5rem',
                                listStyle: 'none'
                            }}>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.15
                                    }}>
                                    <span className={styles.tech_name}>HTML</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.20
                                    }}>
                                    <span className={styles.tech_name}>CSS</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.25
                                    }}>
                                    <span className={styles.tech_name}>React</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.25
                                    }}>
                                    <span className={styles.tech_name}>Bootstrap</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="50" height="50" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.25
                                    }}>
                                    <span className={styles.tech_name}>Framer Motion</span>
                                    <img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="Framer-Motion" width="50" height="50" />
                                </motion.li>
                            </ul>
                        </div>

                        <div style={{ flex: '1 1 45%' }}>
                            <span className={styles.tech_subtitle}>
                                BACKEND:
                            </span>
                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1.5rem',
                                listStyle: 'none'
                            }}>
                                <motion.li
                                    className={styles.tech_li}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.05
                                    }}>
                                    <span className={styles.tech_name}>SpringBoot</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="SpringBoot" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.10
                                    }}>
                                    <span className={styles.tech_name}>NestJS</span>
                                    <img src="https://icon.icepanel.io/Technology/svg/Nest.js.svg" alt="NestJS" width="56" height="56" />
                                </motion.li>
                            </ul>
                        </div>

                        <div style={{ flex: '1 1 45%' }}>
                            <span className={styles.tech_subtitle}>
                                DATABASE:
                            </span>
                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1.5rem',
                                listStyle: 'none'
                            }}>
                                <motion.li
                                    className={styles.tech_li}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.05
                                    }}>
                                    <span className={styles.tech_name}>MariaDB</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" alt="MariaDB" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.10
                                    }}>

                                    <span className={styles.tech_name}>MySQL</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MYSQL" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.15
                                    }}>
                                    <span className={styles.tech_name}>MongoDB</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="56" height="56" />
                                </motion.li>
                            </ul>
                        </div>

                        <div style={{ flex: '1 1 45%' }}>
                            <span className={styles.tech_subtitle}>
                                TOOLS:
                            </span>
                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1.5rem',
                                listStyle: 'none'
                            }}>
                                <motion.li
                                    className={styles.tech_li}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.05
                                    }}>
                                    <span className={styles.tech_name}>Git</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.10
                                    }}>

                                    <span className={styles.tech_name}>Docker</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.15
                                    }}>
                                    <span className={styles.tech_name}>AWS</span>
                                    <img src="https://images.icon-icons.com/2407/PNG/512/aws_icon_146074.png" alt="AWS" width="56" height="56" />
                                </motion.li>
                            </ul>
                        </div>

                        <div style={{ flex: '1 1 45%' }}>
                            <span className={styles.tech_subtitle}>
                                TOOLS:
                            </span>
                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1.5rem',
                                listStyle: 'none'
                            }}>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.10
                                    }}>

                                    <span className={styles.tech_name}>Windows</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" width="56" height="56" />
                                </motion.li>
                                <motion.li
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 15,
                                        mass: 1,
                                        delay: 0.15
                                    }}>
                                    <span className={styles.tech_name}>Linux</span>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" width="56" height="56" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
            </section>
    )
}

export default TechList