import Transform from "../assets/images/mobile/image-transform.jpg";
import StandOut from "../assets/images/mobile/image-stand-out.jpg";
import Graphic from "../assets/images/mobile/image-graphic-design.jpg";
import Photography from "../assets/images/mobile/image-photography.jpg";
import TransformDesktop from "../assets/images/desktop/image-transform.jpg";
import StandOutDesktop from "../assets/images/desktop/image-stand-out.jpg";
import GraphicDesktop from "../assets/images/desktop/image-graphic-design.jpg";
import PhotographyDesktop from "../assets/images/desktop/image-photography.jpg";

export function Services() {
  return (
    <section className="flex flex-col">
      <div className="text-center flex flex-col md:flex-row-reverse">
        <picture className="w-full md:w-1/2">
          <source media="(min-width:768px)" srcSet={TransformDesktop} />
          <img src={Transform} className="w-full" />
        </picture>
        <div className="w-full md:w-1/2 p-8 flex gap-8 flex-col justify-center items-center">
          <h2 className="text-3xl font-bold font-fraunces">
            Transform your brand
          </h2>
          <p className="text-neutral-grey-600">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            href="#"
            className="relative px-2 text-lg font-semibold font-fraunces after:absolute after:-z-10 after:bottom-0 after:right-0 after:content-[''] after:bg-primary-yellow-500 after:opacity-[0.3] after:h-3 after:w-full after:rounded-full hover:after:opacity-[1]"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className=" text-center flex flex-col md:flex-row">
        <picture className="w-full md:w-1/2">
          <source media="(min-width:768px)" srcSet={StandOutDesktop} />
          <img src={StandOut} className="w-full" />
        </picture>
        <div className="w-full md:w-1/2 p-8 flex gap-8 flex-col justify-center items-center">
          <h2 className="text-3xl font-bold font-fraunces">
            Stand out to the right audience
          </h2>
          <p className="text-neutral-grey-600">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a
            href="#"
            className="relative px-2 text-lg font-semibold font-fraunces after:absolute after:-z-10 after:bottom-0 after:right-0 after:content-[''] after:bg-primary-red-400 after:opacity-[0.3] after:h-3 after:w-full after:rounded-full hover:after:opacity-[1]"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative text-primary-green-800">
          <picture>
            <source media="(min-width:768px)" srcSet={GraphicDesktop} />
            <img src={Graphic} className="w-full" />
          </picture>
          <div className="absolute bottom-0 mb-8 md:mb-0 w-full text-center p-8 flex gap-8 flex-col justify-center items-center">
            <h2 className="text-3xl font-bold font-fraunces">
              Graphic Designe
            </h2>
            <p className="text-neutral-grey-600">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative text-primary-blue-800">
          <picture>
            <source media="(min-width:768px)" srcSet={PhotographyDesktop} />
            <img src={Photography} className="w-full" />
          </picture>
          <div className="absolute bottom-0 mb-8 md:mb-0 w-full text-center p-8 flex gap-8 flex-col justify-center items-center">
            <h2 className="text-3xl font-bold font-fraunces">Photography</h2>
            <p className="text-neutral-grey-600">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
