import execBrowserTo from '@/helper/execBrowserTo'
import style from '@/styles/browserSearchCard.module.css'
import { BrowserSearchCardType } from '@/types/types'
import Image from 'next/image'

const BrowserSearchCard = ({
    title,
    subTitle,
    img,
    uriTitle,
    pageDesc,
    to
}: BrowserSearchCardType) => {
    return (
        <div className={style.container}>
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