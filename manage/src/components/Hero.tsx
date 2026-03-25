import IlustrationIntro from "../assets/images/illustration-intro.svg";

export function Hero() {
  return (
    <section className="my-4 p-4 grid place-items-center grid-cols-1 gap-4 md:grid-cols-2">
      <div className="text-center md:text-left space-y-6 row-start-2 md:row-start-1">
        <h1 className="text-[calc(1.5rem+3vw)] lg:text-5xl font-bold w-md">
          Bring everyone together to build better products.
        </h1>
        <p className="w-md opacity-50">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="bg-primary-orange-400 text-neutral-gray-50 px-6 py-3 font-semibold rounded-full cursor-pointer hover:opacity-[.75]">
          Get Started
        </button>
      </div>
      <div className="row-start-1 ">
        <img src={IlustrationIntro} />
      </div>
    </section>
  );
}
