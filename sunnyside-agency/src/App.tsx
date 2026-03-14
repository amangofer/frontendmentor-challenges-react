import { Footer } from "./componentes/Footer";
import { Header } from "./componentes/Header";
import { ImageGallery } from "./componentes/ImageGallery";
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
          <ImageGallery />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
