import type { Education } from "@/data"

export default function Timeline({ details }: { details: Education[] }) {
    return (

        <section className="max-w-7xl mx-auto p-8 h-full bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl relative overflow-hidden  col-span-1 md:col-span-3 md:row-span-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Education Timeline</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                A chronological overview of my educational journey, showcasing the institutions I&apos;ve attended, the courses I&apos;ve completed
                , and the achievements I&apos;ve earned along the way.
            </p>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-10 ">
                {details.map((item) => (
                    <li key={item.id} className="mb-10 ms-6 opacity-80  hover:opacity-100 transition-opacity duration-300 cursor-default">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <div className="flex items-baseline justify-between w-full">
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.institution} {item.status ? <span className="bg-green-100 dark:bg-green-800 rounded px-2 py-1 ml-2 text-sm font-medium text-gray-600 dark:text-gray-200">{item.status}</span> : null} </h3>
                            <time className="block mb-1 text-lg font-semibold text-gray-900 dark:text-white ">{item.startDate} - {item.endDate}</time>
                        </div>

                        <div className="flex items-baseline justify-between w-full">
                            <p className="mb-2 text-base font-normal text-blue-400 dark:text-blue-400 italic">{item.course}</p>
                            <p className="mb-2 text-base font-normal text-blue-400 dark:text-blue-400 italic">{item?.percentage || item?.cgpa}</p>
                        </div>



                    </li>
                ))}
            </ol>
        </section>


    )
}