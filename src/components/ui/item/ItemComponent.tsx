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
import { useMatrix } from '@/contexts/matrix/matrix.context'

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
        hide
    } = useCtxMenu()

    const {
        copyItem,
    } = useCtxMenu()
    
    const [ctrlPressed, setCtrlPressed] = useState<boolean>(false)

    const {
        removeElementByUuid
    } = useMatrix()

    return (
        <div
            ref={ref}
            data-type={item.type}
            tabIndex={0}
            style={{
                backgroundColor: focus ? '#f9f9f92f' : undefined
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

            onKeyDown={(k) => {
                if (k.code == 'Delete') removeElementByUuid(item.uuid)

                if (k.code == 'ControlLeft') setCtrlPressed(true)

                if (k.code == 'KeyC' && ctrlPressed) {
                    copyItem(item)
                }
            }}

            onKeyUp={(k) => {
                k.stopPropagation()
                if (k.code == 'ControlLeft') setCtrlPressed(false)
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
                width={40}
                height={40}
                src={item.img}
                alt='Program image'
            />
            <span className={style.name}>{item.name}</span>
        </div>
    )
}

export default ItemComponent