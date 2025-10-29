import execBrowserTo from '@/helper/execBrowserTo'
import style from '@/styles/browserSearchCard.module.css'
import { BrowserSearchCardType } from '@/types/types'
import Image from 'next/image'
import { useEffect } from 'react'

const BrowserSearchCard = ({
    title,
    subTitle,
    img,
    uriTitle,
    pageDesc,
    to,
    focus = false
}: BrowserSearchCardType) => {
    return (
        <div
            className={style.container}
            style={{
                filter: focus ? 'drop-shadow(0 0 0.1rem grey)' : undefined
            }}>
            <div className={style.header}>
                <Image
                    className={style.pageImg}
                    src={img}
                    width={30}
                    height={30}
                    alt='Search result image'
                />
                <div className={style.pageTitle}>
                    <span className={style.title}>{title}</span>
                    <span className={style.subTitle}>{subTitle}</span>
                </div>
            </div>
            <div className={style.content}>
                <span
                    className={style.uriTitle}
                    onClick={() => execBrowserTo({
                        to: to
                    })}
                    >{uriTitle}</span>
                <span className={style.pageDesc}>{pageDesc}</span>
            </div>
        </div>
    )
}

export default BrowserSearchCard