'use client'

import { ItemType } from "@/lib/constants/Item.enum";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type ItemRefState = {
    component: HTMLDivElement,
    methodList: {
        resetStyle: () => void
    }
}

type ItemContextType = {
    itemRefStateList: ItemRefState[]
    setItemRefStateList: Dispatch<SetStateAction<ItemRefState[]>>
}

export const ItemContext = createContext<ItemContextType | undefined>(undefined)

const ItemProvider = ({ children }: { children: ReactNode }) => {
    const [itemRefStateList, setItemRefStateList] = useState<ItemRefState[]>([])
    
    return (
        <ItemContext.Provider value={{
            itemRefStateList,
            setItemRefStateList
        }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider

export const useItemRefStateList = () => {
    const itemContext = useContext(ItemContext)

    useEffect(() => {
        if (!itemContext) throw new Error('ItemRefStateList not loaded, is this hook being used at the same DOM level?')
    }, [itemContext])

    const checkContext = () => {
        if (!itemContext) throw new Error('ItemContext is undefined')
    }

    const getItems = () => {
        checkContext()

        return itemContext!.itemRefStateList
    }

    const setItems = (component: HTMLDivElement, resetStyle: () => void ) => {
        checkContext()
        if (!component) throw new Error('HOOK: useItemRefStateList / setItems() | components@param is null or undefined')

        itemContext!.setItemRefStateList(prev => [
            ...prev,
            { 
                component: component,
                methodList: { resetStyle: resetStyle }
            }
        ])
    }

    const getElementByType = (itemType: ItemType) => {
        return itemContext!.itemRefStateList.find((item) => (
            item.component.dataset.type as ItemType) == itemType
        )
    }

    const resetGlobalStyle = (from?: HTMLDivElement) => {
        itemContext!.itemRefStateList.forEach((item: ItemRefState) => {
            if (item.component !== from) {
                item.methodList.resetStyle()
            }
        })
    }

    return {
        getItems,
        setItems,
        getElementByType,
        resetGlobalStyle
    }
}