import { useMatrix } from '@/contexts/matrix/matrix.context'
import getContextMenuOptionImage from '@/helper/getContextMenuOptionImage'
import { DefaultContextMenu, ItemContextMenu } from '@/lib/constants/contextMenus.enum'
import { Item } from '@/lib/matrix/Item'
import style from '@/styles/ctxMenu.module.css'
import { UseMouseType } from '@/types/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const CtxMenu = ({ xy, itemUuid, hide }: {
    xy: UseMouseType,
    itemUuid?: string | undefined,
    hide: boolean
}) => {
    const {
        addElement,
        getElementByUuid
    } = useMatrix()

    const [copiedItem, setCopiedItem] = useState<Item | undefined>(undefined)
    useEffect(() => {
        console.log(copiedItem);
    }, [])

    const handleContextMenuOption = ({ ctx_type } : {
        ctx_type: keyof typeof DefaultContextMenu | ItemContextMenu
    }) => {
        const ctxDefault: Record<keyof typeof DefaultContextMenu, () => void> = {
            VIEW: () => {},
            PASTE: () => {
                if (!copiedItem) return
                
                addElement(copiedItem)
            },
            SORT_BY: () => {},
            REFRESH: () => {},
            NEW: () => {}
        }

        const ctxItem: Record<keyof typeof ItemContextMenu, () => void> = {
            COPY: () => {
                if (!itemUuid) throw new Error('ItemUUID is not available, did you use this function from DefaultContextMenu?')
                const item = getElementByUuid(itemUuid)
                setCopiedItem(item)
            },
            RENAME: () => {},
            DELETE: () => {},
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
                                <li onClick={() => handleContextMenuOption({
                                    ctx_type: ctx_key
                                    
                                    })}>
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