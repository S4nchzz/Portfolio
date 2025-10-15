import { useItemComponentList } from '@/contexts/items/items.context'
import style from '@/styles/item.module.css'
import { ItemComponentType } from '@/types/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const ItemComponent = ({
    item,
    currentIndex,
    onDrag
}: ItemComponentType) => {
    const [click, setClick] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const {
        setItems,
        resetStyle
    } = useItemComponentList()

    useEffect(() => {
        if (ref.current) setItems(ref.current)
    }, [])
    
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
                resetStyle()
            }}
            >
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