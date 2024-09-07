'use client'

import { deleteCookie, getCookie } from "@/utils/cookie"
import { useRouter } from "next/navigation"

export default function Info({onLogout}: {onLogout: () => void }) {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie('accessToken');
    deleteCookie('email');
    onLogout();
    router.push('/')
  }
  const userEmail = getCookie('email');

  const handleNavigation = () => {
    router.push("/share")
  }

  return (
    <div className="flex justify-end items-center">
      <div className="w-48 text-center mr-6">{userEmail}</div>
      <button onClick={handleNavigation} className="rounded border-slate-900 border-2 w-48 text-center mr-6 cursor-pointer">Share a movie</button>
      <button onClick={handleLogout} className="rounded border-slate-900 border-2 w-48 text-center cursor-pointer">Log out</button>
    </div>
  )
}