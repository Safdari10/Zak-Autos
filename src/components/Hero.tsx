import hero from "../assets/HeroFinal.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row h-[50vh] overflow-hidden bg-cover bg-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Full-Section Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> 

      {/* Overlay for Text and Search Box on the Right */}
      <div className="relative flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-20 z-20 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Welcome to Zak Autos
        </h1>
        <p className="text-md md:text-lg mb-4 text-center">
          Find your dream car with us today!
        </p>

        {/* Search Box */}
        <div className="flex w-full max-w-xs md:max-w-sm justify-center mb-4">
          <input
            type="text"
            placeholder="Search for cars..."
            className="border border-gray-300 rounded-l-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
