import { UseMouseType } from "@/types/types"
import { useEffect, useState } from "react"

const useMouse = () => {
    const [pos, setPos] = useState<UseMouseType>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPos({
                x: e.clientX,
                y: e.clientY
            })
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    })

    return { pos }
}

export default useMouse