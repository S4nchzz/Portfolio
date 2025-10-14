'use client'

import { useMatrix } from '@/contexts/matrix/matrix.context'
import { Item } from '@/lib/matrix/Item'
import style from '@/styles/pageComponent.module.css'
import ItemComponent from '../ui/item/ItemComponent'
import { DragEvent, useState } from 'react'

const PageComponent = () => {
    const {
        getMatrix,
        addElementByRowCol
    } = useMatrix()

    const [itemBeingDragged, setItemBeingDragged] = useState<Item | undefined>(undefined)

    const handleItemDrag = (e: DragEvent<HTMLDivElement>, item: Item) => {
        setItemBeingDragged(item)
    }

    const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();

        console.log(itemBeingDragged);
        const dataKey = e.currentTarget.dataset.key
        if (!dataKey) throw new Error('The hidden box row col are mismatching.')

        const dataKeyParsed: { col: number, row: number } = JSON.parse(dataKey)
        if (!dataKeyParsed) throw new Error('Data key parse error, check data-key.')
        
        if (!itemBeingDragged) throw new Error('Ensure to drag an item before droping it (?)')
        addElementByRowCol({
            col: dataKeyParsed.col,
            row: dataKeyParsed.row,
            item: itemBeingDragged
        })
    }

    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.grid}>
                    {
                        getMatrix()?.map((row, ri) => {
                            return row.map((item, ci) => {
                                if (item instanceof Item) {
                                    return <ItemComponent
                                        onDrag={handleItemDrag}
                                        key={item.name + ci}
                                        item={item}
                                    />
                                }

                                return (
                                    <div
                                        key={`hb-${ri}-${ci}`}
                                        data-key={JSON.stringify({ row: ci, col: ri })} /* INVERTED BECAUSE GRID ORIENTATION IS SET TO COLUMN */
                                        className={style.hiddenBox}
                                        onDrop={handleOnDrop}
                                        onDragOver={(e) => e.preventDefault()}>
                                        {/* TO DROP SOMETHING HERE */}
                                    </div>
                                )
                            })
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PageComponent