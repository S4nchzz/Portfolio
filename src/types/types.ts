import { ItemType } from "@/lib/constants/Item.enum"
import { Item } from "@/lib/matrix/Item"
import { DragEvent } from "react"

export type ItemComponentType = {
    item: Item
    onDrag: (e: DragEvent<HTMLDivElement>, item: Item) => void
}

export type ItemFromJSON = {
    img: string,
    name: string,
    type: ItemType
}