import SearchBox from "./SearchBox";

const Body = () => {
  const stats = [
    { value: "15K+", label: "Shipments Delivered" },
    { value: "4.8★", label: "Avg Rating" },
    { value: "50+", label: "Cities" },
  ];

  return (
    <div className="relative bg-[url('https://cms.eichertrucksandbuses.com/uploads/banner/48/e09edb5642e0c00d81fb438f8cd1e931.png')] bg-cover bg-center min-h-screen flex flex-col justify-center">
      {/* Dark gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        {/* Left Content */}
        <div className="order-1 lg:order-1 w-full lg:w-1/2 flex flex-col items-start justify-center">
          <div className="mb-4 inline-block">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald-400/30">
              🚀 Fast & Reliable
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-left leading-tight mb-4 lg:mb-6">
            Move Your Cargo<br />with Confidence
          </h1>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-100 mb-6 lg:mb-8 max-w-md">
            Book reliable truck services in minutes. Track shipments in real-time. Pay competitive rates. Trusted by 15,000+ customers.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-10 w-full sm:w-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl hover:shadow-emerald-500/50 transition duration-300 hover:scale-105 transform">
              Start Now →
            </button>
            <button className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl hover:shadow-emerald-500/50 transition duration-300 hover:scale-105 transform">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content - Search Box */}
        <div className="order-2 lg:order-2 w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
