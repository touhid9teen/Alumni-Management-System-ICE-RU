import HeroSection from "../components/landing-page/HeroSection";
import SecretarySection from "../components/landing-page/SecretarySection";
import StoriesSection from "../components/landing-page/StoriesSection";
import StatisticsSection from "../components/landing-page/StatisticsSection";
import Footer from "../components/landing-page/Footer";
import EventsSection from "../components/landing-page/EventsSection";
import Secretary from "../assets/secretary.jpg";
import Cover1 from "../assets/cover1.jpg";
import Cover2 from "../assets/cover2.jpg";
import Cover3 from "../assets/cover.jpg";
import { events, stories } from "../data/variables";

const Home: React.FC = (): JSX.Element => {
  const heroImages: string[] = [Cover1, Cover2, Cover3];

  return (
    <div className="font-sans text-gray-800 antialiased">
      <HeroSection heroImages={heroImages} />
      <SecretarySection secretaryImage={Secretary} />
      <EventsSection events={events} />
      <StoriesSection stories={stories} />
      <StatisticsSection />
      <Footer />
    </div>
  );
};

export default Home;
