
import { Button } from "@/components/ui/button";
import { Windows, Apple, Linux, Check } from "lucide-react";

const Download = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Download DeskMate AI
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Get the desktop assistant that transforms how you interact with your computer.
            </p>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-6">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <RequirementCard title="Operating System" items={["Windows 10/11", "macOS 10.15+", "Ubuntu 20.04+"]} />
            <RequirementCard title="Hardware" items={["RAM: 4GB+", "Storage: 200MB", "CPU: Dual-core 2GHz+"]} />
            <RequirementCard title="Other" items={["Microphone (optional)", "Internet (initial setup only)", "Admin privileges"]} />
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12">Choose your version</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <DownloadCard
              icon={<Windows className="h-12 w-12 text-primary" />}
              title="Windows"
              version="v1.2.0"
              size="145 MB"
              format="EXE"
            />
            <DownloadCard
              icon={<Apple className="h-12 w-12 text-primary" />}
              title="macOS"
              version="v1.2.0"
              size="132 MB"
              format="DMG"
            />
            <DownloadCard
              icon={<Linux className="h-12 w-12 text-primary" />}
              title="Linux"
              version="v1.2.0"
              size="128 MB"
              format="DEB / AppImage"
            />
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12">Installation Guide</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <InstallStepCard
              number={1}
              title="Download the installer"
              description="Select the version for your operating system and download the installer package."
            />
            <InstallStepCard
              number={2}
              title="Run the installer"
              description="Double-click the downloaded file and follow the on-screen prompts to install DeskMate AI."
            />
            <InstallStepCard
              number={3}
              title="Grant permissions"
              description="Allow necessary permissions when prompted to enable full functionality (microphone access, file access, etc.)."
            />
            <InstallStepCard
              number={4}
              title="Complete setup"
              description="Follow the setup wizard to customize your experience and start using DeskMate AI."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const RequirementCard = ({ title, items }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Check className="h-4 w-4 text-green-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DownloadCard = ({ icon, title, version, size, format }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">
        {version} • {size}
      </p>
      <p className="text-xs bg-muted rounded-full px-2 py-1 mb-6">{format}</p>
      <Button className="w-full">Download</Button>
    </div>
  );
};

const InstallStepCard = ({ number, title, description }) => {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex-shrink-0 flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Download;
