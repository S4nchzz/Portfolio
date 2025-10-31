import style from '@/styles/osUserSelection.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Loader from '../loader/loading'

const OSUserSelection = () => {
    const [openOS, setOpenOS] = useState<boolean>(false)
    const [showLoader, setShowLoader] = useState<boolean>(false)

    return (
        <>
            <motion.div
                className={style.container}
                
                animate={{
                    opacity: !openOS ? 1 : 0,
                    display: !openOS ? undefined : 'none'
                }}

                transition={{
                    duration: 1
                }}>
                <div className={style.blurImage}/>
                <div className={style.content}>
                    <Image
                        className={style.userLogo}
                        src={'/img/osLoading/me.jpeg'}
                        width={230}
                        height={230}
                        alt='Profile picture user'
                    />
                    <h1>Iyan Sanchez</h1>
                    <button
                        className={style.openOs}
                        onClick={() => {
                            setShowLoader(true)
                            setTimeout(() => {
                                setOpenOS(true)
                            }, 1500)
                        }}>
                            <p>Enter</p>
                            <Image
                                className={style.enterImageSvg}
                                src={'/img/osLoading/enter.svg'}
                                width={40}
                                height={40}
                                alt='Enter image'
                            /></button>
                    <motion.div
                        className={style.loaderContainer}
                        initial={{
                            opacity: 0
                        }}

                        animate={{
                            opacity: showLoader ? 1 : 0 
                        }}>
                            <span className={style.welcome}>Welcome</span>
                            <Loader/>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default OSUserSelection