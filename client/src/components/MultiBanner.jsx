import React from 'react'

const MultiBanner = () => {
    return (
        <div className='bg-gray-100' >
            <div className="grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 max-w-7xl mx-auto ">
                {/* frist banner */}
                <div className="relative h-[250px] ">
                    <img src="/assets/jackets.jpg" alt="New Arrival" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center ">
                        <h2 className="text-white text-2xl font-bold "> New Arrivals </h2>
                        <button className='mt-2 px-3 bg-white text-green-800 py-1  rounded-md shadow hover:bg-gray-200' >
                            Discover
                        </button>
                    </div>
                </div>

                {/* second banner */}

                <div className="relative h-[250px] ">
                    <img src="/assets/shirts.jpg" alt="New Arrival" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center ">
                        <h2 className="text-white text-2xl font-bold "> Limited Offer </h2>
                    </div>
                </div>

                {/* third banner */}
                <div className="relative h-[250px] col-span-1 sm:col-span-2 ">
                    <img src="/assets/season.jpg" alt="New Arrival" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className="absolute inset-0 bg-yellow-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center ">
                        <h2 className="text-white text-4xl font-bold "> Seasson Sale </h2>
                        <p className="text-white my-2 text-lg ">Upto 70% Off    </p>
                        <button className="text-white bg-orange-600 px-3 py-2 hover:bg-orange-500 rounded-md  ">Shop Now</button>
                    </div>
                </div>

                {/* fourth banner */}
                <div className="relative h-[250px] col-span-1 sm:col-span-2 ">
                    <img src="/assets/season2.jpg" alt="New Arrival" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className="absolute inset-0 bg-yellow-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center ">
                        <h2 className="text-white text-4xl font-bold "> Seasson Sale </h2>
                        <p className="text-white my-2 text-lg ">Upto 70% Off    </p>
                        <button className="text-white bg-red-600 px-3 py-2 hover:bg-red-500 rounded-md  ">Shop Now</button>
                    </div>
                </div>

                {/* fifth banner */}
                <div className="relative h-[250px] ">
                    <img src="/assets/bag.jpg" alt="New Arrival" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center ">
                        <h2 className="text-white text-2xl font-bold "> Limited Offer </h2>
                    </div>
                </div>


                {/* sixth banner */}
                <div className="relative h-[250px] ">
                    <img src="/assets/shirts2.jpg" alt="New Arrival" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center ">
                        <h2 className="text-white text-2xl font-bold "> New Arrivals </h2>
                        <button className='mt-2 px-3 bg-white text-green-800 py-1  rounded-md shadow hover:bg-gray-200' >
                            Discover
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MultiBanner
