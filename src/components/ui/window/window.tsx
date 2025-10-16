import style from '@/styles/window.module.css'
import Image from 'next/image'

const Window = () => {
    return (
        <div className={style.container}>
            <div className={style.windowControlContainer}>
                <div className={style.windowControl}>
                    <ul>
                        <li>
                            <Image
                                src={'/img/desktop/window/minimize.svg'}
                                alt='Minimize'
                                width={22}
                                height={22}
                            />
                        </li>
                        <li>
                            <Image
                                src={'/img/desktop/window/maximize.svg'}
                                alt='Maximize'
                                width={22}
                                height={22}
                            />
                        </li>
                        <li>
                            <Image
                                src={'/img/desktop/window/cross.svg'}
                                alt='Cross'
                                width={22}
                                height={22}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.windowContent}>

            </div>
        </div>
    )
}

export default Window