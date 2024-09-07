import { VideoType } from "@/types/video";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface VideoProps {
  video: VideoType
}

export default function Video({video}: VideoProps) {
  return (
    <div className="grid grid-cols-3 gap-10 h-64 mb-8">
      <div className="h-full">
        <iframe width={390} height={256} src={`https://www.youtube.com/embed/${video.youtube_id}`}></iframe>
      </div>
      <div className="col-span-2">
        <p className="text-red-500 font-bold">{video.title}</p>
        <p>Shared by: {video.user}</p>
        <div className="flex justify-start h-6">
          <div className="flex justify-center items-center mr-4">
            <FontAwesomeIcon icon={faThumbsUp} className="h-full mr-2"/>
            <p>{video.like}</p>
          </div>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faThumbsDown} className="h-full mr-2"/>
            <p>{video.dislike}</p>
          </div>
        </div>
        <p>Description:</p>
        <div className="w-full h-1/3 overflow-scroll">
          {video.description}
        </div>
      </div>
    </div>
  )
}