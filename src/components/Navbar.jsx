import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const popularRoutes = [
    "A to B",
    "C to D",
    "E to F",
    "G to H",
    "I to J"
  ];

  const popularCities = [
    "City A",
    "City B",
    "City C",
    "City D",
    "City E"
  ];

  return (
    <>
      <div className="navbar bg-white shadow-md sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="logoAndText flex items-center gap-2">
            <div className="bg-lime-400 p-2 rounded-full text-sm sm:text-base">Logo</div>
            <div className="logo text-lg sm:text-2xl font-bold">GoTrucks</div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links hidden md:flex gap-4 lg:gap-6 items-center">
            <select className="rounded px-2 py-1 text-sm lg:text-base border border-gray-300">
              <option value="">Popular Routes</option>
              {popularRoutes.map((route, index) => (
                <option key={index} value={route}>
                  {route}
                </option>
              ))}
            </select>
            <select className="rounded px-2 py-1 text-sm lg:text-base border border-gray-300">
              <option value="">Popular Cities</option>
              {popularCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm lg:text-base">
              Contact Us
            </a>
            <button className="login-btn bg-emerald-500 text-white px-3 py-1 text-sm lg:text-base rounded-lg shadow-md shadow-emerald-300 hover:shadow-emerald-400 hover:cursor-pointer transition duration-300">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <select className="w-full rounded px-3 py-2 text-sm border border-gray-300">
                <option value="">Popular Routes</option>
                {popularRoutes.map((route, index) => (
                  <option key={index} value={route}>
                    {route}
                  </option>
                ))}
              </select>
              <select className="w-full rounded px-3 py-2 text-sm border border-gray-300">
                <option value="">Popular Cities</option>
                {popularCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <button className="w-full login-btn bg-emerald-500 text-white px-3 py-2 text-sm rounded-lg shadow-md shadow-emerald-300 hover:shadow-emerald-400 hover:cursor-pointer transition duration-300">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
