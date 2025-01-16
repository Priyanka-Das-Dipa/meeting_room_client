const services = [
  {
    id: 1,
    icon: "📅",
    title: "Real-Time Availability",
    description:
      "Stay updated with our instant availability feature, ensuring you can book a service whenever you need it.",
  },
  {
    id: 2,
    icon: "✔️",
    title: "Instant Booking Confirmation",
    description:
      "Experience seamless bookings with immediate confirmations, so you can secure your spot in no time.",
  },
  {
    id: 3,
    icon: "⏰",
    title: "Flexible Scheduling",
    description:
      "Our flexible scheduling options allow you to choose the best time for your needs, with no hassle.",
  },
  {
    id: 4,
    icon: "🎧",
    title: "24/7 Support",
    description:
      "Get help anytime, anywhere with our round-the-clock support team ready to assist with any issues.",
  },
];
const Choose = () => {
  return (
    <div className="py-16 my-20">
      <h1 className="text-primary text-center text-2xl md:text-4xl font-bold mb-10">
        Why Choose Our Services?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 border rounded-lg hover:border-primary hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{service.icon}</h3>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
