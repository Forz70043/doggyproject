
import React from "react"
import ArtistComponent from '@/components/ArtistComponent';
import Footer from "@/components/Footers/Footer"
import Navbar from "@/components/Navbar"
import HeaderArtist from "@/components/HeaderArtist";


export default function ArtistPage() {
  
  return (
    <div>
        <Navbar />
        <HeaderArtist />
        <ArtistComponent />
        <Footer />
    </div>
  )
}