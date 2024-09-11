'use client'

import { useWebSocket } from "@/context/websocket_context"
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

export default function NotificationModal() {
  const context = useWebSocket()
  const [notifications, setNotifications] = useState(context?.notifications)

  useEffect(() => {
    setNotifications(context?.notifications)
  },[context?.notifications])

  const handleClose = (id: string) => {
    const filterNotifications = notifications.filter((notification) => {
      return notification.id !== id
    })
    setNotifications(filterNotifications)
  }

  return (
    <div className=" my-2 text-slate-200 absolute right-0">
      {notifications?.map((notification) => (
        <div key={notification.id} className="bg-sky-950 rounded border-slate-700 border-solid mb-2 mr-20 w-96 p-2 relative">
          <div>
            <p className="truncate">New Video: {notification.title}</p>
            <p className="truncate">Share by: {notification.user}</p>
          </div>
          <FontAwesomeIcon className="absolute font-bold -top-2 -right-2 text-2xl text-red-400 cursor-pointer" icon={faRectangleXmark} onClick={() => handleClose(notification.id)}/>
        </div>
      ))}
    </div>
  )
}
