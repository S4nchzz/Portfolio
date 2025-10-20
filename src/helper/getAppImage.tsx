import { ItemType } from "@/lib/constants/Item.enum"

const apps: Record<ItemType, string> = {
    [ItemType.NOTEPAD]: 'notepad.svg',
    [ItemType.CALCULATOR]: 'calculator.svg',
    [ItemType.BROWSER]: 'browser.svg',
    [ItemType.FILE_EXPLORER]: 'file-explorer.svg',
    [ItemType.SETTINGS]: 'settings.svg',
    [ItemType.TERMINAL]: 'terminal.svg',
    [ItemType.TRASH]: 'trash.svg',
    [ItemType.RESUME]: 'resume.svg',
    [ItemType.DEFAULT]: '',
}

const getAppImage = (itemType: ItemType) => apps[itemType]

export default getAppImage