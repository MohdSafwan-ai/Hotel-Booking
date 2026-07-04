import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import logo from "../assets/logo (2).png";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  console.log("This is the auth user", auth?.user);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Discover", href: "/discover" },
    { label: "Activities", href: "/activities" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Redirect logic
  const redirectDashboard = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(false);
    if (auth?.user?.role === "admin") {
      navigate("/admin/details");
    } else {
      navigate("/user");
    }
  };

  // Handle dropdown toggle
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
    setIsDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close dropdown when mouse leaves
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Handle logout logic
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className="relative bg-white px-4 py-3 sm:px-6 lg:px-16 xl:px-28">
      <div className="flex items-center justify-between gap-4">
        {/* Brand Logo and Name */}
        <a href="/" className="flex shrink-0 items-center">
          <img src={logo} alt="logo" className="h-auto w-24 sm:w-28 lg:w-auto" />
        </a>

        {/* Navbar Links */}
        <div className="hidden items-center gap-5 text-sm font-medium md:flex lg:gap-6 lg:text-base">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 transition hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Notification and Profile */}
        <div className="relative flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Open cart"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            onClick={() => navigate("/cart")}
          >
            <IoIosHeartEmpty size={22} />
          </button>
          <button
            type="button"
            aria-label="Open profile menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            onClick={handleDropdownToggle}
          >
            <FaUser size={18} />
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 hover:text-gray-900 md:hidden"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

          {isDropdownOpen && (
            <div
              className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded border border-gray-200 bg-white shadow-lg sm:w-48"
              onMouseLeave={closeDropdown}
            >
              <ul>
                {auth?.user ? (
                  <>
                    <li
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={redirectDashboard}
                    >
                      Your Profile
                    </li>
                    <li
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Sign Out
                    </li>
                  </>
                ) : (
                  <li
                    onClick={() => {
                      setIsDropdownOpen(false);
                      navigate("/login");
                    }}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  >
                    Sign In
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full z-40 w-full border-t border-gray-100 bg-white px-4 py-3 shadow-md md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded px-2 py-3 text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
