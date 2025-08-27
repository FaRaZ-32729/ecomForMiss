import React from 'react'

const About = () => {
    return (
        <div className='bg-gray-100 lg:pt-24 pt-16'>
            <div className="max-w-7xl mx-auto">

                {/* Hero Image */}
                <div>
                    <img src="/assets/aboutremove.png" alt="About Us" className="w-screen px-6 md:h-[450px] max-sm:h-[300px] object-contain rounded-md" />
                </div>

                {/* About Content */}
                <div className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
                    <p className="text-lg leading-relaxed text-center mb-10">
                        Welcome to <span className="font-semibold text-red-500">E-COM</span>, your one-stop online destination
                        for high-quality fashion. We believe clothing is more than just fabric — it’s about
                        expressing style, comfort, and confidence. Our mission is to bring trendy, affordable,
                        and premium-quality clothing for <span className="font-semibold">Men</span>, <span className="font-semibold">Women</span>, and <span className="font-semibold">Kids</span>, all under one roof.
                    </p>

                    {/* Sections */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Men */}
                        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">Men’s Collection</h2>
                            <p className="text-base leading-relaxed">
                                From casual wear to formal attire, our Men’s Collection is designed to keep you
                                looking stylish at every occasion. Discover premium shirts, jeans, jackets, and
                                accessories crafted with comfort and durability in mind.
                            </p>
                        </div>

                        {/* Women */}
                        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">Women’s Collection</h2>
                            <p className="text-base leading-relaxed">
                                Stay ahead in fashion with our Women’s Collection. Explore elegant dresses,
                                trendy tops, ethnic wear, and accessories that bring out your personality and
                                confidence in every season.
                            </p>
                        </div>

                        {/* Kids */}
                        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">Kids’ Collection</h2>
                            <p className="text-base leading-relaxed">
                                Fun, colorful, and comfortable — our Kids’ Collection ensures your little ones
                                look adorable while staying active. We offer everything from daily wear to festive outfits,
                                designed with love and care.
                            </p>
                        </div>
                    </div>

                    {/* Closing Note */}
                    <p className="text-lg text-center mt-12 leading-relaxed">
                        At <span className="font-semibold text-red-500">E-COM</span>, we’re committed
                        to giving you the best shopping experience with quality products, secure payments,
                        and fast delivery — because fashion is for everyone.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
