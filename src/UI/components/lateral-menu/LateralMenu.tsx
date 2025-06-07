import { useEffect, useState } from 'react'
import style from '../../styles/modules/lateralSection.module.css'

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

const sectionProvider = (): SectionProvider => {
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
    const sectionsProvider: SectionProvider = sectionProvider()

    return (
        <div className={style.container}>
            <ul>
                {
                    sectionsProvider.sections &&
                    sectionsProvider.sections.data.map((section: SectionData) => {
                        return (
                            <li>
                                <img
                                    src={section.svgpath}
                                    alt={section.name}
                                />
                                <span>{section.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LateralSection