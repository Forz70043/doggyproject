

export default function HeaderComponents(props) {

    return (
        <div className="bg-white dark:bg-black pt-24 px-6">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* {svg LINEAR GRADIENT} */}
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg
                        className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#339989" />
                                <stop offset={3} stopColor="#339989" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <h2 className="mb-6 text-3xl font-bold text-neutral-800 dark:text-white">
                        {props.title ?? ''}
                    </h2>
                    <p className=" dark:text-slate-400 text-gray-400 md:pb-0">
                        {props.description ?? ''}
                    </p>
                </div>
            </div>
        </div>
    )

}