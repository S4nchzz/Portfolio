'use client'

import { MatrixEnum } from "@/lib/constants/matrix.enum";
import { Item } from "@/lib/matrix/Item";
import { ItemComponentTypeCurrentIndex, ItemFromJSON } from "@/types/types";
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
        const eMatrix: (Item | null)[][] = Array.from({ length: MatrixEnum.ROWS }, () =>
            Array.from({ length: MatrixEnum.COLS }, () => null)
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
            
            let nextRow = 0
            let nextCol = 0
            json.forEach((defaultItem) => {
                matrix[nextRow][nextCol] = new Item(
                    defaultItem.img,
                    defaultItem.name,
                    defaultItem.type
                )

                if (nextRow == MatrixEnum.ROWS - 1) {
                    nextRow = 0;
                    nextCol++
                } else {
                    nextRow++
                }
                
                if (nextCol == MatrixEnum.COLS - 1) {
                    nextCol = 0
                    nextRow++
                }
                
                
                
            })

            setMount(true)
            setMatrix(matrix)
        }

        getMainItems()
    }, [])

    useEffect(() => {
        console.log(matrix);
    }, [matrix])

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

    const checkMatrix = () => {
        if (!matrixContext) throw new Error('Matrix context is undefined, where are you using this hook?')
        if (!matrix) throw new Error('Matrix is undefined.')
    }

    const getMatrix = () => matrix

    const addElement = (item: Item) => {
        checkMatrix()
    
        const matrixUpdated = [...matrix!]

        matrixUpdated!.forEach((row, ri) => {
            row.forEach((_, ci) => {
                if (!matrixUpdated[ri][ci]) {
                    matrixUpdated[ri][ci] = item
                }
            })
        })

        console.log(matrixUpdated);
        setMatrix(matrixUpdated)
    }

    const addElementByRowCol = ({ row, col, item, lastElementPosition }: { row: number, col: number, item: Item, lastElementPosition: ItemComponentTypeCurrentIndex }) => {
        checkMatrix()

        if (!matrix![row][col]) {
            const matrixUpdated = [...matrix!]

            matrixUpdated[row][col]  = item
            matrixUpdated[lastElementPosition.row][lastElementPosition.col] = null
            
            console.log(matrixUpdated);
            setMatrix(matrixUpdated)
            matrixContext!.setMatrix(matrixUpdated)
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