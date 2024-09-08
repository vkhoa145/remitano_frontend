'use client'
import { useEffect, useState } from "react";
import { getVideos, shareVideos } from "@/services/videoService";
import Video from "./video";
import { VideoType } from "@/types/video";

const ws = new WebSocket("ws://localhost:3020/cable")
export default function ListVideo() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  // ws.onopen = () => {
  //   console.log('hellooo websocket')
  //   ws.send(
  //     JSON.stringify({
  //       command: 'subscribe',
  //       identifier: JSON.stringify({
  //         channel: 'VideoNotificationChannel'
  //       }),
  //     })
  //   )
  // };

  // ws.onmessage = (e) => {
  //   const data = JSON.parse(e.data)
  //   if (data.type === 'ping') return;
  //   if (data.type === 'welcome') return;
  //   if (data.type === 'confirm_subscription') return;

  //   const message = data.message
  //   console.log('message', message)
  // }

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await getVideos();
        setVideos(response.data)
      } catch (error) {
        throw new Error(`HTTP error! status: ${error}`);
      }
    }
    getList()
  },[])
  
  return (
    <div className="w-full flex justify-center">
      <div className="my-6 w-full">
        {videos.map((video) => (
          <Video key={video.id} video={video}/>
        ))}
      </div>
    </div>
  )
}