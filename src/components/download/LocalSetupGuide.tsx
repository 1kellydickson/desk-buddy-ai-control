
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Settings, File, Folder, Monitor } from "lucide-react";

const DesktopCommandCard = ({ command, description, icon }: { command: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-start p-3 border rounded-lg bg-white dark:bg-gray-800">
      {icon}
      <div className="ml-3">
        <p className="font-mono text-sm font-bold">{command}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

interface LocalSetupGuideProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const LocalSetupContent = ({ onClose }: { onClose: () => void }) => (
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
        <h3 className="text-lg font-semibold">Step 6: Activate Desktop Features</h3>
        <p className="text-gray-600 dark:text-gray-400">For full desktop integration, run:</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm overflow-x-auto">
          npm run desktop-setup
        </div>
        <p className="text-gray-600 dark:text-gray-400">This will install system tray integration and enable keyboard shortcuts.</p>
      </div>

      <div className="space-y-3 mt-8">
        <h3 className="text-lg font-semibold">Available Desktop Commands</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DesktopCommandCard 
            command="Alt+Space" 
            description="Open DeskMate assistant" 
            icon={<Settings className="h-5 w-5 text-blue-600" />}
          />
          <DesktopCommandCard 
            command="Alt+T" 
            description="Create new task" 
            icon={<File className="h-5 w-5 text-green-600" />}
          />
          <DesktopCommandCard 
            command="Alt+F" 
            description="Quick file search" 
            icon={<Folder className="h-5 w-5 text-amber-600" />}
          />
          <DesktopCommandCard 
            command="Alt+S" 
            description="Take screenshot" 
            icon={<Monitor className="h-5 w-5 text-purple-600" />}
          />
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
      
      <Button onClick={onClose} className="w-full">
        Close Setup Guide
      </Button>
    </div>
  </div>
);

const LocalSetupGuide = ({ isOpen, onOpenChange }: LocalSetupGuideProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const setupContent = <LocalSetupContent onClose={() => onOpenChange(false)} />;

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent className="h-[90%]">
          <DrawerHeader>
            <DrawerTitle>Local Setup Guide</DrawerTitle>
            <DrawerDescription>How to run DeskMate AI locally</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 overflow-y-auto">
            {setupContent}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Local Setup Guide</DialogTitle>
          <DialogDescription>How to run DeskMate AI locally</DialogDescription>
        </DialogHeader>
        {setupContent}
      </DialogContent>
    </Dialog>
  );
};

export default LocalSetupGuide;
