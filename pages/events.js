import React from 'react'
import EventComponent from '@/components/EventComponent'
import HeaderEvents from '@/components/HeaderComponent';
import { useTranslation } from 'next-i18next'


export default function() {

  return (
    <div>
      <HeaderEvents title="Events" description="Our events" />
      <EventComponent />
    </div>
  )
}


