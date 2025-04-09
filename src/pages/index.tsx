import styles from "../UI/styles/modules/index.module.css"
import TypewriterComponent from "typewriter-effect";


const Index = () => {
    return(
        <>
            <img
            src="/img/home/gradiant_background.png"
            alt="top_background_gradiant"
            className={styles.background_gradiant}
            />

            <section className={styles.presentation}>
                <h1 className={styles.title}>
                    Hi, my name is
                    <span style={{color: '#74C9FF'}}>
                        <TypewriterComponent options={{
                            strings: 'Iyan',
                            autoStart: true,
                            delay: 300,
                            cursorClassName: styles.cursorColor
                        }}/>
                    </span>
                    and I'm a
                    <span style={{color: '#74C9FF'}}>
                        <TypewriterComponent options={{
                            strings: 'Full-Stack Developer.',
                            autoStart: true,
                            cursorClassName: styles.cursorColor
                        }}/>
                    </span>
                    </h1>
                <img
                src="/img/home/profile_vector.png"
                alt="Profile picture"
                className={styles.profile_picture}
                ></img>
            </section>
        </>
    )
};

export default Index