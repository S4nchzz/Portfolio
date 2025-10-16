import style from '@/styles/taskbar.module.css'
import Image from 'next/image'
import { useState } from 'react'

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
        </div>
    )
}

export default Taskbar