import style from '@/styles/startmenu.module.css'
import { StarMenuType } from '@/types/types'
import { motion } from 'framer-motion'

const StartMenu = ({ open }: StarMenuType) => {
    console.log(open);
    return (
        <motion.div
            className={style.container}
            initial={{
                opacity: 0,
                y: 10
            }}
            animate={{
                opacity: open ? 1 : undefined,
                y: open ? 0 : undefined,
                pointerEvents: !open ? 'none' : undefined
            }}

            transition={{
                duration: .25
            }}
            >
        </motion.div>
    )
}

export default StartMenu