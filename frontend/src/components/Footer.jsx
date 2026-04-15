import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">

      <div className="max-w-6xl mx-auto px-6 py-6">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          {/* Brand */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Book A Taxi</h2>
            <p className="text-gray-400 text-sm">
              Fast, reliable rides at your fingertips.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-sm">

            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>

            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>

            <Link to="/services" className="hover:text-gray-300">
              Services
            </Link>

            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>

            <Link to="/rides" className="hover:text-gray-300">
              Ride History
            </Link>

            <Link to="/book" className="text-yellow-400 hover:text-gray-300">
              Book Ride
            </Link>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">

          © 2026 Scott Heath. All rights reserved.

        </div>

      </div>

    </footer>
  );
}