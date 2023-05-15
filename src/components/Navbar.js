import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const navbarClasses = darkMode
    ? "bg-gray-800 text-white"
    : "bg-gray-100 text-gray-800";

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl">
              Accueil
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  L'agence
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              onClick={handleDarkModeToggle}
              className="px-3 py-2 rounded-md text-sm font-medium"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
