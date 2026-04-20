import { Articles } from "./components/Articles";
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
        <Articles />
      </main>
    </div>
  );
}

export default App;
