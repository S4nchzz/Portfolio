import { useWindow } from '@/contexts/window/window.context'
import getAppImage from '@/helper/getAppImage'
import style from '@/styles/taskbarAppItem.module.css'
import { TaskbarAppItemAttr } from '@/types/types'
import Image from 'next/image'

const TaskbarAppItem = (attr: TaskbarAppItemAttr) => {
    const {
        setMinimizeWindowState,
        getWindow
    } = useWindow()

    const windowData = getWindow(attr.windowAtatchedUuid)
    const isMinimized = windowData?.windowAttr.isMinimized ?? false
    const isFocused = windowData?.windowAttr.isFocused ?? false

    return (
        <div
            className={style.container}
            onClick={(e) => {
                e.stopPropagation()
                setMinimizeWindowState(!isMinimized, attr.windowAtatchedUuid)
            }}
            style={{
                backgroundColor: isFocused ? 'rgb(36, 36, 36)' : undefined
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
                    backgroundColor: isMinimized ? undefined : '#9b9b9bff'
                }}
                />
        </div>
    )
}

export default TaskbarAppItem