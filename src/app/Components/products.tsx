import Image from "next/image";

const ProductsAndCategories = () => {
  // Product items array
  const productItems = [
    { id: 1, name: "Library Stool Chair", price: "$20", img: "/pro.png" },
    { id: 2, name: "Comforty Sofa", price: "$45", img: "/pro4.jpg" },
    { id: 3, name: "Wooden Chair", price: "$30", img: "/pro2.jpg" },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      img: "/pro6.jpg",
    },
    { id: 5, name: "Comforty Sofa", price: "$45", img: "/pro4.jpg" },
    { id: 6, name: "Wooden Chair", price: "$30", img: "/pro5.jpg" },
    { id: 7, name: "Library Stool Chair", price: "$20", img: "/pro6.jpg" },
    { id: 8, name: "Comforty Sofa", price: "$45", img: "/pro10.jpg" },
    { id: 9, name: "Wooden Chair", price: "$30", img: "/pro7.jpg" },
    { id: 10, name: "Wooden Chair", price: "$20", img: "/pro9.jpg" },
  ];

  // Top Categories array
  const topCategories = [
    { id: 1, name: "Chairs", img: "/pro5.jpg" },
    { id: 2, name: "Sofas", img: "/pro16.jpg" },
    { id: 3, name: "Tables", img: "/pro3.jpg" },
    { id: 4, name: "Beds", img: "/pro18.jpg" },
  ];


  return (
    <>
      {/* Featured Products Section */}
      <section className="py-16 px-36">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
          <br />
          <div className="grid md:grid-cols-4 gap-6">
            {productItems.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow p-3 rounded-lg flex flex-col hover:bg-gray-200 duration-150"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="w-full h-auto object-fill"
                />
                <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-16 px-36 bg-gray-100 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Top Categories</h2>
          <div className="grid md:grid-cols-4  gap-6">
            {topCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white shadow p-3 rounded-lg flex flex-col hover:bg-gray-200 duration-150"
              >
                <Image
                  src={category.img}
                  alt={category.name}
                  width={200}
                  height={100}
                  className="w-full h-auto object-fill"
                />
                <h3 className="mt-4 text-xl font-bold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Over Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Products</h2>
          <p className="mb-12 text-gray-500">
            Discover our wide range of quality furniture, perfect for your
            interior.
          </p>

          {/* Grid of Products */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {productItems.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow p-3 rounded-lg flex flex-col items-center hover:bg-gray-200 duration-150"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200}
                  height={100}
                  className="w-full h-auto object-fill"
                />
                <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsAndCategories;
