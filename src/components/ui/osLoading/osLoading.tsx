'use client'

import style from '@/styles/osLoading.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { clearTimeout } from 'timers'
import { motion } from 'framer-motion'
import OSUserSelection from './osUserSelection'


const OSLoading = () => {
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true)
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <>
            <motion.div
                className={style.container}
                animate={{
                    opacity: !loaded ? 1 : 0,
                    display: !loaded ? undefined : 'none'
                }}

                transition={{
                    duration: 1
                }}>
                <Image
                    src={'/img/osLoading/logo.png'}
                    width={256}
                    height={220}
                    alt='Logo OS'
                />
                <span className={style.loader}/>

            </motion.div>
            <OSUserSelection/>
        </>
    )
}

export default OSLoading