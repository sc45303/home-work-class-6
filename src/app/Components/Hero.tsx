import Image from "next/image";
import Navbar from "./Header/navbar";

const Hero = () => {
  return (
    <section className="bg-gray-100 container mx-auto p-8 rounded-2xl  ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <p className="text-gray-400 text-sm md:text-base">
            WELCOME TO CHAIRY
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mt-4">
            Best Furniture Collection For Your Interior
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Discover high-quality furniture with a 54% discount on your first
            purchase.
          </p>
          <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded hover:bg-green-900 transition duration-300">
            Shop Now {"→"}
          </button>
        </div>

        {/* Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            alt="chair"
            width={300}
            height={300}
            className="w-full max-w-xs lg:max-w-md rounded-full bg-gray-200"
            src="/chair-re.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
