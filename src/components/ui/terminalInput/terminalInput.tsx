import style from '@/styles/terminalInput.module.css'
import { TerminalInputType } from '@/types/types'
import { useEffect, useRef, useState } from 'react'

const TerminalInput = ({ focus, onSend, message = '', disable, iText }: TerminalInputType) => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!ref.current) return
        if (focus) ref.current.focus()
    }, [focus]);

    useEffect(() => {
        console.log(iText);
    }, [iText]);

    const [text, setText] = useState<string>(iText ? iText : '')
    const [isBeingChanged, setIsBeingChanged] = useState<boolean>(false)
    return (
        <div className={style.container}>
            <div className={style.input}>
                C:\home\root{'\>'}
                <input
                    ref={ref}
                    disabled={disable}
                    defaultValue={iText}
                    onKeyDown={(k) => {
                        if (k.code === 'ArrowUp' || k.code === 'ArrowDown') {
                            k.preventDefault()
                        }

                        console.log(text);
                        if (k.key == 'Enter') onSend(iText && !isBeingChanged ? iText : text)
                    }}
                    onChange={(e) => {
                        setIsBeingChanged(true)
                        setText(e.target.value)
                    }}
                    className={style.container}/>
            </div>
            <pre>{message}</pre>
        </div>
    )
}

export default TerminalInput