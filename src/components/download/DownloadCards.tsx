
import { Button } from "@/components/ui/button";
import { Monitor, Apple, Terminal, Download as DownloadIcon } from "lucide-react";

interface DownloadCardProps {
  icon: React.ReactNode;
  title: string;
  version: string;
  size: string;
  format: string;
  onDownload: () => void;
}

const DownloadCard = ({ icon, title, version, size, format, onDownload }: DownloadCardProps) => {
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

interface DownloadCardsProps {
  onDownload: (type: string) => void;
}

const DownloadCards = ({ onDownload }: DownloadCardsProps) => {
  return (
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
            onDownload={() => onDownload("Windows")}
          />
          <DownloadCard
            icon={<Apple className="h-12 w-12 text-primary" />}
            title="macOS"
            version="v1.2.0"
            size="132 MB"
            format="DMG"
            onDownload={() => onDownload("macOS")}
          />
          <DownloadCard
            icon={<Terminal className="h-12 w-12 text-primary" />}
            title="Linux"
            version="v1.2.0"
            size="128 MB"
            format="DEB / AppImage"
            onDownload={() => onDownload("Linux")}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadCards;
