import { Separator } from "@/components/ui/separator";

const articles = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export default function NewSection() {
  return (
    <aside className="p-4 md:p-6 lg:p-8  text-white bg-very-dark-blue">
      <h2 className="text-[clamp(2rem,1.8239rem+0.7512vw,2.5rem)] font-bold text-soft-orange">
        New
      </h2>
      <ul className="">
        {articles.map((article, index) => (
          <li key={article.id} className="pb-4 mt-8">
            <a
              href=""
              className="text-xl font-bold text-white hover:text-soft-orange"
            >
              {article.title}
            </a>
            <p className="text-gray-300 text-sm leading-relaxed">
              {article.description}
            </p>
            {index < articles.length - 1 && (
              <Separator className="bg-gray-700 mt-6" />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
