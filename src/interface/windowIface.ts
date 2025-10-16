import { ItemType } from "@/lib/constants/Item.enum"

export interface WindowIface {
    node: React.ReactNode,
    type: ItemType
}

export interface WindowAttr {
    width: string,
    height: string,
    isOpened: boolean,
    isFocused: boolean,
    isMaximized: boolean,
    x: number,
    y: number
}