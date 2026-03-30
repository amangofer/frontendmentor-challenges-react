export function CTA() {
  return (
    <section className="px-8 py-10 bg-primary-orange-400 bg-section-desktop bg-no-repeat bg-cover bg-bottom">
      <div className="container md:mx-auto text-center md:text-left flex flex-col md:flex-row gap-8 justify-between py-10 items-center">
        <h2 className="text-4xl font-bold md:w-lg text-white">
          Simplify how your team works today.
        </h2>
        <a
          href="#"
          className=" text-primary-orange-400 hover:text-primary-orange-400/50 bg-neutral-gray-50 font-bold py-3 px-6 rounded-full transition-colors shadow-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
