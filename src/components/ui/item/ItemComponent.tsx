import { useItemRefStateList } from '@/contexts/items/items.context'
import { useWindow } from '@/contexts/window/window.context'
import style from '@/styles/item.module.css'
import { ItemComponentType } from '@/types/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import getAppComponent from '@/helper/getAppComponent'
import { v4 as uuidv4 } from 'uuid';
import getDefaultWindowAttr from '@/helper/getDefaultWindowAttr'

const ItemComponent = ({
    item,
    currentIndex,
    onDrag
}: ItemComponentType) => {
    const [click, setClick] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const {
        setItems,
        resetGlobalStyle
    } = useItemRefStateList()

    const resetStyle = () => {
        if (ref.current) ref.current.style = ''
        setClick(false)
    }

    useEffect(() => {
        if (ref.current) setItems(ref.current, resetStyle)
    }, [])

    const {
        addWindow
    } = useWindow()

    return (
        <div
            ref={ref}
            data-type={item.type}
            style={{
                backgroundColor: click ? '#7979794d' : undefined
            }}
            draggable={true}
            className={style.container}
            onDrag={(e) => onDrag(e, item, currentIndex)}
            onClick={() => {
                setClick(!click)
                if (ref.current) resetGlobalStyle(ref.current)
            }}

            onDoubleClick={() => {
                if (!ref.current) throw new Error('Item reference is not initialized when trying to open it. ')

                addWindow({
                    uuid: uuidv4(),
                    node: getAppComponent(item.type),
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