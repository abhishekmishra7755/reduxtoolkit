import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteClient } from '../features/client/clientSlice';
import { Link } from 'react-router-dom';

const ClientList = () => {
  const clients = useSelector(state => state.client.clients);
  const dispatch = useDispatch();

  return (
    <div className="max-w-2xl p-4 mx-auto">
      <h2 className="mb-4 text-xl font-bold">Client List</h2>
      {clients.length === 0 ? (
        <p>No clients found.</p>
      ) : (
        <ul className="space-y-4">
          {clients.map(client => (
            <li key={client.id} className="flex justify-between p-3 border rounded">
              <div>
                <p className="font-semibold">{client.clientName}</p>
                <p>Email: {client.email}</p>
                <p>Phone: {client.phone}</p>
                <p>Address: {client.physicalAddress}</p>
                <p>Company: {client.companyName}</p>
                <p>Details: {client.details}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Link 
                  to={`/edit-client/${client.id}`}
                  className="px-2 py-1 text-white bg-blue-500 rounded"
                >
                  Edit
                </Link>
                <button 
                  onClick={() => dispatch(deleteClient(client.id))}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientList;
