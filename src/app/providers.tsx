import MatrixProvider from "@/contexts/matrix/matrix.context"
import { ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MatrixProvider>
                {children}
            </MatrixProvider>
        </>
    )
}

export default Providers