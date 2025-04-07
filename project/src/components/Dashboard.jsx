import { useNavigate } from "react-router-dom";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome, {user.name}!</h2>
            <p className="text-center">This is your dashboard. You are successfully logged in.</p>
        </div>
    );
}

export default Dashboard;
