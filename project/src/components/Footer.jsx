import React from "react";

function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Our Company</h2>
            <p className="text-gray-400">Innovative solutions with passion and dedication.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition duration-300">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-12">
          &copy; {new Date().getFullYear()} Our Company. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  