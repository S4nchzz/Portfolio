'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type MatrixContextType = {
    matrix: null[][] | undefined
}

export const MatrixContext = createContext<MatrixContextType | undefined>(undefined)

const MatrixProvider = ({ children }: {children: ReactNode}) => {
    const [matrix, setMatrix] = useState<null[][] | undefined>(undefined)
    
    useEffect(() => {
        const matrix = Array.from({ length: 10 }, () =>
            Array.from({ length: 15 }, () => null)
        )
        setMatrix(matrix)
    }, [])

    return (
        <MatrixContext.Provider value={{ matrix }}>
            {children}
        </MatrixContext.Provider>
    )
}

export default MatrixProvider

export const useMatrix = () => {
    const matrixContext = useContext(MatrixContext)

    const addElement = () => {}
    const addElementByRowCol = ({ row, col }: { row: number, col: number}) => {}

    const getElement = () => {}
    const getElementByRowCol = ({ row, col }: { row: number, col: number}) => {}

    const removeElement = () => {}
    const removeElementByRowCol = ({ row, col }: { row: number, col: number}) => {}

    return {
        addElement,
        addElementByRowCol,
        getElement,
        getElementByRowCol,
        removeElement,
        removeElementByRowCol
    }
}