import React from "react"
let artists = require('json/data.json');

export default function ArtistComponent() {

    return (
        <>
            <div className="bg-white dark:bg-black py-24 sm:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        {artists.map((elem, index) => (
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 min-w-0 break-words bg-white dark:bg-black w-full mx-12 mb-6 shadow-xl rounded-lg mt-16">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4 flex justify-center">
                                            <div className="relative">
                                                <img
                                                    alt="..."
                                                    src={elem.src}
                                                    className="shadow-xl h-auto align-middle border-none"
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="w-full px-4 text-center mt-20">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    22
                                                </span>
                                                <span className="text-sm text-blueGray-400">Friends</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    10
                                                </span>
                                                <span className="text-sm text-blueGray-400">Photos</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    89
                                                </span>
                                                <span className="text-sm text-blueGray-400">Comments</span>
                                            </div>
                                        </div>
                                    </div> */}
                                    </div>
                                    <div className="text-center mt-5">
                                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            {elem.name}
                                        </h3>
                                        {/* <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                        Los Angeles, California
                                    </div> */}
                                        <div className="mb-2 text-blueGray-600 mt-5">
                                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                            {"@"+elem.aka}
                                        </div>
                                        {/* <div className="mb-2 text-blueGray-600">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                        University of Computer Science
                                    </div> */}
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    {elem.description.substr(0, 100)}
                                                </p>
                                                <a
                                            href="#"
                                            className="font-normal text-lightBlue-500"
                                            onClick={(e) => e.preventDefault()}
                                            >
                                            Show more
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}