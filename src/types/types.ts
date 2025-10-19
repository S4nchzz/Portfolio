import { WindowAttr } from "@/interface/windowIface"
import { ItemType } from "@/lib/constants/Item.enum"
import { TerminalCommands } from "@/lib/constants/terminalCommands.enum"
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

export type WindowType = {
    uuid: string,
    node: ReactNode,
    nodeType: ItemType,
    windowAttr: WindowAttr
}

export type TaskbarAppItemAttr = {
    windowType: ItemType,
    windowAtatchedUuid: string
}

export type UseMouseType = {
    x: number,
    y: number
}

export type TaskBarMenuStateType = {
    open: boolean
}

export type TerminalInputType = {
    focus: boolean
    onSend: (command: string) => void /* Method will convert the string command into TerminalCommands */
    message?: string
    disable: boolean
}

export type ManageTerminalCommandType = {
    command: TerminalCommands
}