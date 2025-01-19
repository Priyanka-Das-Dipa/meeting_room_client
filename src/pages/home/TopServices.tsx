const meetingRoomServices = [
  {
    id: 1,
    icon: "🏢",
    name: "Conference Room Booking",
    description:
      "Book a spacious conference room with all necessary equipment for your next big meeting or presentation.",
  },
  {
    id: 2,
    icon: "🖥️",
    name: "Video Conferencing Room",
    description:
      "Set up virtual meetings seamlessly with high-quality video conferencing tools, ideal for remote teams.",
  },
  {
    id: 3,
    icon: "💼",
    name: "Executive Meeting Rooms",
    description:
      "Exclusive and well-equipped meeting rooms for executive-level meetings, ensuring privacy and professionalism.",
  },
  {
    id: 4,
    icon: "🌐",
    name: "Virtual Meeting Room",
    description:
      "Book virtual meeting rooms with ease, perfect for remote collaboration and digital team engagement.",
  },
  {
    id: 5,
    icon: "📅",
    name: "Flexible Scheduling",
    description:
      "Easily book meeting rooms based on your preferred time slot, with flexible scheduling options available.",
  },
  {
    id: 6,
    icon: "🔒",
    name: "Unlimited Support Availability",
    description:
      "Access meeting rooms any time, day or night, with flexible keyless entry and booking options.",
  },
];

const TopServices = () => {
  return (
    <>
    <div className="bg-white">

      <div className="container mx-auto">
        <div className="px-4 py-10">
          <h1 className="text-primary text-center text-3xl font-bold mb-10">
            Why Choose Our Meeting Rooms?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meetingRoomServices.map((service) => (
              <div
                key={service.id}
                className="p-6 border rounded-lg shadow-lg hover:shadow-md hover:shadow-primary transition-all duration-300 text-center transform hover:scale-105"
              >
                <div className="text-4xl text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold hover:text-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TopServices;
