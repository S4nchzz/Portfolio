import style from '@/styles/terminalInput.module.css'
import { TerminalInputType } from '@/types/types'
import { useEffect, useRef, useState } from 'react'

const TerminalInput = ({ focus, onSend, message = '', disable }: TerminalInputType) => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!ref.current) return
        if (focus) ref.current.focus()
    }, [focus]);

    const [text, setText] = useState<string>('')
    return (
        <div className={style.container}>
            <div className={style.input}>
                C:\home\root{'\>'}
                <input
                    disabled={disable}
                    ref={ref}
                    onKeyDown={(k) => {
                        if (k.key == 'Enter') onSend(text)
                    }}
                    onChange={(e) => setText(e.target.value)}
                    className={style.container}/>
            </div>
            <pre>{message}</pre>
        </div>
    )
}

export default TerminalInput