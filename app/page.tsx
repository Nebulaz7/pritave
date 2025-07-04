import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";

export default function Home() {
  return (
    <div className="p-8">
      <NavBar />
      <Hero />
      <FeatureSection />
    </div>
  );
}
