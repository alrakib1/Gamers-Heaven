import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";


const Navbar = () => {
    const {logOut} = useContext(AuthContext);

    const navLinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/login'>login</NavLink></li>
     <li><NavLink to='/register'>register</NavLink></li>
      
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to='/' className="normal-case text-xl font-bold text-black bg-slate-400 p-2 rounded-lg">Gamers Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn" onClick={()=>logOut()}>Log Out</a>
  </div>
</div>
    );
};

export default Navbar;