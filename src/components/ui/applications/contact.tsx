import { ApplicationType } from "@/types/types"
import style from '@/styles/contact.module.css'
import { useState } from "react"
import Loader from "../loader/loading"

const Contact = ({
    wUuid
}: ApplicationType) => {
    const [subject, setSubject] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [messageStatus, setMessageStatus] = useState<string>()

    const sendMail = () => {
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
                    onClick={sendMail}
                    style={{
                        pointerEvents: body && subject ? 'all' : 'none',
                        backgroundColor: body && subject ? undefined : 'grey',
                        opacity: body && subject ? 1 : .8
                    }}>Send</button>
            </div>
            <span className={style.messageStatus}>{messageStatus}</span>
        </div>
    )
}

export default Contact