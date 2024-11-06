import bmw from "../assets/bmw.png";
import audi from "../assets/audi.png";
import benz from "../assets/benz.png";

const VehicleGallery = () => {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-20 flex-wrap bg-blue-800 p-4 md:p-12">
      {/* Gallery item for BMW */}
      <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={bmw}
          alt="BMW"
          className="w-full h-[70%] sm:h-[60%] md:h-[80%] lg:h-[90%] object-cover rounded"
        />
        <p className="mt-1 text-lg taller:text-4xl font-semibold text-white">BMW</p>
        <p className="text-gray-200 text-base taller:text-4xl pb-4">Browse for latest arrivals</p>
      </div>

      {/* Gallery item for Benz */}
      <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={benz}
          alt="Benz"
          className="w-full h-[70%] sm:h-[60%] md:h-[80%] lg:h-[90%] object-cover rounded"
        />
        <p className="mt-1 text-lg taller:text-4xl font-semibold text-white">Benz</p>
        <p className="text-gray-200 text-base taller:text-4xl  pb-4">Browse for latest arrivals</p>
      </div>
      {/* Gallery item for Audi */}
      <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={audi}
          alt="Audi"
          className="w-full h-[70%] sm:h-[60%] md:h-[80%] lg:h-[90%] object-cover rounded"
        />
        <p className="mt-1 text-lg taller:text-4xl font-semibold text-white">Audi</p>
        <p className="text-gray-200 text-base taller:text-4xl  pb-4">Browse for latest arrivals</p>
      </div>
    </div>
  );
};

export default VehicleGallery;
