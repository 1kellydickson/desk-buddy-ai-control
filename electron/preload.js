
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // System information
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  
  // File operations
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  openFolderDialog: () => ipcRenderer.invoke('open-folder-dialog'),
  
  // Notifications
  showNotification: (title, body) => ipcRenderer.invoke('show-notification', title, body),
  
  // External links
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  
  // Event listeners for shortcuts
  onVoiceCommand: (callback) => ipcRenderer.on('trigger-voice-command', callback),
  onCreateTask: (callback) => ipcRenderer.on('create-task', callback),
  onFileSearch: (callback) => ipcRenderer.on('file-search', callback),
  onTakeScreenshot: (callback) => ipcRenderer.on('take-screenshot', callback),
  onNavigateToSettings: (callback) => ipcRenderer.on('navigate-to-settings', callback),
  
  // Remove listeners
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel),
});
