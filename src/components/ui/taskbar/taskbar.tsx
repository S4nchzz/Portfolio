import style from '@/styles/taskbar.module.css'
import Image from 'next/image'
import { useState } from 'react'
import TaskbarAppItem from './taskbarAppItem'
import { ItemType } from '@/lib/constants/Item.enum'

const Taskbar = () => {
    const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false)

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

            <TaskbarAppItem appType={ItemType.SETTINGS}/>
            <TaskbarAppItem appType={ItemType.BROWSER}/>
            <TaskbarAppItem appType={ItemType.TERMINAL}/>
        </div>
    )
}

export default Taskbar