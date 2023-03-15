import styles from '@/styles/Home.module.css'

export default function centerTitle(props){
    return (
        <>
        <div className={styles.center}>
            <h2 id="spaceGrotesk">{props.title ?? ''}</h2>
        </div>
        </>
    )
}