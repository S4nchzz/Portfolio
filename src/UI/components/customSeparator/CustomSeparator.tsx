import { useState } from 'react'
import style from '../../styles/modules/customSeparator.module.css'
import { motion } from 'framer-motion'

type CustomSeparatorProps = {
    execAnimation?: boolean
}

const CustomSeparator = ({execAnimation = false}: CustomSeparatorProps) => {
    return (
        <div className={style.container}>
            <motion.div
                initial={{
                    opacity: 0
                }}

                animate={{
                    opacity: execAnimation ? 1 : 0,
                }}

                transition={{
                    delay: .2
                }}
                className={style.circle}
            />
            
            <motion.div
                initial={{
                    height: 0
                }}
                animate={{
                    height: execAnimation ? 500 : 0
                }}

                transition={{
                    type: 'spring',
                    duration: 5,
                    delay: .5
                }}
                className={style.line}
            />   
        </div>
    )
}

export default CustomSeparator