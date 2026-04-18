import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="h-svh">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
