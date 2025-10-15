import ItemProvider from "@/contexts/items/items.context"
import MatrixProvider from "@/contexts/matrix/matrix.context"
import { ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MatrixProvider>
                <ItemProvider>
                    {children}
                </ItemProvider>
            </MatrixProvider>
        </>
    )
}

export default Providers