'use client'

import { ItemType } from "@/lib/constants/Item.enum"
import ItemComponent from "../ui/item/ItemComponent"

const PageComponent = () => {
    return (
        <>
            {
                <ItemComponent img='/img/items/notepad.svg'  name="Notepad" type={ItemType.NOTEPAD}/>
            }
        </>
    )
}

export default PageComponent