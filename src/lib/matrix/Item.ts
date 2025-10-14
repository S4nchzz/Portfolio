import { ItemIface } from "@/interface/Item.interface";
import { ItemType } from "../constants/Item.enum";
import { randomUUID } from "crypto";

export class Item implements ItemIface {
    readonly uuid: string;
    img: string;
    name: string;
    type: ItemType;

    constructor(img: string, name: string, type: ItemType) {
        this.uuid = randomUUID()
        this.img = img
        this.name = name
        this.type = type
    }
}