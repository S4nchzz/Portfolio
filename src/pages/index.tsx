import { useEffect } from "react";
import AnimatedText from "../UI/components/animated/animatedText/AnimatedText";
import style from "../UI/styles/modules/index.module.css"
import { motion } from 'framer-motion'
import TechBlock from "../UI/components/technology/TechBlock";

const Index = () => {
    return(
        <>
            <div className={style.container}>
                <motion.div
                    initial={{
                        y: -10,
                        opacity: 0
                    }}

                    animate={{
                        y: 0,
                        opacity: 1
                    }}

                    transition={{
                        type: 'spring',
                        duration: 2,
                        delay: 0.2
                    }}
                >
                    <AnimatedText
                    text="Welcome"
                    style={
                        {
                            fontFamily: 'Edwardian',
                            fontSize: '15rem',
                            display: 'inline-block',
                            cursor: 'pointer',
                            paddingTop: '10rem'
                        }
                    }/>
                </motion.div>

                <div className={style.subcontainer}>
                    <div className={style.techSection}>
                        <motion.span
                            initial={{
                                x: -10,
                                opacity: 0,
                                transition: {
                                    delay: 0
                                }
                            }}

                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}

                            transition={{
                                type: 'spring',
                                delay: .5,
                                duration: 2
                            }}
                        >Technologies</motion.span>
                        <TechBlock/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Index