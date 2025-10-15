'use client'

import style from '@/styles/pageComponent.module.css'

import DesktopRender from '../ui/desktop_render/desktopRender'

const PageComponent = () => {
    return (
        <div className={style.page}>
            <div className={style.container}>
                <DesktopRender/>
            </div>
        </div>
    )
}

export default PageComponent