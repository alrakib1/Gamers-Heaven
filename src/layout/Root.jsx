import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";


const Root = () => {
    return (
        <div className="bg-[#090029] text-white">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;