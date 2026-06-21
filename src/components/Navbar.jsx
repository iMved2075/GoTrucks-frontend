import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "How it Works", href: "#" },
    { label: "Track", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <>
      <div className="navbar bg-white shadow-lg sticky top-0 z-50 border-b border-emerald-100">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="logoAndText flex items-center gap-3">
            <div className="bg-linear-to-br from-emerald-500 to-emerald-600 p-2.5 rounded-lg text-white font-bold text-lg sm:text-xl">
              🚚
            </div>
            <div className="logo text-xl sm:text-2xl font-bold text-gray-900">
              GoTrucks
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links hidden md:flex gap-8 lg:gap-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-medium text-sm lg:text-base transition duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 items-center">
              <button className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-5 py-2 font-semibold text-sm lg:text-base rounded-lg shadow-md hover:shadow-lg hover:shadow-emerald-300 transition duration-300">
                Sign In
              </button>
              <button className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-5 py-2 font-semibold text-sm lg:text-base rounded-lg shadow-md hover:shadow-lg hover:shadow-emerald-300 transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-emerald-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-700 hover:text-emerald-600 py-2 font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2 border-t border-gray-200">
                <button className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  Sign In
                </button>
                <button className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
