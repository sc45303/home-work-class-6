import Image from "next/image";

const ProductsPage = () => {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$20", img: "/pro.png" },
    { id: 2, name: "Comforty Sofa", price: "$45", img: "/pro1.jpg" },
    { id: 3, name: "Wooden Chair", price: "$30", img: "/pro2.jpg" },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      img: "/pro3.jpg",
    },
    { id: 5, name: "Comforty Sofa", price: "$45", img: "/pro4.jpg" },
    { id: 6, name: "Wooden Chair", price: "$30", img: "/pro5.jpg" },
    { id: 7, name: "Library Stool Chair", price: "$20", img: "/pro6.jpg" },
    { id: 8, name: "Comforty Sofa", price: "$45", img: "/pro7.jpg" },
    { id: 9, name: "Wooden Chair", price: "$30", img: "/pro8.jpg" },
    { id: 10, name: "Wooden Chair", price: "$20", img: "/pro9.jpg" },
  ];

  return (
    <>
      <section className="py-16 px-36">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6  ml-80 mb-20">
            Over Products
          </h2>
          <br />
          <div className="grid md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow p-3 rounded-lg flex flex-col hover:bg-gray-200 duration-150"
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
export default ProductsPage;
