// import styles from '@/styles/Home.module.css'
import React, { useState } from "react"
import { Switch } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ContactForm(props) {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        agreed: false,
    });
    const [isLoading, setLoading] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    const handleInput = (e) => {
        console.log(e)
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const handleInputRadio = (e) => {
        const fieldName = 'agreed';
        const fieldValue = e;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e) => {
        // We don't want the page to refresh
        setLoading(true)
        e.preventDefault()

        const formURL = e.target.action

        console.log(formData);
        console.log("js", JSON.stringify(formData));

        // Turn our formData state into data we can use with a form submission
        //let data = new FormData();
        /*Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        })*/

        // POST the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    message: "",
                    agreed: ""
                })
                console.log("rrr", data.data);
                setFormSuccess(true)
                setFormSuccessMessage(data.data)
            })
    }
    if (isLoading) return (
        <>
            <div className="isolate bg-white dark:bg-black py-24 px-6 sm:py-32 lg:px-8">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg
                        className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
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
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold dark:text-white tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
                    <p className="mt-2 text-lg dark:text-slate-400 leading-8 text-gray-600">
                        Aute magna irure deserunt veniam aliqua magna enim voluptate.
                    </p>
                </div>
                <div className="mt-12 mb-12">
                    <div id="loading"></div>
                </div>
            </div>

        </>
    )

    else if (formSuccess) {
        return (<>
            <div className="isolate bg-white dark:bg-black py-24 px-6 sm:py-32 lg:px-8">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg
                        className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
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
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold dark:text-white tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
                    <p className="mt-2 text-lg dark:text-slate-400 leading-8 text-gray-600">
                        Aute magna irure deserunt veniam aliqua magna enim voluptate.
                    </p>
                </div>
                <div className="mx-auto container items-center">
                    <div
                        className="mt-12 mb-12 rounded-lg bg-green-100 py-5 px-6 text-base text-green-700"
                        role="alert">
                        {"Alert:" + formSuccessMessage}
                    </div>
                </div>
            </div>
        </>)
    }
    else
        return (
            <>
                <div className="isolate bg-white dark:bg-black py-24 px-6 sm:py-32 lg:px-8">
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                        <svg
                            className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                        >
                            <path
                                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
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
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold dark:text-white tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
                        <p className="mt-2 text-lg dark:text-slate-400 leading-8 text-gray-600">
                            Aute magna irure deserunt veniam aliqua magna enim voluptate.
                        </p>
                    </div>
                    <form method="POST" action="/api/form" onSubmit={submitForm} className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstname" className="block dark:text-white text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleInput} value={formData.firstname} required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block text-sm dark:text-white font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleInput} value={formData.lastname} required
                                    />
                                </div>
                            </div>
                            {/* <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div> */}
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block dark:text-white text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleInput} value={formData.email} required
                                    />
                                </div>
                            </div>
                            {/* <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="country" className="sr-only">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                >
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                                <ChevronDownIcon
                                    className="pointer-events-none absolute top-0 right-3 h-full w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div> */}
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block dark:text-white text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleInput} value={formData.message} required
                                    />
                                </div>
                            </div>
                            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        name="agreed"
                                        checked={formData.agreed}
                                        className={classNames(
                                            formData.agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        )}
                                        onChange={handleInputRadio} required
                                    >
                                        <span className="sr-only">agreed to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                formData.agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-sm leading-6 dark:text-slate-400 text-gray-600">
                                    By selecting this, you agreed to our{' '}
                                    <a href="#" className="font-semibold text-yellow-400">
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </Switch.Label>
                            </Switch.Group>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-green-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )

}
