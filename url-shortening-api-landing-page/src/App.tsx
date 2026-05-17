import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LinkShortner } from "./components/LinkShortner";

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <LinkShortner />
      </main>
    </div>
  );
}

export default App;
