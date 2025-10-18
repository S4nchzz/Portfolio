import style from '@/styles/taskbar.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TaskbarAppItem from './taskbarAppItem'
import { useWindow } from '@/contexts/window/window.context'
import StartMenu from './startMenu'

const Taskbar = () => {
    const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false)

    const {
        getWindows
    } = useWindow()

    const [isStartMenuOpened, setIsStartMenuOpened] = useState<boolean>(false)

    useEffect(() => {
console.log(isStartMenuOpened);
    }, [isStartMenuOpened])
    return (
        <div className={style.container}>
            <StartMenu open={isStartMenuOpened}/>
            <div className={style.wImageContainer}>
                <Image
                    className={style.wImage}
                    src={'/img/desktop/w-logo.png'}
                    alt='Wlogo'
                    width={32}
                    height={32}
                    onClick={() => setIsStartMenuOpened(!isStartMenuOpened)}
                />
            </div>

            <div
                className={style.searchBar}
                style={{
                    backgroundColor: searchBarFocused ? '#2b2b2bff' : undefined
                }}
                onClick={() => setSearchBarFocused(!searchBarFocused)}>
                <Image
                    className={style.mgImage}
                    src={'/img/desktop/mag_glass.svg'}
                    alt='Wlogo'
                    width={32}
                    height={32}
                />
                
                <input
                    placeholder='Search'
                    className={style.searchBarInput}
                />
            </div>

            {
                getWindows().map((window, index) => {
                    return (
                        <TaskbarAppItem
                            key={window.uuid + index}
                            windowType={window.type}
                            windowAtatchedUuid={window.uuid}
                        />
                    )
                })
            }
        </div>
    )
}

export default Taskbar