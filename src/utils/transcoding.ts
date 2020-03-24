import * as constant from '../utils/constant'

const path = require('path');
const fs = require('fs');

export default async function Transcode(directoryPath: string) {
    const args = [constant.getShaka(), '--mpd_output', `${directoryPath}h264.mpd`]

    fs.readdir(directoryPath, function (err:any, files:string[]) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            if(file.startsWith('audio_')){
                args.push(`in=${directoryPath}${file},stream=audio,output=${directoryPath}audio.mp4`)
            } else if(file.startsWith('video_')){
                args.push(`in=${directoryPath}${file},stream=video,output=${directoryPath}${file}`)
            } 
        });
        constant.executeShell(args)
    });
}

