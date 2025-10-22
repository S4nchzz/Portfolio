import CtxMenuProvider from "@/contexts/ctxMenu/ctxMenuContext"
import ItemProvider from "@/contexts/items/items.context"
import MatrixProvider from "@/contexts/matrix/matrix.context"
import TaskbarProvider from "@/contexts/taskbar/taskbar.context"
import WindowProvider from "@/contexts/window/window.context"
import { ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MatrixProvider>
                <CtxMenuProvider>
                    <WindowProvider>
                        <TaskbarProvider>
                            <ItemProvider>
                                {children}
                            </ItemProvider>
                        </TaskbarProvider>
                    </WindowProvider>
                </CtxMenuProvider>
            </MatrixProvider>
        </>
    )
}

export default Providers