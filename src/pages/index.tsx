import AnimatedText from "../UI/components/animated/animatedText/AnimatedText";
import style from "../UI/styles/modules/index.module.css"

const Index = () => {
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
            </div>
        </>
    )
};

export default Index