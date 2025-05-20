
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("getting-started");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Documentation
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Everything you need to know about using DeskMate AI effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-20 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Documentation</h3>
                <nav className="space-y-1">
                  <DocNavLink title="Getting Started" id="getting-started" active={activeTab} setActive={setActiveTab} />
                  <DocNavLink title="Commands Reference" id="commands" active={activeTab} setActive={setActiveTab} />
                  <DocNavLink title="Troubleshooting" id="troubleshooting" active={activeTab} setActive={setActiveTab} />
                  <DocNavLink title="Advanced Usage" id="advanced" active={activeTab} setActive={setActiveTab} />
                  <DocNavLink title="API Access" id="api" active={activeTab} setActive={setActiveTab} />
                  <DocNavLink title="FAQ" id="faq" active={activeTab} setActive={setActiveTab} />
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsContent value="getting-started">
                  <DocSection title="Getting Started with DeskMate AI">
                    <p className="mb-4">
                      Welcome to DeskMate AI! This guide will help you get up and running with your new desktop assistant.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">First-time Setup</h3>
                    <ol className="space-y-4 list-decimal list-inside text-gray-700 dark:text-gray-300 mb-6">
                      <li>Install DeskMate AI using the installer from the download page</li>
                      <li>Launch the application from your start menu or applications folder</li>
                      <li>Complete the initial setup wizard</li>
                      <li>Grant necessary permissions when prompted</li>
                      <li>Choose your preferred input method (voice, text, or both)</li>
                    </ol>

                    <h3 className="text-xl font-semibold mt-6 mb-3">Basic Usage</h3>
                    <p className="mb-4">
                      Using DeskMate AI is simple - just speak naturally or type your commands.
                    </p>
                    
                    <div className="bg-muted p-4 rounded-md mb-6">
                      <p className="font-mono">Try saying: "Open my documents folder" or "What's the weather today?"</p>
                    </div>

                    <h3 className="text-xl font-semibold mt-6 mb-3">Interface Overview</h3>
                    <p className="mb-4">
                      The DeskMate AI interface consists of:
                    </p>
                    <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>Command input bar - Type your commands here</li>
                      <li>Microphone button - Click to activate voice input</li>
                      <li>Response area - View the AI's responses and actions</li>
                      <li>Settings menu - Customize your experience</li>
                    </ul>
                  </DocSection>
                </TabsContent>
                
                <TabsContent value="commands">
                  <DocSection title="Commands Reference">
                    <p className="mb-6">
                      DeskMate AI understands a wide range of commands. Here are the main categories with examples:
                    </p>
                    
                    <CommandCategory 
                      title="File Management" 
                      examples={[
                        "Open [file name]",
                        "Create a new folder called [name]",
                        "Delete files older than [timeframe]",
                        "Search for [term] in documents"
                      ]}
                    />
                    
                    <CommandCategory 
                      title="Application Control" 
                      examples={[
                        "Launch [app name]",
                        "Close all applications",
                        "Switch to [app name]",
                        "Open [website] in browser"
                      ]}
                    />
                    
                    <CommandCategory 
                      title="System Operations" 
                      examples={[
                        "Restart computer",
                        "Shutdown in [time]",
                        "Adjust volume to [level]",
                        "Change brightness to [level]"
                      ]}
                    />
                    
                    <CommandCategory 
                      title="Reminders & Calendar" 
                      examples={[
                        "Remind me to [task] in [time]",
                        "Schedule a meeting for [time]",
                        "Show my upcoming events",
                        "Set an alarm for [time]"
                      ]}
                    />
                  </DocSection>
                </TabsContent>
                
                <TabsContent value="troubleshooting">
                  <DocSection title="Troubleshooting">
                    <p className="mb-6">
                      Encountering issues with DeskMate AI? Here are solutions to common problems:
                    </p>
                    
                    <TroubleshootItem
                      issue="DeskMate AI doesn't recognize my voice commands"
                      solutions={[
                        "Check that your microphone is properly connected and working",
                        "Make sure you've granted microphone permissions to the application",
                        "Speak clearly and at a moderate pace",
                        "Try adjusting the microphone sensitivity in settings"
                      ]}
                    />
                    
                    <TroubleshootItem
                      issue="Application won't start or crashes at launch"
                      solutions={[
                        "Verify that your system meets the minimum requirements",
                        "Try reinstalling the application",
                        "Check for operating system updates",
                        "Run the application as administrator"
                      ]}
                    />
                    
                    <TroubleshootItem
                      issue="DeskMate AI can't access certain files or applications"
                      solutions={[
                        "Ensure you've granted necessary permissions during setup",
                        "Check file/folder permissions in your operating system",
                        "Try running DeskMate AI with administrator privileges"
                      ]}
                    />
                  </DocSection>
                </TabsContent>
                
                <TabsContent value="advanced">
                  <DocSection title="Advanced Usage">
                    <p className="mb-6">
                      Take your DeskMate AI experience to the next level with these advanced features:
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3">Custom Scripts</h3>
                    <p className="mb-4">
                      DeskMate AI supports custom scripts to expand its capabilities:
                    </p>
                    <div className="bg-muted p-4 rounded-md mb-6 overflow-x-auto">
                      <pre className="text-sm font-mono">
{`// Example custom script (script.js)
function customAction(parameter) {
  // Your custom logic here
  return "Custom action completed with: " + parameter;
}`}
                      </pre>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Plugin Support</h3>
                    <p className="mb-4">
                      Extend functionality with plugins from our marketplace or create your own:
                    </p>
                    <ol className="space-y-2 list-decimal list-inside text-gray-700 dark:text-gray-300 mb-6">
                      <li>Go to Settings &gt; Plugins</li>
                      <li>Browse available plugins or click "Install from file"</li>
                      <li>Activate your installed plugins</li>
                    </ol>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Keyboard Shortcuts</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-2">
                        <span className="bg-muted px-2 py-1 rounded font-mono">Ctrl+Alt+D</span> - Activate DeskMate
                      </div>
                      <div className="p-2">
                        <span className="bg-muted px-2 py-1 rounded font-mono">Ctrl+Alt+M</span> - Toggle microphone
                      </div>
                      <div className="p-2">
                        <span className="bg-muted px-2 py-1 rounded font-mono">Ctrl+Alt+S</span> - Open settings
                      </div>
                      <div className="p-2">
                        <span className="bg-muted px-2 py-1 rounded font-mono">Ctrl+Alt+Q</span> - Quick command
                      </div>
                    </div>
                  </DocSection>
                </TabsContent>
                
                <TabsContent value="api">
                  <DocSection title="API Access">
                    <p className="mb-6">
                      DeskMate AI provides API and CLI access for developers and power users:
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3">Command Line Interface</h3>
                    <p className="mb-4">
                      Control DeskMate AI from the command line:
                    </p>
                    <div className="bg-muted p-4 rounded-md mb-6 overflow-x-auto">
                      <pre className="text-sm font-mono">
{`# Basic command syntax
deskmate-cli --command "open documents folder"

# With parameters
deskmate-cli --remind "meeting" --time "30m"

# Get help
deskmate-cli --help`}
                      </pre>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">REST API</h3>
                    <p className="mb-4">
                      Integrate with DeskMate AI using HTTP requests:
                    </p>
                    <div className="bg-muted p-4 rounded-md mb-6 overflow-x-auto">
                      <pre className="text-sm font-mono">
{`// Example API request
POST /api/v1/command
{
  "command": "set reminder",
  "parameters": {
    "task": "Team meeting",
    "time": "2023-06-15T14:00:00"
  }
}`}
                      </pre>
                    </div>
                    
                    <p className="text-sm text-gray-500 italic">
                      Note: API access requires enabling the API server in settings and generating an API key.
                    </p>
                  </DocSection>
                </TabsContent>
                
                <TabsContent value="faq">
                  <DocSection title="Frequently Asked Questions">
                    <FaqItem 
                      question="Is my data sent to the cloud?" 
                      answer="No, DeskMate AI processes all commands locally on your device. Your data never leaves your computer unless you explicitly enable cloud features." 
                    />
                    
                    <FaqItem 
                      question="How do I update DeskMate AI?" 
                      answer="DeskMate AI checks for updates automatically. When an update is available, you'll be notified and can install it with a single click. You can also check for updates manually from the Help menu." 
                    />
                    
                    <FaqItem 
                      question="Can I use DeskMate AI offline?" 
                      answer="Yes, DeskMate AI is designed to work offline. An internet connection is only required for initial setup, updates, and certain online features like web searches." 
                    />
                    
                    <FaqItem 
                      question="How do I customize voice recognition?" 
                      answer="Go to Settings > Voice > Recognition and choose options for language, accent, and sensitivity. You can also train the voice model to better recognize your speech patterns." 
                    />
                    
                    <FaqItem 
                      question="Can DeskMate AI work with third-party applications?" 
                      answer="Yes, DeskMate AI can interact with most applications on your system. For enhanced integration with specific applications, check our plugin marketplace." 
                    />
                  </DocSection>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const DocNavLink = ({ title, id, active, setActive }) => {
  return (
    <button
      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
        active === id 
        ? "bg-primary text-primary-foreground" 
        : "hover:bg-muted"
      }`}
      onClick={() => setActive(id)}
    >
      {title}
    </button>
  );
};

const DocSection = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  );
};

const CommandCategory = ({ title, examples }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
        {examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
    </div>
  );
};

const TroubleshootItem = ({ issue, solutions }) => {
  return (
    <div className="mb-8 border-b pb-6 border-border last:border-0 last:mb-0 last:pb-0">
      <h3 className="text-xl font-semibold mb-3">{issue}</h3>
      <ol className="space-y-2 list-decimal list-inside text-gray-700 dark:text-gray-300">
        {solutions.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ol>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  return (
    <div className="mb-6 border-b pb-6 border-border last:border-0 last:mb-0 last:pb-0">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-700 dark:text-gray-300">{answer}</p>
    </div>
  );
};

export default Documentation;
