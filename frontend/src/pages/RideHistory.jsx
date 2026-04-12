import { useEffect, useState } from "react";
import axios from "axios";

export default function RideHistory() {

  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetchRides();
  }, []);

  const fetchRides = async () => {
    const response = await axios.get("http://localhost:3001/rides");
    setRides(response.data);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Ride History
      </h1>

      {rides.length === 0 && <p>No rides yet</p>}

      {rides.map((ride) => (
        <div
          key={ride.id}
          className="border p-4 mb-4 rounded shadow-sm"
        >

          <p><strong>Name:</strong> {ride.name}</p>

          <p>
            <strong>Pickup:</strong> {ride.pickup.lat},
            {ride.pickup.lng}
          </p>

          <p>
            <strong>Dropoff:</strong> {ride.dropoff.lat},
            {ride.dropoff.lng}
          </p>

          <p>
            <strong>Price:</strong> ${ride.price}
          </p>

        </div>
      ))}

    </div>
  );
}