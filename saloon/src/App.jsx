// 📁 src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BusinessClientForm from './components/BusinessClientForm';
import ClientList from './components/ClientList';
import EditClientForm from './components/EditClientForm';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <div className="max-w-2xl mt-10 mb-10 bg-gray-100 ">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-client" element={<BusinessClientForm />} />
          <Route path="/client-list" element={<ClientList />} />
          <Route path="/edit-client/:id" element={<EditClientForm />} />
        </Routes>
          <div className='mt-10 '>
            <Footer />
          </div>
      </div>
    </Router>
  );
}

export default App;
