import { Header } from "./componentes/Header";
import { Services } from "./componentes/Services";
import { Testimonials } from "./componentes/Testimonials";

function App() {
  return (
    <>
      <div className="w-full h-svh font-barlow">
        <Header />
        <main>
          <Services />
          <Testimonials />
        </main>
      </div>
    </>
  );
}

export default App;
