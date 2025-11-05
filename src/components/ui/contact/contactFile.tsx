import style from '@/styles/contactFile.module.css'
import Image from 'next/image'

const ContactFile = ({ fileName, remove } : {
    fileName: string,
    remove: (fileName: string) => void
}) => {
    return (
        <div className={style.contactFile}>
            <span>{fileName.length > 10 ? fileName.slice(0, 10) + '.' + fileName.slice(fileName.lastIndexOf('.'), fileName.length) : fileName}</span>
            <Image
                className={style.removeSvg}
                src={'/img/applications/contact/cross.svg'}
                alt='Cross'
                width={24}
                height={24}
                onClick={() => remove(fileName)}
            />
        </div>
    )
}

export default ContactFile