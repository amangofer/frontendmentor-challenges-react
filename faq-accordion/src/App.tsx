import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StarIcon from "./assets/images/icon-star.svg";

type FAQItem = {
  id: string;
  title: string;
  content: string;
};

function App() {
  const faqs: FAQItem[] = [
    {
      id: "item-1",
      title: "What is Frontend Mentor, and how will it help me?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: "item-2",
      title: "Is Frontend Mentor free?",
      content:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      id: "item-3",
      title: "Can I use Frontend Mentor projects in my portfolio?",
      content:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      id: "item-4",
      title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      content:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className="w-full h-svh bg-[#f9f0ff] font-workSans tracking-tight flex justify-center items-center bg-no-repeat bg-contain bg-[url(./assets/images/background-pattern-mobile.svg)] md:bg-[url(./assets/images/background-pattern-desktop.svg)]">
      <Card className="w-sm md:w-md">
        <CardHeader>
          <CardTitle className="flex items-center text-4xl font-bold">
            <img
              src={StarIcon}
              alt="Star Icon"
              className="size-8 mr-4"
              aria-hidden="true"
            />
            FAQs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqs.map((faq) => {
              return (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="font-bold text-[#301534] cursor-pointer hover:text-[#AD28EB]">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#8c6991]">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
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
    </div>
  );
}

export default App;
