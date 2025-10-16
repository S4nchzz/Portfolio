import { ItemType } from "@/lib/constants/Item.enum"
import { Item } from "@/lib/matrix/Item"
import { DragEvent, ReactNode } from "react"

export type ChildrenType = {
    children: ReactNode
}

export type ItemComponentTypeCurrentIndex = {
    row: number,
    col: number
}

export type ItemComponentType = {
    item: Item,
    currentIndex: ItemComponentTypeCurrentIndex
    onDrag: (e: DragEvent<HTMLDivElement>, item: Item, currentIndex: ItemComponentTypeCurrentIndex) => void
}

export type ItemFromJSON = {
    img: string,
    name: string,
    type: ItemType
}