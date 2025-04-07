import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClient } from '../features/client/clientSlice';
import { useNavigate } from 'react-router-dom';

const initialFormState = {
  clientName: '',
  phone: '',
  email: '',
  physicalAddress: '',
  companyName: '',
  details: '',
};

const BusinessClientForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClient(formData));
    setFormData(initialFormState);
    // Redirect to the client list page after submission
    navigate('/client-list');
  };

  return (
    <div className="max-w-lg p-4 mx-auto border rounded shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Add Business Client Details</h2>
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
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BusinessClientForm;
