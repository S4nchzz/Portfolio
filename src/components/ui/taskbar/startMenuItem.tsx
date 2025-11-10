import getAppImage from '@/helper/getAppImage'
import Image from 'next/image'
import style from '@/styles/startMenuItem.module.css'
import { ItemFromJSON } from '@/types/types'
import { useWindow } from '@/contexts/window/window.context'
import { v4 as uuidv4 } from 'uuid';
import getAppComponent from '@/helper/getAppComponent'
import getDefaultWindowAttr from '@/helper/getDefaultWindowAttr'
import { useTaskbar } from '@/contexts/taskbar/taskbar.context'


const StartMenuItem = ({
    name,
    img,
    type
}: ItemFromJSON) => {
    const {
        addWindow
    } = useWindow()

    const {
        unfocusTaskbarMenus
    } = useTaskbar()

    return (
        <div
            className={style.container}
            onClick={() => {
                unfocusTaskbarMenus()
                const uuid = uuidv4()
                addWindow({
                    uuid: uuid,
                    node: getAppComponent(type, uuid),
                    type: type,
                    windowAttr: getDefaultWindowAttr(type)
                })
            }}>
            <Image
                src={img}
                alt='Item'
                width={40}
                height={40}
            />
            <span>{name}</span>
        </div>
    )
}

export default StartMenuItem