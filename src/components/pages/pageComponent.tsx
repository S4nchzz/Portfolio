'use client'

import style from '@/styles/pageComponent.module.css'

import DesktopRender from '../ui/desktop_render/desktopRender'
import { useItems } from '@/contexts/items/items.context'
import CtxMenu from '../ui/ctxMenu/ctxMenu'
import useMouse from '@/hooks/useMouse'
import { useCtxMenu } from '@/contexts/ctxMenu/ctxMenuContext'
import { useEffect } from 'react'
import { useWindow } from '@/contexts/window/window.context'

const PageComponent = () => {
    const {
        resetGlobalStyle
    } = useItems()

    const {
        pos
    } = useMouse()

    const {
        getItemUuid,
        setItemUuid,
        getXy,
        setXY,
        hide,
        isHidden
    } = useCtxMenu()

    const {
        unFocusAll
    } = useWindow()

    useEffect(() => { hide(true) }, [])

    return (
        <div className={style.page}>
            <div className={style.virtualBody}/>
            <div
                className={style.container}
                onClick={() => {
                    resetGlobalStyle()
                    hide(true)
                    unFocusAll()
                }}
                onContextMenu={(e) => {
                    e.preventDefault()
                    setXY({ x: pos.x, y: pos.y })
                    setItemUuid(undefined)
                    hide(false)
                }}>

                <CtxMenu xy={getXy()} itemUuid={getItemUuid()} hide={isHidden()}/>
                <DesktopRender/>
            </div>
        </div>
    )
}

export default PageComponent