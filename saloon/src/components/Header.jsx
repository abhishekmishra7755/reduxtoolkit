// 📁 src/components/Header.jsx

import { Link } from "react-router-dom";
import { useState } from "react";

const productList = [
  "iPhone 15",
  "Samsung Galaxy S23",
  "Google Pixel 8",
  "OnePlus 11",
  "MacBook Pro",
  "iPad Air",
  "Apple Watch",
  "Sony Headphones",
  "Dell XPS 13",
  "Lenovo ThinkPad",
];

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(productList);

  const handleSearch = () => {
    const filtered = productList.filter((product) =>
      product.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      <header className="p-4 text-white bg-blue-600">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-xl font-bold">Business Client Management</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/add-client" className="hover:text-gray-300">
                  Add Client
                </Link>
              </li>
              <li>
                <Link to="/client-list" className="hover:text-gray-300">
                  Client List
                </Link>
              </li>
              <li>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-4 py-2 text-white rounded-lg transiti "
                  >
                    Search
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Search Results */}
      <div className="max-w-2xl p-6 mx-auto">
        <h2 className="mb-4 text-lg font-semibold">Results:</h2>
        <ul className="space-y-2">
          {results.length > 0 ? (
            results.map((product, index) => (
              <li
                key={index}
                className="px-4 py-2 transition bg-white rounded-lg shadow hover:shadow-md"
              >
                {product}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No products found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
