import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturedArticles from "@/components/featured-articles";

function App() {
  return (
    <main className="lg:container mx-auto px-4 font-inter">
      <Header />
      <HeroSection />
      <FeaturedArticles />

      <div className="p-2 tracking-wide text-sm text-center text-slate-600">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-blue-400"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/amangofer"
          target="_blank"
          className="text-blue-400"
        >
          Amanuel Haile
        </a>
        .
      </div>
    </main>
  );
}

export default App;
