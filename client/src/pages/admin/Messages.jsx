import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import { toast } from 'react-toastify';

const URL = import.meta.env.VITE_Node_Api_Url;

const Messages = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchContacts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${URL}/contact`);
            setContacts(data.contacts || []);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch contacts");
        } finally {
            setLoading(false);
        }
    };

    // ✅ Delete contact by ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${URL}/contact/${id}`);
            toast.success("Message deleted successfully");
            setContacts((prev) => prev.filter((data) => data._id !== id));
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete message");
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div>
            <Title align="left" title="All Messages" subTitle="Here you can see and manage user messages" />

            <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Email</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Message</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {loading ? (
                            <tr>
                                <td colSpan={4} className='text-center py-4 text-gray-600'>Loading...</td>
                            </tr>
                        ) : contacts.length === 0 ? (
                            <tr>
                                <td colSpan={4} className='text-center py-4 text-gray-600'>No Messages Found</td>
                            </tr>
                        ) : (
                            contacts.map((contact) => (
                                <tr key={contact._id}>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{contact.name}</td>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{contact.email}</td>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                        {contact.message}
                                    </td>
                                    <td className='py-3 px-4 border-t border-gray-300 text-sm text-center'>
                                        <button
                                            onClick={() => handleDelete(contact._id)}
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

export default Messages;
