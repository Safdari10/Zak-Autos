import bmw from "../assets/bmw.png";
import audi from "../assets/audi.png";
import benz from "../assets/benz.png";

const VehicleGallery = () => {
  return (
    <div className="flex justify-center items-center gap-10 flex-wrap bg-blue-800 p-6 md:p-12">
      <div className="text-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={bmw}
          alt="BMW"
          className="w-50 h-48 md:w-80 md:h-64 object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">BMW</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>

      <div className="text-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={benz}
          alt="Benz"
          className="w-50 h-48 md:w-80 md:h-64 object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">Benz</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>

      <div className="text-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={audi}
          alt="Audi"
          className="w-50 h-48 md:w-80 md:h-64 object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">Audi</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>
    </div>
  );
};

export default VehicleGallery;
