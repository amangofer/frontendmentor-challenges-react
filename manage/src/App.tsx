import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
