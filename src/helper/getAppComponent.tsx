import Browser from "@/components/ui/applications/browser";
import Calculator from "@/components/ui/applications/calculator";
import Default from "@/components/ui/applications/default";
import FileExplorer from "@/components/ui/applications/fileExplorer";
import Notepad from "@/components/ui/applications/notepad";
import Settings from "@/components/ui/applications/settings";
import Terminal from "@/components/ui/applications/terminal";
import Trash from "@/components/ui/applications/trash";
import { ItemType } from "@/lib/constants/Item.enum";
import { ReactNode } from "react";

const appComponents: Record<ItemType, ReactNode> = {
    [ItemType.NOTEPAD]: <Notepad/>,
    [ItemType.CALCULATOR]: <Calculator/>,
    [ItemType.BROWSER]: <Browser/>,
    [ItemType.FILE_EXPLORER]: <FileExplorer/>,
    [ItemType.SETTINGS]: <Settings/>,
    [ItemType.TERMINAL]: <Terminal/>,
    [ItemType.TRASH]: <Trash/>,
    [ItemType.DEFAULT]: <Default/>,
}

const getAppComponent = (type: ItemType) => appComponents[type] ||<Default/>

export default getAppComponent