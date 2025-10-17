import { useWindow } from '@/contexts/window/window.context'
import useMouse from '@/hooks/useMouse'
import style from '@/styles/window.module.css'
import { WindowType } from '@/types/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Window = (attr: WindowType) => {
    const {
        deleteWindow,
        setMinimizeWindowState
    } = useWindow()

    const {
        pos
    } = useMouse()

    const windowRef = useRef<HTMLDivElement>(null)
    return (
        <motion.div
            ref={windowRef}
            drag
            dragMomentum={false}
            dragElastic={0}
            className={style.container}
            initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            }}
            style={{
                visibility: attr.windowAttr.isMinimized ? 'hidden' : undefined,
            }}>
                {attr.node}
            <div
                className={style.windowControlContainer}>
                <div className={style.windowControl}>
                    <ul>
                        <li>
                            <Image
                                src={'/img/desktop/window/minimize.svg'}
                                alt='Minimize'
                                width={14}
                                height={14}
                                onClick={() => {
                                    setMinimizeWindowState(true, attr.uuid)
                                }}
                            />
                        </li>
                        <li>
                            <Image
                                style={{
                                    marginLeft: '8px' /* Optical ilusion added some margin pixels to left */
                                }}
                                src={'/img/desktop/window/maximize.svg'}
                                alt='Maximize'
                                width={18}
                                height={18}
                            />
                        </li>
                        <li>
                            <Image
                                src={'/img/desktop/window/cross.svg'}
                                alt='Cross'
                                width={26}
                                height={26}
                                onClick={() => {
                                    deleteWindow(attr.uuid)
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.windowContent}>

            </div>
        </motion.div>
    )
}

export default Window