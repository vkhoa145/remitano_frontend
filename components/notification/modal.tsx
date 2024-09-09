'use client'

import { WebSocketContext } from "@/context/websocket_context"
import { useContext } from "react"

export default function NotificationModal() {
  const { notifications } = useContext(WebSocketContext)
  console.log('notifications', notifications)
  return (
    <div className="bg-red-300">
      popup
      {notifications.map((notification) => (
        <p>{notification}</p>
      ))}
    </div>
  )
}
