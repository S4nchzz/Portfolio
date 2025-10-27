import { ItemType } from "@/lib/constants/Item.enum"

const apps: Record<ItemType, string> = {
    [ItemType.CALCULATOR]: 'calculator.svg',
    [ItemType.SETTINGS]: 'settings.svg',
    [ItemType.TERMINAL]: 'terminal.svg',
    [ItemType.RESUME]: 'resume.svg',
    [ItemType.BROSWER]: "browser.svg",
    [ItemType.ABOUT_ME]: "about_me.png",
    [ItemType.CONTACT]: "contact.svg"
}

const getAppImage = (itemType: ItemType) => apps[itemType]

export default getAppImage