import React from 'react'

const Contact = () => {
    return (
        <div className='bg-gray-100 lg:pt-24 pt-16'>
            <div className="max-w-7xl mx-auto">

                {/* Hero Image */}
                <div>
                    <img
                        src="/assets/contact.png"
                        alt="Contact Us"
                        className="w-screen px-6 md:h-[450px] max-sm:h-[300px] object-contain rounded-md"
                    />
                </div>

                {/* Contact Section */}
                <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700">
                    <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">Get in Touch</h1>

                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Google Map */}
                        <div className="w-full h-[400px]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.31413512781!2d67.14924997520102!3d24.88726427791173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1756280544284!5m2!1sen!2s"
                                className="w-full h-full rounded-lg shadow-md"
                                allowFullScreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                            <form className="space-y-5">
                                <div>
                                    <label className="block mb-1 font-medium">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Write your message..."
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
