import OnlineIcon from "../assets/images/icon-online.svg?react";
import BudgetingIcon from "../assets/images/icon-budgeting.svg?react";
import OnboardingIcon from "../assets/images/icon-onboarding.svg?react";
import ApiIcon from "../assets/images/icon-api.svg?react";

const services = [
  {
    title: "Online Banking",
    discription:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: OnlineIcon,
  },
  {
    title: "Simple Budgeting",
    discription:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    icon: BudgetingIcon,
  },
  {
    title: "Fast Onboarding",
    discription:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: OnboardingIcon,
  },
  {
    title: "Open API",
    discription:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: ApiIcon,
  },
];

export function Services() {
  return (
    <section className="container mx-auto p-4 text-center">
      <div className="my-6 space-y-4">
        <h2 className="text-3xl">Why choose Digitalbank?</h2>
        <p className="text-sm text-neutral-gray-600">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="pt-4 flex flex-col gap-10">
        {services.map((service) => (
          <div className="flex flex-col items-center gap-4">
            <service.icon />
            <h3 className="text-2xl">{service.title}</h3>
            <p className="text-sm text-neutral-gray-600">
              {service.discription}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
