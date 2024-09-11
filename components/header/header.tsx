'use client'

import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Form from "./form"
import Info from "./info"
import { useEffect, useState } from "react"
import { getCookie } from "@/utils/cookie"

export default function Header() {
  const [isLoggedIn, setIsloggedIn] = useState<Boolean>(false)
  useEffect(() => {
    const token = getCookie('accessToken')
    if (token) {
      setIsloggedIn(true)
    }
  },[]);

  const handleLogin = () => {
    setIsloggedIn(true)
  }
  const handleLogout = () => {
    setIsloggedIn(false)
  }

  return (
    <div className="text-slate-900 h-16">
      <div className="flex justify-between h-full items-center border-b-2 border-slate-900">
        <div className="flex justify-start items-center w-2/4 h-full cursor-pointer">
          <div className="flex justify-between">
            <FontAwesomeIcon icon={faHouse} className="text-3xl"/>
          </div>
          <p className="text-justify text-3xl px-4">FUNNY VIDEOS</p>
        </div>
        <div className="w-2/4">
          { isLoggedIn ? (<Info onLogout={handleLogout}/>) : (<Form onLogin={handleLogin}/>) }
        </div>
      </div>
    </div>
  )
}
