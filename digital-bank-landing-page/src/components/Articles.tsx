import Currency from "../assets/images/image-currency.jpg";
import Restaurant from "../assets/images/image-restaurant.jpg";
import Plane from "../assets/images/image-plane.jpg";
import Confetti from "../assets/images/image-confetti.jpg";

const articles = [
  {
    author: "By Claire Robinson",
    link: "Receive money in any currency with no fees",
    snippet:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: {
      img: Currency,
      alt: "A collection of diverse global currencies scattered together",
    },
  },
  {
    author: "By Wilson Hutton",
    link: "Treat yourself without worrying about money",
    snippet:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: {
      img: Restaurant,
      alt: "Plated gourmet appetizer and white wine at a restaurant.",
    },
  },
  {
    author: "By Wilson Hutton",
    link: "Take your Digitalbank card wherever you go",
    snippet:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    image: {
      img: Plane,
      alt: "View from an airplane window",
    },
  },
  {
    author: "By Claire Robinson",
    link: "Our invite-only Beta accounts are now live!",
    snippet:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    image: {
      img: Confetti,
      alt: "Falling colorful confetti on a blue backdrop.",
    },
  },
];

export function Articles() {
  return (
    <section className="bg-neutral-gray-50">
      <div className="container mx-auto p-4">
        <h2 className="my-10 text-primary-blue text-center text-3xl font-medium md:text-left">
          Latest Articles
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {articles.map((article) => (
            <div className="bg-white">
              <img
                src={article.image.img}
                alt={article.image.alt}
                className="h-full md:h-50"
              />
              <div className="p-6 text-neutral-gray-600 space-y-2">
                <span className="text-xs block">article.author</span>
                <a
                  href=""
                  className="block text-primary-blue font-semibold hover:text-primary-green"
                >
                  {article.link}
                </a>
                <p className="text-sm">{article.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
