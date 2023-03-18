import React from 'react'
// import styles from '@/styles/Home.module.css'
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
    {
        href: "/contact",
        title: "Contatc",
        description: "Contact us"
    },
]

export default function GridComponent(){
    
    let elems = gridListsDefault.map((elem, index) => {
        return<GridElement key={index} href={elem.href} title={elem.title} description={elem.description} />
    });

    return (
        <>
            <div className='flex flex-row'>
                {elems}
            </div>
        </>
    )
}