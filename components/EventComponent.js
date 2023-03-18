const events = require('json/events.json');
import Image from 'next/image';

export default function EventComponent(props) {
    return (
        <>
        <div className="bg-white dark:bg-slate-800 py-24 sm:py-32 flex flex-col items-center">
            {events.map((elem, index) => {
                return (
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-3">
                        <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/img_avatar.png" alt="" width={100} height={120} />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{elem.name ?? ''}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{(elem.description) ? elem.description : (elem.data) ? elem.data : ''}</p>
                        </div>
                    </a>
                )
            })}
        </div>
        </>
    )
}