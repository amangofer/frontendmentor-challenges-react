import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import DesktopDivider from "./assets/pattern-divider-desktop.svg";
import MobileDivider from "./assets/pattern-divider-mobile.svg";
import DiceIcon from "./assets/icon-dice.svg";
import { Button } from "./components/ui/button";

type AdviceType = {
  slip: {
    id: number;
    advice: string;
  };
};

function App() {
  const [advice, setAdvice] = useState<{ id: number; advice: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  async function getAdvice() {
    const url = "https://api.adviceslip.com/advice";
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = (await response.json()) as AdviceType;

      setAdvice(result.slip);
      setLoading(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
      setLoading(false);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="w-full bg-[#1f2632] font-manrope h-svh flex justify-center items-center">
      <Card className="w-md m-4 bg-[#323a49] shadow-2xl border-none p-10 text-center relative ">
        {loading && <Spinner className="self-center text-[#cee3e9] size-8" />}
        {error && (
          <CardDescription className="text-[#cee3e9] text-xl font-bold">
            {error}
          </CardDescription>
        )}
        {!loading && !error && advice && (
          <>
            <CardHeader className="text-[#52ffa8] tracking-widest font-bold">
              {`Advice #${advice?.id}`}
            </CardHeader>
            <CardContent className="text-[#cee3e9] font-extrabold text-2xl">
              {`“${advice?.advice}”`}
            </CardContent>

            <img
              src={MobileDivider}
              className="block md:hidden w-full mb-4"
              alt=""
            />
            <img
              src={DesktopDivider}
              className="hidden md:block w-full mb-4"
              alt=""
            />
            <Button
              className="bg-[#52ffa8] p-2 size-10 rounded-full absolute left-1/2 bottom-0
               -translate-x-1/2 translate-y-1/2 hover:bg-[#52ffa8] hover:shadow-[0_0_20px_#52ffa8]"
              onClick={getAdvice}
            >
              <img src={DiceIcon} className="w-full" alt="Get new advice" />
            </Button>
          </>
        )}
      </Card>
    </div>
  );
}

export default App;
