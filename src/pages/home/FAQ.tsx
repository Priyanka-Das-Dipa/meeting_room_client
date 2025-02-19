import { useState } from "react";
import faq from "../../assets/images/faq2.png";

const faqs = [
  {
    question: "How do I book a meeting room?",
    answer:
      "You can book a meeting room by selecting your preferred location, date, and time on our website. Once you’ve chosen a room, complete the booking form and proceed with the payment or confirmation process.",
  },
  {
    question: "What amenities are included in the meeting rooms?",
    answer:
      "Our meeting rooms come with high-speed Wi-Fi, a whiteboard, a projector or screen, video conferencing facilities, and comfortable seating. Some rooms may also include refreshments and on-site support.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes, you can modify or cancel your booking through your account dashboard. Please note that cancellation policies may vary based on the selected meeting room, and refunds may be subject to specific terms.",
  },
  {
    question: "Is there a minimum or maximum booking duration?",
    answer:
      "Yes, the minimum booking duration is typically 1 hour, and the maximum varies based on availability. Some locations offer half-day or full-day bookings for extended meetings.",
  },
  {
    question: "Do you offer discounts for bulk or long-term bookings?",
    answer:
      "Yes, we provide discounts for bulk bookings and long-term reservations. Please contact our support team for customized pricing and corporate plans.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <div className="container mx-auto py-24">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-semibold cursor-pointer flex justify-between items-center">
                    {faq.question}
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </h3>
                  {activeIndex === index && (
                    <p className="mt-4 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
            <div>
              <img src={faq} alt="faq" className="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
