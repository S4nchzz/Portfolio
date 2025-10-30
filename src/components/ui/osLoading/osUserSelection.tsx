import style from '@/styles/osUserSelection.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const OSUserSelection = () => {
    const [openOS, setOpenOS] = useState<boolean>()

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
                            setOpenOS(true)
                        }}>Enter</button>
                </div>
            </motion.div>
        </>
    )
}

export default OSUserSelection