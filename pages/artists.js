import {artist} from '../json/artists';
import React from 'react'
import styles from '@/styles/Home.module.css'
import CenterTitle from '@/components/centerTitle';

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
      <CenterTitle title="Artists"/>
      <p>Here you can find information about our artists.</p> 
    </>
  )
}

export default ArtistPage
