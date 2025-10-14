'use client'

import { useMatrix } from '@/contexts/matrix/matrix.context'
import { Item } from '@/lib/matrix/Item'
import style from '@/styles/pageComponent.module.css'
import ItemComponent from '../ui/item/ItemComponent'

const PageComponent = () => {
    const {
        getMatrix
    } = useMatrix()

    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.grid}>
                    {
                        getMatrix()?.map((row) => {
                            return row.map((item, index) => {
                                if (item instanceof Item) {
                                    return <ItemComponent
                                        key={item.name + index}
                                        name={item.name}
                                        img={item.img}
                                        type={item.type}
                                    />
                                }
                            })
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PageComponent