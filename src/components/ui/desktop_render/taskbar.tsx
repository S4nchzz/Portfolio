import style from '@/styles/taskbar.module.css'
import Image from 'next/image'

const Taskbar = () => {
    return (
        <div className={style.container}>
            <div className={style.wImageContainer}>
                <Image
                    className={style.wImage}
                    src={'/img/desktop/w-logo.png'}
                    alt='Wlogo'
                    width={32}
                    height={32}
                />
            </div>
        </div>
    )
}

export default Taskbar