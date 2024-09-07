'use client'

import { getCookie } from "@/utils/cookie"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SharePage() {
  const [email, setEmail] = useState<string | null>(null)
  const router = useRouter()
  useEffect(() => {
    const emailCookie = getCookie('email')
    setEmail(emailCookie)

    if (!emailCookie) {
      router.push("/")
    }
  },[router])

  if (!email) {
    return null;
  }

  return (
    <div className="w-full flex justify-center h-80 my-20">
      <div className="w-1/3 h-full border-2 border-slate-900 p-2 flex justify-center items-center">
        <form className="w-full">
          <div className="flex justify-center">
            <label >Youtube url:</label>
            <div className="flex flex-col ml-4 w-72">
              <input className="bg-slate-200 rounded border-slate-900 border-2 w-full h-8 mb-4"/>
              <input type="submit" value="Share" className="rounded border-slate-900 border-2 cursor-pointer h-8 w-full"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
