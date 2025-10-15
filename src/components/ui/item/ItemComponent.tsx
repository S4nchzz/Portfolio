import style from '@/styles/item.module.css'
import { ItemComponentType } from '@/types/types'
import Image from 'next/image'
import { useState } from 'react'

const ItemComponent = ({
    item,
    currentIndex,
    onDrag
}: ItemComponentType) => {
    const [click, setClick] = useState<boolean>(false)

    return (
        <div
            data-type={item.type}
            style={{
                backgroundColor: click ? '#7979794d' : undefined
            }}
            draggable={true}
            className={style.container}
            onDrag={(e) => onDrag(e, item, currentIndex)}
            onClick={() => setClick(!click)}
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