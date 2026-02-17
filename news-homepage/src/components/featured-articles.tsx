import { Card, CardContent } from "@/components/ui/card";
import RetroPc from "@/assets/images/image-retro-pcs.jpg";
import TopLaptops from "@/assets/images/image-top-laptops.jpg";
import GameGrowth from "@/assets/images/image-gaming-growth.jpg";

const featuredArticles = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: RetroPc,
  },
  {
    id: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: TopLaptops,
  },
  {
    id: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: GameGrowth,
  },
];

export default function FeaturedArticles() {
  return (
    <section className="mb-20">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredArticles.map((article) => (
          <Card
            key={article.id}
            className="border-none shadow-none flex flex-col p-0 rounded-none"
          >
            <CardContent className="p-0">
              <div className="flex gap-4">
                {/* Image */}
                <div className="">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-25 aspect-auto object-cover"
                  />
                </div>

                {/* Content */}
                <div className="">
                  <div className="font-bold text-2xl text-soft-red mb-2">
                    {article.id}
                  </div>
                  <a
                    href="#"
                    className="font-bold text-lg text-very-dark-blue mb-2 hover:text-soft-red"
                  >
                    {article.title}
                  </a>
                  <p className="text-dark-grayish-blue text-sm">
                    {article.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
