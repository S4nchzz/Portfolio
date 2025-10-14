'use client'

import { Item } from "@/lib/matrix/Item";
import { ItemFromJSON } from "@/types/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type MatrixContextType = {
    matrix: (Item | null)[][] | undefined,
    setMatrix: (newMatrix: (Item | null)[][]) => void
}

export const MatrixContext = createContext<MatrixContextType | undefined>(undefined)

const MatrixProvider = ({ children }: {children: ReactNode}) => {
    const [matrix, setMatrix] = useState<(Item | null)[][] | undefined>(undefined)
    const [mount, setMount] = useState<boolean>(false)
    
    const generateEmptyMatrix = () => {
        const eMatrix: (Item | null)[][] = Array.from({ length: 10 }, () =>
            Array.from({ length: 15 }, () => null)
        )

        return eMatrix
    }

    useEffect(() => {
        if (mount) return
        const matrix = generateEmptyMatrix()

        const getMainItems = async() => {
            const data = await fetch('/util/mainApps.json')
            if (!data) throw new Error('mainApp.json empty or not found.')
            const json: ItemFromJSON[] = await data.json()
        
            if (!matrix) throw new Error('Matrix dont initialized.')
            
            let i_json = 0
            matrix.forEach((row, ri) => {
                row.forEach((_col, rc) => {
                    console.log(json[i_json]);
                    matrix[ri][rc] = i_json <= Object.keys(json).length - 1
                        ? new Item(
                            json[i_json].img,
                            json[i_json].name,
                            json[i_json].type
                        )
                        : null
                    i_json++
                })
            });

            setMount(true)
            setMatrix(matrix)
        }

        getMainItems()
    }, [])

    return (
        <MatrixContext.Provider value={{ matrix, setMatrix }}>
            {children}
        </MatrixContext.Provider>
    )
}

export default MatrixProvider

export const useMatrix = () => {
    const matrixContext = useContext(MatrixContext)
    const [matrix, setMatrix] = useState<(null | Item)[][]>()

    useEffect(() => {
        setMatrix(matrixContext?.matrix)
    }, [matrixContext])

    const getMatrix = () => matrix

    const addElement = () => {}
    const addElementByRowCol = ({ row, col, item }: { row: number, col: number, item: Item }) => {
        if (!matrixContext) return new Error('Matrix context is undefined, where are you using this hook?')
        if (!matrix) return new Error('Matrix is undefined.')
        if (!matrix[row][col]) {
            const matrixUpdated = [...matrix]
            matrixUpdated[row][col]  = item

            console.log(matrixUpdated);
            setMatrix(matrixUpdated)
            matrixContext.setMatrix(matrixUpdated)
        }
    }

    const getElement = () => {}
    const getElementByRowCol = ({ row, col }: { row: number, col: number}) => {}

    const removeElement = () => {}
    const removeElementByRowCol = ({ row, col }: { row: number, col: number}) => {}

    return {
        getMatrix,
        addElement,
        addElementByRowCol,
        getElement,
        getElementByRowCol,
        removeElement,
        removeElementByRowCol
    }
}