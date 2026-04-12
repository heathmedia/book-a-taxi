import { useState } from "react";
import MapSelector from "../components/MapSelector";
import PriceEstimator from "../components/PriceEstimator";
import axios from "axios";
import { motion } from "framer-motion";


export default function BookRide() {

    const [pickup, setPickup] = useState(null);
    const [dropoff, setDropoff] = useState(null);
    const [name, setName] = useState("");

    const submitRide = async () => {

        if (!name || !pickup || !dropoff) {
            alert("Please fill all fields");
            return;
        }

        await axios.post("http://localhost:3001/rides", {
            name,
            pickup,
            dropoff
        });

        alert("Ride booked!");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">
                    Book Your Ride
                </h1>

                <input
                    className="border p-2 w-full mb-4"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <h2 className="font-semibold">Select Pickup</h2>

                <MapSelector setLocation={setPickup} />

                <h2 className="font-semibold mt-6">Select Dropoff</h2>

                <MapSelector setLocation={setDropoff} />

                <PriceEstimator pickup={pickup} dropoff={dropoff} />

                <button
                    onClick={submitRide}
                    className="bg-black text-white px-4 py-2 mt-6 rounded"
                >
                    Confirm Ride
                </button>
        </motion.div>
    );
}