import Illustration from "../assets/images/illustration-working.svg?react";

export function Hero() {
  return (
    <section className="w-full overflow-x-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 px-6">
          <h1 className="text-4xl lg:text-7xl font-bold text-neutral-gray-950 leading-tight">
            More than just shorter links
          </h1>
          <p className="text-neutral-gray-400 text-lg lg:text-xl mt-4 max-w-md lg:max-w-lg">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a
            href="#"
            className="mt-8 px-8 py-3 bg-primary-blue-400 text-white rounded-full font-bold hover:bg-primary-blue-400/75 transition"
          >
            Get Started
          </a>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Illustration className="relative left-8 w-full lg:w-[150%] max-w-none lg:-mr-40" />
        </div>
      </div>
    </section>
  );
}
