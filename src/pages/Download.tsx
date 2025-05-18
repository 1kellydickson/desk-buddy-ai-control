
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Apple, Terminal, Check, Download as DownloadIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerTrigger } from "@/components/ui/drawer";
import { toast } from "@/hooks/use-toast";
import { useMediaQuery } from "@/hooks/use-media-query";

const Download = () => {
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [downloadType, setDownloadType] = useState("");
  const [loading, setLoading] = useState(false);
  const [setupStep, setSetupStep] = useState(1);
  const [setupProgress, setSetupProgress] = useState(0);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const handleDownload = (type) => {
    setDownloadType(type);
    setSetupStep(1);
    setSetupProgress(0);
    setIsSetupOpen(true);
    
    // Simulate starting the download
    toast({
      title: "Download started",
      description: `Starting download for ${type}...`,
    });
  };

  const simulateSetup = () => {
    setLoading(true);
    setSetupProgress(0);
    
    // Simulate setup progress
    const interval = setInterval(() => {
      setSetupProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setSetupStep(prev => prev + 1);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const SetupContent = () => (
    <div className="space-y-6">
      {setupStep === 1 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Download and Installation</h3>
          <p className="text-sm text-gray-500">
            We're downloading DeskMate AI for {downloadType}. This may take a few minutes depending on your internet connection.
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${setupProgress}%` }}></div>
          </div>
          <p className="text-xs text-gray-500 text-right">{setupProgress}% complete</p>
          
          {setupProgress === 100 && (
            <Button onClick={() => setSetupStep(2)} className="w-full mt-4">
              Continue Setup
            </Button>
          )}
          
          {setupProgress < 100 && (
            <Button onClick={simulateSetup} disabled={loading} className="w-full mt-4">
              {loading ? "Downloading..." : "Start Download"}
            </Button>
          )}
        </div>
      )}

      {setupStep === 2 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Configure DeskMate</h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="language">Preferred Language</Label>
              <Input id="language" placeholder="English" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="useCase">Primary Use Case</Label>
              <Input id="useCase" placeholder="e.g., File Management, Reminders, etc." />
            </div>
          </div>
          <Button onClick={() => setSetupStep(3)} className="w-full mt-4">
            Continue
          </Button>
        </div>
      )}

      {setupStep === 3 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Setup Complete!</h3>
          <p className="text-sm text-gray-500">
            Your DeskMate AI assistant has been successfully installed and configured. You can now start using it to manage your tasks.
          </p>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg">
            <h4 className="font-medium flex items-center gap-2 text-green-700 dark:text-green-300">
              <Check className="h-5 w-5" /> Ready to use
            </h4>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Say "Hello DeskMate" or press Alt+Space to get started.
            </p>
          </div>
          <Button onClick={() => {
            setIsSetupOpen(false);
            toast({
              title: "Setup completed successfully",
              description: "You can now start using DeskMate AI!",
            });
          }} className="w-full mt-4">
            Get Started with DeskMate
          </Button>
        </div>
      )}
    </div>
  );

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
              icon={<Monitor className="h-12 w-12 text-primary" />}
              title="Windows"
              version="v1.2.0"
              size="145 MB"
              format="EXE"
              onDownload={() => handleDownload("Windows")}
            />
            <DownloadCard
              icon={<Apple className="h-12 w-12 text-primary" />}
              title="macOS"
              version="v1.2.0"
              size="132 MB"
              format="DMG"
              onDownload={() => handleDownload("macOS")}
            />
            <DownloadCard
              icon={<Terminal className="h-12 w-12 text-primary" />}
              title="Linux"
              version="v1.2.0"
              size="128 MB"
              format="DEB / AppImage"
              onDownload={() => handleDownload("Linux")}
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

      {/* Setup Modal/Drawer - Responsive UI */}
      {isMobile ? (
        <Drawer open={isSetupOpen} onOpenChange={setIsSetupOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>DeskMate AI Setup</DrawerTitle>
              <DrawerDescription>Follow the steps to setup your assistant</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <SetupContent />
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isSetupOpen} onOpenChange={setIsSetupOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>DeskMate AI Setup</DialogTitle>
              <DialogDescription>Follow the steps to setup your assistant</DialogDescription>
            </DialogHeader>
            <SetupContent />
          </DialogContent>
        </Dialog>
      )}
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

const DownloadCard = ({ icon, title, version, size, format, onDownload }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">
        {version} • {size}
      </p>
      <p className="text-xs bg-muted rounded-full px-2 py-1 mb-6">{format}</p>
      <Button className="w-full" onClick={onDownload}>
        <DownloadIcon className="mr-2 h-4 w-4" /> Download
      </Button>
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
