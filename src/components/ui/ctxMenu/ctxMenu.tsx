import { useCtxMenu } from '@/contexts/ctxMenu/ctxMenuContext'
import { useMatrix } from '@/contexts/matrix/matrix.context'
import getContextMenuOptionImage from '@/helper/getContextMenuOptionImage'
import { DefaultContextMenu, ItemContextMenu } from '@/lib/constants/contextMenus.enum'
import { Item } from '@/lib/matrix/Item'
import style from '@/styles/ctxMenu.module.css'
import { UseMouseType } from '@/types/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const CtxMenu = ({ xy, itemUuid, hide }: {
    xy: UseMouseType,
    itemUuid?: string | undefined,
    hide: boolean
}) => {
    const {
        addElement,
        getElementByUuid,
        removeElementByUuid
    } = useMatrix()

    const {
        copyItem,
        getCopiedItem
    } = useCtxMenu()

    const handleContextMenuOption = ({ ctx_type } : {
        ctx_type: keyof typeof DefaultContextMenu | ItemContextMenu
    }) => {
        const ctxDefault: Record<keyof typeof DefaultContextMenu, () => void> = {
            VIEW: () => {},
            PASTE: () => {
                const copiedItem = getCopiedItem()
                if (!copiedItem) return

                addElement(copiedItem, true)
            },
            SORT_BY: () => {},
            REFRESH: () => {},
            NEW: () => {}
        }

        const ctxItem: Record<keyof typeof ItemContextMenu, () => void> = {
            COPY: () => {
                if (!itemUuid) throw new Error('ItemUUID is not available, did you use this function from DefaultContextMenu?')
                const item = getElementByUuid(itemUuid)
                if (!item) return

                copyItem(item)
            },
            RENAME: () => {},
            DELETE: () => {
                if (!itemUuid) throw new Error('ItemUUID is not available, did you use this function from DefaultContextMenu?')
                removeElementByUuid(itemUuid)
            },
            PROPERTIES: () => {}
        }

        if (ctx_type in DefaultContextMenu) {
            ctxDefault[ctx_type as keyof typeof DefaultContextMenu]()
            return
        }
        
        ctxItem[ctx_type as keyof typeof ItemContextMenu]()
    }

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
                            <div key={key}>
                                <li
                                    onClick={() => handleContextMenuOption({
                                        ctx_type: ctx_key
                                    })}

                                    style={{
                                        opacity: getCopiedItem() && ctx_key == 'PASTE' ? 1 : ctx_key !== 'PASTE' ? 1 : .5,
                                        pointerEvents: getCopiedItem() && ctx_key == 'PASTE' ? 'all' : ctx_key != 'PASTE' ? 'all' : 'none'
                                    }}>
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
                            </div>
                        )
                    })
                }
            </ul>

        </motion.div>
    )
}

export default CtxMenu