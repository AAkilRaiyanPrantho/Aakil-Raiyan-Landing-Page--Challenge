import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto"><Navbar></Navbar></div>
            <Outlet></Outlet>
            <div className="max-w-screen-xl mx-auto"><Footer></Footer></div>
        </div>
    );
};

export default Main;