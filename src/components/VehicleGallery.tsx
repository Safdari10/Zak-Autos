import bmw from "../assets/bmw.png";
import audi from "../assets/audi.png";
import benz from "../assets/benz.png";

const VehicleGallery = () => {
  return (
    <div className="flex justify-center items-center gap-10 md:gap-48 flex-wrap bg-blue-800 p-4 md:p-12">
      <div className="flex flex-col justify-center items-center w-96 md:w-[650px] p-2 md:p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={bmw}
          alt="BMW"
          className="w-full h-56 md:w-[620px] md:h-[420px] object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">BMW</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>

      <div className="flex flex-col justify-center items-center w-96 md:w-[650px] p-2 md:p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={benz}
          alt="Benz"
          className="w-full h-56 md:w-[620px] md:h-[420px] object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">Benz</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>

      <div className="flex flex-col justify-center items-center w-96 md:w-[650px] p-2 md:p-4 bg-blue-600 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={audi}
          alt="Audi"
          className="w-full h-56 md:w-[620px] md:h-[420px] object-cover rounded"
        />
        <p className="mt-2 text-lg font-semibold text-white">Audi</p>
        <p className="text-gray-200">Browse for latest arrivals</p>
      </div>
    </div>
  );
};

export default VehicleGallery;
