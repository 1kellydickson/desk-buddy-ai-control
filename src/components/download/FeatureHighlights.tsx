
import { Settings, Folder, Check, File, Monitor } from "lucide-react";

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border flex flex-col items-center text-center">
      <div className="mb-4 bg-primary/10 p-3 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

const FeatureHighlights = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-12">Desktop Feature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Voice Commands"
            description="Control your computer with natural voice commands and receive spoken responses."
            icon={<Settings className="h-10 w-10 text-primary" />}
          />
          <FeatureCard
            title="Smart File Management"
            description="Find, organize, and manipulate files with natural language instructions."
            icon={<Folder className="h-10 w-10 text-primary" />}
          />
          <FeatureCard
            title="Task Automation"
            description="Create custom workflows and automate repetitive tasks with simple commands."
            icon={<Check className="h-10 w-10 text-primary" />}
          />
          <FeatureCard
            title="Calendar Integration"
            description="Manage your schedule, set reminders, and get meeting notifications."
            icon={<File className="h-10 w-10 text-primary" />}
          />
          <FeatureCard
            title="Screen Capture & Analysis"
            description="Take screenshots and extract text or analyze content automatically."
            icon={<Monitor className="h-10 w-10 text-primary" />}
          />
          <FeatureCard
            title="System Monitoring"
            description="Track system performance, battery life, and get optimization suggestions."
            icon={<Settings className="h-10 w-10 text-primary" />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
