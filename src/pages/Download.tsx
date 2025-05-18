
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Apple, Terminal, Check, Download as DownloadIcon, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerTrigger } from "@/components/ui/drawer";
import { toast } from "@/hooks/use-toast";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Download = () => {
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [downloadType, setDownloadType] = useState("");
  const [loading, setLoading] = useState(false);
  const [setupStep, setSetupStep] = useState(1);
  const [setupProgress, setSetupProgress] = useState(0);
  const [showLocalSetup, setShowLocalSetup] = useState(false);
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
              <Select defaultValue="english">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="useCase">Primary Use Case</Label>
              <RadioGroup defaultValue="productivity">
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value="productivity" id="productivity" />
                  <Label htmlFor="productivity">Productivity & Task Management</Label>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value="files" id="files" />
                  <Label htmlFor="files">File Management & Organization</Label>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value="reminders" id="reminders" />
                  <Label htmlFor="reminders">Reminders & Calendar</Label>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All Features</Label>
                </div>
              </RadioGroup>
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

  const LocalSetupContent = () => (
    <div className="space-y-6 max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold">Local Setup Instructions</h2>
      
      <div className="space-y-6">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">System Requirements</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Node.js v16 or higher</li>
            <li>npm v7 or higher (or yarn)</li>
            <li>2GB of RAM minimum</li>
            <li>500MB disk space</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Step 1: Download the Source Code</h3>
          <p className="text-gray-600 dark:text-gray-400">Clone the repository from GitHub:</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm overflow-x-auto">
            git clone https://github.com/deskmate/deskmate-ai.git
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Step 2: Install Dependencies</h3>
          <p className="text-gray-600 dark:text-gray-400">Navigate to the project directory and install dependencies:</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm overflow-x-auto">
            cd deskmate-ai<br/>
            npm install
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Step 3: Configure Environment</h3>
          <p className="text-gray-600 dark:text-gray-400">Create a .env file from the template:</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm overflow-x-auto">
            cp .env.example .env<br/>
            # Edit .env with your preferred text editor to set API keys
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Step 4: Run Development Server</h3>
          <p className="text-gray-600 dark:text-gray-400">Start the development server:</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm overflow-x-auto">
            npm run dev
          </div>
          <p className="text-gray-600 dark:text-gray-400">The application should now be running on <span className="font-mono">http://localhost:3000</span></p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Step 5: Build for Production</h3>
          <p className="text-gray-600 dark:text-gray-400">When ready for production use:</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm overflow-x-auto">
            npm run build<br/>
            npm run start
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Troubleshooting Common Issues</h3>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
            <h4 className="font-medium mb-2">API Connection Issues</h4>
            <p className="text-sm">If you encounter issues connecting to DeskMate services, ensure your API keys are correctly configured in the .env file.</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
            <h4 className="font-medium mb-2">Voice Recognition Not Working</h4>
            <p className="text-sm">Make sure your browser has microphone permissions enabled and you're using a compatible browser (Chrome, Edge, or Firefox recommended).</p>
          </div>
        </div>
        
        <Button onClick={() => setShowLocalSetup(false)} className="w-full">
          Close Setup Guide
        </Button>
      </div>
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
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Button variant="outline" onClick={() => setShowLocalSetup(true)}>
                <Globe className="mr-2 h-4 w-4" /> View Local Setup Guide
              </Button>
            </div>
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

      {/* Local Setup Guide Modal/Drawer */}
      {isMobile ? (
        <Drawer open={showLocalSetup} onOpenChange={setShowLocalSetup}>
          <DrawerContent className="h-[90%]">
            <DrawerHeader>
              <DrawerTitle>Local Setup Guide</DrawerTitle>
              <DrawerDescription>How to run DeskMate AI locally</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 overflow-y-auto">
              <LocalSetupContent />
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={showLocalSetup} onOpenChange={setShowLocalSetup}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Local Setup Guide</DialogTitle>
              <DialogDescription>How to run DeskMate AI locally</DialogDescription>
            </DialogHeader>
            <LocalSetupContent />
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
