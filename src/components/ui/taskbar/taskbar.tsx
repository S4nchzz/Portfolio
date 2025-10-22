import style from '@/styles/taskbar.module.css'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import TaskbarAppItem from './taskbarAppItem'
import { useWindow } from '@/contexts/window/window.context'
import StartMenu from './startMenu'
import SearchMenu from './searchMenu'
import { useTaskbar } from '@/contexts/taskbar/taskbar.context'

const Taskbar = () => {
    const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false)

    const {
        getWindows
    } = useWindow()
    const handleSearchChange = (e: ChangeEvent) => {
        
    }

    const {
        seamVisibility,
        stamVisibility,
        getSeamVisibility,
        getStamVisibility
    } = useTaskbar()

    return (
        <div className={style.container}>
            <StartMenu open={getStamVisibility()}/>
            <SearchMenu open={getSeamVisibility()}/>

            <div
                className={style.wImageContainer}
                onClick={(e) => {
                    e.stopPropagation()
                    seamVisibility(false)
                    stamVisibility(!getStamVisibility())
                }}>
                <Image
                    className={style.wImage}
                    src={'/img/desktop/w-logo.png'}
                    alt='Wlogo'
                    width={32}
                    height={32}
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
                    onClick={(e) => {
                        e.stopPropagation()
                        seamVisibility(!getSeamVisibility())
                        stamVisibility(false)
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