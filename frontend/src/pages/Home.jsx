import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 -mb-12">

            <h1 className="text-5xl font-bold mb-6">
                Request a Ride Now
            </h1>

            <p className="text-lg text-gray-600 mb-6">
                Fast, reliable rides at your fingertips.
            </p>

            <Link to="/book" className="bg-yellow-500 text-black text-xl px-3 py-1 rounded
                hover:bg-black hover:text-white">
                Book Ride
            </Link>
        </div>
    );
}