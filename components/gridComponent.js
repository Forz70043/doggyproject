import React from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
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
    
    return (
        <>
        <div className={styles.grid}>
        {gridListsDefault.forEach(gridList=>{
            {console.log(gridList)}
            <a href={gridList.href} className={styles.card} target="_blank" rel="noopener noreferrer">
                <h2 className={inter.className}>
                    {gridList.title} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    {gridList.description}
                </p>
            </a>
        })}   
        </div>
        </>
    )
}