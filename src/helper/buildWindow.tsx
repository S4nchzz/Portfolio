import Browser from "@/components/ui/applications/browser";
import Calculator from "@/components/ui/applications/calculator";
import Default from "@/components/ui/applications/default";
import FileExplorer from "@/components/ui/applications/fileExplorer";
import Notepad from "@/components/ui/applications/notepad";
import Settings from "@/components/ui/applications/settings";
import Terminal from "@/components/ui/applications/terminal";
import Trash from "@/components/ui/applications/trash";
import Window from "@/components/ui/window/window";
import { WindowAttr } from "@/interface/windowIface";
import { ItemType } from "@/lib/constants/Item.enum";
import { ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';

const defaultWindowAttr: WindowAttr = {
    width: '1400px',
    height: '700px',
    isOpened: true,
    isFocused: true,
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
        width: '1200px',
        height: '800px',
    },
    'TRASH': {
        ...defaultWindowAttr,
    },
    'DEFAULT': {
        ...defaultWindowAttr,
    },
};

const buildWindow = (type: ItemType, node: ReactNode, key: number) => {
    return <Window key={`${key}-${type}`} uuid={uuidv4()} node={node} windowAttr={appWindowDefaultAttr[type]} />
}

export default buildWindow