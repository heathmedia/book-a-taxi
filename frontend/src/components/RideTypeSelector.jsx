import { useState } from "react";

function RideTypeSelector({ rideTypes, selectedRideType, setSelectedRideType }) {

    //const [rideType, setRideType] = useState("economy");

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {rideTypes.map((ride) => (

                <div
                    key={ride.id}
                    onClick={() => setSelectedRideType(ride.id)}
                    className={`p-4 border rounded-xl cursor-pointer transition-all duration-200
        ${selectedRideType === ride.id
                            ? "border-black shadow-lg scale-105"
                            : "border-gray-200 hover:shadow-md"
                        }`}
                >

                    <h3 className="text-xl font-bold">
                        {ride.name}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                        {ride.description}
                    </p>

                </div>

            ))}

        </div>
    )
}
export default RideTypeSelector