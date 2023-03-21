import Header from './Header'
import Footer from '@/components/Footers/Footer'

export default function Layout({children}){
    return (
        <>
        <Header title="Doggy Project"/>
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}