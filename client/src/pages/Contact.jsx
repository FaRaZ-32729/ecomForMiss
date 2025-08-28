import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const URL = import.meta.env.VITE_Node_Api_Url;

// ✅ Validation Schema
const contactSchema = Yup.object({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(30, "Name must not exceed 30 characters")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
});

const Contact = () => {
    const [loading, setLoading] = useState(false);

    // ✅ Formik setup
    const formik = useFormik({
        initialValues: { name: "", email: "", message: "" },
        validationSchema: contactSchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                const res = await axios.post(`${URL}/contact`, values, {
                    withCredentials: true,
                });
                toast.success(res.data.message || "Message Sent Successfully ✅");
                resetForm();
            } catch (error) {
                toast.error(
                    error.response?.data?.message || "Failed to send message ❌"
                );
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="bg-gray-100 lg:pt-24 pt-16">
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
                    {/* <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Get in Touch
                    </h1> */}

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Google Map */}
                        <div className="w-full max-md:h-[400px]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.31413512781!2d67.14924997520102!3d24.88726427791173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1756280544284!5m2!1sen!2s" className="w-full h-full rounded-lg shadow-md" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" ></iframe>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                            <form className="space-y-5" onSubmit={formik.handleSubmit}>
                                {/* Name */}
                                <div>
                                    <label className="block mb-1 font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="text-red-500 text-sm">{formik.errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-1 font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-sm">{formik.errors.email}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block mb-1 font-medium">Message</label>
                                    <textarea
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        rows="4"
                                        placeholder="Write your message..."
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                                    ></textarea>
                                    {formik.touched.message && formik.errors.message && (
                                        <p className="text-red-500 text-sm">
                                            {formik.errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition disabled:bg-gray-400"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
