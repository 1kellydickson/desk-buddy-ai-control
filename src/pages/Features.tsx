
import { Folder, Monitor, Clock, Mic, Settings, Shield } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              DeskMate AI Features
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover how DeskMate AI can transform your desktop experience.
            </p>
          </div>
        </div>
      </section>

      {/* Features Detailed Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <FeatureSection
            icon={<Folder className="h-12 w-12 text-primary" />}
            title="Smart File Control"
            description="Access and manage your files with simple voice or text commands."
            examples={[
              "Open my resume",
              "Delete all files in Downloads older than a week",
              "Create a new folder called 'Project X'"
            ]}
          />

          <FeatureSection
            icon={<Monitor className="h-12 w-12 text-primary" />}
            title="App Launcher"
            description="Start and control applications with natural language."
            examples={[
              "Start Photoshop",
              "Open Chrome and search for latest tech news",
              "Launch Spotify and play my workout playlist"
            ]}
            reversed
          />

          <FeatureSection
            icon={<Clock className="h-12 w-12 text-primary" />}
            title="Reminders & Scheduling"
            description="Never miss an important task or deadline again."
            examples={[
              "Remind me to stand up in 30 minutes",
              "Schedule a meeting for tomorrow at 3PM",
              "Set a reminder to call mom on Sunday"
            ]}
          />

          <FeatureSection
            icon={<Mic className="h-12 w-12 text-primary" />}
            title="Voice & Text Input"
            description="Interact with your computer however you prefer."
            examples={[
              "Use voice commands for hands-free operation",
              "Type commands when in quiet environments",
              "Seamlessly switch between voice and text input"
            ]}
            reversed
          />

          <FeatureSection
            icon={<Settings className="h-12 w-12 text-primary" />}
            title="System Actions"
            description="Control your system settings and operations with ease."
            examples={[
              "Restart my computer",
              "Turn down brightness by 20%",
              "Increase volume to maximum"
            ]}
          />

          <FeatureSection
            icon={<Shield className="h-12 w-12 text-primary" />}
            title="Security"
            description="Keep your data private with local processing."
            examples={[
              "All data is processed locally",
              "No internet connection required",
              "Your commands never leave your computer"
            ]}
            reversed
          />
        </div>
      </section>
    </div>
  );
};

const FeatureSection = ({ icon, title, description, examples, reversed = false }) => {
  const content = (
    <div className="flex flex-col space-y-4 md:w-1/2">
      <div className="inline-block p-4 bg-muted rounded-lg mb-2">{icon}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
      <div className="space-y-2 mt-4">
        <h3 className="font-medium">Example Commands:</h3>
        <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-1">
          {examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const image = (
    <div className="md:w-1/2 flex items-center justify-center">
      <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-64 w-full max-w-md flex items-center justify-center">
        <p className="text-center text-gray-500">Feature Illustration</p>
      </div>
    </div>
  );

  return (
    <div className="py-12 border-b border-border last:border-b-0">
      <div className={`flex flex-col md:flex-row gap-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
        {reversed ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </div>
  );
};

export default Features;
