import style from '@/styles/terminalInput.module.css'
import { TerminalInputType } from '@/types/types'
import { useEffect, useRef, useState } from 'react'

const TerminalInput = ({ focus, onSend, message = '', disable, iText, clearInput }: TerminalInputType) => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!ref.current) return
        if (focus) ref.current.focus()
    }, [focus]);

    const [text, setText] = useState<string>(iText ? iText : '')
    const [isBeingChanged, setIsBeingChanged] = useState<boolean>(false)

    const [ctrlKeyPressed, setCtrlKeyPressed] = useState<boolean>(false)

    useEffect(() => {
        if (clearInput) {
            setText('')
            setIsBeingChanged(false)
        }
    }, [clearInput])

    useEffect(() => {
        if (iText !== undefined) {
            setText(iText)
            setIsBeingChanged(false)
        }
    }, [iText])

    return (
        <div className={style.container}>
            <pre>{message}</pre>
            <div className={style.input}>
                C:\{'\>'}
                <input
                    ref={ref}
                    disabled={disable}
                    value={text !== undefined ? text : iText || ''}
                    onKeyDown={(k) => {
                        if (k.code === 'ArrowUp' || k.code === 'ArrowDown') {
                            k.preventDefault()
                        }

                        if (k.code === 'ControlLeft') setCtrlKeyPressed(true)
                        if (k.code === 'KeyC' && ctrlKeyPressed) {
                            setCtrlKeyPressed(false)
                            setText('^C')
                            onSend()
                            return
                        }

                        if (k.key == 'Enter') onSend(iText && !isBeingChanged ? iText : text)
                    }}

                    onKeyUp={(k) => {
                        if (k.code === 'ControlLeft') {
                            setCtrlKeyPressed(false)
                        }
                    }}
                    onChange={(e) => {
                        setIsBeingChanged(true)
                        setText(e.target.value)
                    }}
                    className={style.container}/>
            </div>
        </div>
    )
}

export default TerminalInput