import { ItemType } from "@/lib/constants/Item.enum"
import { ReactNode } from "react"

export interface WindowIface {
    uuid: string,
    node: ReactNode,
    type: ItemType,
    windowAttr: WindowAttr
}

export interface WindowAttr {
    width: string,
    height: string,
    isOpened: boolean,
    isFocused: boolean,
    isMaximized: boolean,
    isMinimized: boolean,
    x: number,
    y: number
}