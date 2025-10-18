import getContextMenuOptionImage from '@/helper/getContextMenuOptionImage'
import { ContextMenuType } from '@/lib/constants/contextMenu.enum'
import style from '@/styles/mainContextMenu.module.css'
import { UseMouseType } from '@/types/types'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MainContextMenu = ({ open, xy }: {
    open: boolean,
    xy: UseMouseType
}) => {
    return (
        <motion.div
            className={style.container}
            initial={{
                opacity: 0
            }}

            animate={{
                opacity: open ? 1 : 0,
            }}
            
            style={{
                ...xy
            }}>
            <ul className={style.contextMenu}>
                {
                    Object.keys(ContextMenuType).map((key, index) => {
                        const ctx_key = key as keyof typeof ContextMenuType
                        return (
                            <>
                                <li key={index + key}>
                                    <Image
                                        width={22}
                                        height={22}
                                        src={`/img/contextMenu/${getContextMenuOptionImage({
                                            ctxOption: ContextMenuType[ctx_key]
                                        })}`}

                                        style={{
                                            pointerEvents: 'none'
                                        }}
                                        alt='ctximg'
                                    />
                                    {ContextMenuType[ctx_key]}
                                </li>
                                { index === 2 && <hr className={style.ctxSeparator}/> }
                                { index === 5 && <hr className={style.ctxSeparator}/> }
                            </>
                        )
                    })
                }
            </ul>

        </motion.div>
    )
}

export default MainContextMenu