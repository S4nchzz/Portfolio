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
    
    const generateEmptyMatrix = () => {
        const eMatrix: (Item | null)[][] = Array.from({ length: MatrixEnum.ROWS }, () =>
            Array.from({ length: MatrixEnum.COLS }, () => null)
        )

        return eMatrix
    }

    const preloadLocalStorageMatrix = (): boolean => {
        const mtx_pos_save = localStorage.getItem('mtx_pos_save')
        if (!mtx_pos_save) return false
        const preloadMatrixJSON = JSON.parse(mtx_pos_save)

        const preloadMatrix: (Item | null)[][] = preloadMatrixJSON.map((row: []) => {
            return row.map((cell: Item | null) => {
                if (!cell) return null
                return new Item(cell.img, cell.name, cell.type)
            })
        })

        console.log(preloadMatrix);
        setMatrix(preloadMatrix)
        return true
    }

    useEffect(() => {
        if (preloadLocalStorageMatrix()) return

        const matrix = generateEmptyMatrix()

        const getMainItems = async() => {
            const data = await fetch('/util/mainApps.json')
            if (!data) throw new Error('mainApp.json empty or not found.')
            const json: ItemFromJSON[] = await data.json()
        
            if (!matrix) throw new Error('Matrix dont initialized.')
            
                console.log(json);
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

            setMatrix(matrix)
        }

        getMainItems()
    }, [])

    useEffect(() => {
       
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

       
        setMatrix(matrixUpdated)
    }

    const addElementByRowCol = ({ row, col, item, lastElementPosition }: { row: number, col: number, item: Item, lastElementPosition: ItemComponentTypeCurrentIndex }) => {
        checkMatrix()

        if (!matrix![row][col]) {
            const matrixUpdated = [...matrix!]

            matrixUpdated[row][col]  = item
            matrixUpdated[lastElementPosition.row][lastElementPosition.col] = null

            localStorage.setItem('mtx_pos_save', JSON.stringify(matrixUpdated))

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