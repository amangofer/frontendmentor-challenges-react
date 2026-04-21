import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
