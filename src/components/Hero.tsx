import hero from "../assets/HeroFinal2.png";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-[35vh] md:h-[100%] lg:h-[50vh] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Full-Section Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Overlay for Text */}
      <div
        className="relative flex flex-col justify-center items-start text-white z-20 p-6
                    sm:p-8 sm:mb-4
                    md:w-2/3 md:p-16 md:text-center md:mt-8 md:mb-16
                    lg:w-2/3 lg:mt-16 lg:ml-40 lg:mb-6
                    taller:mt-64 taller:py-20 taller:pr-24 taller:ml-96"
      >
        <h1
          className="text-2xl font-bold mb-4 
                     sm:text-3xl
                     md:text-4xl 
                     lg:text-5xl
                     taller:text-8xl 
                     whitespace-nowrap"
        >
          Welcome to ZAK AUTOS
        </h1>
        <p
          className="text-sm mb-4 
                     sm:text-md
                     md:text-2xl md:mt-2 
                     taller:text-6xl taller:mb-8"
        >
          Find your dream car with us today!
        </p>
      </div>

      {/* Search Box */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-xs 
                    flex flex-col items-center justify-center gap-2
                    md:max-w-xl md:flex-row md:gap-0
                    taller:max-w-[1200px] taller:p-10"
      >
        <input
          type="text"
          placeholder="Search for cars..."
          className="border border-gray-300 rounded-l-md w-full py-4 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                     md:w-[70%] 
                     taller:h-36 taller:text-4xl taller:w-[1000px]"
        />
        <button
          className="bg-blue-500 text-white rounded-r-md w-full py-4 px-6 text-lg hover:bg-blue-600 
                     md:w-32 md:px-8 
                     taller:h-36 taller:text-4xl taller:w-[200px]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
