import { useWindow } from '@/contexts/window/window.context'
import style from '@/styles/window.module.css'
import { WindowType } from '@/types/types'
import Image from 'next/image'

const Window = (attr: WindowType) => {
    const {
        deleteWindow,
        setMinimizeWindowState
    } = useWindow()

    return (
        <div
            className={style.container}
            style={{
                visibility: attr.windowAttr.isMinimized ? 'hidden' : undefined
            }}
            draggable={true}>
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
        </div>
    )
}

export default Window