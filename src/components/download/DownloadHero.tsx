
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface DownloadHeroProps {
  onShowLocalSetup: () => void;
}

const DownloadHero = ({ onShowLocalSetup }: DownloadHeroProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Download DeskMate AI
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Get the desktop assistant that transforms how you interact with your computer.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Button variant="outline" onClick={onShowLocalSetup}>
              <Globe className="mr-2 h-4 w-4" /> View Local Setup Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadHero;
