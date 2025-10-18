import { ContextMenuType } from "@/lib/constants/contextMenu.enum"

const getContextMenuOptionImage = ({ ctxOption }: {
    ctxOption: ContextMenuType
}) => {
    const ctxImage: Record<ContextMenuType, string> = {
        [ContextMenuType.VIEW]: "view.svg",
        [ContextMenuType.SORT_BY]: "sort.svg",
        [ContextMenuType.REFRESH]: "refresh.svg",
        [ContextMenuType.NEW]: "new.svg",
        [ContextMenuType.COPY]: "copy.svg",
        [ContextMenuType.PASTE]: "paste.svg",
        [ContextMenuType.RENAME]: "rename.svg",
        [ContextMenuType.DELETE]: "delete.svg",
        [ContextMenuType.PROPERTIES]: "properties.svg"
    }

    return ctxImage[ctxOption]
}

export default getContextMenuOptionImage