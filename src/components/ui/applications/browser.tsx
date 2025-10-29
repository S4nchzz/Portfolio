import style from '@/styles/browser.module.css'

import { ApplicationType, BrowserSearchCardType } from "@/types/types"
import BrowserSearchCard from "../browserSearchCard/browserSearchCard"
import { ChangeEvent, useEffect, useState } from "react"
import Image from 'next/image'

const Browser = ({
    wUuid
}: ApplicationType) => {
    const [bsData, setBsData] = useState<BrowserSearchCardType[]>([])

    useEffect(() => {
        const fetchBsData = async() => {
            const data = await fetch('/util/browserSearch.json')
            const json = await data.json()

            setBsData(json)
        }

        fetchBsData()
    }, [])

    const handleSearchChange = (e: ChangeEvent) => {

    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.inputContainer}>
                    <span className={style.title}>S4Edge</span>
                    <Image
                        className={style.inputImg}
                        src={'/img/browser/search.svg'}
                        width={24}
                        height={24}
                        alt='Search'
                    />
                    <input
                        placeholder='Search...'
                        onChange={handleSearchChange}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            </div>
            <div className={style.searchResults}>
                {
                    bsData.map((bs, index) => {
                        return (
                        <BrowserSearchCard
                            key={bs.title + index}
                            title={bs.title}
                            subTitle={bs.subTitle}
                            img={bs.img}
                            uriTitle={bs.uriTitle}
                            pageDesc={bs.pageDesc}
                            to={bs.to}
                        />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Browser