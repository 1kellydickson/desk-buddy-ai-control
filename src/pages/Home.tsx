
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Clock, FileText, Lock, Brain } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                DeskMate AI: Your Personal Desktop Assistant
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Talk to your PC like a friend — manage tasks, open apps, and stay organized.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/download">
                <Button size="lg" className="gap-1">
                  Download Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="h-8 w-8 text-primary" />}
              title="Natural Language Control"
              description="Control your computer with simple, conversational commands in plain English."
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="Opens Files & Apps"
              description="Launch applications and access documents with just a voice command."
            />
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Task Scheduling & Reminders"
              description="Never forget important tasks with intelligent reminders and scheduling."
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="File Organization"
              description="Keep your files in order with smart organization features."
            />
            <FeatureCard 
              icon={<Lock className="h-8 w-8 text-primary" />}
              title="Local & Secure"
              description="All processing happens locally on your device for maximum privacy."
            />
            <FeatureCard 
              icon={<Mic className="h-8 w-8 text-primary" />}
              title="Voice & Text Input"
              description="Interact through voice commands or type your requests - your choice."
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/features">
              <Button variant="outline">
                Learn More About Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-muted py-16 px-4 md:px-6">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard 
              number={1}
              title="Speak or type a command"
              description="Just tell DeskMate what you need, as if you're talking to a friend."
            />
            <StepCard 
              number={2}
              title="AI interprets the task"
              description="The assistant understands your intent and processes the command."
            />
            <StepCard 
              number={3}
              title="Action is done instantly"
              description="Your task is completed right away, saving you time and effort."
            />
          </div>
        </div>
      </section>

      {/* Demo Section (Placeholder) */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">See it in Action</h2>
          <p className="text-center text-gray-500 mb-8">Watch how DeskMate AI makes computer tasks effortless</p>
          <div className="bg-gray-200 dark:bg-gray-800 rounded-xl aspect-video max-w-3xl mx-auto flex items-center justify-center">
            <p className="text-center text-gray-500">Demo Video Coming Soon</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16 px-4 md:px-6">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform how you use your computer?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Download DeskMate AI today and experience the future of desktop interaction.</p>
          <Link to="/download">
            <Button variant="secondary" size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border hover:shadow-md transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

// Step Card Component
const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Home;
