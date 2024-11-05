import bmw from "../assets/bmw.png";
import audi from "../assets/audi.png";
import benz from "../assets/benz.png";

const VehicleGallery = () => {
  return (
    <div className="flex justify-evenly items-center flex-wrap bg-blue-800 p-12">
      <div className="text-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={bmw}
          alt="Car Make 1"
          className="w-full h-80 object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">BMW</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>

      <div className="text-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={benz}
          alt="Car Make 2"
          className="w-full h-80 object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">Benz</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>

      <div className="text-center p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={audi}
          alt="Car Make 3"
          className="w-full h-80 object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">Audi</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>
    </div>
  );
};

export default VehicleGallery;
