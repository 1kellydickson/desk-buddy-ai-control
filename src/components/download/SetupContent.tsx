
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SetupForm from "./SetupForm";

interface SetupContentProps {
  downloadType: string;
  onClose: () => void;
}

const SetupContent = ({ downloadType, onClose }: SetupContentProps) => {
  const [setupStep, setSetupStep] = useState(1);
  const [setupProgress, setSetupProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);

  // Create actual download for the desktop app
  const createDownloadFile = () => {
    const appContent = `
# DeskMate AI Desktop Application

This is a demo installer for DeskMate AI Desktop Assistant.

## Installation Instructions:

1. Extract this package to a folder on your computer
2. Run: npm install
3. Run: npm run electron:dev

## Features:
- Voice commands (Alt+Space)
- File management (Alt+F)
- Task creation (Alt+T)
- Screenshots (Alt+S)
- System tray integration
- Global keyboard shortcuts

## Requirements:
- Node.js 16+
- npm 7+
- ${downloadType === 'Windows' ? 'Windows 10/11' : downloadType === 'macOS' ? 'macOS 10.15+' : 'Ubuntu 20.04+'}

## Repository:
The full source code and build instructions are available at:
https://github.com/deskmate/deskmate-ai

Enjoy your new desktop assistant!
`;

    const blob = new Blob([appContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `deskmate-ai-${downloadType.toLowerCase()}-v1.2.0${downloadType === 'Windows' ? '.txt' : downloadType === 'macOS' ? '.txt' : '.txt'}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const simulateSetup = () => {
    setLoading(true);
    setSetupProgress(0);
    
    const interval = setInterval(() => {
      setSetupProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          createDownloadFile(); // Trigger actual download
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const launchDemo = () => {
    setSetupComplete(true);
    onClose();
    // Open the desktop app interface
    window.open('/desktop-app', '_blank');
    toast({
      title: "DeskMate AI Initialized",
      description: "Your desktop assistant demo is now ready to use!",
    });
  };

  if (setupStep === 1) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Download and Installation</h3>
        <p className="text-sm text-gray-500">
          We're preparing DeskMate AI for {downloadType}. This will download the installer and setup files.
        </p>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Downloading...</span>
            <span>{setupProgress}%</span>
          </div>
          <Progress value={setupProgress} className="h-2" />
        </div>
        
        {setupProgress === 100 && (
          <div className="space-y-3">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg">
              <p className="text-sm text-green-700 dark:text-green-300 flex items-center gap-2">
                <Check className="h-4 w-4" />
                Download complete! Check your Downloads folder.
              </p>
            </div>
            <Button onClick={() => setSetupStep(2)} className="w-full">
              Continue Setup
            </Button>
          </div>
        )}
        
        {setupProgress < 100 && (
          <Button onClick={simulateSetup} disabled={loading} className="w-full mt-4">
            <Download className="mr-2 h-4 w-4" />
            {loading ? "Downloading..." : "Start Download"}
          </Button>
        )}

        <Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen} className="border rounded-md p-2">
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 text-sm">
            <span>Download details</span>
            <span className="text-xs text-gray-500">{isCollapsibleOpen ? "Hide" : "Show"}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 space-y-2 text-xs text-gray-500">
            <div className="flex justify-between">
              <span>Version:</span>
              <span>1.2.0</span>
            </div>
            <div className="flex justify-between">
              <span>File size:</span>
              <span>{downloadType === "Windows" ? "145 MB" : downloadType === "macOS" ? "132 MB" : "128 MB"}</span>
            </div>
            <div className="flex justify-between">
              <span>File name:</span>
              <span>deskmate-ai-{downloadType.toLowerCase()}-v1.2.0{downloadType === "Windows" ? ".exe" : downloadType === "macOS" ? ".dmg" : ".deb"}</span>
            </div>
            <div className="flex justify-between">
              <span>Security check:</span>
              <span className="flex items-center text-green-500"><Check className="h-3 w-3 mr-1" /> Verified</span>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  }

  if (setupStep === 2) {
    return <SetupForm onSubmit={() => setSetupStep(3)} />;
  }

  if (setupStep === 3) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Setup Complete!</h3>
        <p className="text-sm text-gray-500">
          Your DeskMate AI assistant has been successfully downloaded and configured. You can now start using it to manage your desktop tasks.
        </p>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg">
          <h4 className="font-medium flex items-center gap-2 text-green-700 dark:text-green-300">
            <Check className="h-5 w-5" /> Ready to use
          </h4>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">
            Say "Hello DeskMate" or press Alt+Space to get started.
          </p>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg">
          <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Try the Demo</h4>
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
            Experience DeskMate AI features in your browser before installing the desktop app.
          </p>
          <Button onClick={launchDemo} className="w-full">
            Launch DeskMate Demo
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default SetupContent;
