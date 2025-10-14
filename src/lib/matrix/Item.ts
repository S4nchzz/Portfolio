import { ItemIface } from "@/interface/Item.interface";
import { ItemType } from "../constants/Item.enum";
import { v4 as uuidv4 } from 'uuid';

export class Item implements ItemIface {
    readonly uuid: string;
    img: string;
    name: string;
    type: ItemType;

    constructor(img: string, name: string, type: ItemType) {
        this.uuid = uuidv4()
        this.img = img
        this.name = name
        this.type = type
    }
}