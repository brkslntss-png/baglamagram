'use strict';
// Sayfaya yalnız şu küçük köprü açılır: portal masaüstü uygulamasında çalıştığını ve sürümü görebilir;
// çevrimdışı ekranı "Tekrar dene" diyebilir. Node.js ya da dosya sistemi sayfaya açılmaz.
const { contextBridge, ipcRenderer } = require('electron');

const surumArg = process.argv.find((a) => a.startsWith('--baglamagram-surum='));

contextBridge.exposeInMainWorld('baglamagramMasaustu', {
  surum: surumArg ? surumArg.split('=')[1] : '',
  platform: process.platform,
  tekrarDene: () => ipcRenderer.send('tekrar-dene'),
});
