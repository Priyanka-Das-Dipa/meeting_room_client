import Slider from "react-slick";
import img1 from "../../assets/images/banner_1.png";
import img2 from "../../assets/images/banner_2.png";
import img3 from "../../assets/images/banner_3.png";
import img4 from "../../assets/images/banner_4.png";
import img5 from "../../assets/images/banner_5.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: img1,
      headline: "Book Your Ideal Meeting Room with Ease.",
      subheadline:
        "Efficient, hassle-free room booking for all your meeting needs.",
    },
    {
      id: 2,
      image: img2,
      headline: "Book Your Ideal Meeting Room with Ease.",
      subheadline:
        "Efficient, hassle-free room booking for all your meeting needs.",
    },
    {
      id: 3,
      image: img3,
      headline: "Book Your Ideal Meeting Room with Ease.",
      subheadline:
        "Efficient, hassle-free room booking for all your meeting needs.",
    },
    {
      id: 4,
      image: img4,
      headline: "Book Your Ideal Meeting Room with Ease.",
      subheadline:
        "Efficient, hassle-free room booking for all your meeting needs.",
    },
    {
      id: 5,
      image: img5,
      headline: "Book Your Ideal Meeting Room with Ease.",
      subheadline:
        "Efficient, hassle-free room booking for all your meeting needs.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-full lg:h-[80vh]">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
              <h1 className="text-2xl md:text-5xl font-bold text-center">
                {slide.headline}
              </h1>
              <p className="text-lg md:text-2xl text-center mt-2">
                {slide.subheadline}
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                <Link to="">Book Now</Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
