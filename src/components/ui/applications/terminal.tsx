import style from '@/styles/terminal.module.css'
import TerminalInput from '../terminalInput/terminalInput'
import { useEffect, useState } from 'react'
import { TerminalCommands } from '@/lib/constants/terminalCommands.enum'
import manageTerminalCommand from '@/helper/manageTerminalCommand'

const Terminal = () => {
    const [focusInput, setFocusInput] = useState<boolean>(false)

    const [commandResults, setCommandResults] = useState<string[]>([])
    const defaultErrorMessage = '\"$cc\" is not a valid command, please use help to get more info.'

    const [commandList, setCommandList] = useState<string[]>([])

    const onSend = (command: string) => {
        if (command) setCommandList(prev => [...prev, command])
        setNPrevCommand(0)
        console.log(commandList);

        if (command === 'cls' || command === 'clear') {
            setCommandResults([])
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
                <div className={style.rights}>
                    <p>S4nchzz OS [Versión 0.0.1]</p>
                    <p>S4nchzz Portfolio. Todos los derechos reservados.</p>
                </div>
                <div className={style.prompt}>
                    {
                        commandResults.map((message, index) => {
                            return <TerminalInput
                                        key={index}
                                        focus={focusInput}
                                        onSend={onSend}
                                        message={message}
                                        disable={index + 1 != commandResults.length}
                                        iText={keyPrevCommand ? commandList.at(commandList.length - nPrevCommand) : undefined}
                                    />
                        })
                    }
                    { commandResults.length == 0
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