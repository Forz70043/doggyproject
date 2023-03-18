import React from 'react'
import EventComponent from '@/components/EventComponent'
import events from 'json/events';

const EventsPage = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <p>Here you can find information about our upcoming events.</p><br/>
      <div className='flex flex-col items-center'>
        {events.map((elem, index) => {
          return <EventComponent name={elem.name} description={elem.description} data={elem.data}/>
        })}
      </div>
      
    </div>
  )
}

export default EventsPage
