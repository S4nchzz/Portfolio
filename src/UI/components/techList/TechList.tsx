import styles from "../../styles/modules/techList.module.css"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { TechListProps } from "../../../interface/TechListProps";

const TechList = () => {
    const [animateTech, setAnimateTech] = useState<boolean>()
    const techRef = useRef(null)
    const techView = useInView(techRef, {
        amount: "all"
    })

    useEffect(() => {
        setAnimateTech(techView)
    }, [techView])

    const [techList, setTechList] = useState<TechListProps>(null)
    useEffect(() => {
        const fetchTech = async() => {
            const response = await fetch('/util/techList.json')
            setTechList(await response.json())
        }

        fetchTech()
    }, [])

    return (
        <section className={styles.resume_section}>
                <motion.h1
                    className={styles.tech_title}
                    animate={animateTech ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                        mass: 1
                    }}>
                    Technologies</motion.h1>

                    <div 
                        ref={techRef}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'                        
                    }}>
                        <motion.div 
                            style={{ flex: '1 1 45%' }}
                            animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1
                            }}>
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
                                {
                                    techList && techList.languages.map((item) => {
                                        return (
                                            <motion.li
                                                className={styles.tech_li}
                                                style={{ display: 'flex', alignItems: 'center' }}
                                                animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 70,
                                                    damping: 15,
                                                    mass: 1,
                                                    delay: 0.5
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: {
                                                        delay: 0
                                                    }
                                                }}>
                                                <span className={styles.tech_name}>{item.name}</span>
                                                <img src={item.imgSource} alt={item.name} width="56" height="56" />
                                            </motion.li>
                                        )
                                    })
                                }
                            </ul>
                        </motion.div>

                        <motion.div 
                            style={{ flex: '1 1 45%' }}
                            animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1
                            }}>
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
                                {
                                    techList && techList.frontend.map((item) => {
                                        return (
                                            <motion.li
                                                className={styles.tech_li}
                                                style={{ display: 'flex', alignItems: 'center' }}
                                                animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 70,
                                                    damping: 15,
                                                    mass: 1,
                                                    delay: 0.5
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: {
                                                        delay: 0
                                                    }
                                                }}>
                                                <span className={styles.tech_name}>{item.name}</span>
                                                <img src={item.imgSource} alt={item.name} width="56" height="56" />
                                            </motion.li>
                                        )
                                    })
                                }
                            </ul>
                        </motion.div>

                        <motion.div 
                            style={{ flex: '1 1 45%' }}
                            animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1
                            }}>
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
                                {
                                    techList && techList.backend.map((item) => {
                                        return (
                                            <motion.li
                                                className={styles.tech_li}
                                                style={{ display: 'flex', alignItems: 'center' }}
                                                animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 70,
                                                    damping: 15,
                                                    mass: 1,
                                                    delay: 0.5
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: {
                                                        delay: 0
                                                    }
                                                }}>
                                                <span className={styles.tech_name}>{item.name}</span>
                                                <img src={item.imgSource} alt={item.name} width="56" height="56" />
                                            </motion.li>
                                        )
                                    })
                                }
                            </ul>
                        </motion.div>

                        <motion.div 
                            style={{ flex: '1 1 45%' }}
                            animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1
                            }}>
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
                                {
                                    techList && techList.database.map((item) => {
                                        return (
                                            <motion.li
                                                className={styles.tech_li}
                                                style={{ display: 'flex', alignItems: 'center' }}
                                                animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 70,
                                                    damping: 15,
                                                    mass: 1,
                                                    delay: 0.5
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: {
                                                        delay: 0
                                                    }
                                                }}>
                                                <span className={styles.tech_name}>{item.name}</span>
                                                <img src={item.imgSource} alt={item.name} width="56" height="56" />
                                            </motion.li>
                                        )
                                    })
                                }
                            </ul>
                        </motion.div>

                        <motion.div 
                            style={{ flex: '1 1 45%' }}
                            animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1
                            }}>
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
                                {
                                    techList && techList.tools.map((item) => {
                                        return (
                                            <motion.li
                                                className={styles.tech_li}
                                                style={{ display: 'flex', alignItems: 'center' }}
                                                animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 70,
                                                    damping: 15,
                                                    mass: 1,
                                                    delay: 0.5
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: {
                                                        delay: 0
                                                    }
                                                }}>
                                                <span className={styles.tech_name}>{item.name}</span>
                                                <img src={item.imgSource} alt={item.name} width="56" height="56" />
                                            </motion.li>
                                        )
                                    })
                                }
                            </ul>
                        </motion.div>

                        <motion.div 
                            style={{ flex: '1 1 45%' }}
                            animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                mass: 1
                            }}>
                            <span className={styles.tech_subtitle}>
                                OS:
                            </span>
                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1.5rem',
                                listStyle: 'none'
                            }}>
                                {
                                    techList && techList.os.map((item) => {
                                        return (
                                            <motion.li
                                                className={styles.tech_li}
                                                style={{ display: 'flex', alignItems: 'center' }}
                                                animate={ animateTech ? { y: 0, opacity: 1 } : { y: -10, opacity: 0}}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 70,
                                                    damping: 15,
                                                    mass: 1,
                                                    delay: 0.5
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: {
                                                        delay: 0
                                                    }
                                                }}>
                                                <span className={styles.tech_name}>{item.name}</span>
                                                <img src={item.imgSource} alt={item.name} width="56" height="56" />
                                            </motion.li>
                                        )
                                    })
                                }
                            </ul>
                        </motion.div>
                    </div>
            </section>
    )
}

export default TechList