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

    const addWindow = (window: WindowIface) =>  {
        const resetPrevFocus = (prevs: WindowIface[]) => {
            return prevs.map((winPrev) => {
                winPrev.windowAttr.isFocused = false
                return winPrev
            })
        }


        checkWindowContext()
        ctx_window!.setWindowList(prev => [...resetPrevFocus(prev), window])
    }

    const getWindows = (): WindowIface[] => {
        checkWindowContext()

        return ctx_window!.windowList
    }

    const deleteWindow = (uuid: string) => {
        checkWindowContext()
        
        const updatedList = ctx_window!.windowList.filter((window: WindowIface) => window.uuid != uuid)
        ctx_window!.setWindowList(updatedList)
    }

    const setMinimizeWindowState = (state: boolean, uuid: string) => {
        checkWindowContext();

        ctx_window!.setWindowList(prev =>
            prev.map(win => {
                if (win.uuid === uuid) {
                    return {
                        ...win,
                        windowAttr: {
                            ...win.windowAttr,
                            isMinimized: state,
                            isFocused: !state
                        }
                    };
                }
                return {
                    ...win,
                    windowAttr: {
                        ...win.windowAttr,
                        isFocused: false
                    }
                };
            })
        );
    };

    const getWindow = (uuid: string) => {
        checkWindowContext()

        return ctx_window!.windowList.find((window) => window.uuid == uuid)
    }

    const setMaximizedWindowState = (state: boolean, uuid: string) => {
        checkWindowContext()

        ctx_window!.setWindowList(prev => {
            return prev.map((w) => {
                if (w.uuid === uuid) {
                    return {
                        ...w,
                        windowAttr: {
                            ...w.windowAttr,
                            isMaximized: state
                        }
                    };
                }

                return w;
            });
        })
    }

    const focusThisWindow = (uuid: string) => {
        checkWindowContext()

        const highestZindex: number[] = []
        ctx_window!.windowList.map((w) => {
            highestZindex.push(w.windowAttr.zindex)
        })

        const maxZindex = Math.max(...highestZindex)

        ctx_window!.setWindowList((prev) => {
            return prev.map((w) => {
                if (w.uuid === uuid) {
                    return {
                        ...w,
                        windowAttr: {
                            ...w.windowAttr,
                            isFocused: true,
                            zindex: maxZindex + 1
                        }
                    }
                }

                return {
                    ...w,
                    windowAttr: {
                        ...w.windowAttr,
                        isFocused: false
                    }
                }
            })
        })
        
    }

    const unFocusAll = () => {
        checkWindowContext()!

        ctx_window!.setWindowList(prev => {
            return prev.map((w) => {
                return {
                    ...w,
                    windowAttr: {
                        ...w.windowAttr,
                        isFocused: false
                    }
                }
            })
        })
    }

    return {
        addWindow,
        getWindows,
        deleteWindow,
        setMinimizeWindowState,
        setMaximizedWindowState,
        getWindow,
        focusThisWindow,
        unFocusAll
    }
}