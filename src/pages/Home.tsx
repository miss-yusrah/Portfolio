import Hero from "../components/shared/Hero.tsx";
import SelectedWork from "../components/shared/SelectedWork.tsx";
import AboutTeaser from "../components/shared/AboutTeaser.tsx";
import ContactStrip from "../components/shared/ContactStrip.tsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutTeaser />
      <SelectedWork />
      <ContactStrip />
    </div>
  );
};

export default Home;
