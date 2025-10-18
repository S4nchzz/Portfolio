import { useWindow } from '@/contexts/window/window.context'
import useMouse from '@/hooks/useMouse'
import style from '@/styles/window.module.css'
import { WindowType } from '@/types/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import getAppImage from '@/helper/getAppImage'

const Window = (attr: WindowType) => {
    const {
        deleteWindow,
        setMinimizeWindowState,
        setMaximizedWindowState
    } = useWindow()

    const {
        pos
    } = useMouse()

    const [dragAnimation, setDragAnimation] = useState<{
        width: string | undefined
        height: string | undefined
        x: number | undefined
        y: number | undefined
    }>()

    const [isMaximized, setMaximized] = useState<boolean>(false)

    useEffect(() => {
        console.log(`Window: ${attr.uuid} | Maximized: ${attr.windowAttr.isMaximized}`);

        setDragAnimation({
            width: attr.windowAttr.isMaximized ? '100%' : undefined,
            height: attr.windowAttr.isMaximized ? '100%' : undefined,
            x: attr.windowAttr.isMaximized ? 0 : undefined,
            y: attr.windowAttr.isMaximized ? 0 : undefined
        })
    }, [attr])

    const windowRef = useRef<HTMLDivElement>(null)
    return (
        <motion.div
            ref={windowRef}
            drag
            dragMomentum={false}
            dragElastic={0}
            className={style.container}
            initial={{
                opacity: 0,
            }}
            animate={{
                ...dragAnimation,
                opacity: 1
            }}
            transition={{
                duration: .2
            }}
            style={{
                visibility: attr.windowAttr.isMinimized ? 'hidden' : undefined,
                width: attr.windowAttr.width,
                height: attr.windowAttr.height
            }}>
            <div
                className={style.windowControlContainer}
                onDoubleClick={() => {
                    setMaximizedWindowState(isMaximized, attr.uuid)
                    setMaximized(!isMaximized)
                }}>
                <div className={style.windowControl}>
                    <div className={style.windowIcon}>
                        <Image
                            src={`/img/items/${getAppImage(attr.nodeType)}`}
                            alt='Minimize'
                            width={24}
                            height={24}
                        />
                    </div>
                    <ul className={style.windowButtons}>
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
                                onClick={() => {
                                    setMaximizedWindowState(isMaximized, attr.uuid)
                                    setMaximized(!isMaximized)
                                }}
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
                {attr.node}
            </div>
        </motion.div>
    )
}

export default Window