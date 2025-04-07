import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateClient } from '../features/client/clientSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditClientForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const client = useSelector(state =>
    state.client.clients.find(c => c.id === id)
  );

  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    email: '',
    physicalAddress: '',
    companyName: '',
    details: '',
  });

  useEffect(() => {
    if (client) {
      setFormData(client);
    }
  }, [client]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateClient(formData));
    navigate('/client-list');
  };

  if (!client) return <p>Client not found!</p>;

  return (
    <div className="max-w-lg p-4 mx-auto border rounded shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Edit Client Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Client Name</label>
          <input 
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Phone Number</label>
          <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email Address</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Physical Address</label>
          <input 
            type="text"
            name="physicalAddress"
            value={formData.physicalAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Company / Organization Name</label>
          <input 
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Additional Details</label>
          <textarea 
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-green-600 rounded">
          Update Client
        </button>
      </form>
    </div>
  );
};

export default EditClientForm;
