import ItemProvider from "@/contexts/items/items.context"
import MatrixProvider from "@/contexts/matrix/matrix.context"
import WindowProvider from "@/contexts/window/window.context"
import { ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MatrixProvider>
                <WindowProvider>
                    <ItemProvider>
                        {children}
                    </ItemProvider>
                </WindowProvider>
            </MatrixProvider>
        </>
    )
}

export default Providers