import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footers/Footer';
import EventComponent from '@/components/EventComponent'
import HeaderEvents from '@/components/HeaderEvents';

export default function() {

  return (
    <div>
      <Navbar />
      <HeaderEvents />
      <EventComponent />
      <Footer />
    </div>
  )
}


