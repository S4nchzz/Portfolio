'use client'

import style from '@/styles/pageComponent.module.css'

import DesktopRender from '../ui/desktop_render/desktopRender'
import { useItemRefStateList } from '@/contexts/items/items.context'
import { useState } from 'react'
import MainContextMenu from '../ui/contextMenu/mainContextMenu'
import { UseMouseType } from '@/types/types'
import useMouse from '@/hooks/useMouse'

const PageComponent = () => {
    const {
        resetGlobalStyle
    } = useItemRefStateList()

    const [showContextMenu, setShowContextMenu] = useState<boolean>(false)
    const [saveContextPos, setSaveContextPos] = useState<UseMouseType>({ x: 0, y: 0 })
    const {
        pos
    } = useMouse()

    return (
        <div className={style.page}>
            <div className={style.virtualBody}/>
            <div
                className={style.container}
                onClick={() => {
                    resetGlobalStyle()
                    setShowContextMenu(false)
                }}
                onContextMenu={(e) => {
                    e.preventDefault()
                    setShowContextMenu(true)
                    setSaveContextPos(pos)
                }}>

                <MainContextMenu open={showContextMenu} xy={saveContextPos}/>
                <DesktopRender/>
            </div>
        </div>
    )
}

export default PageComponent