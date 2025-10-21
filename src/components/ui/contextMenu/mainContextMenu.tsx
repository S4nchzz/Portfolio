import getContextMenuOptionImage from '@/helper/getContextMenuOptionImage'
import { DefaultContextMenu, ItemContextMenu } from '@/lib/constants/contextMenus.enum'
import style from '@/styles/mainContextMenu.module.css'
import { UseMouseType } from '@/types/types'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MainContextMenu = ({ xy, itemUuid, hide }: {
    xy: UseMouseType,
    itemUuid?: string | undefined,
    hide: boolean
}) => {
    return (
        <motion.div
            className={style.container}
            initial={{
                opacity: 0,
                display: 'none'
            }}

            animate={{
                opacity: hide ? 0 : 1,
                display: hide ? 'none' : 'flex'
            }}
            
            style={{
                ...xy
            }}>
            <ul className={style.contextMenu}>
                {
                    Object.keys(!itemUuid ? DefaultContextMenu : ItemContextMenu).map((key, index) => {
                        const ctx = !itemUuid ? DefaultContextMenu : ItemContextMenu
                        const ctx_key = key as keyof typeof ctx
                        return (
                            <>
                                <li>
                                    <Image
                                        width={22}
                                        height={22}
                                        src={`/img/contextMenu/${getContextMenuOptionImage({
                                            ctxOption: ctx[ctx_key]
                                        })}`}

                                        style={{
                                            pointerEvents: 'none'
                                        }}
                                        alt='ctximg'
                                    />
                                    {ctx[ctx_key]}
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