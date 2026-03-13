export type PropType = {
  avater: string;
  name: string;
  title: string;
  comment: string;
};

export function Testimonial({ avater, name, title, comment }: PropType) {
  return (
    <div className="max-w-sm my-8 text-center flex gap-16 flex-col items-center">
      <img src={avater} className="size-20 rounded-full" />
      <p className="font-semibold text-lg text-neutral-grey-600">{comment}</p>
      <div className="flex gap-1 flex-col items-center">
        <span className="text-xl font-fraunces font-bold text-neutral-grey-950">
          {name}
        </span>
        <span className="font-semibold text-neutral-grey-400">{title}</span>
      </div>
    </div>
  );
}
