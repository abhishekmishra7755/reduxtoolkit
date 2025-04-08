// 📁 src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import client from '../assets/img/client.jpg'

const Home = () => {
  return (
    <div className="flex w-full h-full p-4 -mt-4 ">
        <div className='flex gap-20'>
            <div className='w-full h-full'>
                <img src={client } alt="Logo" className="w-[1000px] h-[300px]" />
            </div>
            <div className="flex-col">
            <h1 className="mb-4 text-3xl font-bold">Welcome to Business Client Management</h1>
      <p className="mb-6 text-lg text-gray-700">
        Manage your business clients efficiently. Add, update, or delete client details as needed.
      </p>
      <div className="space-x-4">
        <Link
          to="/add-client"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Add Client
        </Link>
        <Link
          to="/client-list"
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          View Clients
        </Link>
      </div>
                
            </div>
        </div>
     
    </div>
  );
};

export default Home;
