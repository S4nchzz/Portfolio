'use client'

import { MailContextAttr } from "@/types/types"
import { createContext, ReactNode, useContext, useState } from "react"

export const MailContext = createContext<MailContextAttr | undefined>(undefined)

const MailProvider = ({ children }: {
    children: ReactNode
}) => {
    const defaultTime = 600000
    const [mailBlocked, setMailBlocked] = useState<boolean>(false)
    const [timeoutTime, setTimeoutTime] = useState<number>(defaultTime)
    
    return (
        <MailContext.Provider value={{
            defaultTime,
            timeoutTime,
            setTimeoutTime,
            mailBlocked,
            setMailBlocked
        }}>
            {children}
        </MailContext.Provider>
    )
}

export default MailProvider

export const useMail = () => {
    const ctx = useContext(MailContext)

    const checkCtx = () => {
        if (!ctx) throw new Error('MailContext is not initialzied, where are you using this hook?')
    }

    const applyTimeout = () => {
        checkCtx()

        ctx!.setMailBlocked(true)
        const interval = setInterval(() => {
            ctx!.setTimeoutTime(prev => {
                if (prev == 0) {
                    clearInterval(interval)
                    ctx!.setMailBlocked(false)
                    return ctx!.defaultTime
                }

                return prev - 1000
            })
        }, 1000)
    }

    const currentTime = () => {
        checkCtx()

        return ctx!.timeoutTime
    }

    const isMailBocked = () => {
        checkCtx()

        return ctx!.mailBlocked
    }

    return {
        applyTimeout,
        currentTime,
        isMailBocked
    }
}