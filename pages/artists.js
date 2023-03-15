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
    
    <div className={styles.center}>
      <h1>Artist Page</h1>
      <p>Here you can find information about our artists.</p>


      <div className={styles.grid}>
      <a
        href="/events"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.className}>
          Events <span>-&gt;</span>
        </h2>
        <p className={styles.className}>
          Find in-depth information about our events.
        </p>
      </a>

      <a href="/artists" className={styles.card} target="_blank" rel="noopener noreferrer">
        <h2 className={styles.className}>
          Artists <span>-&gt;</span>
        </h2>
        <p className={styles.className}>
          Find in-depth information about our artists!
        </p>
      </a>

      <a
        href="#"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.className}>
          Posdcast <span>-&gt;</span>
        </h2>
        <p className={styles.className}>
          Listen our Podcast
        </p>
      </a>
      </div>


    </div>
  )
}

export default ArtistPage
