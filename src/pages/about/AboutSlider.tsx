import { useEffect, useState } from "react";

const AboutSlider = () => {
  const array = [
    {
      image: "https://i.postimg.cc/tT3517Vs/production.webp",
      title: "Manufacturing",
      description:
        "We provide cutting-edge production solutions to streamline processes and enhance efficiency for any scale of operations.",
    },
    {
      image: "https://i.postimg.cc/y6TjsgH5/IN-ROOM-TECH-1024x576.jpg",
      title: "Innovation",
      description:
        "Leveraging the latest in tech to drive transformative change and empower seamless connectivity across industries.",
    },
    {
      image: "https://i.postimg.cc/4NN5df43/DESIGN-1024x552.jpg",
      title: "Creativity",
      description:
        "Our design services focus on blending aesthetics with functionality to craft exceptional user experiences.",
    },
    {
      image: "https://i.postimg.cc/g2xHVgZF/membership.webp",
      title: "Community",
      description:
        "Join a thriving network of like-minded individuals and organizations with exclusive access to premium benefits.",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array.length - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);
  return (
    <div>
      <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
        <div className="relative overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
            {/* arrow left */}
            <button
              onClick={prevSlider}
              className="flex bg-white  justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4 md:w-6 md:h-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
              >
                {" "}
                <g strokeWidth="0"></g>{" "}
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>{" "}
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="black"
                    d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                  ></path>
                </g>
              </svg>
            </button>
            {/* arrow right */}
            <button
              onClick={nextSlider}
              className="flex bg-white justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4 md:w-6 md:h-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                transform="rotate(180)"
              >
                {" "}
                <g strokeWidth="0"></g>{" "}
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>{" "}
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="black"
                    d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex "
            style={{
              transform: `translateX(-${currentSlider * 50}%)`,
            }}
          >
            {/* sliders */}
            {array.map((each, idx) => (
              <div
                key={idx}
                className="p-4 min-w-full md:min-w-[80%] h-full text-center"
              >
                <div className="flex justify-start items-center h-full bg-gray-200 rounded-md">
                  <div className="w-[650px] h-[550px]">
                    <img
                      src={each.image}
                      alt=""
                      className="w-full h-full bg-contain"
                    />
                  </div>
                  <div className="h-full p-8 rounded space-y-3">
                    <h1 className="text-3xl text-left font-bold text-primary">
                      {each?.title}
                    </h1>
                    <p className="leading-relaxed text-base text-left mb-6 text-black">
                      {each?.description}
                    </p>
                    <div className="flex justify-start cursor-pointer">
                      <button className="border border-primary px-6 py-2 rounded-md hover:cursor-pointer">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
