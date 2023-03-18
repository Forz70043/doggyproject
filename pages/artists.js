
import React from "react"
import ArtistComponent from '@/components/Artist';
import Footer from "@/components/Footers/Footer"
import Navbar from "@/components/Navbar"


export default function ArtistPage() {
  
  return (
    <div>
        <Navbar />
        <ArtistComponent />
        <Footer />
    </div>
  )
}