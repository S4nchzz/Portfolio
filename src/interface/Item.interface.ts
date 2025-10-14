import { ItemType } from "@/lib/constants/Item.enum";

export interface ItemIface {
    uuid: string,
    img: string,
    name: string,
    type: ItemType
}