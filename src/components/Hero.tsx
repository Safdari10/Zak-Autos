import hero from "../assets/heroImage.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[50vh] flex items-center justify-end bg-yellow-500">
      <img
        src={hero}
        alt="hero image"
        className="object-cover w-[60vw] h-full pr-10"
      />
      <div className="absolute inset-0 flex items-start justify-start text-blue-600 p-20">
        <h1 className="text-6xl font-bold">Welcome to Zak Autos</h1>
      </div>
      <div  className="absolute inset-0 flex items-end justify-start p-20">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white border-solid border-black "
      />
      <button type="button" className="bg-blue-600">
        Search
      </button>
    </div>
    </div>
  );
};

export default Hero;
