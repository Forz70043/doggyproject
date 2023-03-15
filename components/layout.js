import Header from './header'
import styles from '@/styles/Home.module.css'

export default function Layout({children}){
    return (
        <>
        <Header title="Doggy Project"/>
        <main className={styles.main}>
            {children}
        </main>
        </>
    )
}