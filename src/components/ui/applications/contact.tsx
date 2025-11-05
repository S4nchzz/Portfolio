import { ApplicationType } from "@/types/types"
import style from '@/styles/contact.module.css'
import { CSSProperties, useEffect, useState } from "react"
import Loader from "../loader/loading"
import { useMail } from "@/contexts/mailContext/mail.context"

const Contact = ({
    wUuid
}: ApplicationType) => {
    const [subject, setSubject] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [messageStatus, setMessageStatus] = useState<string>()
    
    const useMailTimeout = useMail()
    
    useEffect(() => {
        console.log(useMailTimeout.currentTime());
    }, [useMailTimeout.currentTime()])

    const onSend = () => {
        const sendMail = async() => {
            const res = await fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subject: subject,
                    body: body
                })
            })

            const data = await res.json()
            setMessageStatus(data.ok ? 'Correo enviado' : 'Error al enviar')
        }

        sendMail()
        useMailTimeout.applyTimeout()
    }

    const buttonBlockStyle: CSSProperties = {
        pointerEvents: useMailTimeout.isMailBocked() || !body || !subject ? 'none' : 'all',
        backgroundColor: useMailTimeout.isMailBocked() || !body || !subject ? 'grey' : undefined,
        opacity: useMailTimeout.isMailBocked() || !body || !subject ? 1 : .8
    }

    return (
        <div className={style.container}>
           <div className={style.to}>
                <span>To</span>
                <div className={style.toBox}>
                    S4nchzz
                </div>
            </div>

            <div className={style.subject}>
                <input type="text" placeholder="Subject" required maxLength={50} onChange={(e) => { setSubject(e.target.value) }}/>
            </div>

            <div className={style.body}>
                <textarea required onChange={(e) => { setBody(e.target.value) }}/>
            </div>

            <div className={style.mailControls}>
                <button
                    onClick={onSend}
                    style={{
                        ...buttonBlockStyle
                    }}>Send</button>
                {
                    useMailTimeout.isMailBocked() &&
                    <span className={style.banClock}>
                        {(() => {
                            const totalSeconds = Math.floor(useMailTimeout.currentTime() / 1000);
                            const minutes = Math.floor((totalSeconds % 3600) / 60);
                            const seconds = totalSeconds % 60;

                            const format = (n: number) => n.toString().padStart(2, '0');

                            return `${format(minutes)}:${format(seconds)}`;
                        })()}
                    </span>
                }
            </div>
            <span className={style.messageStatus}>{messageStatus}</span>
        </div>
    )
}

export default Contact