import React from "react"
let artists = require('json/data.json');
import Image from "next/image";

export default function ArtistComponent() {

    return (
        <>
            <div className="bg-white dark:bg-black py-24 sm:py-32">
                <div className="flex flex-row">
                    { artists.map((elem, index) => (
                        <div key={index} className="basis-1/2 mx-8 md:basis-1/2">
                            <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                <a href="#!">
                                    <Image className="rounded-t-lg" src={elem.src} alt="Image DJ" width={320} height={240} />
                                </a>
                                <div class="p-6">
                                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        {elem.aka}
                                    </h5>
                                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        {elem.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div />
                </div>
            </div>
        </>
    )
}