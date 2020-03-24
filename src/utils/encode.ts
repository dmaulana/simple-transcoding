import * as ffmpegPath from 'ffmpeg-static'
import * as constant from '../utils/constant'

export default async function Encode(inputFile: string, outputPath:string) {
  for(const audioProfile of constant.audioProfiles){
    const fileName = `${outputPath}/audio_${audioProfile.rate}.mp4`
    const args = [ffmpegPath, '-i', `${inputFile}`, '-f', 'mp4', '-ab', `${audioProfile.bitrate}`, '-ar', `${audioProfile.rate}`, '-vn', `${fileName}`]
    constant.executeShell(args,fileName)
  }
  for(const videoProfile of constant.videoProfiles){
    const fileName = `${outputPath}/video_${videoProfile.pixel}.mp4`
    const args = [ffmpegPath, '-i', `${inputFile}`, '-f', 'mp4', '-b', `${videoProfile.bitrate}`, '-vf', `scale=${videoProfile.width}:${videoProfile.height}`, '-an', `${fileName}`]
    constant.executeShell(args,fileName)
  }
}