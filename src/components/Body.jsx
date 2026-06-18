import SearchBox from "./SearchBox";
const Body = () => {
  return (
    <section className="relative overflow-hidden bg-[url('https://cms.eichertrucksandbuses.com/uploads/banner/48/e09edb5642e0c00d81fb438f8cd1e931.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:px-10 lg:py-16">
        <div className="order-2 lg:order-1">
          <SearchBox />
        </div>
        <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-800/90 sm:text-5xl lg:text-7xl">
          Welcome to GoTrucks
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-semibold text-slate-800/80 sm:text-2xl lg:mt-6">
          Your trusted partner for truck services
        </p>
        <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button className="login-btn rounded-lg bg-green-700/90 px-5 py-3 text-white shadow-md shadow-emerald-300 transition duration-300 hover:cursor-pointer hover:shadow-emerald-400">
            Start Now
          </button>
          <button className="login-btn rounded-lg bg-green-700/90 px-5 py-3 text-white shadow-md shadow-emerald-300 transition duration-300 hover:cursor-pointer hover:shadow-emerald-400">
            Read More
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Body;
