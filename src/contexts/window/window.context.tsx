'use client'

import { WindowIface } from "@/interface/windowIface";
import { ChildrenType } from "@/types/types";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type WindowContextType = {
    windowList: WindowIface[],
    setWindowList: Dispatch<SetStateAction<WindowIface[]>>
}

export const WindowContext = createContext<WindowContextType | undefined>(undefined)

const WindowProvider = ({ children }: ChildrenType) => {
    const [windowList, setWindowList] = useState<WindowIface[]>([])

    return (
        <WindowContext.Provider value={{ windowList, setWindowList }}>
            {children}
        </WindowContext.Provider>
    )
}

export default WindowProvider

export const useWindow = () => {
    const ctx_window = useContext(WindowContext)
    
    const checkWindowContext = () => {
        if (!ctx_window) throw new Error('Window context not initialized, where are you using this hook?')
    }

    const addWindow = (window: WindowIface = {
        width: "1400px",
        height: "700px",
        isOpened: true,
        isFocused: true,
        isMaximized: false,
        //! CAUTION WITH X AND Y
        x: 0,
        y: 0
    }) =>  {
        checkWindowContext()
        console.log(window);
        ctx_window!.setWindowList(prev => [...prev, window])
    }

    return {
        addWindow
    }
}