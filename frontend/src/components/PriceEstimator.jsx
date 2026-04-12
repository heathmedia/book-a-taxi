import { useEffect, useState } from "react";

export default function PriceEstimator({ pickup, dropoff }) {

  const [price, setPrice] = useState(null);

  useEffect(() => {

    if (pickup && dropoff) {

      const distance =
        Math.sqrt(
          Math.pow(pickup.lat - dropoff.lat, 2) +
          Math.pow(pickup.lng - dropoff.lng, 2)
        ) * 111;

      const estimated = (distance * 2.5).toFixed(2);

      setPrice(estimated);
    }

  }, [pickup, dropoff]);

  return (
    <div className="mt-4 text-lg font-semibold">

      {price && (
        <p>Estimated Price: ${price}</p>
      )}

    </div>
  );
}