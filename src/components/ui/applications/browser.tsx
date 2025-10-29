import style from '@/styles/browser.module.css'

import { ApplicationType, BrowserSearchCardType } from "@/types/types"
import BrowserSearchCard from "../browserSearchCard/browserSearchCard"
import { ChangeEvent, useEffect, useState } from "react"
import Image from 'next/image'
import { useWindow } from '@/contexts/window/window.context'
import { motion } from 'framer-motion'

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

    const [filterText, setFilterText] = useState<string>('')
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value)
    }

    const {
          getWindow
    } = useWindow()

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
            <motion.div
                className={style.body}
                animate={{
                    gap: !getWindow(wUuid)?.windowAttr.isMaximized ? '50px' : undefined
                }}
                >
                <motion.div
                    className={style.searchResults}
                    animate={{
                        marginLeft: !getWindow(wUuid)?.windowAttr.isMaximized ? '50px' : undefined
                    }}>
                    {
                        bsData.map((bs, index) => {
                            if (!filterText) {
                                return (
                                <BrowserSearchCard
                                    key={bs.title + index}
                                    title={bs.title}
                                    subTitle={bs.subTitle}
                                    img={bs.img}
                                    uriTitle={bs.uriTitle}
                                    pageDesc={bs.pageDesc}
                                    to={bs.to}
                                    focus={false}
                                />
                                );
                            }

                            if (Object.values(bs).some((e) => e?.toString().includes(filterText))) {
                                return (
                                    <BrowserSearchCard
                                        key={bs.title + index}
                                        title={bs.title}
                                        subTitle={bs.subTitle}
                                        img={bs.img}
                                        uriTitle={bs.uriTitle}
                                        pageDesc={bs.pageDesc}
                                        to={bs.to}
                                        focus={true}
                                    />
                                )
                            }
                            
                        })
                    }
                </motion.div>
                <motion.div
                    className={style.profileCard}
                    animate={{
                        marginRight: !getWindow(wUuid)?.windowAttr.isMaximized ? '50px' : undefined
                    }}
                    >
                    <motion.img
                        whileHover={{
                            width: '260px',
                            height: '260px'
                        }}
                        className={style.profileImage}
                        src={'/img/browser/logo.jpg'}
                        width={256}
                        height={256}
                        alt='Logo'
                    />
                    <span className={style.profileName}>Iyan Sanchez</span>
                    <span className={style.profileDescription}>Passionate about programming and new technologies. Experienced in Java, Kotlin, PHP, JavaScript/TypeScript, SpringBoot, React, NextJS, NestJS, JavaFX, and mobile development. Projects in e-commerce and productivity. Organized, professional, and focused on best practices and collaboration.</span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Browser