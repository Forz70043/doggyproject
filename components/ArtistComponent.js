import React from "react"
let artists = require('json/data.json');
import Image from "next/image";

export default function ArtistComponent(props) {
    
    return (
        <>
            <div className="bg-white dark:bg-slate-800 py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Meet our leadership</h2>
                        <p className="mt-6 text-lg leading-8 dark:text-slate-400 text-gray-600">
                            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                            suspendisse.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {artists.map((elem, index) => {
                            return (
                                <li key={index}>
                                    <div className="flex items-center gap-x-6">
                                        <img className="h-16 w-16 rounded-full" src={elem.src} alt="" />
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900">{elem.aka}</h3>
                                            <p className="text-sm font-semibold leading-6 dark:text-slate-400 text-gray-400">{elem.description}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}