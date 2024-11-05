import bmw from '../assets/bmw.png'
import audi from "../assets/audi.png"
import benz from "../assets/benz.png"

const VehicleGallery = () => {
  return (
    <div className="flex justify-around items-center mt-8 gap-2">
      <div className="text-center bg-white">
        <img src={bmw} alt="Car Make 1" className="w-100 h-80 object-cover" />
        <p className="mt-2 text-lg font-semibold">BMW</p>
      </div>

      <div className="text-center bg-white">
        <img src={benz} alt="Car Make 2" className="w-100 h-80 object-cover" />
        <p className="mt-2 text-lg font-semibold">Benz</p>
      </div>

      <div className="text-center bg-white">
        <img src={audi} alt="Car Make 3" className="w-100 h-80 object-cover" />
        <p className="mt-2 text-lg font-semibold">Audi</p>
      </div>
    </div>
  );
};

export default VehicleGallery;
