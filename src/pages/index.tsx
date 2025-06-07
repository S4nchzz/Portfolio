import { useEffect } from "react";
import AnimatedText from "../UI/components/animated/animatedText/AnimatedText";
import { useNav } from "../UI/components/nav/Nav";
import style from "../UI/styles/modules/index.module.css"
import { motion } from 'framer-motion'
import Technology from "../UI/components/technology/Technology";
import TechBlock from "../UI/components/technology/TechBlock";


const Index = () => {
    const {
        setFixed
    } = useNav()

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

                <div
                style={{
                    marginLeft: '10rem',
                    marginRight: '10rem'
                }}>
                    <TechBlock/>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                </div>
            </div>
        </>
    )
};

export default Index