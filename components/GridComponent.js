import React from 'react'
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
        href: "/contact",
        title: "Contact",
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