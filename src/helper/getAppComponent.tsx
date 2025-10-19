import Browser from "@/components/ui/applications/browser";
import Calculator from "@/components/ui/applications/calculator";
import Default from "@/components/ui/applications/default";
import FileExplorer from "@/components/ui/applications/fileExplorer";
import Notepad from "@/components/ui/applications/notepad";
import Resume from "@/components/ui/applications/resume";
import Settings from "@/components/ui/applications/settings";
import Terminal from "@/components/ui/applications/terminal";
import Trash from "@/components/ui/applications/trash";
import { ItemType } from "@/lib/constants/Item.enum";
import { ReactNode } from "react";

const appComponents: Record<ItemType, (wUuid: string) => ReactNode> = {
    [ItemType.NOTEPAD]: (wUuid) => <Notepad wUuid={wUuid} />,
    [ItemType.CALCULATOR]: (wUuid) => <Calculator wUuid={wUuid} />,
    [ItemType.BROWSER]: (wUuid) => <Browser wUuid={wUuid} />,
    [ItemType.FILE_EXPLORER]: (wUuid) => <FileExplorer wUuid={wUuid} />,
    [ItemType.SETTINGS]: (wUuid) => <Settings wUuid={wUuid} />,
    [ItemType.TERMINAL]: (wUuid) => <Terminal wUuid={wUuid} />,
    [ItemType.TRASH]: (wUuid) => <Trash wUuid={wUuid} />,
    [ItemType.DEFAULT]: (wUuid) => <Default wUuid={wUuid} />,
    [ItemType.RESUME]: (wUuid) => <Resume wUuid={wUuid} />
}


const getAppComponent = (type: ItemType, wUuid: string) => appComponents[type](wUuid) || <Default wUuid={wUuid}/>

export default getAppComponent