import SearchBox from "./SearchBox";
const Body = () => {
  return (
    <div className="bg-[url('https://cms.eichertrucksandbuses.com/uploads/banner/48/e09edb5642e0c00d81fb438f8cd1e931.png')] bg-cover bg-center flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
      <div className="order-2 lg:order-1 w-full lg:w-1/2 flex justify-center">
        <SearchBox />
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-1/2 flex flex-col items-start justify-center">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-800/80 text-left leading-tight">
          Welcome to GoTrucks
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800/80 my-4 lg:my-6">
          Your trusted partner for truck services
        </p>
        <div className="flex flex-row gap-3 sm:gap-4">
          <button className="login-btn bg-green-700/90 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg shadow-md shadow-emerald-300 hover:shadow-emerald-400 hover:cursor-pointer transition duration-300 w-full sm:w-auto">
            Start Now
          </button>
          <button className="login-btn bg-green-700/90 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg shadow-md shadow-emerald-300 hover:shadow-emerald-400 hover:cursor-pointer transition duration-300 w-full sm:w-auto">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
export default Body;
