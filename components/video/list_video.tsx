'use client'
import { useEffect, useState } from "react";
import { getVideos } from "@/services/videoService";
import Video from "./video";
import { VideoType } from "@/types/video";

export default function ListVideo() {
  
  const [videos, setVideos] = useState<VideoType[]>([]);
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
      <div className="my-6 w-2/3">
        {videos.map((video) => (
          <Video key={video.id} video={video}/>
        ))}

        {/* {Array.isArray(videos) && videos.length > 0 ? (
          videos.map((video) => (
            <Video key={video.id} video={video} />
          ))
        ) : (
          <p>No videos available</p>
        )} */}
      </div>
    </div>
  )
}