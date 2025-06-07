import { useEffect } from "react";
import AnimatedText from "../UI/components/animated/animatedText/AnimatedText";
import { useNav } from "../UI/components/nav/Nav";
import style from "../UI/styles/modules/index.module.css"

const Index = () => {
    const {
        setFixed
    } = useNav()

    return(
        <>
            <div className={style.container}>
                <AnimatedText 
                    text="Welcome"
                    style={
                        {
                            fontFamily: 'Edwardian',
                            fontSize: '15rem',
                            color: 'var(--aqua)',
                            display: 'inline-block',
                            cursor: 'pointer',
                            paddingTop: '10rem'
                        }
                    }/>

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
        </>
    )
};

export default Index