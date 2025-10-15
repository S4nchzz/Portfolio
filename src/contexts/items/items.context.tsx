'use client'

import { ItemType } from "@/lib/constants/Item.enum";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ItemContextType = {
    itemComponentList: HTMLDivElement[]
    setItemComponentList: (component: HTMLDivElement[]) => void
}

export const ItemContext = createContext<ItemContextType | undefined>(undefined)


const ItemProvider = ({ children }: { children: ReactNode }) => {
    const [itemComponentList, setItemComponentList] = useState<HTMLDivElement[]>([])
    
    return (
        <ItemContext.Provider value={{
            itemComponentList,
            setItemComponentList
        }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider

export const useItemComponentList = () => {
    const itemContext = useContext(ItemContext)

    useEffect(() => {
        if (!itemContext) throw new Error('ItemComponentList not loaded, is this hook being used at the same DOM level?')
    }, [itemContext])

    const checkContext = () => {
        if (!itemContext) throw new Error('ItemContext is undefined')
    }

    const getItems = () => {
        checkContext()

        return itemContext!.itemComponentList
    }

    const setItems = (components: HTMLDivElement | HTMLDivElement[]) => {
        checkContext()
        if (!components) throw new Error('HOOK: useItemComponentList / setItems() | components@param is null or undefined')
        
        if (Array.isArray(components)) {
            itemContext!.setItemComponentList(components)
            return
        }

        const prevItems = itemContext!.itemComponentList
        itemContext!.setItemComponentList([...prevItems, components])
    }

    const getElementByType = (itemType: ItemType) => { return itemContext!.itemComponentList.find((item) => (item.dataset.type as ItemType) == itemType) }

    return {
        getItems,
        setItems,
        getElementByType
    }
}