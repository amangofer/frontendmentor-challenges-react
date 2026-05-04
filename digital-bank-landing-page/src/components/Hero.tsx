import Mockups from "../assets/images/image-mockups.png";

export function Hero() {
  return (
    <section className="relative bg-neutral-gray-50 lg:min-h-164">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
        <div className="relative flex-1 lg:flex-2 min-h-70 md:h-164 ">
          <div
            className="absolute w-full h-full before:absolute
                       before:lg:bg-position-[left_5rem_top_-15.5rem]
                       before:h-full before:w-full before:lg:w-[150%]
                       before:bg-no-repeat before:bg-cover before:bg-center
                       before:lg:bg-intro-desktop before:bg-intro-mobile"
          ></div>
          <img
            src={Mockups}
            alt="Mobil Mockups Image"
            className="w-full relative bottom-15 lg:bottom-45 lg:left-64 z-10"
          />
        </div>
        <div className="flex-1 px-6 py-10 text-center lg:text-left space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl text-primary-blue font-light leading-[1.15]">
            Next generation digital banking
          </h1>
          <p className="text-sm md:text-lg text-neutral-gray-600">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <a
            href="#"
            className="px-8 py-3 rounded-full font-semibold text-white bg-linear-to-tr from-primary-cyan to-primary-green hover:opacity-85 cursor-pointer"
          >
            Request Invite
          </a>
        </div>
      </div>
    </section>
  );
}
