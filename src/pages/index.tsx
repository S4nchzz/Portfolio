import styles from "../UI/styles/modules/index.module.css"

const Index = () => {
    return(
        <>
            <img
            src="/images/gradiant_background.png"
            alt="top_background_gradiant"
            className={styles.background_gradiant}
            />

            <div className={styles.presentation}>
                <h1 className={styles.title}>Hi, my name is <span style={{color: '#74C9FF'}}>Iyan</span> and I'm a <span style={{color: '#74C9FF'}}>Full-Stack Developer</span>.</h1>
                <img
                src="/images/profile_vector.png"
                alt="Profile picture"
                className={styles.profile_picture}
                ></img>
            </div>
        </>
    )
};

export default Index