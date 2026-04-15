import { useState } from "react";
import MapSelector from "../components/MapSelector";
import PriceEstimator from "../components/PriceEstimator";
import axios from "axios";
import { motion } from "framer-motion";
import RideTypeSelector from "../components/RideTypeSelector";


export default function BookRide() {

    const [pickup, setPickup] = useState(null);
    const [dropoff, setDropoff] = useState(null);
    const [name, setName] = useState("");
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const [price, setPrice] = useState(null)
    const [selectedRideType, setSelectedRideType] = useState("economy");
    //const [rideType, setRideType] = useState("economy")

    const rideTypes = [
        {
            id: "economy",
            name: "Economy",
            multiplier: 1,
            description: "Affordable everyday rides"
        },
        {
            id: "comfort",
            name: "Comfort",
            multiplier: 1.4,
            description: "Newer cars with extra space"
        },
        {
            id: "luxury",
            name: "Luxury",
            multiplier: 2.1,
            description: "Premium rides in luxury cars."
        }
    ];

    const submitRide = async () => {

        setErrorMsg("")
        setSuccessMsg("")

        if (!name || !pickup || !dropoff) {
            setErrorMsg("Please fill all fields");
            return;
        }

        await axios.post("http://localhost:3001/rides", {
            name,
            pickup,
            dropoff,
            selectedRideType,
            price
        });

        setSuccessMsg("Ride booked!");
    };

    return (
        <div className="w-full p-5 max-w-6xl mx-auto my-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
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

                <RideTypeSelector rideTypes={rideTypes}
                    selectedRideType={selectedRideType} setSelectedRideType={setSelectedRideType}></RideTypeSelector>

                <PriceEstimator pickup={pickup} dropoff={dropoff} price={price} setPrice={setPrice}
                    rideTypes={rideTypes} selectedRideType={selectedRideType} />

                <button
                    onClick={submitRide}
                    className="cursor-pointer bg-black text-white 
                        px-4 py-2 mt-6 mr-4 rounded hover:bg-yellow-400 hover:text-black"
                >
                    Confirm Ride
                </button>
                <span hidden={!successMsg === ""} className="text-green-500">{successMsg}</span>
                <span hidden={!errorMsg === ""} className="text-red-500">{errorMsg}</span>
            </motion.div>
        </div>
    );
}