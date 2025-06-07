import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

type AnimatedTextProps = {
    text: string,
    style?: React.CSSProperties
}

const AnimatedText = ({text, style}: AnimatedTextProps) => {
    const [chars, setChars] = useState<string[]>([])
    useEffect(() => {
        setChars(text.split(''))
    }, [text])

    return (
        chars.map((char, index) => {
            return (
                <motion.span
                style={style}
                    key={index}
                    whileHover={{
                        y: -10
                    }}>
                    {char}
                </motion.span>
            )
        })
    )
}

export default AnimatedText