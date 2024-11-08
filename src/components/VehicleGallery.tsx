import bmw from "../assets/bmw.png";
import audi from "../assets/audi.png";
import benz from "../assets/benz.png";

const VehicleGallery = () => {
  return (
    <div
      className="flex justify-center items-center gap-5 bg-blue-800 p-4 flex-wrap 
                  sm:gap-6 sm:p-6 
                  md:gap-8 md:p-12 
                  lg:gap-32 lg:p-16
                  taller:gap-64 taller:px-20 taller:py-28">
      
      {/* Gallery item for BMW */}
      <div
        className="flex flex-col justify-center items-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 
                    w-5/6 sm:w-2/3 
                    md:w-3/5 
                    lg:w-1/4 
                    taller:w-1/4 taller:pb-16 taller:px-10">
        <img
          src={bmw}
          alt="BMW"
          className="w-full h-[60%] object-cover rounded 
                     sm:h-[60%] 
                     md:h-[70%] 
                     lg:h-[80%] mb-2"
        />
        <p
          className="text-lg font-semibold text-white md:text-xl 
                     taller:text-6xl taller:mb-4">
          BMW
        </p>
        <p
          className="text-gray-200 text-base md:text-lg 
                     taller:text-3xl">
          Browse for latest arrivals
        </p>
      </div>

      {/* Gallery item for Benz */}
      <div
        className="flex flex-col justify-center items-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 
                    w-5/6 sm:w-2/3 
                    md:w-3/5 
                    lg:w-1/4 
                    taller:w-1/4 taller:pb-16 taller:px-10">
        <img
          src={benz}
          alt="Benz"
          className="w-full h-[60%] object-cover rounded 
                     sm:h-[60%] 
                     md:h-[70%] 
                     lg:h-[80%] mb-2"
        />
        <p
          className="text-lg font-semibold text-white md:text-xl 
                     taller:text-6xl taller:mb-4">
          Benz
        </p>
        <p
          className="text-gray-200 text-base md:text-lg 
                     taller:text-3xl">
          Browse for latest arrivals
        </p>
      </div>

      {/* Gallery item for Audi */}
      <div
        className="flex flex-col justify-center items-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 
                    w-5/6 sm:w-2/3 
                    md:w-3/5 
                    lg:w-1/4 
                    taller:w-1/4 taller:pb-16 taller:px-10">
        <img
          src={audi}
          alt="Audi"
          className="w-full h-[60%] object-cover rounded 
                     sm:h-[60%] 
                     md:h-[70%] 
                     lg:h-[80%] mb-2"
        />
        <p
          className="text-lg font-semibold text-white md:text-xl 
                     taller:text-6xl taller:mb-4">
          Audi
        </p>
        <p
          className="text-gray-200 text-base md:text-lg 
                     taller:text-3xl">
          Browse for latest arrivals
        </p>
      </div>
    </div>
  );
};

export default VehicleGallery;
