import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const URL = import.meta.env.VITE_Node_Api_Url;

const Registration = () => {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const togglePass = () => setShowPass(!showPass);

    // ✅ Yup validation schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    // ✅ Formik setup
    const formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${URL}/user`, values);
                toast.success(response.data.msg, {
                    onClose: () => navigate("/login"),
                    autoClose: 500,
                });
            } catch (error) {
                toast.error(error.response?.data?.msg || "Registration failed");
            }
        },
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100 px-6 md:px-0">
            <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-1 ">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Register Your Account
                </h2>

                {/* ✅ Formik handles submit */}
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 focus:outline-none"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-500 text-sm">{formik.errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 focus:outline-none"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm">{formik.errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-600">
                            Password
                        </label>
                        <div className="flex items-center relative">
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                placeholder="Enter Your Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="w-full px-4 py-2 text-gray-700 border bg-gray-50 border-gray-300 rounded-lg focus:ring-red-300 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={togglePass}
                                className="absolute right-3 flex items-center text-gray-300 hover:text-gray-700"
                            >
                                {showPass ? (
                                    <Eye className="w-5 h-5" />
                                ) : (
                                    <EyeOff className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-sm">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                    >
                        Register Now
                    </button>
                </form>

                <div className="text-center">
                    <div className="text-sm text-gray-600">
                        Already Have An Account?{" "}
                        <a href="/login" className="text-red-500 hover:underline">
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
