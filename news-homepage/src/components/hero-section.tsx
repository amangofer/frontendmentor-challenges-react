import Web3ImageDesktop from "@/assets/images/image-web-3-desktop.jpg";
import Web3ImageMobile from "@/assets/images/image-web-3-mobile.jpg";
import { Button } from "@/components/ui/button";
import NewSection from "@/components/new-section";

export default function HeroSection() {
  return (
    <section className="mb-20 grid gap-4 grid-cols-1 [grid-template-areas:'thumbnail'_'title'_'description'_'new']  md:grid-cols-3 md:[grid-template-areas:'thumbnail_thumbnail_new'_'title_description_new']">
      <picture className="[grid-area:thumbnail] block overflow-hidden">
        <source media="(min-width: 768px)" srcSet={Web3ImageDesktop} />
        <img
          src={Web3ImageMobile}
          alt="Hero Image"
          className="h-auto w-full object-cover"
        />
      </picture>
      <h1 className="[grid-area:title] leading-12 text-[clamp(2.5rem,2.1479rem+1.5023vw,3.5rem)] font-bold">
        The Bright Future of Web 3.0?
      </h1>
      <div className="[grid-area:description] mb-14">
        <p className="mb-4 text-dark-grayish-blue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <Button className="text-md tracking-[0.25rem] font-bold px-8 py-6 uppercase rounded-none bg-soft-red text-very-dark-blue hover:bg-very-dark-blue hover:text-off-white">
          Read more
        </Button>
      </div>
      <div className="[grid-area:new]">
        <NewSection />
      </div>
    </section>
  );
}
