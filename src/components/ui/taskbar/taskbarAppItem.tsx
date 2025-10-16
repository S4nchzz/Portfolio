import { useWindow } from '@/contexts/window/window.context'
import getAppComponent from '@/helper/getAppComponent'
import getAppImage from '@/helper/getAppImage'
import getDefaultWindowAttr from '@/helper/getDefaultWindowAttr'
import { ItemType } from '@/lib/constants/Item.enum'
import style from '@/styles/taskbarAppItem.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

type TaskbarAppItemAttr = {
    windowType: ItemType,
    windowAtatchedUuid: string
}

const TaskbarAppItem = (attr: TaskbarAppItemAttr) => {
    const [isOpened, setOpened] = useState<boolean>(false)
    const [appFocused, setAppFocused] = useState<boolean>(false) /* IF THE USER IS USING THIS APP THIS STATE WILL BE TRUE */
    
    const {
        setMinimizeWindowState
    } = useWindow()

    return (
        <div
            className={style.container}
            onClick={() => {
                setMinimizeWindowState(isOpened, attr.windowAtatchedUuid)
                setOpened(!isOpened)
            }}
            style={{
                backgroundColor: appFocused ? 'rgb(36, 36, 36)' : undefined
            }}>
            <Image
                src={`/img/items/${getAppImage(attr.windowType)}`}
                alt='App icon'
                width={26}
                height={26}
            />
            <div
                className={style.openedHr}
                style={{
                    backgroundColor: isOpened ? '#9b9b9bff' : undefined
                }}
                />
        </div>
    )
}

export default TaskbarAppItem