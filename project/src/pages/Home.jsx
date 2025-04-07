import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="text-center p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page</h2>
            <button
                onClick={() => navigate("/about")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Go to About Page
            </button>
       <div>
       <Footer/>
       </div>
        </div>
    );
}

export default Home;
