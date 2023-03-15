import React from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
import GridElement from './GridElement'
const inter = Inter({ subsets: ['latin'] })

let gridListsDefault = [
    {
        href: "/events",
        title: "Events",
        description: "Find in-depth information about our events."
    },
    {
        href: "/artists",
        title: "Artists",
        description: "Find in-depth information about our artists."
    },
    {
        href: "#",
        title: "Podcast",
        description: "Listen our Podcast"
    },
]

export default function GridComponent(){
    
    let elems = gridListsDefault.map(elem=>{
        {console.log("elem: ", elem)}
        return<GridElement href={elem.href} title={elem.title} description={elem.description} />
    });

    return (
        <>
            <div className={styles.grid}>
                {elems}
            </div>
        </>
    )
}