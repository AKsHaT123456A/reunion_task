import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo11.png'

const Header = () => {
  return (
    <header className="py-2 mb-7 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with a link to the homepage */}
        <Link to='/'>
          <img className="h-[55px] lg:h-[70px]" src={Logo} alt="Company Logo" />
        </Link>
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Link to the login page */}
          <Link to='' className="hover:text-purple-900 px-4 py-3 border hover:border-purple-400 rounded-lg transition">Log in</Link>
          {/* Link to the signup page */}
          <Link to='' className="bg-purple-700 px-4 py-3 text-white rounded-lg hover:bg-purple-800 transition">Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
