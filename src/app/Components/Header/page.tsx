 import Link from "next/link";

// components/Header.tsx
const Header = () => {
    return (
      <header className="  min-w-min  flex  bg-white shadow container  justify-berween">
        <div className="container mx-12 flex justify-between items-center p-4  max-w-screen-md">
          <div className="text-xl font-bold  flex pl-12">Comforty</div>
          <nav>
            <ul className=" space-x-4 flex  "  >
              <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link href="/shop" className="hover:text-gray-600">Shop</Link></li>
              <li><Link href="/products" className="hover:text-gray-600">Products</Link></li>
              <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex justify-between ">
            <input type="text" placeholder="Search" className="border p-2 rounded" />
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  