import Image from "next/image";

const Products = () => {
  // Product items array
  const productItems = [
    { id: 1, name: 'Library Stool Chair', price: '$20', img: '/download.png' },
    { id: 2, name: 'Comforty Sofa', price: '$45', img: '/download1.png' },
    { id: 3, name: 'Wooden Chair', price: '$30', img: '/download3.png' },
    { id: 4, name: 'Library Stool Chair', price: '$20', img: '/download14.png' },
    { id: 5, name: 'Comforty Sofa', price: '$45', img: '/download11.png' },
    { id: 6, name: 'Wooden Chair', price: '$30', img: '/download6.png' },
    { id: 7, name: 'Library Stool Chair', price: '$20', img: '/download7.png' },
    { id: 8, name: 'Comforty Sofa', price: '$45', img: '/download8.png' },
    { id: 9, name: 'Wooden Chair', price: '$30', img: '/download9.png' },
    { id: 10, name: 'wooden chair', price: '$20', img:'/download10.jpg'},
    { id: 10, name: 'wooden chair', price: '$20', img:'/download16.png'},
    { id: 10, name: 'wooden chair', price: '$20', img:'/download15.png'},




  ];
  return (
    <section className="py-16  ">
      <div className="container max-auto ">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid  md:grid-cols-6 gap-6">
          {productItems.map((product) => (
            <div key={product.id} className="bg-white shadow p-3 rounded-lg flex flex-wrap hover:bg-gray-200 ">
              <Image src={product.img} alt={product.name} width={200} height={100} className="w-full h-auto object-fill" />
              <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;  