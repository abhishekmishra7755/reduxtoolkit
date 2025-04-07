import { useNavigate } from "react-router-dom";

function About() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            We are a team of passionate developers and designers dedicated to creating high-quality web applications.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://source.unsplash.com/400x300/?technology,team"
                alt="Our Team"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                Our mission is to build innovative and user-friendly applications that help businesses and individuals
                achieve their goals. We strive for excellence in every project we undertake.
              </p>
              <a
                href="https://www.ourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                Visit our website
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  