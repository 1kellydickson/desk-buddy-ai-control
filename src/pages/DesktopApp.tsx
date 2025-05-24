
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mic, Settings, Folder, File, Monitor, Clock, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

declare global {
  interface Window {
    electronAPI: {
      getSystemInfo: () => Promise<any>;
      openFileDialog: () => Promise<any>;
      openFolderDialog: () => Promise<any>;
      showNotification: (title: string, body: string) => Promise<void>;
      openExternal: (url: string) => Promise<void>;
      onVoiceCommand: (callback: () => void) => void;
      onCreateTask: (callback: () => void) => void;
      onFileSearch: (callback: () => void) => void;
      onTakeScreenshot: (callback: () => void) => void;
      onNavigateToSettings: (callback: () => void) => void;
      removeAllListeners: (channel: string) => void;
    };
  }
}

const DesktopApp = () => {
  const [isListening, setIsListening] = useState(false);
  const [command, setCommand] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'assistant', message: string}>>([]);
  const [systemInfo, setSystemInfo] = useState<any>(null);
  const [tasks, setTasks] = useState<Array<{id: number, text: string, completed: boolean}>>([]);

  useEffect(() => {
    // Get system information
    if (window.electronAPI) {
      window.electronAPI.getSystemInfo().then(setSystemInfo);

      // Set up event listeners for global shortcuts
      window.electronAPI.onVoiceCommand(() => {
        handleVoiceCommand();
      });

      window.electronAPI.onCreateTask(() => {
        handleCreateTask();
      });

      window.electronAPI.onFileSearch(() => {
        handleFileSearch();
      });

      window.electronAPI.onTakeScreenshot(() => {
        handleScreenshot();
      });

      // Cleanup listeners on unmount
      return () => {
        window.electronAPI.removeAllListeners('trigger-voice-command');
        window.electronAPI.removeAllListeners('create-task');
        window.electronAPI.removeAllListeners('file-search');
        window.electronAPI.removeAllListeners('take-screenshot');
      };
    }
  }, []);

  const handleVoiceCommand = () => {
    setIsListening(true);
    toast({
      title: "Voice Command Active",
      description: "Listening for your command...",
    });

    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      const exampleCommands = [
        "Open my documents folder",
        "What's my system memory usage?",
        "Create a new task for today",
        "Take a screenshot",
        "Show me recent files"
      ];
      const randomCommand = exampleCommands[Math.floor(Math.random() * exampleCommands.length)];
      setCommand(randomCommand);
      processCommand(randomCommand);
    }, 2000);
  };

  const handleCreateTask = () => {
    const taskText = prompt("Enter a new task:");
    if (taskText) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
      };
      setTasks(prev => [...prev, newTask]);
      toast({
        title: "Task Created",
        description: `Added: ${taskText}`,
      });
    }
  };

  const handleFileSearch = async () => {
    if (window.electronAPI) {
      const result = await window.electronAPI.openFileDialog();
      if (!result.canceled && result.filePaths.length > 0) {
        toast({
          title: "Files Selected",
          description: `Selected ${result.filePaths.length} file(s)`,
        });
      }
    }
  };

  const handleScreenshot = () => {
    toast({
      title: "Screenshot Taken",
      description: "Screenshot saved to desktop",
    });
    if (window.electronAPI) {
      window.electronAPI.showNotification("DeskMate AI", "Screenshot captured successfully!");
    }
  };

  const processCommand = (cmd: string) => {
    setChatHistory(prev => [...prev, { type: 'user', message: cmd }]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "I understand your request. ";
      
      if (cmd.toLowerCase().includes('folder') || cmd.toLowerCase().includes('file')) {
        response += "I can help you manage files and folders.";
      } else if (cmd.toLowerCase().includes('memory') || cmd.toLowerCase().includes('system')) {
        response += `Your system has ${systemInfo ? (systemInfo.freeMemory / 1024 / 1024 / 1024).toFixed(1) : 'N/A'} GB of free memory.`;
      } else if (cmd.toLowerCase().includes('task')) {
        response += "I can help you create and manage tasks.";
      } else if (cmd.toLowerCase().includes('screenshot')) {
        response += "I'll take a screenshot for you.";
      } else {
        response += "How can I help you with that?";
      }
      
      setChatHistory(prev => [...prev, { type: 'assistant', message: response }]);
    }, 1000);
  };

  const handleManualCommand = () => {
    if (command.trim()) {
      processCommand(command);
      setCommand("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            DeskMate AI Desktop Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your intelligent desktop companion is ready to help
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button
            onClick={handleVoiceCommand}
            disabled={isListening}
            className="flex items-center gap-2 h-16"
            variant={isListening ? "secondary" : "default"}
          >
            <Mic className={`h-5 w-5 ${isListening ? 'animate-pulse' : ''}`} />
            {isListening ? "Listening..." : "Voice Command"}
          </Button>
          
          <Button onClick={handleCreateTask} variant="outline" className="flex items-center gap-2 h-16">
            <File className="h-5 w-5" />
            Create Task
          </Button>
          
          <Button onClick={handleFileSearch} variant="outline" className="flex items-center gap-2 h-16">
            <Folder className="h-5 w-5" />
            Browse Files
          </Button>
          
          <Button onClick={handleScreenshot} variant="outline" className="flex items-center gap-2 h-16">
            <Monitor className="h-5 w-5" />
            Screenshot
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chat Interface */}
          <Card className="h-96">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                AI Assistant
              </CardTitle>
              <CardDescription>
                Type or speak your commands
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-48 overflow-y-auto space-y-2 bg-gray-50 dark:bg-gray-800 p-3 rounded">
                {chatHistory.length === 0 ? (
                  <p className="text-gray-500 text-center">
                    Say "Hello DeskMate" or press Alt+Space to start
                  </p>
                ) : (
                  chatHistory.map((item, index) => (
                    <div key={index} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-3 py-2 rounded-lg ${
                        item.type === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white dark:bg-gray-700 border'
                      }`}>
                        {item.message}
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <div className="flex gap-2">
                <Input
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  placeholder="Type your command here..."
                  onKeyPress={(e) => e.key === 'Enter' && handleManualCommand()}
                />
                <Button onClick={handleManualCommand}>Send</Button>
              </div>
            </CardContent>
          </Card>

          {/* System Info & Tasks */}
          <div className="space-y-4">
            {/* System Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                {systemInfo ? (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Platform:</span>
                      <Badge variant="outline">{systemInfo.platform}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory (Free):</span>
                      <span>{(systemInfo.freeMemory / 1024 / 1024 / 1024).toFixed(1)} GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CPU Cores:</span>
                      <span>{systemInfo.cpus}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">Loading system information...</p>
                )}
              </CardContent>
            </Card>

            {/* Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Quick Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {tasks.length === 0 ? (
                    <p className="text-gray-500 text-sm">No tasks yet. Press Alt+T to create one!</p>
                  ) : (
                    tasks.map((task) => (
                      <div key={task.id} className="flex items-center gap-2 p-2 border rounded">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => {
                            setTasks(prev => prev.map(t => 
                              t.id === task.id ? {...t, completed: !t.completed} : t
                            ));
                          }}
                        />
                        <span className={task.completed ? 'line-through text-gray-500' : ''}>
                          {task.text}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keyboard Shortcuts Help */}
        <Card>
          <CardHeader>
            <CardTitle>Keyboard Shortcuts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex flex-col items-center">
                <Badge variant="outline" className="mb-1">Alt + Space</Badge>
                <span>Voice Command</span>
              </div>
              <div className="flex flex-col items-center">
                <Badge variant="outline" className="mb-1">Alt + T</Badge>
                <span>Create Task</span>
              </div>
              <div className="flex flex-col items-center">
                <Badge variant="outline" className="mb-1">Alt + F</Badge>
                <span>File Search</span>
              </div>
              <div className="flex flex-col items-center">
                <Badge variant="outline" className="mb-1">Alt + S</Badge>
                <span>Screenshot</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DesktopApp;
