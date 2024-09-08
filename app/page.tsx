'use client'

import ListVideo from "@/components/video/list_video";
import { connectWebsocket } from "@/utils/websocket";

export default function Home() {
  connectWebsocket()
  return (
    <div className="">
      <ListVideo/>
    </div>
  );
}
