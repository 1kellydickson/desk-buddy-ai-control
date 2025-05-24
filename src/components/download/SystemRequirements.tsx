
import { Check } from "lucide-react";

const RequirementCard = ({ title, items }: { title: string; items: string[] }) => {
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

const SystemRequirements = () => {
  return (
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
  );
};

export default SystemRequirements;
