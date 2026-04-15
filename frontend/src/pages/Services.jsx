export default function Services() {
  return (
     <div className="w-full p-5 max-w-6xl mx-auto my-10">

      <h1 className="text-4xl font-bold mb-6">
        Our Services
      </h1>

      <p className="text-lg text-gray-700 mb-10">
        Book a Taxi offers a range of transportation options designed to meet
        different needs, budgets, and travel preferences. Whether you're
        looking for an affordable everyday ride or a premium experience,
        our services make it easy to get where you need to go quickly and
        reliably.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* UberX */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">
            Economy
          </h2>

          <p className="text-gray-600 mb-4">
            Our most popular ride option. Economy provides affordable,
            everyday transportation with reliable drivers and comfortable
            vehicles.
          </p>

          <ul className="text-gray-600 space-y-1">
            <li>• Budget-friendly rides</li>
            <li>• Ideal for daily travel</li>
            <li>• Comfortable standard vehicles</li>
            <li>• Fast pickup times</li>
          </ul>
        </div>

        {/* Comfort */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">
            Comfort
          </h2>

          <p className="text-gray-600 mb-4">
            Comfort rides offer newer vehicles with additional space and
            experienced drivers, providing a smoother and more relaxed
            travel experience.
          </p>

          <ul className="text-gray-600 space-y-1">
            <li>• Newer vehicles</li>
            <li>• Extra legroom</li>
            <li>• Highly rated drivers</li>
            <li>• Ideal for longer trips</li>
          </ul>
        </div>

        {/* Black */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">
            Luxury
          </h2>

          <p className="text-gray-600 mb-4">
            Luxur is our premium ride option designed for passengers who
            want a luxury transportation experience with high-end vehicles
            and professional drivers.
          </p>

          <ul className="text-gray-600 space-y-1">
            <li>• Luxury vehicles</li>
            <li>• Professional drivers</li>
            <li>• Premium ride experience</li>
            <li>• Perfect for business or special events</li>
          </ul>
        </div>

      </div>

    </div>
  );
}