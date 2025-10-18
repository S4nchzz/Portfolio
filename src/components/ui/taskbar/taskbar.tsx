import style from '@/styles/taskbar.module.css'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import TaskbarAppItem from './taskbarAppItem'
import { useWindow } from '@/contexts/window/window.context'
import StartMenu from './startMenu'
import SearchMenu from './searchMenu'

const Taskbar = () => {
    const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false)

    const {
        getWindows
    } = useWindow()

    const [isStartMenuOpened, setIsStartMenuOpened] = useState<boolean>(false)
    const [isSearchMenuOpened, setIsSearchMenuOpened] = useState<boolean>(false)

    const handleSearchChange = (e: ChangeEvent) => {
        
    }

    return (
        <div className={style.container}>
            <StartMenu open={isStartMenuOpened}/>
            <SearchMenu open={isSearchMenuOpened}/>

            <div className={style.wImageContainer}>
                <Image
                    className={style.wImage}
                    src={'/img/desktop/w-logo.png'}
                    alt='Wlogo'
                    width={32}
                    height={32}
                    onClick={() => {
                        setIsStartMenuOpened(!isStartMenuOpened)
                        if (!isStartMenuOpened) {
                            setIsSearchMenuOpened(false)
                        }
                    }}
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
                    onClick={() => {
                        setIsSearchMenuOpened(!isSearchMenuOpened)
                        if (!isSearchMenuOpened) {
                            setIsStartMenuOpened(false)
                        }
                    }}
                    onChange={handleSearchChange}
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