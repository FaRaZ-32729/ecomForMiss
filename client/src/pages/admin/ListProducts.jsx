import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_Node_Api_Url;

const ListProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${URL}/products/`);
            setProducts(response.data.allProducts || []);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to load products");
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`${URL}/products/${productId}`);
            toast.success("Product deleted");
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Failed to delete product");
        }
    };

    // const updateProduct = (productId) => {
    //     navigate(`/admin/update-product/${productId}`);
    // };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Title align="left" title="All Products" subTitle="Here you can see and update your products" />

            <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Image</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Category</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {loading ? (
                            <tr>
                                <td colSpan={4} className='text-center py-4 text-gray-600'>Loading...</td>
                            </tr>
                        ) : products.length === 0 ? (
                            <tr>
                                <td colSpan={4} className='text-center py-4 text-gray-600'>No Products Found</td>
                            </tr>
                        ) : (
                            products.map((product) => (
                                <tr key={product._id}>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{product.name}</td>

                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                        <img
                                            src={`${URL}${product.imageUrl}`}
                                            alt={product.name}
                                            className="h-12 w-12 object-cover rounded"
                                        />
                                    </td>

                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{product.category}</td>

                                    <td className='py-3 px-4 border-t border-gray-300 text-sm text-center'>
                                        <button
                                            onClick={() => navigate(`/admin/update-product/${product._id}`)}
                                            className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => deleteProduct(product._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;
