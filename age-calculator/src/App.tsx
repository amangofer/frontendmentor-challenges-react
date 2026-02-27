import { useRef, useState } from "react";
import Arrow from "./assets/images/icon-arrow.svg";
import { useForm, type FieldError } from "react-hook-form";
import { ValidationError } from "./components/ValidationError";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Age = {
  years: number;
  months: number;
  days: number;
};

type BirthDate = {
  year: number;
  month: number;
  day: number;
};

gsap.registerPlugin(useGSAP);
function App() {
  const [age, setAge] = useState<Age | undefined>();
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<BirthDate>({ mode: "onBlur", reValidateMode: "onBlur" });
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? "border-red-500 text-red-500" : "";
  }

  const ageAnimate = contextSafe((age: Age) => {
    gsap.killTweensOf(["#years", "#months", "#days"]);

    const tl = gsap.timeline();
    tl.fromTo(
      ["#years", "#months", "#days"],
      {
        textContent: 0,
      },
      {
        textContent: (_i: number, target: HTMLElement) =>
          age[target.id as keyof Age],
        duration: 3,
        snap: { textContent: 1 },
        ease: "power2.out",
      },
    );
  });

  function isValidDate({ year, month, day }: BirthDate): boolean {
    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() == year &&
      date.getMonth() == month - 1 &&
      date.getDate() == day
    );
  }

  function ageCalculator({ year, month, day }: BirthDate) {
    const today = new Date();
    const birthDay = new Date(year, month - 1, day);

    let years = today.getFullYear() - birthDay.getFullYear();
    let months = today.getMonth() - birthDay.getMonth();
    let days = today.getDate() - birthDay.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ).getDate();
      days += previousMonth;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setAge({ years, months, days });
    ageAnimate({ years, months, days });
  }

  return (
    <>
      <main
        ref={container}
        className="w-full h-svh flex justify-center items-center font-poppins bg-neutral-grey-200"
      >
        <div className="w-xl p-8 rounded-2xl rounded-br-[25%] bg-neutral-white">
          <form
            noValidate
            onSubmit={handleSubmit(ageCalculator)}
            className="py-4 relative border-b border-neutral-grey-200"
          >
            <div className="w-md pr-6 mb-4 flex gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="day"
                  className={`text-xs text-neutral-grey-500 mb-1 font-bold uppercase tracking-[.25em] ${getEditorStyle(errors.day)}`}
                >
                  Day
                </label>
                <input
                  id="day"
                  placeholder="DD"
                  className={`w-full px-4 py-2 text-xl font-bold rounded-md border border-neutral-grey-200 placeholder:text-neutral-grey-500 ${getEditorStyle(errors.day)}`}
                  {...register("day", {
                    required: "This field is required",
                    pattern: { value: /\d+/, message: "Enter number only" },
                    validate: {
                      validDate: (value) => {
                        const { month, year } = getValues();
                        if (!year || !month || !value) return true;
                        return (
                          isValidDate({ year, month, day: value }) ||
                          "Invalid date."
                        );
                      },
                    },
                    min: { value: 1, message: "Minimum day is 1" },
                    max: { value: 31, message: "Maximum day is 31" },
                  })}
                />
                <ValidationError fieldError={errors.day} />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="month"
                  className={`text-xs text-neutral-grey-500 mb-1 font-bold uppercase tracking-[.25em] ${getEditorStyle(errors.month)}`}
                >
                  Month
                </label>
                <input
                  id="month"
                  placeholder="MM"
                  className={`w-full px-4 py-2 text-xl font-bold rounded-md border border-neutral-grey-200 placeholder:text-neutral-grey-500 ${getEditorStyle(errors.month)}`}
                  {...register("month", {
                    required: "This field is required",
                    onChange: () => trigger("day"),
                    pattern: { value: /\d+/, message: "Enter number only" },
                    min: { value: 1, message: "Minimum month is 1" },
                    max: { value: 12, message: "Maximum month is 12" },
                  })}
                />
                <ValidationError fieldError={errors.month} />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="year"
                  className={`text-xs text-neutral-grey-500 mb-1 font-bold uppercase tracking-[.25em] ${getEditorStyle(errors.year)}`}
                >
                  Year
                </label>
                <input
                  id="year"
                  placeholder="YYYY"
                  className={`w-full px-4 py-2 text-xl font-bold rounded-md border border-neutral-grey-200 placeholder:text-neutral-grey-500 ${getEditorStyle(errors.year)}`}
                  {...register("year", {
                    required: "This field is required",
                    pattern: { value: /\d+/, message: "Enter number only" },
                    min: { value: 1900, message: "Minimum year is 1900" },
                    max: {
                      value: new Date().getFullYear(),
                      message: `Maximum year is ${new Date().getFullYear()}`,
                    },
                  })}
                />
                <ValidationError fieldError={errors.year} />
              </div>
            </div>
            <button className="absolute bottom-0 right-0 transform translate-y-1/2 size-16 rounded-full bg-primary-purple-500 hover:bg-neutral-black cursor-pointer">
              <img src={Arrow} className="w-full p-4" />
            </button>
          </form>
          <div className="mt-4 text-7xl italic lowercase font-extrabold">
            <div className="">
              <span id="years" className="text-primary-purple-500 ">
                {age ? age.years : "--"}
              </span>{" "}
              years
            </div>
            <div className="">
              <span id="months" className="text-primary-purple-500 ">
                {age ? age.months : "--"}
              </span>{" "}
              months
            </div>
            <div className="">
              <span id="days" className="text-primary-purple-500 ">
                {age ? age.days : "--"}
              </span>{" "}
              days
            </div>
          </div>
        </div>
        <div className="p-2 tracking-wide absolute self-end text-sm text-center text-slate-600">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-blue-400"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/amangofer"
            target="_blank"
            className="text-blue-400"
          >
            Amanuel Haile
          </a>
          .
        </div>
      </main>
    </>
  );
}

export default App;
