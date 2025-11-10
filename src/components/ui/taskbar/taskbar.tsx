import style from '@/styles/taskbar.module.css'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import TaskbarAppItem from './taskbarAppItem'
import { useWindow } from '@/contexts/window/window.context'
import StartMenu from './startMenu'
import { useTaskbar } from '@/contexts/taskbar/taskbar.context'

const Taskbar = () => {
    const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false)

    const {
        getWindows
    } = useWindow()
    
    const handleSearchChange = (e: ChangeEvent) => {
        
    }

    const {
        stamVisibility,
        getStamVisibility
    } = useTaskbar()

    return (
        <div className={style.container}>
            <StartMenu open={getStamVisibility()}/>

            <div
                className={style.wImageContainer}
                onClick={(e) => {
                    e.stopPropagation()
                    stamVisibility(!getStamVisibility())
                }}>
                <Image
                    className={style.wImage}
                    src={'/img/desktop/taskbar/w-logo.png'}
                    alt='Wlogo'
                    width={28}
                    height={28}
                />
            </div>
            <Image
                className={style.mgImage}
                src={'/img/desktop/taskbar/mag_glass.svg'}
                alt='Wlogo'
                width={32}
                height={32}
                onClick={(e) => {
                    e.stopPropagation()
                    stamVisibility(!getStamVisibility())
                    setSearchBarFocused(!searchBarFocused)}
                }
            />

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