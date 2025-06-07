import style from '../../styles/modules/technology.module.css'
import { TechInfo } from './TechBlock'

type TechnologyProps = {
    tech: TechInfo
}

const Technology = ({tech}: TechnologyProps) => {
    return (
        <div 
            className={style.container}
            style={{
                borderColor: tech.mainColor,
            }}
        >
            <img
                src={tech.imgpath}
                alt={tech.imgpath}
            />
            <h4>{tech.name}</h4>
        </div>
    )
}

export default Technology