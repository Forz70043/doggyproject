import React from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function GridElement(props){
    if(!props){
        console.log("props false GridElement");
    }
    return (
        <>
        
            <a href={props.href} className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
                    {props.title} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    {props.description}
                </p>
            </a>
        
        </>
    )

}