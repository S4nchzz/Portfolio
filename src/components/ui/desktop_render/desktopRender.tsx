import { useMatrix } from "@/contexts/matrix/matrix.context"
import { Item } from "@/lib/matrix/Item"
import { ItemComponentTypeCurrentIndex } from "@/types/types"
import { DragEvent, useState } from "react"
import ItemComponent from "../item/ItemComponent"
import style from '@/styles/desktopRender.module.css'
import { useItemRefStateList } from "@/contexts/items/items.context"
import Taskbar from "../taskbar/taskbar"

const DesktopRender = () => {
    const {
        getMatrix,
        addElementByRowCol
    } = useMatrix()

    const {
        resetGlobalStyle
    } = useItemRefStateList()

    const [itemBeingDragged, setItemBeingDragged] = useState<{ item: Item, index: ItemComponentTypeCurrentIndex} | undefined>(undefined)

    const handleItemDrag = (e: DragEvent<HTMLDivElement>, item: Item, index: ItemComponentTypeCurrentIndex) => {
        setItemBeingDragged({
            item: item,
            index: index
        })
    }

    const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();

        const dataKey = e.currentTarget.dataset.key
        if (!dataKey) throw new Error('The hidden box row col are mismatching.')

        const dataKeyParsed: { col: number, row: number } = JSON.parse(dataKey)
        if (!dataKeyParsed) throw new Error('Data key parse error, check data-key.')
        
        if (!itemBeingDragged) throw new Error('Ensure to drag an item before droping it (?)')
            addElementByRowCol({
                col: dataKeyParsed.col,
                row: dataKeyParsed.row,
                item: itemBeingDragged.item,
                lastElementPosition: itemBeingDragged.index
            })
    }

    return (
        <>
            <div className={style.grid}>
                {
                    getMatrix()?.map((row, ri) => {
                        return row.map((item, ci) => {
                            if (item instanceof Item) {
                                return <ItemComponent
                                    onDrag={handleItemDrag}
                                    currentIndex={{
                                        row: ri,
                                        col: ci
                                    }}
                                    key={item.name + ri + ci}
                                    item={item}
                                />
                            } else {
                                return (
                                    <div
                                        onClick={() => resetGlobalStyle()}
                                        key={`hb-${ri}-${ci}`}
                                        data-key={JSON.stringify({ row: ri, col: ci })}
                                        className={style.hiddenBox}
                                        onDrop={handleOnDrop}
                                        onDragOver={(e) => e.preventDefault()}>
                                        {/* TO DROP SOMETHING HERE */}
                                    </div>
                                )
                            }
                        })
                    })
                }
            </div>

            <Taskbar/>
        </>
    )
}

export default DesktopRender