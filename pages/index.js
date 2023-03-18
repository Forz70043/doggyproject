import CenterTitle from '@/components/CenterTitle'
import Description from '@/components/Description'
import Footer from '@/components/Footers/Footer'
import GridComponent from '@/components/GridComponent'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
      <Navbar />
      <Description />
      <CenterTitle/>
      <GridComponent />
      <Footer />
    </>
  )
}