import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Admin = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Admin;
