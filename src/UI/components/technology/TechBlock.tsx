import { useEffect, useState } from "react"
import TechItem from "./TechItem"
import style from '../../styles/modules/techBlock.module.css'
import CustomSeparator from "../customSeparator/CustomSeparator"
import { motion } from 'framer-motion'

type TechListStructure = {
    data: TechType
}

type TechType = {
    frontend: TechInfo[]
    backend: TechInfo[]
    other?: TechInfo[]
}

export type TechInfo = {
    name: string,
    imgpath: string
}

const TechBlock = () => {
    const [tech, setTech] = useState<TechListStructure>(null)

    useEffect(() => {
        const fetchTechs = async () => {
            const data = await fetch('/util/tech.json')
            setTech(await data.json())
        }

        fetchTechs()
    }, [])

    const [execAnimation, setExecAnimation] = useState<boolean>(false)

    return (
        <motion.div
            onViewportEnter={() => setExecAnimation(true)}
            onViewportLeave={() => setExecAnimation(false)}

            initial={{
                opacity: 0,
                transition: {
                    delay: 0
                }
            }}

            whileInView={{
                opacity: 1
            }}

            transition={{
                delay: 0.2,
                duration: 1
            }}

            className={style.container}>
            <div>
                {
                    tech &&
                    tech.data.frontend.map((tech: TechInfo) => {
                        return <TechItem tech={tech}/>
                    })
                }
            </div>

            <CustomSeparator execAnimation={execAnimation}/>

            <div>
                {
                    tech &&
                    tech.data.backend.map((tech: TechInfo) => {
                        return <TechItem tech={tech}/>
                    })
                }
            </div>

            <CustomSeparator rotate={true} execAnimation={execAnimation}/>

            <div>
                {
                    tech &&
                    tech.data.other.map((tech: TechInfo) => {
                        return <TechItem tech={tech}/>
                    })
                }
            </div>
        </motion.div>
    )
}

export default TechBlock