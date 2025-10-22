import { DefaultContextMenu, ItemContextMenu } from "@/lib/constants/contextMenus.enum"

const getContextMenuOptionImage = ({ ctxOption }: {
    ctxOption: DefaultContextMenu | ItemContextMenu
}) => {
    const ctxDefaultImg: Record<DefaultContextMenu, string> = {
        [DefaultContextMenu.NEW]: "new.svg",
        [DefaultContextMenu.PASTE]: "paste.svg",
        [DefaultContextMenu.VIEW]: "view.svg",
        [DefaultContextMenu.SORT_BY]: "sort.svg",
        [DefaultContextMenu.REFRESH]: "refresh.svg"
    }

    const ctxItemImg: Record<ItemContextMenu, string> = {
        [ItemContextMenu.COPY]: "copy.svg",
        [ItemContextMenu.RENAME]: "rename.svg",
        [ItemContextMenu.DELETE]: "delete.svg",
        [ItemContextMenu.PROPERTIES]: "properties.svg"
    }

    return Object.values(DefaultContextMenu).includes(ctxOption as DefaultContextMenu) ? ctxDefaultImg[ctxOption as DefaultContextMenu] : ctxItemImg[ctxOption as ItemContextMenu]
}

export default getContextMenuOptionImage