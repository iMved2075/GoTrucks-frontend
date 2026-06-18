const Navbar = () => {
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
      <div className="navbar p-3 flex justify-between items-center">
        <div className="logoAndText flex items-center gap-2 ml-5">
          <div className="bg-lime-400 p-2 rounded-full">Logo</div>
          <div className="logo text-2xl font-bold">GoTrucks</div>
        </div>
        <div className="nav-links flex gap-6">
          <select className="rounded">
            <option value="">Popular Routes</option>
            {popularRoutes.map((route, index) => (
              <option key={index} value={route}>
                {route}
              </option>
            ))}
          </select>
          <select className="rounded">
            <option value="">Popular Cities</option>
            {popularCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          <a href="#" className="text-gray-700 hover:text-gray-900 mt-1">
            Contact Us
          </a>
          <button className="login-btn bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-md shadow-emerald-300 hover:shadow-emerald-400 hover:cursor-pointer transition duration-300">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
