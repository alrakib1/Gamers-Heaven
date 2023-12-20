import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";


const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // console.log(user?.photoURL)

  const navLinks = (
    <>
      <li className="xs:block md:hidden">
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/vip">Vip</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );
  return (
    
<div className="bg-[#130d417e] text-white relative w-full">
<div className="navbar  max-w-screen-xl  mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0D073A] mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
       <div className="hidden md:block">
       <Link
          to="/"
          className="normal-case md:text-xl font-bold  text-white p-2 rounded-lg"
        >
          <img src="	https://i.ibb.co/5xKV4Pc/download-removebg-preview.png" className="w-5/12" alt="" />
        </Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
          <div className="w-12 rounded-full">
            <img
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://i.ibb.co/xXQLtfb/user.png"
              }
              alt=""
            />
          </div>
        </label>
        {user ? (
          <a className="btn" onClick={() => logOut()}>
            Log Out
          </a>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
</div>

    
  );
};

export default Navbar;
