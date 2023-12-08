import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <div className="min-h-screen flex flex-col">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;