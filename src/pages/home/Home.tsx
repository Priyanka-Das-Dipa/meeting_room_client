import Choose from "./Choose";
import ClientReview from "./ClientReview";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <HeroSection />
      <Choose />
      <ClientReview/>
    </div>
  );
};

export default Home;
