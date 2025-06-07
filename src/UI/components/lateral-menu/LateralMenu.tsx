import { MouseEvent, useEffect, useRef, useState } from 'react'
import style from '../../styles/modules/lateralSection.module.css'
import { motion } from 'framer-motion'

type UseLateralSection = {
    display: number,
    setDisplay: (n: number) => void
}

type SectionStructure = {
    data: SectionData[]
}

type SectionData = {
    name: string,
    svgpath: string
}

type SectionProvider = {
    sections: SectionStructure
}

const useSectionProvider = (): SectionProvider => {
    const [sections, setSections] = useState<SectionStructure>(null)
    useEffect(() => {
        const fetchSections = async () => {
            const data = await fetch('/util/sections.json')
            setSections(await data.json())
        }

        fetchSections()
    }, [])

    return { sections }
}

export const useLateralSection = (): UseLateralSection => {
    const [display, setDisplay] = useState<number>(0)

    return {
        display,
        setDisplay
    }
}

const LateralSection = () => {
    const sectionsProvider: SectionProvider = useSectionProvider()
    const [x, setX] = useState(0)

    const ulVariant = {
        initial: {
            width: 0,
        },

        hover: {
            width: 'fit-content',
            paddingRight: '20px'
        }
    }

    const liVariant = {
        initial: {
            opacity: 0,
        },

        hover: {
            opacity: 1,
            transition: {
                type: 'spring',
                delay: 0.2
            }
        }
    }

    return (
        <div className={style.container}>
            <ul>
                {
                    sectionsProvider.sections &&
                    sectionsProvider.sections.data.map((section: SectionData) => {
                        return (
                            <motion.li
                                variants={ulVariant}
                                initial='initial'
                                whileHover='hover'
                                style={{
                                    display:'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                >
                                <img
                                    src={section.svgpath}
                                    alt={section.name}
                                />
                                <motion.span
                                    variants={liVariant}
                                >{section.name}</motion.span>
                            </motion.li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LateralSection