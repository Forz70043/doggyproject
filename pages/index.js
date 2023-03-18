import CenterTitle from '@/components/CenterTitle'
import Description from '@/components/Description'
import Footer from '@/components/Footers/Footer'
import GridComponent from '@/components/GridComponent'


export default function Home() {
  return (
    <>
      <Description />
      <CenterTitle/>
      <GridComponent />
      <Footer />
    </>
  )
}