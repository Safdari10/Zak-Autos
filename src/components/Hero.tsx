import hero from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-end">
      <img
        src={hero}
        alt="hero image"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-start text-white p-20">
        <h1 className="text-6xl font-bold">Welcome to Zak Autos</h1>
      </div>
      <div  className="absolute inset-0 flex items-center justify-center mt-40">
      <input
        type="text"
        className="bg-white w-80 h-14 border-solid "
      />
      <button type="button" className="bg-blue-600 p-4">
        Search
      </button>
    </div>
    </div>
  );
};

export default Hero;
