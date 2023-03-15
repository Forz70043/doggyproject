import Header from './header'
import styles from '@/styles/Home.module.css'

export default function Layout({children}){
    return (
        <>
        <Header />
        <main className={styles.main}>
            {children}
        </main>
        </>
    )
}