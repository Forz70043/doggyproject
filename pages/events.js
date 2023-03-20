import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footers/Footer';
import EventComponent from '@/components/EventComponent'
import HeaderEvents from '@/components/HeaderComponent';
import { useTranslation } from 'next-i18next'


export default function() {

  return (
    <div>
      <Navbar />
      <HeaderEvents title="Events" description="Our events" />
      <EventComponent />
      <Footer />
    </div>
  )
}


