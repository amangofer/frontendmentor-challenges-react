import IlustrationIntro from "../assets/images/illustration-intro.svg";

export function Hero() {
  return (
    <section className="relative">
      <div className="bg-tablet -z-10 bg-no-repeat size-125 md:size-155 lg:size-187  bg-contain absolute bg-top-right -top-50 -right-50 md:-top-30 md:-right-10 lg:-top-60 lg:-right-40"></div>

      <div className="relative container mx-auto px-6 py-12 md:py-20">
        <div className="lg:hidden bg-tablet -z-10 bg-no-repeat size-75 bg-contain absolute -bottom-10 -right-40"></div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bring everyone together to build better products.
            </h1>

            <p className="text-primary-blue-950/50 lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <a
              href="#"
              className="inline-block bg-primary-orange-400 text-neutral-gray-50 font-bold hover:opacity-75 py-3 px-8 rounded-full shadow-lg transition-colors"
            >
              Get Started
            </a>
          </div>
          <div className="flex-1">
            <img src={IlustrationIntro} className="relative -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
