import { useItems } from '@/contexts/items/items.context'
import { useWindow } from '@/contexts/window/window.context'
import style from '@/styles/item.module.css'
import { ItemComponentType } from '@/types/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import getAppComponent from '@/helper/getAppComponent'
import { v4 as uuidv4 } from 'uuid';
import getDefaultWindowAttr from '@/helper/getDefaultWindowAttr'
import { useCtxMenu } from '@/contexts/ctxMenu/ctxMenuContext'
import useMouse from '@/hooks/useMouse'

const ItemComponent = ({
    item,
    currentIndex,
    onDrag
}: ItemComponentType) => {
    const [focus, setFocus] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const {
        setItems,
        resetGlobalStyle
    } = useItems()

    const resetStyle = () => {
        if (ref.current) ref.current.style = ''
        setFocus(false)
    }

    useEffect(() => {
        if (ref.current) setItems(ref.current, resetStyle)
    }, [])

    const {
        addWindow
    } = useWindow()

    const {
        pos
    } = useMouse()

    const {
        setItemUuid,
        setXY,
        hide,
        isHidden
    } = useCtxMenu()

    return (
        <div
            ref={ref}
            data-type={item.type}
            style={{
                backgroundColor: focus ? '#7979794d' : undefined
            }}
            draggable={true}
            className={style.container}
            onDrag={(e) => onDrag(e, item, currentIndex)}
            onClick={(e) => {
                e.stopPropagation()
                setFocus(!focus)
                if (ref.current) resetGlobalStyle(ref.current)
                hide(true)
            }}
            onContextMenu={(e) => {
                e.stopPropagation()
                e.preventDefault()
                setItemUuid(item.uuid)
                setXY({ x: pos.x, y: pos.y })
                hide(false)

                setFocus(true)
                if (ref.current) resetGlobalStyle(ref.current)
            }}

            onDoubleClick={() => {
                if (!ref.current) throw new Error('Item reference is not initialized when trying to open it. ')

                const uuid = uuidv4()
                addWindow({
                    uuid: uuid,
                    node: getAppComponent(item.type, uuid),
                    type: item.type,
                    windowAttr: getDefaultWindowAttr(item.type)
                })
            }}>
            <Image
                draggable={false}
                width={50}
                height={40}
                src={item.img}
                alt='Program image'
            />
            <span className={style.name}>{item.name}</span>
        </div>
    )
}

export default ItemComponent