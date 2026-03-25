import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <section className="w-full h-svh p-4 font-be-vietnam-pro text-neutral-gray-950 bg-neutral-gray-50 overflow-hidden bg-tablet bg-no-repeat bg-contain bg-position-[150%_0%]">
      <Header />
      <Hero />
    </section>
  );
}

export default App;
