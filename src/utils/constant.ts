import * as T from "../types";
import * as shellescape from 'shell-escape'
const { exec } = require("child_process")

export const audioProfiles: T.AudioType[] = [{ bitrate: 64000, rate: 24000 }];

export const videoProfiles: T.VideoType[] = [
  // { bitrate: 3200000, width: 1920, height: 1080, pixel:'1920p', track: "hd" },
  // { bitrate: 2450000, width: 1280, height: 720, pixel:'1280p', track: 'hd' },
  { bitrate: 1440000, width: 1280, height: 720, pixel: '1280p', track: 'hd' },
  // { bitrate: 940000, width: 1024, height: 576, pixel:'1024p', track: 'hd' },
  // { bitrate: 690000, width: 854, height: 480, pixel:'854p', track: 'sd' },
  // { bitrate: 500000, width: 640, height: 360, pixel:'640p', track: 'sd' },
  { bitrate: 320000, width: 480, height: 270, pixel: '480p', track: 'sd' },
  // { bitrate: 170000, width: 426, height: 240, pixel:'426p', track: "sd" }
];

export const shakaType = {
  linux: "packager-linux",
  darwin: "packager-osx",
  win32: "packager-win.exe"
};

const path = require("path");
// var binaryPath = path.resolve(__dirname, 'bin', commandNames[process.platform]);

export function getShaka(): string {
  // return path.resolve(__dirname, 'bin', shakaType.includes(process.platform))
  switch (process.platform) {
    case "darwin":
      return path.resolve(__dirname, "../bin", "packager-osx");
    case "win32":
      return path.resolve(__dirname, "../bin", "packager-win.exe");
    default:
      return path.resolve(__dirname, "../bin", "packager-linux");
  }
}

export function executeShell(args: string[], fileName?: string){
  const escaped = shellescape(args)
  console.log(`process for ${escaped} is starting` )
  return exec(escaped, (err: any, data: string) => {  
      if (err) return console.log(err)
      console.log(data);                       
  });
}