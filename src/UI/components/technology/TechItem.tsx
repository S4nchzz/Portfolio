import style from '../../styles/modules/technology.module.css'
import { TechInfo } from './TechBlock'

type TechItemProps = {
    tech: TechInfo
}

const TechItem = ({tech}: TechItemProps) => {
    return (
        <div className={style.container}>
            <img
                src={tech.imgpath}
                alt={tech.imgpath}
            />
            <h5>{tech.name}</h5>
        </div>
    )
}

export default TechItem