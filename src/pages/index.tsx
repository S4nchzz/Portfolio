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
                            fontFamily: 'Ahsing',
                            fontSize: '120px',
                            color: 'var(--aqua)',
                            display: 'inline-block',
                            cursor: 'pointer',
                            paddingTop: '10rem'
                        }
                    }/>

                    <h3>I'm <span style={{color: 'var(--aqua-light-1)'}}>Iyan</span> and I'm a <span style={{color: 'var(--aqua-light-1)'}}>Full-Stack</span> developer.</h3>
            </div>
        </>
    )
};

export default Index