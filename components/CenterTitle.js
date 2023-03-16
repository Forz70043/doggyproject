import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function centerTitle(props){
    //<h2 id="spaceGrotesk">{props.title ?? ''}</h2>
    return (
        <>
        <div className={styles.center}>
            <Image src="/logo_empty.png" alt="Doggy Logo" className={styles.thirteen} width={400} height={400} />
        </div>
        </>
    )
}