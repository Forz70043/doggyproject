// import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function centerTitle(props){
    //<h2 id="spaceGrotesk">{props.title ?? ''}</h2>
    const {t} = useTranslation();
    return (
        <>
        <div>
            <Image src="/logo_empty.png" alt="Doggy Logo" width={400} height={400} />
        </div>
        </>
    )
}