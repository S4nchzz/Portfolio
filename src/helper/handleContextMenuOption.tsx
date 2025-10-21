import { ContextMenuType } from "@/lib/constants/contextMenus.enum"

const handleContextMenuOption = ({ ctx_type } : {
    ctx_type: keyof typeof ContextMenuType
}) => {
    const ctxListener: Record<keyof typeof ContextMenuType, () => void> = {
        VIEW: () => {},
        SORT_BY: () => {},
        REFRESH: () => {},
        NEW: () => {},
        COPY: () => {},
        PASTE: () => {},
        RENAME: () => {},
        DELETE: () => {},
        PROPERTIES: () => {},
    }

    ctxListener[ctx_type]()
}

export default handleContextMenuOption