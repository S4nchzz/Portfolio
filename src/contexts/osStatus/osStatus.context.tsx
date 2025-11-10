'use client'

import { osStatusType } from "@/types/types";
import { createContext, ReactNode, useContext, useState } from "react";

const OSStatusContext = createContext<osStatusType | undefined>(undefined)

const OSStatusProvider = ({ children }: { children: ReactNode}) => {
    const [on, setOn] = useState<boolean>(false)

    return (
        <OSStatusContext.Provider value={{ on, setOn }}>
            {children}
        </OSStatusContext.Provider>
    )
}

export default OSStatusProvider

export const useOSState = () => {
    const ctx = useContext(OSStatusContext)

    const checkContext = () => {
        if (!ctx) throw new Error('This context is not initialized, where are you using this hook?')
    }

    const alterOSState = (newState: boolean) => {
        checkContext()

        ctx!.setOn(newState)
    }

    const osState = () => {
        checkContext()

        return ctx!.on;
    }

    return {
        alterOSState,
        osState
    }
}