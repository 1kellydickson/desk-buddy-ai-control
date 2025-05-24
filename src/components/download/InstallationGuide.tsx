
const InstallStepCard = ({ number, title, description }: { number: number; title: string; description: string }) => {
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

const InstallationGuide = () => {
  return (
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
  );
};

export default InstallationGuide;
