import React from 'react'

const Gallrey = () => {
    // Example static gallery images (replace with your actual image paths)
    const galleryItems = [
        { id: 1, src: "/assets/men1.1.png", title: "Men’s Casual Shirt" },
        { id: 2, src: "/assets/men2.2.png", title: "Men’s Jacket" },
        { id: 3, src: "/assets/women1.1.png", title: "Women’s Dress" },
        { id: 4, src: "/assets/women2.2.png", title: "Women’s Saree" },
        { id: 5, src: "/assets/kid1.1.png", title: "Kids’ Outfit" },
        { id: 6, src: "/assets/kid2.2.png", title: "Kids’ Jacket" },
    ];

    return (
        <div className='bg-gray-100 lg:pt-24 pt-16'>
            <div className="max-w-7xl mx-auto">

                {/* Hero Image */}
                <div>
                    <img
                        src="/assets/gallrey.png"
                        alt="Gallery Banner"
                        className="w-screen px-6 h-[300px] object-contain rounded-md"
                    />
                </div>

                {/* Gallery Section */}
                <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700">
                    <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Gallery</h1>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {galleryItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallrey
