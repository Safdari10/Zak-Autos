import hero from "../assets/HeroFinal2.png";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-[35vh] md:h-[50vh] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Full-Section Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Overlay for Text */}
      <div className="relative flex flex-col justify-center items-center p-6 text-white z-20 w-full md:w-1/2 md:p-20 md:mt-20 md:ml-10">
        <h1 className="text-2xl font-bold text-center mb-4 sm:text-3xl md:text-4xl taller:text-6xl">
          Welcome to <span className="text-white shadow-gray-100">ZAK AUTOS</span>
        </h1>
        <p className="text-sm text-center mb-4 sm:text-md md:text-lg taller:text-4xl">
          Find your dream car with us today!
        </p>
      </div>

      {/* Search Box */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-xs flex flex-col items-center justify-center space-y-2 md:max-w-xl md:flex-row md:space-y-0 taller:max-w-[1200px] taller:p-10">
        <input
          type="text"
          placeholder="Search for cars..."
          className="border border-gray-300 rounded-md w-full py-4 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[70%] taller:h-28 taller:text-4xl taller:w-[1000px]"
        />
        <button className="bg-blue-500 text-white rounded-md w-full py-4 px-6 text-lg hover:bg-blue-600 md:w-32 md:px-8 taller:text-4xl taller:w-[200px] taller:h-28">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
