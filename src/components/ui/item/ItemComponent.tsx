import style from '@/styles/item.module.css'
import { ItemComponentType } from '@/types/types'
import Image from 'next/image'
import { DragEvent } from 'react'

const ItemComponent = ({
    item,
    currentIndex,
    onDrag
}: ItemComponentType) => {
    return (
        <div
        draggable={true}
            className={style.container}
            onDrag={(e) => onDrag(e, item, currentIndex)}>
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