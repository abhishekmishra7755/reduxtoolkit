// 📁 src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BusinessClientForm from './components/BusinessClientForm';
import ClientList from './components/ClientList';
import EditClientForm from './components/EditClientForm';

function App() {
  return (
    <Router>
      <Header />
      <div className="max-w-2xl p-4 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-client" element={<BusinessClientForm />} />
          <Route path="/client-list" element={<ClientList />} />
          <Route path="/edit-client/:id" element={<EditClientForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
