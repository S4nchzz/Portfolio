import Window from "@/components/ui/window/window";
import { WindowIface } from "@/interface/windowIface";

const buildWindow = (window: WindowIface, key: number) => {
    return <Window key={`${key}-${window.type}`} uuid={window.uuid} node={window.node} nodeType={window.type} windowAttr={window.windowAttr}/>
}

export default buildWindow