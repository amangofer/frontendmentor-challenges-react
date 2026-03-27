const features = [
  {
    id: "01",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "02",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward companygoals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1 text-center max-w-md mx-auto md:text-left p-6">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold leading-tight">
              What’s different about Manage?
            </h1>
            <p className="lg:text-lg text-primary-blue-950/50 mb-8 mx-auto lg:mx-0">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="flex-1 space-y-6 pl-6 lg:p-6 ">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-baseline lg:gap-6 py-4"
              >
                <span className="hidden lg:block bg-primary-orange-400 text-neutral-gray-50 px-4 py-1 rounded-full">
                  {feature.id}
                </span>
                <div>
                  <h3 className="bg-neutral-orange-50 lg:bg-transparent md:text-lg lg:text-xl font-bold rounded-l-full lg:rounded-l-none mb-4">
                    <span className="lg:hidden bg-primary-orange-400 text-neutral-gray-50 px-4 py-1 rounded-full">
                      {feature.id}
                    </span>{" "}
                    {feature.title}
                  </h3>
                  <p className="text-primary-blue-950/50">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
