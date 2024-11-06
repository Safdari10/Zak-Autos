import hero from "../assets/HeroFinal.png";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-[50vh] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Full-Section Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> 

      {/* Overlay for Text */}
      <div className="relative flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-20 z-20 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Welcome to Zak Autos
        </h1>
        <p className="text-md md:text-lg mb-4 text-center">
          Find your dream car with us today!
        </p>
      </div>

      {/* Search Box with Unified Width on Mobile */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-xs md:max-w-lg flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0">
        <input
          type="text"
          placeholder="Search for cars..."
          className="border border-gray-300 rounded-md py-4 px-4 w-full md:w-[70%] text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white py-4 px-6 text-lg rounded-md w-full md:w-32 md:px-8 hover:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
