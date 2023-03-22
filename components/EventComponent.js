const events = require('json/events.json');
import Image from 'next/image';

export default function EventComponent() {
    return (
        <>
            <div className="bg-white dark:bg-black py-24 sm:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center ">
                        {events.map((elem, index) => {
                            return (
                                <div class="flex justify-center mb-5">
                                    <div
                                        class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                        <img
                                            class="h-80 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                            src="/img_avatar.png"
                                            alt="" />
                                        <div class="flex flex-col justify-start p-6">
                                            <h5
                                                class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                                {elem.name + " - " + elem.date} 
                                            </h5>
                                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                                {elem.description}
                                            </p>
                                            <p class="text-xs text-neutral-500 dark:text-neutral-300">
                                                Last updated 3 mins ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}