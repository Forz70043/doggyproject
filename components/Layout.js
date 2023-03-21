import Header from './Header'
import Footer from '@/components/Footers/Footer'
import Navbar from './Navbar';

export default function Layout({children}){
    console.log("children: ", children.type.name);
    return (
        <>
        <Header title="Doggy Project"/>
        <Navbar page={children.type.name} />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}