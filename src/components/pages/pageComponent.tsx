'use client'

import { useMatrix } from '@/contexts/matrix/matrix.context'
import style from '@/styles/pageComponent.module.css'


const PageComponent = () => {
    const {
        getMatrix
    } = useMatrix()

    return (
        <>
            <div className={style.grid}>
                
            </div>
        </>
    )
}

export default PageComponent