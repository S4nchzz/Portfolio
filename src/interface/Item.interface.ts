import { ItemType } from "@/lib/constants/Item.enum";

export interface ItemIface {
    readonly uuid: string,
    img: string,
    name: string,
    type: ItemType
}