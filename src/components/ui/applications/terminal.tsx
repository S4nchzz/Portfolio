import style from '@/styles/terminal.module.css'
import TerminalInput from '../terminalInput/terminalInput'
import { useState } from 'react'
import { TerminalCommands } from '@/lib/constants/terminalCommands.enum'
import manageTerminalCommand from '@/helper/manageTerminalCommand'
import { ItemType } from '@/lib/constants/Item.enum'
import { useWindow } from '@/contexts/window/window.context'
import { v4 as uuidv4 } from 'uuid';
import getAppComponent from '@/helper/getAppComponent'
import getDefaultWindowAttr from '@/helper/getDefaultWindowAttr'


const Terminal = () => {
    const [focusInput, setFocusInput] = useState<boolean>(false)

    const [commandResults, setCommandResults] = useState<string[]>([])
    const defaultErrorMessage = '\"$cc\" is not a valid command, please use help to get more info.'

    const [commandList, setCommandList] = useState<string[]>([])

    const [firstCls, setFirstCls] = useState<boolean>(false)

    const {
        addWindow
    } = useWindow()
    const manageStartCommand = (startCommand: string) => {
        const appToBeOpened = startCommand.split(' ')[1].toUpperCase()
        const appExists = Object.values(ItemType).some((item) => item === appToBeOpened)

        if (!appExists) return false

        const appTypeCast = appToBeOpened as ItemType
        addWindow({
                    uuid: uuidv4(),
                    node: getAppComponent(appTypeCast),
                    type: appTypeCast,
                    windowAttr: getDefaultWindowAttr(appTypeCast)
                })

        return true
    }

    const onSend = (command: string) => {
        command = command.toLowerCase()
        if (command) setCommandList(prev => [...prev, command])
            
        /* Start command = start notepad for example */
        if (command.startsWith('start')) {
            /* If the app exists start --> notepad <-- then the command name will be start by default to find it on TerminalCommands*/
            if (manageStartCommand(command)) command = 'start'
        }

        setNPrevCommand(0)
        console.log(commandList);

        if (command === 'cls' || command === 'clear') {
            setCommandResults([])
            setFirstCls(true)
            return
        }

        const commandValid = Object.values(TerminalCommands).find((c) => c == command )
        if (!commandValid) {
            setCommandResults(prev => [...prev, defaultErrorMessage.replace('$cc', command)])
            return
        }

        setCommandResults(
            prev => [
                ...prev,
                manageTerminalCommand({
                    command: commandValid
                })
            ])
    }

    const [keyControlDown, setKeyControlDown] = useState<boolean>(false)

    const [keyPrevCommand, setKeyPrevCommand] = useState<boolean>(false)
    const [nPrevCommand, setNPrevCommand] = useState<number>(0)

    return (
        <div
            className={style.container}
            onClick={() => setFocusInput(!focusInput)}
            onKeyDown={(k) => {
                if (k.code === 'ControlLeft') {
                    setKeyControlDown(true)
                    return
                }

                if (k.code === 'KeyC' &&  keyControlDown) {
                    setFirstCls(true)
                    setCommandResults([])
                }

                if (k.code === 'ArrowUp') {
                    setKeyPrevCommand(true)
                    setNPrevCommand(prev => prev != commandList.length ? prev + 1 : prev)
                }
                
                if (k.code === 'ArrowDown') {
                    setKeyPrevCommand(true)
                    setNPrevCommand(prev => prev > 1 ? prev - 1 : prev)
                }
            }}

            onKeyUp={(k) => {
                if (k.code === 'ControlLeft') {
                    setKeyControlDown(false)
                    return
                }
            }}>
            <div className={style.content}>
                {
                    !firstCls &&
                    <div className={style.rights}>
                        <p>S4nchzz OS [Versión 0.0.1]</p>
                        <p>S4nchzz Portfolio. Todos los derechos reservados.</p>
                    </div>
                }
                <div
                    className={style.prompt}
                    style={{
                        marginTop: firstCls ? 0 : undefined
                    }}>
                    {
                        commandResults.map((message, index) => {
                            const isLast = index + 1 === commandResults.length;
                            return <TerminalInput
                                        key={index}
                                        focus={focusInput}
                                        onSend={onSend}
                                        message={message}
                                        disable={!isLast}
                                        iText={isLast && keyPrevCommand ? commandList.at(commandList.length - nPrevCommand) : undefined}
                                    />
                        })
                    }
                    {
                        commandResults.length == 0
                            && <TerminalInput
                                    focus={focusInput}
                                    onSend={onSend}
                                    disable={commandResults.length > 0}
                                    iText={keyPrevCommand ? commandList.at(commandList.length - nPrevCommand) : undefined}
                                />
                    }
                </div>
            </div>
        </div>
    )
}

export default Terminal