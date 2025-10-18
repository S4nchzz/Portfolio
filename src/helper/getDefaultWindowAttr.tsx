import { WindowAttr } from "@/interface/windowIface";
import { ItemType } from "@/lib/constants/Item.enum";

const defaultWindowAttr: WindowAttr = {
    width: '1400px',
    height: '700px',
    isOpened: true,
    isFocused: true,
    isMinimized: false,
    isMaximized: false,
    x: 0,
    y: 0,
};

export const appWindowDefaultAttr: Record<ItemType, WindowAttr> = {
    'NOTEPAD': {
        ...defaultWindowAttr,
    },
    'CALCULATOR': {
        ...defaultWindowAttr,
        width: '400px', 
        height: '600px',
    },
    'BROWSER': {
        ...defaultWindowAttr,
    },
    'FILE_EXPLORER': {
        ...defaultWindowAttr,
    },
    'SETTINGS': {
        ...defaultWindowAttr,
        width: '1000px',
        height: '800px',
    },
    'TERMINAL': {
        ...defaultWindowAttr,
        width: '1100px',
        height: '600px',
    },
    'TRASH': {
        ...defaultWindowAttr,
    },
    'DEFAULT': {
        ...defaultWindowAttr,
    },
};

const getDefaultWindowAttr = (type: ItemType) => appWindowDefaultAttr[type]

export default getDefaultWindowAttr