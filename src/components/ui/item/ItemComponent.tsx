import { Item } from '@/lib/matrix/Item'
import style from '@/styles/item.module.css'
import { ItemComponentType } from '@/types/types'
import Image from 'next/image'

const ItemComponent = ({
    img,
    name,
    type
}: ItemComponentType) => {
    return (
        <div className={style.container}>
            <Image
                width={40}
                height={30}
                src={img}
                alt='Program image'
            />
            <span className={style.name}>{name}</span>
        </div>
    )
}

export default ItemComponent