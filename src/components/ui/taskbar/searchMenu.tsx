import style from '@/styles/searchMenu.module.css'
import { TaskBarMenuStateType } from '@/types/types'
import { motion } from 'framer-motion'

const SearchMenu = ({ open }: TaskBarMenuStateType ) => {
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

export default SearchMenu