import Calculator from "@/components/ui/applications/calculator"
import Resume from "@/components/ui/applications/resume";
import Settings from "@/components/ui/applications/settings";
import Terminal from "@/components/ui/applications/terminal";
import { ItemType } from "@/lib/constants/Item.enum";
import { ReactNode } from "react";
import AboutMe from "@/components/ui/applications/aboutMe";
import Contact from "@/components/ui/applications/contact";
import Browser from "@/components/ui/applications/browser";

const appComponents: Record<ItemType, (wUuid: string) => ReactNode> = {
    [ItemType.CALCULATOR]: (wUuid) => <Calculator wUuid={wUuid} />,
    [ItemType.SETTINGS]: (wUuid) => <Settings wUuid={wUuid} />,
    [ItemType.TERMINAL]: (wUuid) => <Terminal wUuid={wUuid} />,
    [ItemType.RESUME]: (wUuid) => <Resume wUuid={wUuid} />,
    [ItemType.ABOUT_ME]: (wUuid) => <AboutMe wUuid={wUuid}/>,
    [ItemType.BROSWER]: (wUuid) => <Browser wUuid={wUuid}/>,
    [ItemType.CONTACT]: (wUuid) => <Contact wUuid={wUuid}/>
}

const getAppComponent = (type: ItemType, wUuid: string) => appComponents[type](wUuid)

export default getAppComponent