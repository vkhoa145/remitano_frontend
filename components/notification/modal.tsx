'use client'

import { WebSocketContext } from "@/context/websocket_context"
import { getCookie } from "@/utils/cookie"
import { faCircleXmark, faRectangleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"

export default function NotificationModal() {
  const [isOpen, setOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const  context  = useContext(WebSocketContext)

  console.log('notifications', context?.notifications)
  const handleClose = () => {
    console.log('isopen', isOpen)
    setOpen(false)
  }

  return (
    <div className=" my-2 text-slate-200 absolute right-0">
      {context?.notifications.map((notification) => (
        <div className="bg-sky-950 rounded border-slate-700 border-solid mb-2 mr-20 w-96 p-2 relative">
          <div>
            <p className="truncate">New Video: {notification.title}</p>
            <p className="truncate">Share by: {notification.user}</p>
          </div>
          <FontAwesomeIcon className="absolute font-bold -top-2 -right-2 text-2xl text-red-400 cursor-pointer" icon={faRectangleXmark} onClick={handleClose}/>
        </div>
      ))}
    </div>
  )
}
