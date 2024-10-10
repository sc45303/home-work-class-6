import Image from "next/image";

const Hero = () => {
  return (
    <section className="   bg-gray-100 container mx-auto flex justify-center max-w-6xl size-full rounded-2xl p-20" >
      <div className="container mx-6 flex items-center justify-around">
        <div className="max-w-md">
          <p className="text-gray-400">WELCOME TO CHAIRY</p>
          <h1 className="text-4xl font-bold ">Best Furniture Collection For Your Interior</h1>
          <p className="mt-4">Discover high-quality furniture with a 54% discount on your first purchase.</p>
          <button className="mt-4 text-white bg-teal-500 px-4 py-2 rounded  hover:bg-green-900">Shop Now {'→'}</button>
        </div>
        <div>
        
          <Image src="/chair-re.png" alt="chair" width={80} height={90} className="bg-gray-200  bg-left-bottom rounded-full w-96 " />
         
        </div>
      </div>
    </section>
  );
}

export default Hero;
