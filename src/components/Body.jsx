import SearchBox from "./SearchBox";
const Body = () => {
  return (
    <div className="bg-[url('https://cms.eichertrucksandbuses.com/uploads/banner/48/e09edb5642e0c00d81fb438f8cd1e931.png')] bg-cover bg-center h-screen flex">
      <SearchBox />
      <div className="flex flex-col items-start mt-18">
        <h1 className="text-7xl font-bold text-slate-800/80 text-center">
          Welcome to GoTrucks
        </h1>
        <p className="text-2xl font-bold text-slate-800/80 my-4 pl-12 ml-24">
          Your trusted partner for truck services
        </p>
        <div className="flex flex-row gap-4 ml-60">
          <button className="login-btn bg-green-700/90 text-white px-3 py-1 rounded-lg shadow-md shadow-emerald-300 hover:shadow-emerald-400 hover:cursor-pointer transition duration-300">
            Start Now
          </button>
          <button className="login-btn bg-green-700/90 text-white px-3 py-1 rounded-lg shadow-md shadow-emerald-300 hover:shadow-emerald-400 hover:cursor-pointer transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
