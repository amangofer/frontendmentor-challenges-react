import { useState } from "react";
import Ali from "../assets/images/avatar-ali.png";
import Anisha from "../assets/images/avatar-anisha.png";
import Richard from "../assets/images/avatar-richard.png";
import Shanai from "../assets/images/avatar-shanai.png";

const testimonials = [
  {
    avater: Anisha,
    name: "Anisha Li",
    testimony:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    avater: Ali,
    name: "Ali Bravo",
    testimony:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    avater: Richard,
    name: "Richard Watts",
    testimony:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    avater: Shanai,
    name: "Shanai Gough",
    testimony:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  function changeIndex(i: number) {
    setIndex(i);
  }

  return (
    <section className="relative py-8">
      <div className="hidden lg:block bg-tablet -z-10 bg-no-repeat size-187 bg-contain absolute -top-2/4 -left-1/3"></div>
      <h1 className="text-center mb-12 text-3xl lg:text-4xl font-bold">
        What they've said
      </h1>
      <div className="md:hidden my-34 mx-auto ">
        <div className="flex items-center justify-center gap-8 pr-4">
          {
            <div className="relative flex-none w-xs md:w-xl h-75 p-4 bg-neutral-gray-50 text-xl text-center content-center shadow-sm">
              <img
                src={testimonials[index].avater}
                alt=""
                className="size-24 rounded-full absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2"
              />
              <span className="font-bold inline-block mb-4 mt-10">
                {testimonials[index].name}
              </span>
              <p className="text-primary-blue-950/50 mb-4">
                {testimonials[index].testimony}
              </p>
            </div>
          }
        </div>
        <div className="mt-4 flex justify-center items-center gap-1">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                changeIndex(i);
              }}
              className={`${index == i ? "bg-primary-orange-400" : ""} size-3 rounded-full border border-primary-orange-400`}
            ></button>
          ))}
        </div>
      </div>
      <div className="hidden my-34 mx-auto md:flex">
        <div className="flex items-center justify-center gap-8 animate-slide pr-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative flex-none w-xl h-75 p-4 bg-neutral-gray-50 text-xl text-center content-center shadow-sm"
            >
              <img
                src={testimonial.avater}
                alt=""
                className="size-24 rounded-full absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2"
              />
              <span className="font-bold inline-block mb-4 mt-10">
                {testimonial.name}
              </span>
              <p className="text-primary-blue-950/50 mb-4">
                {testimonial.testimony}
              </p>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-8 animate-slide pr-1"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative flex-none w-xl h-75 p-4 bg-neutral-gray-50 text-xl text-center content-center shadow-sm"
            >
              <img
                src={testimonial.avater}
                alt=""
                className="size-24 rounded-full absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2"
              />
              <span className="font-bold inline-block mb-4 mt-10">
                {testimonial.name}
              </span>
              <p className="text-primary-blue-950/50 mb-4">
                {testimonial.testimony}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
