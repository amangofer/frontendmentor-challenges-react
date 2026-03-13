import EmilyImage from "../assets/images/image-emily.jpg";
import ThomasImage from "../assets/images/image-thomas.jpg";
import JennieImage from "../assets/images/image-jennie.jpg";
import { Testimonial } from "./ui/Testimonial";

const testimonials = [
  {
    id: 1,
    avater: EmilyImage,
    name: "Emily R.",
    title: "Marketing Director",
    comment:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    id: 2,
    avater: ThomasImage,
    name: "Thomas S.",
    title: "Chief Operating Officer",
    comment:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
  },
  {
    id: 3,
    avater: JennieImage,
    name: "Jennie F.",
    title: "Business Owner",
    comment:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
];

export function Testimonials() {
  return (
    <section className="p-8 md:py-32 ">
      <h2 className="my-10 font-fraunces font-extrabold text-xl text-center tracking-[.25em] text-neutral-grey-400 uppercase">
        Client Testimonials
      </h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {testimonials.map((testimonial) => {
          return (
            <Testimonial
              key={testimonial.id}
              avater={testimonial.avater}
              name={testimonial.name}
              title={testimonial.title}
              comment={testimonial.comment}
            />
          );
        })}
      </div>
    </section>
  );
}
