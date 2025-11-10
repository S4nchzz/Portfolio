import CtxMenuProvider from "@/contexts/ctxMenu/ctxMenuContext"
import ItemProvider from "@/contexts/items/items.context"
import MailProvider from "@/contexts/mailContext/mail.context"
import MatrixProvider from "@/contexts/matrix/matrix.context"
import OSStatusProvider from "@/contexts/osStatus/osStatus.context"
import TaskbarProvider from "@/contexts/taskbar/taskbar.context"
import WindowProvider from "@/contexts/window/window.context"
import { ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MatrixProvider>
                <MailProvider>
                    <OSStatusProvider>
                        <CtxMenuProvider>
                            <WindowProvider>
                                <TaskbarProvider>
                                    <ItemProvider>
                                        {children}
                                    </ItemProvider>
                                </TaskbarProvider>
                            </WindowProvider>
                        </CtxMenuProvider>
                    </OSStatusProvider>
                </MailProvider>
            </MatrixProvider>
        </>
    )
}

export default Providers