'use client'

import { UseMouseType } from "@/types/types";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type CtxMenuContextType = {
    ctxPos: UseMouseType,
    setCtxPos: Dispatch<SetStateAction<UseMouseType>>,
    itemUuid: string | undefined,
    setItemUuid: Dispatch<SetStateAction<string | undefined>>,
    hideCtx: boolean,
    setHideCtx: Dispatch<SetStateAction<boolean>>
}

export const CtxMenuContext = createContext<CtxMenuContextType | undefined>(undefined)

const CtxMenuProvider = ({ children }: { children: ReactNode }) => {
    const [ctxPos, setCtxPos] = useState<UseMouseType>({ x: 0, y: 0 })
    const [itemUuid, setItemUuid] = useState<string | undefined>(undefined)
    const [hideCtx, setHideCtx] = useState<boolean>(false)

    return (
        <CtxMenuContext.Provider value={{ ctxPos, setCtxPos, itemUuid, setItemUuid, hideCtx, setHideCtx}}>
            {children}
        </CtxMenuContext.Provider>
    )
}

export default CtxMenuProvider

export const useCtxMenu = () => {
    const ctxContext = useContext(CtxMenuContext)

    const checkContext = () => {
        if (!ctxContext) throw new Error('CtxContext is not initialized.')
    }

    const getItemUuid = () => {
        checkContext()

        return ctxContext!.itemUuid
    }

    const setItemUuid = (itemUuid: string | undefined) => {
        checkContext()

        ctxContext!.setItemUuid(itemUuid)
    }

    const getXy = () => {
        checkContext()

        return ctxContext!.ctxPos
    }

    const setXY = (xy: UseMouseType) => {
        checkContext()

        const ctxMenuCurrentHeight = getItemUuid() ? 220 : 170
        const taskBarHeight = 46

        if (window.innerHeight - taskBarHeight - xy.y < ctxMenuCurrentHeight) {
            xy.y = xy.y - ctxMenuCurrentHeight
        }

        ctxContext!.setCtxPos(xy)
    }

    const hide = (hide: boolean) => {
        checkContext()

        ctxContext!.setHideCtx(hide)
    }

    const isHidden = () => {
        checkContext()

        return ctxContext!.hideCtx
    }

    return {
        getItemUuid,
        setItemUuid,
        getXy,
        setXY,
        hide,
        isHidden
    }
}