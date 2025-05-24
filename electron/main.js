
const { app, BrowserWindow, ipcMain, Menu, Tray, globalShortcut, shell, dialog } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;
let tray;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    icon: path.join(__dirname, '../public/favicon.ico'),
    show: false,
    titleBarStyle: 'default',
  });

  const startUrl = isDev 
    ? 'http://localhost:5173' 
    : `file://${path.join(__dirname, '../dist/index.html')}`;
    
  mainWindow.loadURL(startUrl);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Hide to tray instead of closing
  mainWindow.on('close', (event) => {
    if (!app.isQuiting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });
}

function createTray() {
  tray = new Tray(path.join(__dirname, '../public/favicon.ico'));
  
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show DeskMate AI',
      click: () => {
        if (mainWindow) {
          mainWindow.show();
        } else {
          createWindow();
        }
      }
    },
    {
      label: 'Voice Command',
      accelerator: 'Alt+Space',
      click: () => {
        if (mainWindow) {
          mainWindow.webContents.send('trigger-voice-command');
        }
      }
    },
    { type: 'separator' },
    {
      label: 'Settings',
      click: () => {
        if (mainWindow) {
          mainWindow.show();
          mainWindow.webContents.send('navigate-to-settings');
        }
      }
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);

  tray.setToolTip('DeskMate AI - Your Desktop Assistant');
  tray.setContextMenu(contextMenu);
  
  tray.on('double-click', () => {
    if (mainWindow) {
      mainWindow.show();
    } else {
      createWindow();
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  createTray();

  // Register global shortcuts
  globalShortcut.register('Alt+Space', () => {
    if (mainWindow) {
      mainWindow.show();
      mainWindow.webContents.send('trigger-voice-command');
    }
  });

  globalShortcut.register('Alt+T', () => {
    if (mainWindow) {
      mainWindow.webContents.send('create-task');
    }
  });

  globalShortcut.register('Alt+F', () => {
    if (mainWindow) {
      mainWindow.webContents.send('file-search');
    }
  });

  globalShortcut.register('Alt+S', () => {
    if (mainWindow) {
      mainWindow.webContents.send('take-screenshot');
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

// IPC handlers for desktop functionality
ipcMain.handle('get-system-info', async () => {
  const os = require('os');
  return {
    platform: os.platform(),
    release: os.release(),
    arch: os.arch(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpus: os.cpus().length,
  };
});

ipcMain.handle('open-file-dialog', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'All Files', extensions: ['*'] },
      { name: 'Documents', extensions: ['pdf', 'doc', 'docx', 'txt'] },
      { name: 'Images', extensions: ['jpg', 'png', 'gif', 'bmp'] },
    ]
  });
  return result;
});

ipcMain.handle('open-folder-dialog', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  });
  return result;
});

ipcMain.handle('show-notification', async (event, title, body) => {
  const { Notification } = require('electron');
  if (Notification.isSupported()) {
    new Notification({ title, body }).show();
  }
});

ipcMain.handle('open-external', async (event, url) => {
  shell.openExternal(url);
});
