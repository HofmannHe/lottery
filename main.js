#!/usr/bin/env node

const { app, BrowserWindow } = require('electron')

function createWindow () {   
  // 创建浏览器窗口
  let mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  mainWindow.loadFile('product/src/index.html')
}

app.whenReady().then()

app.on('ready', () => {
    createWindow();
  });
