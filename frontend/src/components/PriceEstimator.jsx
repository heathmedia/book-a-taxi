import { useEffect, useState } from "react";

export default function PriceEstimator({ pickup, dropoff, price, setPrice, rideTypes, selectedRideType }) {

  //const [price, setPrice] = useState(null);

  useEffect(() => {

    if (pickup && dropoff) {

      // Euclidean distance formula for rough distance calculation in kilometers
      const distance =
        Math.sqrt(
          Math.pow(pickup.lat - dropoff.lat, 2) +
          Math.pow(pickup.lng - dropoff.lng, 2)
        ) * 111;

      const estimated = (distance * 2.5).toFixed(2);
      const selectedRideData = rideTypes.find(r => r.id === selectedRideType);
      const multiplier = selectedRideData?.multiplier || 1;
      const estimatedPrice = (distance * multiplier).toFixed(2);

      setPrice(estimatedPrice);
    }

  }, [pickup, dropoff, selectedRideType]);

  return (
    <div className="mt-4 text-lg font-semibold">

      {price && (
        <p>Estimated Price: ${price}</p>
      )}

    </div>
  );
}