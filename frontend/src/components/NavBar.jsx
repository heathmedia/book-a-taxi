import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">🚕 Book a Taxi</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/rides">Ride History</Link>
        <Link to="/book" className="bg-yellow-500 text-black px-3 py-1 rounded
            hover:bg-black hover:text-white hover:bordre-1 border-yellow-500">
          Book Ride
        </Link>
      </div>
    </nav>
  );
}