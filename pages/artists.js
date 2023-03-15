let artists = require('json/data.json');
import React from 'react'

import CenterTitle from '@/components/CenterTitle';
import GridElement from '@/components/GridElement';

console.log(artists);

export const getStaticProps = async () => {
  return {
    props: {
      artists: artists,
    },
  }
}

const ArtistPage = (props) => {
  console.log(props)
  
  return (
    <>
      <CenterTitle title="Artists"/>
      <p>Here you can find information about our artists.</p>
      {props.artists.map(elem => {
        return <GridElement title={elem.aka}  />
      })}
      
    </>
  )
}

export default ArtistPage
