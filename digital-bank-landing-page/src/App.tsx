import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="h-svh">
      <Header />
      <main className="overflow-hidden">
        <Hero />
      </main>
    </div>
  );
}

export default App;
