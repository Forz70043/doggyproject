let artists = require('json/data.json');
import React from 'react'
import artistCss from '@/styles/Artist.module.css';
import CenterTitle from '@/components/CenterTitle';
import ArtistComponent from '@/components/Artist';

export const getStaticProps = async () => {
  return {
    props: {
      artists: artists,
    },
  }
}

const ArtistPage = (props) => {
  
  return (
    <>
      <CenterTitle title="Artists"/>
      <p>Here you can find information about our artists.</p>
      
      <div className={artistCss.gridArtists} >
        {props.artists.map((elem, index) => {
          return <ArtistComponent key={index} aka={elem.aka} description={elem.description} src={elem.src}/>
        })}
      </div>
      
    </>
  )
}

export default ArtistPage
