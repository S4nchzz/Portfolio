import { useEffect, useState } from "react"
import Technology from "./Technology"
import style from '../../styles/modules/techBlock.module.css'

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
    imgpath: string,
    mainColor: string
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

    return (
        <div className={style.container}>
            <div>
                {
                    tech &&
                    tech.data.frontend.map((tech: TechInfo) => {
                        return <Technology tech={tech}/>
                    })
                }
            </div>

            <div
                className={style.splitter}
            />
            <div>
                {
                    tech &&
                    tech.data.backend.map((tech: TechInfo) => {
                        return <Technology tech={tech}/>
                    })
                }
            </div>

            {/* {
                tech &&
                tech.data.other.map((tech: TechInfo) => {
                    return <Technology tech={tech}/>
                })
            } */}
        </div>
    )
}

export default TechBlock