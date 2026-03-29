import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
