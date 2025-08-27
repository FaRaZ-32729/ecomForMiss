import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import { Trash2 } from 'lucide-react';

const URL = import.meta.env.VITE_Node_Api_Url;

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${URL}/user`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user by ID
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${URL}/user/${userId}`);
      setUsers((prev) => prev.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Toggle active status
  const toggleActiveStatus = async (userId, currentStatus) => {
    try {
      await axios.patch(`${URL}/user/${userId}/status`, { isActive: !currentStatus });
      setUsers((prev) =>
        prev.map((user) =>
          user._id === userId ? { ...user, isActive: !currentStatus } : user
        )
      );
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  return (
    <div>
      <Title
        title="Dashboard"
        subTitle="Gain full control of your online store in real-time. The dashboard enables you to manage products effortlessly, streamlining your operations and enhancing the shopping experience."
        align="left"
      />

      <div className='flex gap-4 my-8'>
        <div className='bg-primary/3 border border-primary/10 flex p-4 pr-8'>
          <img src="/assets/bookmark.svg" alt="booking-icon" className='h-10 max-sm:hidden' />
          <div className='flex flex-col sm:ml-4 font-medium '>
            <p className='text-blue-500 text-lg'>Total Users</p>
            <p className='text-neutral-400 text-base '>{users.length}</p>
          </div>
        </div>
      </div>

      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>All Users</h2>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Email</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Status</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {users.map((user) => (
              <tr key={user._id}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{user.name}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{user.email}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  <button
                    onClick={() => toggleActiveStatus(user._id, user.isActive)}
                    className={`px-3 py-1 rounded-full text-xs ${user.isActive ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600"}`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  <div className="flex justify-center gap-3">
                    <button onClick={() => deleteUser(user._id)}>
                      <Trash2 className='w-5 h-5 text-red-500 hover:text-red-700' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
