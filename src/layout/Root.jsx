import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;