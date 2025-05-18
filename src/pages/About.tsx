
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About DeskMate AI
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our mission, vision, and the story behind the project.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  DeskMate AI began from a simple frustration: using computers should be more intuitive. 
                  Our founder spent hours navigating through folders, launching applications, 
                  and managing files—tasks that seemed unnecessarily complicated.
                </p>
                <p>
                  What if your computer understood you like a human assistant would? What if you could 
                  simply ask it to perform tasks in plain language? This vision led to the development 
                  of DeskMate AI—a desktop assistant that transforms how we interact with computers.
                </p>
                <p>
                  After two years of development, countless iterations, and feedback from early users, 
                  we're proud to bring DeskMate AI to you. Our team of developers, UX designers, and AI 
                  researchers continue to improve the assistant to make your computing experience 
                  more natural and efficient.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-xl aspect-square flex items-center justify-center">
              <p className="text-center text-gray-500">Team Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To make human-computer interaction as natural and effortless as having a conversation. 
                We believe technology should adapt to humans, not the other way around. DeskMate AI 
                eliminates the learning curve associated with complex software and operating systems, 
                making computing accessible to everyone.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We envision a future where interacting with computers feels like working with a 
                helpful colleague who anticipates your needs. DeskMate AI is our first step toward 
                that future—a desktop assistant that understands context, learns from your habits, 
                and helps you accomplish more with less effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Privacy First" 
              description="Your desktop, your data, your control. We process everything locally to ensure your information stays private." 
            />
            <ValueCard 
              title="Accessibility" 
              description="Computing should be accessible to everyone, regardless of technical expertise or ability." 
            />
            <ValueCard 
              title="Continuous Improvement" 
              description="We're constantly learning and evolving to make DeskMate AI smarter and more helpful." 
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Alex Morgan" 
              role="Founder & Lead Developer" 
            />
            <TeamMember 
              name="Sarah Chen" 
              role="AI Research Lead" 
            />
            <TeamMember 
              name="David Patel" 
              role="UX Designer" 
            />
            <TeamMember 
              name="Maya Rodriguez" 
              role="Product Manager" 
            />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container">
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              We're on a mission to transform how people interact with computers. Whether you're a user, 
              developer, or just curious about our work, we'd love to have you along for the journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary">Join Our Newsletter</Button>
              <Button variant="secondary">Contribute on GitHub</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border text-center">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, role }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border text-center">
      <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-gray-500">Photo</span>
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default About;
