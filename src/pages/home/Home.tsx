import Choose from "./Choose";
import ClientReview from "./ClientReview";
import HeroSection from "./HeroSection";
import TopServices from "./TopServices";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <HeroSection />
      <Choose />
      <ClientReview />
      <TopServices />
    </div>
  );
};

export default Home;
