import style from '@/styles/terminal.module.css'
import TerminalInput from '../terminalInput/terminalInput'
import { useState } from 'react'
import { TerminalCommands } from '@/lib/constants/terminalCommands.enum'

const Terminal = () => {
    const [focusInput, setFocusInput] = useState<boolean>(false)

    const [commandResults, setCommandResults] = useState<string[]>([])
    const defaultErrorMessage = '\"$cc\" is not a valid command, please use help to get more info.'
    const onSend = (command: string) => {
        const c = command as keyof TerminalCommands
        const isCommandValid = Object.keys(TerminalCommands).some((command) => command == c)
        if (!isCommandValid) {
            setCommandResults(prev => [...prev, defaultErrorMessage.replace('$cc', c)])
        }
    }

    const [keyControlDown, setKeyControlDown] = useState<boolean>(false)

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
            }}

            onKeyUp={(k) => {
                if (k.code === 'ControlLeft') {
                    setKeyControlDown(false)
                    return
                }
            }}
            >
            <div className={style.content}>
                <div className={style.rights}>
                    <p>S4nchzz OS [Versión 0.0.1]</p>
                    <p>S4nchzz Portfolio. Todos los derechos reservados.</p>
                </div>
                <div className={style.prompt}>
                    {
                        commandResults.map((message, index) => {
                            return <TerminalInput key={index} focus={focusInput} onSend={onSend} message={message} disable={index + 1 != commandResults.length}/>
                        })
                    }
                    { commandResults.length == 0 && <TerminalInput focus={focusInput} onSend={onSend} disable={commandResults.length > 0}/> }
                </div>
            </div>
        </div>
    )
}

export default Terminal