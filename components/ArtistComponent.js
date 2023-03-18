import React from "react"
let artists = require('json/data.json');
import Image from "next/image";

export default function ArtistComponent(props) {

    return (
        <>
            <div className="bg-white dark:bg-slate-800 py-24 sm:py-32">
                <div class="flex flex-row">
                    {artists.map((elem, index) => {
                        return (
                            <div class="basis-1/2 mx-8 md:basis-1/2">
                                <div
                                    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!">
                                        <img
                                            class="rounded-t-lg"
                                            src={elem.src}
                                            alt="" />
                                    </a>
                                    <div class="p-6">
                                        <h5
                                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            {elem.aka}
                                        </h5>
                                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            {elem.description}
                                        </p>
                                        <a
                                            href="#"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            More...
                                        </a>
                                        {/* <button
                                                type="button"
                                                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                Button
                                            </button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div />
                </div>
            </div>
        </>
    )
}