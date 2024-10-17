import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="py-8">
      <nav className="p-4 rounded-lg">
        <ul className="flex space-x-4">
          <button className="bg-white px-4 pb-3 rounded-1xl flex items-center gap-2">
            <RxHamburgerMenu />
            All Categories
          </button>
          <li>
            <Link href="/" className="hover:text-teal-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-teal-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/productspage" className="hover:text-teal-500">
              Products
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-teal-500">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-teal-500">
              About
            </Link>
          </li>
          <li className="text-gray-400 px-32">
            <a href="/">Contact: (808) 555-0111</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
