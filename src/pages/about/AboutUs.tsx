import React from "react";
import banner from "../../../public/about_banner.jpg";
import AboutSlider from "./AboutSlider";

const AboutUs = () => {
  return (
    <>
      <div className=" relative">
        <img src={banner} alt="" className="h-[500px] w-full bg-contain" />
        {/* Black overlay with text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <p className="text-3xl font-bold italic">
              "We have such a unique opportunity to create spaces that inspire
              people to do their best work, and in doing that, we can leave our
              imprint on this world."
            </p>
            <p className="mt-4 text-sm font-semibold">
              – Ryan Simonetti | CEO & Co-Founder, Priyanka
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5]">
        <div className="container mx-auto py-16 ">
          <h1 className="md:text-4xl text-2xl font-bold text-primary py-5">
            {" "}
            About us
          </h1>
          <p className="text-lg font-medium">
            ElevateSpaces is a global hospitality company that manages a growing
            portfolio of lifestyle brands focused on revolutionizing the way
            people meet, work, and gather. It creates hospitality-driven
            experiences and uniquely designed destinations across its various
            brands with the singular mission of fostering human-to-human
            connection.
          </p>
          <br />
          <p className="text-lg font-medium">
            The ElevateSpaces portfolio includes ElevateSpaces Venues,
            etc.venues by ElevateSpaces, and ElevateSpaces Signature, offering
            clients multiple products such as event venues, meeting rooms,
            flexible office spaces, and building amenity centers. With
            hospitality at its core, each brand and product provides on-site
            culinary services, in-room A/V, production services, and dedicated
            hospitality staffing resources.
          </p>
          <br />
          <p className="text-lg font-medium">
            Now extending its footprint to Bangladesh, ElevateSpaces aims to
            bring world-class meeting and event experiences to the region,
            fostering innovation and collaboration in uniquely designed spaces.
          </p>
        </div>
      </div>
      <div className="bg-[#151C35]">
        <div className="container mx-auto py-16">
          <h1 className="text-white pb-6 md:text-4xl text-2xl font-bold text-center">
            What we offer
          </h1>
          <AboutSlider />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
