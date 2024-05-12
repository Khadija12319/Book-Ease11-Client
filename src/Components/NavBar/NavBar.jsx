import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
import { FaRegUserCircle } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const NavBar = () => {
    const navmid=<>
        <li><NavLink to="/" className={({ isActive }) =>
        isActive ? 'font-bold border-b-[2px] border-[#5c5c5c] font-sarabun text-[#5c5c5c]' : 'bg-white text-[#5c5c5c] font-normal dark:bg-transparent font-sarabun'
        }>Home</NavLink></li>
        <li><NavLink to="/rooms" className={({ isActive }) =>
        isActive ? 'font-bold border-b-[2px] border-[#5c5c5c]  font-sarabun text-[#5c5c5c]' : 'bg-white text-[#5c5c5c] font-normal dark:bg-transparent font-sarabun'
        }>Rooms</NavLink></li>
        <li><NavLink to='/booking' className={({ isActive }) =>
        isActive ? 'font-bold border-b-[2px] border-[#5c5c5c]  font-sarabun text-[#5c5c5c]' : 'bg-white text-[#5c5c5c] font-normal dark:bg-transparent font-sarabun'
        }>My Bookings</NavLink></li>
        <li><NavLink to='/aboutus' className={({ isActive }) =>
        isActive ? 'font-bold border-b-[2px] border-[#5c5c5c]  font-sarabun text-[#5c5c5c]' : 'bg-white text-[#5c5c5c] font-normal dark:bg-transparent font-sarabun'
        }>About Us</NavLink></li>
        <li><NavLink to='/contactus' className={({ isActive }) =>
        isActive ? 'font-bold border-b-[2px] border-[#5c5c5c]  font-sarabun text-[#5c5c5c]' : 'bg-white text-[#5c5c5c] font-normal dark:bg-transparent font-sarabun'
        }>Contact Us</NavLink></li>
    </>;


    const {user, logOut} =useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      }
  const handleSignOut = () =>{
      logOut()
      .then()
      .catch()
  };
  const navEnd =<>
            <div className="relative inline-block md:text-left">
            <div>
            <button type="button" onClick={toggleDropdown} className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 tooltip tooltip-left dark:bg-transparent" id="menu-button" aria-expanded="true" aria-haspopup="true" data-tip={user?.displayName}>
            { user?.photoURL ? (
                    <img src={user?.photoURL} className="h-16 w-16 rounded-full dark:bg-transparent" alt="User Profile" />
                    ) : (
                    <FaRegUserCircle className="h-16 w-16 text-gray-500 dark:bg-transparent" />
                    )}
            </button>
            </div>
        {
        isOpen && (<div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" data-aos="fade-in" data-aos-duration="1000" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
        <div className="py-1 text-left" role="none">
            <Link className="text-gray-700 block px-4 py-2 text-sm" tabIndex="-1" role="menuitem"  id="menu-item-0">User Profile</Link>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" tabIndex="-1" role="menuitem"  id="menu-item-1">Add Account</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" tabIndex="-1" role="menuitem"  id="menu-item-2">Account settings</a>
            <form>
            <Link className="text-gray-700 block w-full px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={handleSignOut}>Logout</Link>
            </form>
        </div>
        </div>)}
        </div>
        </>;
    return (
        <div>
            <div>
                <div>
                <div className="navbar lg:px-20 flex md:flex-row flex-col overflow-hidden py-4">
                <div className="navbar-start md:w-[50%] w-[100%]">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                       {
                        navmid
                       } 
                    </ul>
                    </div>
                    {/* Radiant Horizon Retreat hotel */}
                    <a className="md:text-5xl text-2xl flex items-center font-forum font-extrabold leading-[60px]"><RiHotelLine className="text-[#5c5c5c]"/><span className="text-[#5c5c5c]">RH Retreat</span></a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {
                        navmid
                    }
                    </ul>
                </div>


            <div className="navbar-end text-right">
            {user ? (
            <div className="navbar-end gap-3 pr-5">
                {
                    navEnd}
            </div>
            ) : (
            <div className="navbar-end gap-3 space-x-4 font-work-sans flex">
                <Link to='/login' className="btn text-base font-semibold font-sarabun">Login</Link>
                <Link to='/register' className="btn text-base font-semibold font-sarabun">Register</Link>
            </div>
            )}
            </div>
            </div>

            </div>
        </div>
        </div>
    );
};

export default NavBar;