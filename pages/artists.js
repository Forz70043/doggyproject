
import React from "react"
import ArtistComponent from '@/components/ArtistComponent';
import Footer from "@/components/Footers/Footer"
import Navbar from "@/components/Navbar"
import HeaderArtist from "@/components/HeaderComponent";


export default function ArtistPage() {
  
  return (
    <div>
        <Navbar />
        <HeaderArtist title="Artists" description="Our Artist"/>
        <ArtistComponent />
        <Footer />
    </div>
  )
}