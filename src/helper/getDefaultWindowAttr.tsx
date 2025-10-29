import { WindowAttr } from "@/interface/windowIface";
import { ItemType } from "@/lib/constants/Item.enum";

const defaultWindowAttr: WindowAttr = {
    width: '1400px',
    minWidth: undefined,
    height: '700px',
    minHeight: undefined,
    isOpened: true,
    isFocused: true,
    isMinimized: false,
    isMaximized: false,
    x: 0,
    y: 0,
    zindex: 0
};

export const appWindowDefaultAttr: Record<ItemType, WindowAttr> = {
    'CALCULATOR': {
        ...defaultWindowAttr,
        width: '400px',
        height: '600px',
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
    'RESUME': {
        ...defaultWindowAttr,
        minWidth: '500px',
        width: 'fit-content',
        height: '90vh',
    },
    'BROWSER': {
        ...defaultWindowAttr
    },
    'ABOUT_ME': {
        ...defaultWindowAttr,
    },
    'CONTACT': {
        ...defaultWindowAttr,
    },
};

const getDefaultWindowAttr = (type: ItemType) => appWindowDefaultAttr[type]

export default getDefaultWindowAttr