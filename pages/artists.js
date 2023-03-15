import {artist} from '../json/artists';
import React from 'react'
import styles from '@/styles/Home.module.css'


export const getStaticProps = async () => {
  return {
    props: {
      artists: '',
    },
  }
}

const ArtistPage = () => {
  return (
    <>
      <h1>Artist Page</h1>
      <p>Here you can find information about our artists.</p> 
    </>
  )
}

export default ArtistPage
