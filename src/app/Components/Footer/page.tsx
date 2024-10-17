import { FaChair } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <FaChair className="text-green-600 text-3xl" />
            <h1 className="text-2xl font-bold text-gray-800">Comforty</h1>
            <br />
            <br />
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Category</h3>
            <ul className="space-y-2">
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Wing Chair</li>
              <li>Desk Chair</li>
              <li>Wooden Chair</li>
              <li>Park Bench</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Customer Service</li>
              <li>Warranty</li>
              <li>Delivery Info</li>
              <li>Return Policy</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full md:w-auto bg-white border-2 px-4 py-2 rounded-lg focus:outline-none"
              />
              <button className="bg-teal-400 text-white rounded-lg px-6 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
