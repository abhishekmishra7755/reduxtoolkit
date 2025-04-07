// 📁 src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 text-white bg-blue-600">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-bold">Business Client Management</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/add-client" className="hover:text-gray-300">Add Client</Link></li>
            <li><Link to="/client-list" className="hover:text-gray-300">Client List</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
