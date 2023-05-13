import "../../App.css";
import AboutSection from "../AboutSection";
import Projects from "../Projects";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import ExperienceSection from "../ExperienceSection";

function Home() {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <Projects />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
