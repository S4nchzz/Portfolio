'use client'

import { TaskbarContextType } from "@/types/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


export const TaskbarContext = createContext<TaskbarContextType | undefined>(undefined)

const TaskbarProvider = ({ children }: { children: ReactNode }) => {
    const [starMenuVisibility, setStarMenuVisibility] = useState<boolean>(false)

    return (
        <TaskbarContext.Provider value={{ starMenuVisibility, setStarMenuVisibility }}>
            {children}
        </TaskbarContext.Provider>
    )
}

export default TaskbarProvider

export const useTaskbar = () => {
    const ctx_taskbar = useContext(TaskbarContext)
    useEffect(() => {
        console.log(ctx_taskbar);
    }, [ctx_taskbar])

    const checkContext = () => {
        if (!ctx_taskbar) throw new Error('Taskbar context is not iniitlaized, where are you using this hook?')
    }

    const stamVisibility = (state: boolean) => {
        checkContext()

        ctx_taskbar!.setStarMenuVisibility(state)
    }

    const getStamVisibility = () => {
        checkContext()

        return ctx_taskbar!.starMenuVisibility
    }

    const unfocusTaskbarMenus = () => {
        checkContext()

        ctx_taskbar!.setStarMenuVisibility(false)
    }

    return {
        stamVisibility,
        getStamVisibility,
        unfocusTaskbarMenus
    }
}