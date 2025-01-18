import Choose from "./Choose";
import ClientReview from "./ClientReview";
import FeaturedRooms from "./FeaturedRooms";
import HeroSection from "./HeroSection";
import TopServices from "./TopServices";

const Home = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="">
        <HeroSection />
        <Choose />
        <FeaturedRooms />
        <ClientReview />
        <TopServices />
      </div>
    </div>
  );
};

export default Home;
