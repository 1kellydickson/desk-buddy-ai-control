
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import DownloadHero from "@/components/download/DownloadHero";
import SystemRequirements from "@/components/download/SystemRequirements";
import DownloadCards from "@/components/download/DownloadCards";
import FeatureHighlights from "@/components/download/FeatureHighlights";
import InstallationGuide from "@/components/download/InstallationGuide";
import SetupModal from "@/components/download/SetupModal";
import LocalSetupGuide from "@/components/download/LocalSetupGuide";

const Download = () => {
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [downloadType, setDownloadType] = useState("");
  const [showLocalSetup, setShowLocalSetup] = useState(false);

  const handleDownload = (type: string) => {
    setDownloadType(type);
    setIsSetupOpen(true);
    
    toast({
      title: "Download started",
      description: `Starting download for ${type}...`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DownloadHero onShowLocalSetup={() => setShowLocalSetup(true)} />
      <SystemRequirements />
      <DownloadCards onDownload={handleDownload} />
      <FeatureHighlights />
      <InstallationGuide />

      <SetupModal 
        isOpen={isSetupOpen} 
        onOpenChange={setIsSetupOpen} 
        downloadType={downloadType} 
      />

      <LocalSetupGuide 
        isOpen={showLocalSetup} 
        onOpenChange={setShowLocalSetup} 
      />
    </div>
  );
};

export default Download;
