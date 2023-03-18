import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footers/Footer';
import EventComponent from '@/components/EventComponent'

export default function() {

  return (
    <div>
      <Navbar />
      <EventComponent />
      <Footer />
    </div>
  )
}


