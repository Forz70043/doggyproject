
import React from "react"
import ArtistComponent from '@/components/ArtistComponent';
import HeaderArtist from "@/components/HeaderComponent";

export default function ArtistPage() {
  
  return (
    <div>
      <HeaderArtist title="Artists" description="Our Artist"/>
      <ArtistComponent />
    </div>
  )
}